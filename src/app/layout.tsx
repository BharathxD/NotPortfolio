import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "~/styles/globals.css";
import Navbar from "~/components/navigation/navbar";
import { cn } from "~/lib/utils";
import ThemeProvider from "~/providers/theme-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bharath Lakshman Kumar",
  description: "Bharath's personal website",
};

interface Props extends React.PropsWithChildren {}

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={cn("min-h-screen antialiased dark:bg-[#111010] dark:text-neutral-50", poppins.className)}
      suppressHydrationWarning>
      <body className="px-5 pt-5 md:px-10 md:pt-10">
        <ThemeProvider>
          <header className="mx-auto max-w-4xl">
            <Navbar />
          </header>
          <main className="mx-auto mt-10 w-full max-w-4xl">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
