import { siteConfig } from "~/lib/config";
import type { MetadataRoute } from "next";

/**
 * Generates a manifest object for the website.
 *
 * @returns {MetadataRoute.Manifest} The manifest object.
 */
const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.name,
  short_name: siteConfig.name,
  description: siteConfig.description,
  start_url: "/",
  background_color: "#0a0a0a",
  theme_color: "#0a0a0a",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
});

export default manifest;
