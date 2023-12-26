import type { Metadata } from "next";
import "~/styles/globals.css";
import Navbar from "~/components/navigation/navbar";
import { cn } from "~/lib/utils";
import ThemeProvider from "~/providers/theme-provider";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Bharath Lakshman Kumar",
  description: "Bharath's personal website",
};

const clash = localFont({
  src: [
    { path: "../styles/ClashGrotesk-Extralight.otf", weight: "200", style: "normal" },
    { path: "../styles/ClashGrotesk-Light.otf", weight: "300", style: "normal" },
    { path: "../styles/ClashGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "../styles/ClashGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "../styles/ClashGrotesk-Semibold.otf", weight: "600", style: "normal" },
    { path: "../styles/ClashGrotesk-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
});

interface Props extends React.PropsWithChildren {}

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={cn(
        "bg-neutral-50 text-neutral-900 antialiased dark:bg-[#111010] dark:text-neutral-50",
        clash.className
      )}
      suppressHydrationWarning>
      <body className="dark:bg-spotlight-farthest md:dark:bg-spotlight-closest relative scrollbar-none">
        <ThemeProvider>
          <div className="bg-mask pointer-events-auto absolute inset-0 z-0 bg-[length:200px] bg-left-top opacity-60 mix-blend-overlay md:opacity-20" />
          <div className="bg-spotlight-linear absolute inset-x-0 top-0 z-0 hidden h-[10dvh] dark:block" />
          <header className="relative z-50 mx-auto h-[10dvh] max-w-4xl p-5 md:p-10">
            <Navbar />
          </header>
          <main className="relative z-50 mx-auto h-[90dvh] max-w-4xl p-5 md:p-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
