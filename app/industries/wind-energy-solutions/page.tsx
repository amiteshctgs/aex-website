import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("wind-energy-solutions")!;

export const metadata: Metadata = {
  title: "Renewable Energy – Wind Energy Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["wind energy heat shrink", "wind farm cable accessories", "offshore wind", "AEX wind energy"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/wind-energy-solutions" },
  openGraph: {
    title: "Renewable Energy – Wind Energy Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/wind-energy-solutions",
  },
};

export default function WindEnergySolutionsPage() {
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
