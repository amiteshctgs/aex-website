import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("solar-energy-solutions")!;

export const metadata: Metadata = {
  title: "Renewable Energy – Solar Energy Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["solar energy heat shrink", "solar farm connectors", "solar cable accessories", "AEX solar"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/solar-energy-solutions" },
  openGraph: {
    title: "Renewable Energy – Solar Energy Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/solar-energy-solutions",
  },
};

export default function SolarEnergySolutionsPage() {
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
