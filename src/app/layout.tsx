import type { Metadata } from "next";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "~/components/navigation/navbar";
import Effects from "~/components/ui/effect";
import env from "~/env.mjs";
import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

/**
 * Configuration for the local Clash font
 */
const clash = localFont({
  src: [
    { path: "../styles/fonts/ClashGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "../styles/fonts/ClashGrotesk-Semibold.otf", weight: "600", style: "normal" },
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

const TopLoader = dynamic(() => import("~/components/ui/top-loader"), { ssr: false });

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
      className={cn("bg-black text-neutral-50 antialiased", clash.className)}
      suppressHydrationWarning>
      <body className="relative bg-spotlight-farthest scrollbar-none md:bg-spotlight-closest">
        <TopLoader />
        <Effects />
        <header className="relative z-50 m-auto h-[10dvh] max-w-4xl">
          <Navbar />
        </header>
        <main className="relative z-50 mx-auto min-h-[90dvh] max-w-4xl">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
