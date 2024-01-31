const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx", "ts", "js"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "bharath-lakshman-kumar.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  // Disable experimental features in production, as they are not yet stable and introduces bugs
  // experimental: {
  //   ppr: true,
  // },
};

module.exports = withContentlayer(nextConfig);
