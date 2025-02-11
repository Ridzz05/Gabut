/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.onlineradiobox.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/radio/:path*',
        destination: 'https://api.i-as.dev/api/radio/:path*'
      }
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    // Tambahkan ini untuk melihat error TypeScript lebih detail
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 