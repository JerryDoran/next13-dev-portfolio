/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/JerryDoran/remote-mdx-blog-manager/main/images/**',
      },
    ],
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
