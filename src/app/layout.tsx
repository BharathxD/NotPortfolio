import type { Metadata } from "next";
import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "~/components/navigation/header";
import Effects from "~/components/ui/effect";
import env from "~/env.mjs";
import { siteConfig } from "~/lib/config";
import { clash } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import dynamic from "next/dynamic";

const TopLoader = dynamic(() => import("~/components/ui/top-loader"));

/**
 * Metadata for the website.
 * This includes the base URL, title, keywords, description, creator, Open Graph data,
 * alternate URLs, robot instructions, Twitter card data, and icon paths.
 * The metadata is used for SEO and social media sharing purposes.
 */
const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: siteConfig.keywords,
  description: siteConfig.description,
  creator: "BharathxD",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /**
   * For site verification, use Google Search Console and Bing Webmaster Tools.
   * @see https://search.google.com/search-console/welcome
   * @see https://www.bing.com/webmasters
   *
   * You can either verify your ownership through DNS or meta tag.
   *
   * @example Using meta tag
   *
   * ```json
   * verification: {
   *   google: "",
   *   yandex: "",
   *   yahoo: "",
   *   other: {
   *     bing: "",
   *   },
   *  }
   * ```
   */
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
 * Root layout component.
 * This component serves as the base layout for all pages in the application.
 * It includes the TopLoader, Effects, Navbar, Analytics, and SpeedInsights components,
 * as well as the main content passed as children.
 *
 * @param {object} props - Component props
 * @param {React.PropsWithChildren} props.children - Child components to be rendered within the main layout
 */
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html
    lang="en"
    className={cn("bg-black text-neutral-50 antialiased", clash.className)}
    suppressHydrationWarning>
    <body className="relative bg-spotlight-farthest scrollbar-none md:bg-spotlight-closest">
      <TopLoader />
      <Effects />
      <Header />
      <main className="relative z-50 mx-auto min-h-[90dvh] max-w-4xl">{children}</main>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export { metadata };
export default RootLayout;
