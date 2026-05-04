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
  async rewrites() {
    return [
      {
        source: "/products/asset-and-wildlife-protection/:sub*",
        destination: "/products/asset-wildlife-protection/:sub*",
      },
      {
        source: "/products/heat-shrink-moulded-components/pre-insulated-pipe-seals",
        destination: "/products/heat-shrink-moulded-components/pre-insulated-pipe-seals",
      },
      {
        source: "/industries/district-heating-cooling/heat-shrink-tubing",
        destination: "/products/heat-shrink-tubing",
      },
      {
        source: "/industries/district-heating-cooling/heat-shrink-wrap-around-sleeves",
        destination: "/products/heat-shrink-wrap-around-sleeves",
      },
      {
        source: "/industries/district-heating-cooling/mastic-tapes",
        destination: "/products/tapes-and-sealants",
      },
      {
        source: "/products/heat-shrink-moulded-components/cable-end-caps",
        destination: "/products/heat-shrink-moulded-components/cable-end-caps",
      },
      {
        source: "/products/heat-shrink-wrap-around-sleeves/for-poles",
        destination: "/products/heat-shrink-wrap-around-sleeves/for-poles",
      },
    ];
  },
};

export default nextConfig;


