import type { Metadata } from "next";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "~/components/navigation/navbar";
import env from "~/env.mjs";
import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";
import ThemeProvider from "~/providers/theme-provider";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

/**
 * Configuration for the Poppins font
 */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

/**
 * Configuration for the Montserrat font
 */
const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

/**
 * Configuration for the local Clash font
 */
const clash = localFont({
  src: [
    { path: "../styles/fonts/ClashGrotesk-Extralight.otf", weight: "200", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Light.otf", weight: "300", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Semibold.otf", weight: "600", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
});

/**
 * Metadata for the website
 */
const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "Bharath Lakshman Kumar",
      url: "https://github.com/BharathxD",
    },
  ],
  creator: "BharathxD",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogUrl],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
    ...siteConfig.favicons,
  },
};

/**
 * Root layout component
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout component
 */
const RootLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <html
      lang="en"
      className={cn(
        "bg-black text-neutral-50 antialiased",
        clash.className,
        montserrat.variable,
        poppins.variable
      )}
      suppressHydrationWarning>
      <body className="relative bg-spotlight-farthest scrollbar-none md:bg-spotlight-closest">
        <ThemeProvider>
          <div className="pointer-events-auto absolute inset-0 z-0 bg-mask bg-[length:200px] bg-left-top opacity-60 mix-blend-overlay md:opacity-20" />
          <div className="absolute inset-x-0 top-0 z-0 block h-[10dvh] bg-spotlight-linear" />
          <header className="relative z-50 m-auto h-[10dvh] max-w-4xl">
            <Navbar />
          </header>
          <main className="relative z-50 mx-auto min-h-[90dvh] max-w-4xl">{children}</main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
