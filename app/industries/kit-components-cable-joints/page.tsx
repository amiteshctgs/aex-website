import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("kit-components-cable-joints")!;

export const metadata: Metadata = {
  title: "Kit Components for Cable Joints & Terminations | AEX International Engineering",
  description: industry.description,
  keywords: ["cable jointing kits", "cable termination kits", "heat shrink jointing", "AEX cable joints"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/kit-components-cable-joints" },
  openGraph: {
    title: "Kit Components for Cable Joints & Terminations | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/kit-components-cable-joints",
  },
};

export default function CableJointsTerminationsPage() {
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
