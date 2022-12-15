/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [{ loader: "@next/font/google" }],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
