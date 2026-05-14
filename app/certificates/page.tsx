import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "ISO Certifications & Quality Standards | AEX International",
  description:
    "AEX holds ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certifications. View our quality assurance, environmental & safety standards for heat shrink products.",
  keywords: [
    "AEX ISO certification",
    "ISO 9001:2015 heat shrink manufacturer",
    "ISO 14001:2015 polymer company",
    "ISO 45001:2018 safety standard",
    "quality assurance cable accessories",
    "certified heat shrink supplier India",
    "AEX quality management system",
    "accredited heat shrink manufacturer",
    "international standards cable accessories",
    "RoHS compliant manufacturer India",
  ],
  alternates: {
    canonical: "https://www.aexheatshrink.com/certificates",
  },
  openGraph: {
    title: "ISO Certifications & Quality Standards | AEX International",
    description: "AEX is certified with ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018. View our quality assurance, environmental & safety certifications for heat shrink products.",
    url: "https://www.aexheatshrink.com/certificates",
    type: "website",
    siteName: "AEX International Engineering",
    images: [{ url: "/images/logo-2.png", width: 400, height: 150, alt: "AEX ISO Certified Heat Shrink Manufacturer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO Certifications & Quality Standards | AEX International",
    description: "AEX certified: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018. Quality heat shrink products from Jamnagar, India.",
  },
};


const certsList = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: "/images/resource/certificate5-iso-9001.jpg",
  },
  {
    slug: "ce-marking",
    title: "CE Marking",
    subtitle: "European Conformity",
    image: "/images/resource/certification1.png",
  },
];

export default function CertificatesPage() {
  const certificationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AEX International Engineering ISO Certifications",
    "url": "https://www.aexheatshrink.com/certificates",
    "description": "AEX International Engineering Works Pvt. Ltd. holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications for quality, environment, and occupational health & safety management.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ISO 9001:2015 — Quality Management System",
        "url": "https://www.aexheatshrink.com/certificates/iso-9001"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CE Marking — European Conformity",
        "url": "https://www.aexheatshrink.com/certificates/ce-marking"
      }
    ]
  };

  return (
    <>
      <JsonLd data={certificationSchema} />
      <PageTitle
        title="Certificates"
        breadcrumbs={[{ label: "Certificates" }]}
      />

      <section className="py-14 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Commitment to Quality & Safety</h2>
            <p className="text-gray-500 leading-relaxed">
              We adhere to the highest international standards in our manufacturing processes,
              ensuring reliable products, sustainable operations, and a safe working environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {certsList.map((cert) => (
              <div key={cert.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col">
                <div className="relative h-[450px]  bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
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
