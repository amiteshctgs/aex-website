/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js to NEVER bundle these Node-only packages into the browser
  serverExternalPackages: [
    "puppeteer",
    "puppeteer-core",
    "@puppeteer/browsers",
  ],
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;

