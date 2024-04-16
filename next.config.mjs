/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "dist",
  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io", "miro.medium.com"],
  },
};

export default nextConfig;
