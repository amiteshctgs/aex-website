import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("utility-pole-industry")!;

export const metadata: Metadata = {
  title: "Utility Pole / Street Pole Industry | AEX International Engineering",
  description: industry.description,
  keywords: ["utility pole protection", "heat shrink pole caps", "wooden pole lifespan", "AEX pole protection"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/utility-pole-industry" },
  openGraph: {
    title: "Utility Pole / Street Pole Industry | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/utility-pole-industry",
  },
};

export default function UtilityPoleIndustryPage() {
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
