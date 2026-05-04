import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("oil-gas-corrosion-protection")!;

export const metadata: Metadata = {
  title: "Oil & Gas / Corrosion Protection Industry | AEX International Engineering",
  description: industry.description,
  keywords: ["oil gas heat shrink", "corrosion protection tubing", "U-bolt protection", "AEX oil gas"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/oil-gas-corrosion-protection" },
  openGraph: {
    title: "Oil & Gas / Corrosion Protection Industry | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/oil-gas-corrosion-protection",
  },
};

export default function OilGasCorrosionPage() {
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
