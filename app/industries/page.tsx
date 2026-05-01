import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Discover how AEX heat shrink products serve the cable, switchgear, transformer, renewable energy, and telecom industries globally.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageTitle
        title="Industries We Serve"
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Solutions for Every Sector</h2>
            <p className="text-gray-500 leading-relaxed">
              Our heat shrinkable products are engineered to meet the rigorous demands of various
              industries, providing reliable insulation, sealing, and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
