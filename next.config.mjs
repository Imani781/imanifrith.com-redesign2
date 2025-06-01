/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Make sure this matches your repository name exactly
  basePath: process.env.NODE_ENV === 'production' ? '/imanifrith.com-redesign2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/imanifrith.com-redesign2/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
