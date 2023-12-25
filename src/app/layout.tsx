import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "~/styles/globals.css";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased dark:bg-[#111010] dark:text-neutral-50", poppins.className)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
