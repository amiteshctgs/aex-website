import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("cable-industry")!;

export const metadata: Metadata = {
  title: "Cable Industry Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["cable industry heat shrink", "cable end caps", "cable jointing kits", "AEX cable solutions"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/cable-industry" },
  openGraph: {
    title: "Cable Industry Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/cable-industry",
  },
};

export default function CableIndustryPage() {
  return (
    <>
      <PageTitle
        title={industry.title}
        breadcrumbs={[{ label: "Solutions", href: "#" }, { label: industry.shortTitle }]}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}
