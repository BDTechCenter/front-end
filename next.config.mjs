/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['ip'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  }
};

export default nextConfig;
