import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndustry,
  faFlask,
  faUsers,
  faCheckCircle,
  faBuilding,
  faCogs,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import StatsCounter from "@/components/StatsCounter";

export const metadata: Metadata = {
  title: "Our Facility — 200,000 Sq Ft Manufacturing Unit | AEX International Engineering",
  description:
    "Explore AEX International Engineering's 200,000 sq ft state-of-the-art manufacturing facility in Jamnagar, Gujarat — in-house compounding, advanced test laboratory, and 400+ skilled workforce.",
};

const facilityFeatures = [
  {
    icon: faIndustry,
    title: "200,000 Sq Ft Factory",
    text: "Our manufacturing unit is spread across a massive 200,000 square ft area at GIDC Lodhika, Metoda, Jamnagar — one of India's premier industrial zones.",
  },
  {
    icon: faCogs,
    title: "End-to-End In-House Production",
    text: "Right from Compounding to the Finished Product, everything is produced in-house — ensuring complete quality control at every stage of manufacturing.",
  },
  {
    icon: faFlask,
    title: "Advanced Test Laboratory",
    text: "Our Test Laboratory is equipped with modern test apparatus. All products are tested in-house as per international standards before dispatch.",
  },
  {
    icon: faUsers,
    title: "400+ Skilled Workforce",
    text: "We have a workforce of 400+ dedicated employees and are continually expanding the size and scale of our manufacturing units to meet global demand.",
  },
  {
    icon: faBuilding,
    title: "Widest Machine Capacity Range",
    text: "We possess one of the widest ranges of capacity machines in India — from injection moulding and extrusion lines to anti-static treatment equipment.",
  },
  {
    icon: faGlobe,
    title: "35+ Year Parent Company Legacy",
    text: "AEX International is a subsidiary of Apple International Engineering Works Pvt. Ltd. — the single largest manufacturer and exporter of Ferrous and Non-Ferrous Electrical Accessories with 35+ years of market presence.",
  },
];

const galleryImages = [
  { src: "/images/resource/project-1.jpg", alt: "AEX Manufacturing Floor" },
  { src: "/images/resource/project-2.jpg", alt: "AEX Extrusion Lines" },
  { src: "/images/resource/project-3.jpg", alt: "AEX Quality Testing Lab" },
  { src: "/images/resource/project-4.jpg", alt: "AEX Moulding Department" },
  { src: "/images/resource/project-5.jpg", alt: "AEX Warehouse & Dispatch" },
  { src: "/images/resource/project-6.jpg", alt: "AEX Factory Aerial View" },
];

export default function FacilityPage() {
  return (
    <>
      <PageTitle
        title="Our Facility"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Facility" }]}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/resource/feature52.jpg"
              alt="AEX International Engineering — Manufacturing Facility"
              width={700}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Jamnagar, Gujarat
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle">World-Class Manufacturing</p>
            <h2 className="section-title mt-3 mb-5">
              A Subsidiary of Apple International Engineering Works Pvt. Ltd.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AEX International is a subsidiary of <strong>Apple International Engineering Works Pvt. Ltd.</strong> —
              the single largest manufacturer and exporter of Ferrous and Non-Ferrous Electrical Accessories,
              Earthing Equipment and Lightning Protection Systems, all in-house; with a presence in the market
              for more than <strong>35 years</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              AEX International is a leading manufacturer and supplier of <strong>Heat Shrinkable Products</strong>,
              Power Cable Accessories, and Insulation Enhancement Products.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Our manufacturing unit is spread across <strong>200,000 square ft</strong> of area. Right from
              Compounding to the Finished Product, everything is produced in-house — ensuring maximum quality
              control at every stage of the manufacturing process.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                About AEX <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href="/strength" className="btn-secondary">
                Our Strength &amp; Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Facility Features Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Capabilities</p>
            <h2 className="section-title mt-3">What Our Facility Offers</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From raw material compounding to finished product dispatch — every process is
              controlled in-house to guarantee the highest standards of quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityFeatures.map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={f.icon}
                    className="text-brand-primary group-hover:text-white text-xl transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Engineering Expertise</p>
            <h2 className="section-title mt-3 mb-5">In-House Specialists Across Every Discipline</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our engineers are experts in fields ranging from <strong>Injection Moulding</strong>,
              Anti-Static Treatment, and <strong>Extrusion Lines</strong>, along with Project
              Management, Value Added Assembly, and Supply Chain Management expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our goal is to not only provide the best quality products but also to exceed suitability
              for all client requirements. We&apos;re here to help your business succeed.
            </p>
            <ul className="space-y-3">
              {[
                "Injection Moulding — wide range of capacity machines",
                "Extrusion Lines — multiple multi-layer capable lines",
                "Anti-Static Treatment for specialized applications",
                "In-house compounding from raw polymer to finished tube",
                "International-standard test laboratory for all products",
                "Value Added Assembly and custom sub-assembly services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-brand-primary mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
            <Image
              src="/images/resource/faq.jpg"
              alt="AEX Engineering Expertise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Factory Photos</p>
            <h2 className="section-title mt-3">Inside Our Manufacturing Unit</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #cc0000 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-xs mb-4">
            Visit or Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Partner With a World-Class Manufacturer?
          </h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
            We would be happy to receive your enquiries no matter what sector you&apos;re in.
            We will listen and transform your needs into solutions that allow you to fulfil your expectations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary">
              Submit Enquiry <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
