/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // This enables static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // The following is needed if your repo name isn't the same as your domain
  // For example: github.com/username/portfolio-website
  // Remove this if you're using a custom domain
  basePath: process.env.NODE_ENV === 'production' ? '/Imanifrith.com-redesign' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Imanifrith.com-redesign/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
