import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import JsonLd from "@/components/JsonLd";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("transformer-and-busduct-industry")!;

export const metadata: Metadata = {
  title: `${industry.title} Solutions | AEX International Engineering`,
  description: industry.description,
  keywords: [
    industry.title,
    `${industry.title} solutions`,
    `${industry.title} heat shrink applications`,
    `heat shrink for ${industry.title}`,
    "AEX industries",
    "heat shrink applications",
    "cable accessories industrial",
    "power cable solutions India",
  ],
  alternates: {
    canonical: `https://www.aexheatshrink.com/industries/transformer-and-busduct-industry`,
  },
  openGraph: {
    title: `${industry.title} Solutions | AEX International Engineering`,
    description: industry.description,
    url: `https://www.aexheatshrink.com/industries/transformer-and-busduct-industry`,
    type: "website",
    siteName: "AEX International Engineering",
    images: [{ url: industry.image, width: 800, height: 600, alt: industry.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${industry.title} Solutions | AEX International Engineering`,
    description: industry.description,
    images: [industry.image],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${industry.title} Heat Shrink Solutions`,
  "description": industry.description,
  "provider": {
    "@type": "Organization",
    "name": "AEX International Engineering Works Pvt. Ltd.",
    "url": "https://www.aexheatshrink.com"
  },
  "areaServed": "Worldwide",
  "serviceType": `${industry.title} Electrical Insulation Solutions`
};

export default function IndustryPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageTitle
        title={industry.title}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.shortTitle },
        ]}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}
