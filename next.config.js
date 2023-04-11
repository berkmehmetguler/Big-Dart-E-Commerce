/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["bigdart.com.tr", "www.w3.org"],
  },
};

module.exports = nextConfig;
