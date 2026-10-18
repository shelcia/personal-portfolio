import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ik.imagekit.io" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
    ],
  },
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
