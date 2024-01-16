import { siteConfig } from "~/lib/config";
import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt data for the website.
 * @returns {MetadataRoute.Robots} The robots.txt data.
 */
const generateRobotsTxt = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
    },
  ],
  sitemap: `${siteConfig.url}/sitemap.xml`,
});

export default generateRobotsTxt;
