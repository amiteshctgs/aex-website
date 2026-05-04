import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("telecom-industry")!;

export const metadata: Metadata = {
  title: "Telecom Industry Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["telecom heat shrink", "fiber optic closure kits", "telecom cable jointing", "AEX telecom"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/telecom-industry" },
  openGraph: {
    title: "Telecom Industry Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/telecom-industry",
  },
};

export default function TelecomIndustryPage() {
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
