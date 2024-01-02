import type { Metadata } from "next";
import "~/styles/globals.css";
import Navbar from "~/components/navigation/navbar";
import env from "~/env.mjs";
import { siteConfig } from "~/lib/config";
import { cn } from "~/lib/utils";
import ThemeProvider from "~/providers/theme-provider";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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

export const metadata: Metadata = {
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
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
    ...siteConfig.favicons,
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
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
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
