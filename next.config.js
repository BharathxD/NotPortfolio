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
  experimental: {
    ppr: true,
  },
};

module.exports = withContentlayer(nextConfig);
