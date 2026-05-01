/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  
  // Tell Next.js to NEVER bundle these Node-only packages into the browser
  serverExternalPackages: [
    "puppeteer",
    "puppeteer-core",
    "@puppeteer/browsers",
  ],
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Note: Static export does not support API routes (nodemailer, puppeteer).
  // These will need to be handled by an external server if you use 'output: export'.
};

export default nextConfig;

