import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import JsonLd from "@/components/JsonLd";
import { getIndustryBySlug, getIndustrySlugs } from "@/lib/data/industries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
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
      canonical: `https://www.aexheatshrink.com/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.title} Solutions | AEX International Engineering`,
      description: industry.description,
      url: `https://www.aexheatshrink.com/industries/${slug}`,
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
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

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
