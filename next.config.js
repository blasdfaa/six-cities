/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['8.react.pages.academy'],
  },
};

module.exports = nextConfig;
