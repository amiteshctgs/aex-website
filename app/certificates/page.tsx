import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Certificates & Quality Assurance",
  description:
    "AEX is certified with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018. View our quality, environmental, and health & safety certifications.",
};

const certsList = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: "/images/resource/certificate5-iso-9001.jpg",
  },
  {
    slug: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    image: "/images/resource/certificate6iso-14001.png",
  },
  {
    slug: "iso-45001",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    image: "/images/resource/certificate7iso-45001.jpg",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageTitle
        title="Certificates"
        breadcrumbs={[{ label: "Certificates" }]}
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Commitment to Quality & Safety</h2>
            <p className="text-gray-500 leading-relaxed">
              We adhere to the highest international standards in our manufacturing processes,
              ensuring reliable products, sustainable operations, and a safe working environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certsList.map((cert) => (
              <div key={cert.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col">
                <div className="relative h-80 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-1">{cert.title}</h3>
                    <p className="text-gray-500 text-sm mb-6">{cert.subtitle}</p>
                  </div>
                  <Link
                    href={`/certificates/${cert.slug}`}
                    className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors text-sm"
                  >
                    View Details
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
