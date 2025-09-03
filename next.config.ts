import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: [
      "images.unsplash.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "pbs.twimg.com",
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
