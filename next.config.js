/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.webdelclub.com',
        pathname: '/wask/**',
      },
      {
        protocol: 'https',
        hostname: 'u.jimcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
};

module.exports = nextConfig;
