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

      <section className="py-14 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-7xl mx-auto mb-16">
            <h2 className="section-title mb-4">Solutions for Every Sector</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              AEX International, a group of Apple International, a remarkable history of over 30 years in manufacturing all the types of Metal Parts under the brand APPLE. The spirit of perseverance has served us well in the last 30 years, reason why our manufacturing unit is one of the largest of its kind in Asia. AEX is a leading manufacturer of high-quality Power Cable Accessories, Heat Shrinkable Products, Busbar Insulation Products, Products for Pre-insulated Pipe Sealing Systems and Metal fittings in India.  We have emerged to become one of the largest heat shrink manufacturers in the world. AEX provides electrical and mechanical insulation solutions to the Electrical Utilities, Power and Telecom industries and Automotive and Electronics markets.
            </p>
            <p className="text-gray-500 leading-relaxed">
              AEX is one of the most experienced companies focussing solely on the Energy sectors and providing customised solutions to Electrical Insulating Industries. We provide a wide range of products, which are designed and produced to the highest International Standards. AEX is the most trusted name in contributing at every step right from Power Generation to Transmission and Distribution.  AEX has gained worldwide recognition for the highest material and product quality with standards being continuously controlled in our high-performance laboratories and testing facilities.
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
