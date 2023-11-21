/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [{ hostname: "ik.imagekit.io" }],
  },
};

module.exports = nextConfig;
// 
// cdn.sanity.io