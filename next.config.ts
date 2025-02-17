// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // allow example.com images
      },
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
        hostname: 'localhost',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing-prod.s3.us-west-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
