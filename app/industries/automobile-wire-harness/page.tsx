import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("automobile-wire-harness")!;

export const metadata: Metadata = {
  title: "Automobile / Wire Harness Industry | AEX International Engineering",
  description: industry.description,
  keywords: ["wire harness heat shrink", "automotive tubing", "dual wall tubing automotive", "AEX automobile"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/automobile-wire-harness" },
  openGraph: {
    title: "Automobile / Wire Harness Industry | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/automobile-wire-harness",
  },
};

export default function AutomobileWireHarnessPage() {
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
