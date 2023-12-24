/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "ik.imagekit.io" }],
  },
};

module.exports = nextConfig;
