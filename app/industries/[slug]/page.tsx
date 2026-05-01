import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import { getIndustryBySlug, getIndustrySlugs, industries } from "@/lib/data/industries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} Solutions | AEX International Engineering`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 5);

  return (
    <>
      <PageTitle
        title={industry.title}
        breadcrumbs={[
          { label: "Industries" },
          { label: industry.shortTitle },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative rounded-2xl overflow-hidden h-72 shadow-xl">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Industry Overview</h2>
              <p className="text-gray-500 leading-relaxed text-lg">{industry.longDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-5">Relevant Products & Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.products.map((p) => (
                  <a 
                    key={p} 
                    href={`mailto:tech@aexheatshrink.com?subject=Enquiry about ${encodeURIComponent(p)}`}
                    className="flex items-center gap-3 p-4 bg-brand-light rounded-xl border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-brand-accent flex-shrink-0 text-sm group-hover:translate-x-1 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm group-hover:text-brand-primary transition-colors">{p}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand-primary text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Get a Custom Quote</h3>
              <p className="text-gray-300 text-sm mb-5">
                Our team will help you select the right product for your specific application.
              </p>
              <Link href="/enquiry" className="btn-primary w-full justify-center">
                <FontAwesomeIcon icon={faPaperPlane} />
                Submit Enquiry
              </Link>
            </div>

            <div>
              <h4 className="font-bold text-brand-primary text-lg mb-4">Other Industries</h4>
              <div className="space-y-2">
                {otherIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-brand-primary hover:bg-brand-light transition-all duration-200 group text-sm font-medium text-gray-700 group-hover:text-brand-primary"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-brand-accent text-xs" />
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
