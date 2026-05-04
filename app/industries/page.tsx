import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryCard from "@/components/IndustryCard";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industrial Heat Shrink Solutions | AEX International Engineering",
  description:
    "Discover how AEX heat shrink products serve the cable, switchgear, transformer, renewable energy, and telecom industries globally with premium insulation.",
  keywords: [
    "industries served",
    "industrial heat shrink",
    "cable industry solutions",
    "switchgear insulation",
    "transformer protection",
    "renewable energy products",
    "telecom heat shrink",
    "AEX industries",
    "electrical insulation applications",
    "power distribution components"
  ],
  alternates: {
    canonical: "https://www.aexheatshrink.com/industries",
  },
  openGraph: {
    title: "Industrial Heat Shrink Solutions | AEX",
    description: "Discover how AEX heat shrink products serve the cable, switchgear, transformer, renewable energy, and telecom industries globally.",
    url: "https://www.aexheatshrink.com/industries",
    type: "website",
    siteName: "AEX International Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Heat Shrink Solutions | AEX",
    description: "Discover how AEX heat shrink products serve the cable, switchgear, transformer, renewable energy, and telecom industries globally.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": industries.map((industry, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://www.aexheatshrink.com/industries/${industry.slug}`,
    "name": industry.title,
    "description": industry.description
  }))
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <PageTitle
        title="Industries We Serve"
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Solutions for Every Sector</h2>
            <p className="text-gray-500 leading-relaxed">
              Our heat shrinkable products are engineered to meet the rigorous demands of various
              industries, providing reliable insulation, sealing, and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
