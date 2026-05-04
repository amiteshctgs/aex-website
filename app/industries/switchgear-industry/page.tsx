import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("switchgear-industry")!;

export const metadata: Metadata = {
  title: "Switchgear Industry Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["switchgear insulation", "busbar sleeves", "control panel insulation", "AEX switchgear"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/switchgear-industry" },
  openGraph: {
    title: "Switchgear Industry Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/switchgear-industry",
  },
};

export default function SwitchgearIndustryPage() {
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
