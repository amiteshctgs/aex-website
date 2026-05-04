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
  async redirects() {
    return [
      { source: "/products/heat-shrink-tubes", destination: "/products/heat-shrink-tubing", permanent: true },
      { source: "/products/switchgear-insulation-products", destination: "/products/busbar-switchgear-insulation", permanent: true },
      { source: "/products/overhead-line-covers", destination: "/products/asset-wildlife-protection", permanent: true },
      { source: "/products/heat-shrinkable-wrap-around-sleeves", destination: "/products/heat-shrink-wrap-around-sleeves", permanent: true },
      { source: "/products/pre-insulated-pipe-management", destination: "/products/other-products", permanent: true },
      { source: "/products/pole-protection-products", destination: "/products/other-products", permanent: true },
      { source: "/products/metal-components", destination: "/products/other-products", permanent: true },
      { source: "/products/pipeline", destination: "/products/other-products", permanent: true },
    ];
  },
};

export default nextConfig;


