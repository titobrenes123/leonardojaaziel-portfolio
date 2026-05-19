/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.credly.com' },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
