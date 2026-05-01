import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

interface CertificateData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  validity: string;
  issuer: string;
  scope: string;
}

const certificates: CertificateData[] = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "ISO 9001:2015 is the internationally recognized standard for Quality Management Systems (QMS). This certification demonstrates AEX's commitment to consistently providing products and services that meet customer and regulatory requirements, and to continuously improving performance.",
    image: "/images/resource/certificate5-iso-9001.jpg",
    validity: "Valid through 2027",
    issuer: "Bureau Veritas Certification",
    scope: "Design, Manufacture and Supply of Heat Shrinkable Products",
  },
  {
    slug: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    description:
      "ISO 14001:2015 sets criteria for an environmental management system and maps out a framework that a company can follow to set up an effective environmental management system. AEX is certified to this standard, reflecting our commitment to reducing environmental impact.",
    image: "/images/resource/certificate6iso-14001.png",
    validity: "Valid through 2027",
    issuer: "Bureau Veritas Certification",
    scope: "Manufacturing of Heat Shrinkable Products — Environmental Management",
  },
  {
    slug: "iso-45001",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management System",
    description:
      "ISO 45001:2018 is the international standard for occupational health and safety management systems. Our certification under this standard demonstrates AEX's commitment to providing a safe and healthy workplace for all employees, contractors, and visitors.",
    image: "/images/resource/certificate7iso-45001.jpg",
    validity: "Valid through 2027",
    issuer: "Bureau Veritas Certification",
    scope: "Manufacturing of Heat Shrinkable Products — Occupational Health & Safety",
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return certificates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = certificates.find((c) => c.slug === slug);
  if (!cert) return { title: "Certificate Not Found" };
  return {
    title: `${cert.title} Certificate | AEX International Engineering`,
    description: cert.description,
  };
}

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;
  const cert = certificates.find((c) => c.slug === slug);
  if (!cert) notFound();

  const others = certificates.filter((c) => c.slug !== cert.slug);

  return (
    <>
      <PageTitle
        title={`${cert.title} Certificate`}
        breadcrumbs={[
          { label: "Certificates" },
          { label: cert.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certificate image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center h-96">
              <Image
                src={cert.image}
                alt={`${cert.title} Certificate`}
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-2">{cert.title} — {cert.subtitle}</h2>
              <p className="text-gray-500 leading-relaxed">{cert.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-brand-light rounded-xl p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Issuing Body</p>
                <p className="font-semibold text-brand-primary text-sm">{cert.issuer}</p>
              </div>
              <div className="bg-brand-light rounded-xl p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Validity</p>
                <p className="font-semibold text-brand-primary text-sm">{cert.validity}</p>
              </div>
              <div className="bg-brand-light rounded-xl p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Scope</p>
                <p className="font-semibold text-brand-primary text-sm">{cert.scope}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand-primary text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Our Certifications</h3>
              <p className="text-gray-300 text-sm mb-5">
                AEX holds three prestigious ISO certifications demonstrating our commitment to quality, sustainability, and safety.
              </p>
              <div className="space-y-2">
                {certificates.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/certificates/${c.slug}`}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      c.slug === cert.slug
                        ? "bg-brand-accent text-white"
                        : "bg-white/10 text-gray-200 hover:bg-white/20"
                    }`}
                  >
                    {c.title} — {c.subtitle}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-brand-light rounded-xl p-6">
              <h4 className="font-bold text-brand-primary mb-4">Contact Us</h4>
              <p className="text-gray-500 text-sm mb-4">
                Request a copy of our certificates for your vendor qualification requirements.
              </p>
              <Link href="/contact" className="btn-secondary w-full justify-center">
                <FontAwesomeIcon icon={faArrowRight} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
