import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("district-heating-cooling")!;

export const metadata: Metadata = {
  title: "Pre-Insulated Pipe / District Heating & Cooling Industry | AEX International Engineering",
  description: industry.description,
  keywords: ["pre-insulated pipe seals", "district heating", "heat shrink pipe sleeves", "AEX district heating"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/district-heating-cooling" },
  openGraph: {
    title: "Pre-Insulated Pipe / District Heating & Cooling Industry | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/district-heating-cooling",
  },
};

export default function DistrictHeatingCoolingPage() {
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
