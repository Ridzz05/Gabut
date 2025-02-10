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
  }
};

module.exports = nextConfig; 