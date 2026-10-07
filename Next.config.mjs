/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/steel-city-painting' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/steel-city-painting/' : '',
};

export default nextConfig;
