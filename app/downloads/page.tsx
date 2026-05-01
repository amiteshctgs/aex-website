import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import DownloadCard from "@/components/DownloadCard";

export const metadata: Metadata = {
  title: "Downloads & Catalogues | AEX International Engineering",
  description:
    "Download product catalogues, technical datasheets, and brochures from AEX International Engineering. Heat shrink, cable accessories, and insulation product PDFs.",
};

const catalogues = [
  {
    id: "cat-0",
    title: "ALL PRODUCT CATALOGUES",
    description: "Complete catalogue containing all AEX products, technical specifications, and ordering information.",
    pages: "45 pages",
    size: "8.5 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-1",
    title: "Heat Shrinkable Moulded Components",
    description: "Cable end caps, breakouts, boots, creepage extension skirts, and anode caps.",
    pages: "12 pages",
    size: "2.4 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-2",
    title: "Heat Shrink Tubing / Sleeves",
    description: "Medium, heavy wall, thin wall, dual wall, non-tracking, and stress control tubing.",
    pages: "16 pages",
    size: "3.1 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-3",
    title: "Power Cable Accessories",
    description: "Cable jointing kits and termination kits for LV, MV cables up to 33kV.",
    pages: "10 pages",
    size: "2.0 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-4",
    title: "Busbar & Switchgear Insulation Products",
    description: "Polyolefin busbar covers, PVC insulation covers, heat shrink tapes, adapters.",
    pages: "8 pages",
    size: "1.8 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-5",
    title: "Heat Shrink Wrap Around Sleeves",
    description: "Wrap around sleeves for cables, pipes, and rolls in various diameters.",
    pages: "6 pages",
    size: "1.5 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-6",
    title: "Asset & Wildlife Protection Products",
    description: "Wildlife protection covers, overhead line covers and tubes, busbar tape.",
    pages: "8 pages",
    size: "2.2 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-7",
    title: "Tapes & Sealants",
    description: "Busbar insulating tapes, black & red mastic tapes, stress control mastic tapes.",
    pages: "6 pages",
    size: "1.2 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-8",
    title: "Pre-Insulated Pipe Management",
    description: "Pre-insulated pipe seals, LDPE/HDPE tubing, wrap around sleeves, mastic tapes.",
    pages: "10 pages",
    size: "2.0 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-9",
    title: "Pole Protection Products",
    description: "Heat shrink pole caps and protection sleeves for utility/street poles.",
    pages: "6 pages",
    size: "1.4 MB",
    pdf: "/api/generate-pdf",
    category: "Products",
  },
  {
    id: "cat-10",
    title: "Company Profile & Overview",
    description: "Full company profile — facility, certifications, global reach, R&D capabilities.",
    pages: "20 pages",
    size: "4.5 MB",
    pdf: "/api/generate-pdf",
    category: "Corporate",
  },
  {
    id: "cat-11",
    title: "ISO Certificates",
    description: "ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certificates.",
    pages: "3 pages",
    size: "0.8 MB",
    pdf: "/api/generate-pdf",
    category: "Certificates",
  },
];

const categories = ["All", "Products", "Corporate", "Certificates"];

export default function DownloadsPage() {
  return (
    <>
      <PageTitle
        title="Downloads & Catalogues"
        breadcrumbs={[{ label: "Downloads" }]}
      />

      {/* Notice banner */}
      <section className="bg-[#1a2b5f] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-white text-sm">
            <FontAwesomeIcon icon={faLock} className="text-brand-accent" />
            <span>
              All catalogues are available free of charge. Submit an enquiry for custom specifications.
            </span>
          </div>
          <Link
            href="/enquiry"
            className="flex-shrink-0 bg-brand-accent text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Submit Enquiry
          </Link>
        </div>
      </section>

      {/* Downloads grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Product Literature</p>
            <h2 className="section-title mt-3">Download Our Catalogues</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
              Browse and download technical datasheets and product brochures from AEX.
              All documents are in PDF format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogues.map((cat) => (
              <DownloadCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — request custom spec */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4">
            Need Custom Specifications?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Request a Technical Datasheet
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our engineering team can provide
            custom technical documentation for specific voltage classes, temperatures, and applications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary">
              Submit Enquiry <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Our Team
            </Link>
          </div>

          {/* Certifications list */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "RoHS Compliant",
              "CE Certified",
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-gray-400 text-sm">
                <FontAwesomeIcon icon={faCheckCircle} className="text-brand-accent" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
