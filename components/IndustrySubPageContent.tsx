import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane, faCheckCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Industry, IndustrySubItem, industries } from "@/lib/data/industries";

interface Props {
  industry: Industry;
  subItem: IndustrySubItem;
}

export default function IndustrySubPageContent({ industry, subItem }: Props) {
  const otherIndustries = industries
    .filter((i) => i.slug !== industry.slug)
    .slice(0, 5);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <Link
            href={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all mb-4"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Back to {industry.shortTitle} Overview
          </Link>

          <div className="relative rounded-2xl overflow-hidden h-[450px]  shadow-xl border border-gray-100 items-center justify-center">
            <Image
              src={subItem.image || industry.image}
              alt={subItem.label}
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              {/* Visual caption only — the page H1 is already in PageTitle above */}
              <span className="text-3xl font-bold text-white">{subItem.label}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-xl font-medium mb-6">
              {subItem.description}
            </p>
            <div className="text-gray-500 leading-relaxed whitespace-pre-line">
              {subItem.longDescription || "AEX provides high-quality engineered solutions tailored for specific industrial requirements. Our products are designed for reliability, durability, and ease of installation."}
            </div>
          </div>

          {/* Gallery section — only when subItem has multiple images */}
          {subItem.images && subItem.images.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-brand-primary mb-5">
                Application Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subItem.images.map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden h-60 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <Image
                      src={img}
                      alt={`${subItem.label} gallery ${idx + 1}`}
                      fill
                      className="object-contain bg-white p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(subItem.features || subItem.applications) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              {subItem.features && (
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-brand-accent" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {subItem.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-600 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {subItem.applications && (
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-brand-accent" />
                    Typical Applications
                  </h3>
                  <ul className="space-y-3">
                    {subItem.applications.map((app, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-600 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="bg-brand-light rounded-2xl p-8 border border-brand-accent/20">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Need Technical Assistance?</h3>
            <p className="text-gray-600 mb-6">
              Our engineering team can provide detailed specifications and custom solutions for your {subItem.label} requirements.
            </p>
            <Link href={`/enquiry?product=${encodeURIComponent(subItem.label)}`} className="btn-primary inline-flex">
              <FontAwesomeIcon icon={faPaperPlane} />
              Request Technical Datasheet
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          {/* Related Industry Info */}


          <div className="bg-brand-primary text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Quick Contact</h3>
            <p className="text-blue-100 text-sm mb-6">
              Looking for a bulk quote or specific configuration for your industrial project?
            </p>
            <Link href="/enquiry" className="btn-accent w-full justify-center">
              Submit Enquiry
            </Link>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="font-bold text-brand-primary text-lg mb-4">Related to {industry.shortTitle}</h3>
            <div className="space-y-3">
              {industry.subItems?.filter(item => item.slug !== subItem.slug).slice(0, 5).map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="block p-3 rounded-xl bg-white border border-gray-200 hover:border-brand-primary hover:shadow-sm transition-all group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-brand-primary text-lg mb-4">Other Industries</h3>
            <div className="space-y-2">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-brand-primary hover:bg-brand-light transition-all text-sm font-medium text-gray-700"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-brand-accent text-xs" />
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
