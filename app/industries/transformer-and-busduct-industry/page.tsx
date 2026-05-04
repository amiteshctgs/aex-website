import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/data/industries";

const industry = getIndustryBySlug("transformer-and-busduct-industry")!;

export const metadata: Metadata = {
  title: "Transformer & Busduct Industry Solutions | AEX International Engineering",
  description: industry.description,
  keywords: ["transformer insulation", "busduct heat shrink", "dry type transformer", "AEX transformer"],
  alternates: { canonical: "https://www.aexheatshrink.com/industries/transformer-and-busduct-industry" },
  openGraph: {
    title: "Transformer & Busduct Industry Solutions | AEX International Engineering",
    description: industry.description,
    url: "https://www.aexheatshrink.com/industries/transformer-and-busduct-industry",
  },
};

export default function TransformerAndBusductPage() {
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
