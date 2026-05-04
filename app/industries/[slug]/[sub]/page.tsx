import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import IndustrySubPageContent from "@/components/IndustrySubPageContent";
import JsonLd from "@/components/JsonLd";
import { getIndustryBySlug, getIndustrySubItem, getAllIndustrySubItemParams } from "@/lib/data/industries";

interface Props {
  params: Promise<{ slug: string; sub: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySubItemParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params;
  const industry = getIndustryBySlug(slug);
  const subItem = getIndustrySubItem(slug, sub);
  if (!industry || !subItem) return { title: "Page Not Found" };

  return {
    title: `${subItem.label} | ${industry.shortTitle} Solutions | AEX`,
    description: subItem.description || industry.description,
    keywords: [
      subItem.label,
      industry.title,
      `${subItem.label} industrial solutions`,
      "AEX international engineering",
      "heat shrink applications"
    ],
    alternates: {
      canonical: `https://www.aexheatshrink.com/industries/${slug}/${sub}`,
    },
    openGraph: {
      title: `${subItem.label} | ${industry.shortTitle} Solutions`,
      description: subItem.description || industry.description,
      url: `https://www.aexheatshrink.com/industries/${slug}/${sub}`,
      type: "website",
      images: [{ url: subItem.image || industry.image, width: 800, height: 600, alt: subItem.label }],
    },
  };
}

export default async function IndustrySubPage({ params }: Props) {
  const { slug, sub } = await params;
  const industry = getIndustryBySlug(slug);
  const subItem = getIndustrySubItem(slug, sub);
  
  if (!industry || !subItem) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": subItem.label,
    "description": subItem.description || industry.description,
    "provider": {
      "@type": "Organization",
      "name": "AEX International Engineering Works Pvt. Ltd.",
      "url": "https://www.aexheatshrink.com"
    },
    "serviceType": `${industry.title} Industry Solutions`
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageTitle
        title={subItem.label}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.shortTitle, href: `/industries/${slug}` },
          { label: subItem.label },
        ]}
      />
      <IndustrySubPageContent industry={industry} subItem={subItem} />
    </>
  );
}
