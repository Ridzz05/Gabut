/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.onlineradiobox.com'],
    unoptimized: true
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