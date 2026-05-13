import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Industry, industries } from "@/lib/data/industries";
import { getProductUrlByName } from "@/lib/data/products";

interface Props {
  industry: Industry;
}

export default function IndustryPageContent({ industry }: Props) {
  const otherIndustries = industries
    .filter((i) => i.slug !== industry.slug)
    .slice(0, 5);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative rounded-2xl overflow-hidden h-[450px] shadow-xl">
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
            <p className="text-gray-500 leading-relaxed text-lg whitespace-pre-line">
              {industry.longDescription}
            </p>
          </div>

          {/* Gallery section — only when industry has multiple images */}
          {industry.images && industry.images.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-5">
                Application Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.images.map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden h-60 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <Image
                      src={img}
                      alt={`${industry.title} gallery ${idx + 1}`}
                      fill
                      className="object-contain bg-white p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-items section — only when industry has sub-categories */}
          {industry.subItems && industry.subItems.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-5">
                Key Products in This Category
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.subItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-4 bg-brand-light rounded-xl border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-brand-primary flex-shrink-0 text-sm group-hover:scale-110 transition-transform"
                    />
                    <span className="text-gray-700 font-medium text-sm group-hover:text-brand-primary transition-colors">
                      {item.label}
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-brand-accent text-xs ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-5">
              Relevant Products &amp; Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industry.products.map((p) => {
                const productUrl = getProductUrlByName(p);
                return (
                  <Link
                    key={p}
                    href={productUrl || `/enquiry?product=${encodeURIComponent(p)}`}
                    className="flex items-center gap-3 p-4 bg-brand-light rounded-xl border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-brand-accent flex-shrink-0 text-sm group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-gray-700 font-medium text-sm group-hover:text-brand-primary transition-colors">
                      {p}
                    </span>
                  </Link>
                );
              })}
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
            <h3 className="font-bold text-brand-primary text-lg mb-4">Other Industries</h3>
            <div className="space-y-2">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-brand-primary hover:bg-brand-light transition-all duration-200 group text-sm font-medium text-gray-700"
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
  );
}
