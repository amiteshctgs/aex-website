import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("power-transmission-and-distribution")!;

export const metadata: Metadata = {
  title: "Electric Utilities for Power Transmission & Distribution | AEX International Engineering",
  description: industry.description,
  keywords: ["power transmission heat shrink", "electric utilities", "distribution insulation", "AEX power"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/power-transmission-and-distribution" },
  openGraph: {
    title: "Electric Utilities for Power Transmission & Distribution | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/power-transmission-and-distribution",
  },
};

export default function PowerTransmissionPage() {
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
