import env from "~/env.mjs";
import { allPosts } from "content-layer/generated";
import type { MetadataRoute } from "next";

/**
 * Generates the sitemap for the website.
 * @returns {MetadataRoute.Sitemap} The sitemap data.
 */
const sitemap = (): MetadataRoute.Sitemap => {
  const blogs = allPosts.map((post) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const routes = ["", "/work", "/blog", "/contact"].map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
};

export default sitemap;
