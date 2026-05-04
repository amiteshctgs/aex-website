import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
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
    keywords: [industry.title, `${industry.title} solutions`, "AEX industries", "heat shrink applications"],
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

  return (
    <>
      <PageTitle
        title={industry.title}
        breadcrumbs={[
          { label: "Solutions", href: "#" },
          { label: industry.shortTitle },
        ]}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}
