/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Replace 'Imanifrith.com-redesign' with your exact repository name
  // The capitalization must match exactly
  basePath: process.env.NODE_ENV === 'production' ? '/Imanifrith.com-redesign' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Imanifrith.com-redesign/' : '',
  trailingSlash: true, // This helps with GitHub Pages routing
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
