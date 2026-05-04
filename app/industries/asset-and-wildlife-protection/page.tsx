import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("asset-and-wildlife-protection")!;

export const metadata: Metadata = {
  title: "Asset & Wildlife Protection Products | AEX International Engineering",
  description: industry.description,
  keywords: ["wildlife protection covers", "overhead line covers", "busbar sleeves", "AEX wildlife protection"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/asset-and-wildlife-protection" },
  openGraph: {
    title: "Asset & Wildlife Protection Products | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/asset-and-wildlife-protection",
  },
};

export default function AssetWildlifeProtectionPage() {
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
