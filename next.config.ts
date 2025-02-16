// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3t3ozftmdmh3i.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost', // Allow images from your local Strapi server
        port: '1337', // Specify the port used by Strapi
      },
    ],
  },
};

module.exports = nextConfig;
