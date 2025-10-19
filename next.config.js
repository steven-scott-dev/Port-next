/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // enables the /app router system
  },
  reactStrictMode: true, // optional but recommended
};

module.exports = nextConfig;
