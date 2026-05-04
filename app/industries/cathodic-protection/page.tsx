import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("cathodic-protection")!;

export const metadata: Metadata = {
  title: "Cathodic Protection Industry | AEX International Engineering",
  description: industry.description,
  keywords: ["cathodic protection heat shrink", "anode caps", "corrosion control", "AEX cathodic protection"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/cathodic-protection" },
  openGraph: {
    title: "Cathodic Protection Industry | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/cathodic-protection",
  },
};

export default function CathodicProtectionPage() {
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
