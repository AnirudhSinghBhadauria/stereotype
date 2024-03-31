/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "ik.imagekit.io" }],
  },
  output: "standalone"
};

module.exports = nextConfig;
