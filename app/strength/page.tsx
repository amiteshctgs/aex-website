import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faSitemap,
  faBriefcase,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Strengths — Why Choose AEX Heat Shrink Products",
  description:
    "Discover why AEX is trusted globally: 35+ year legacy, 400+ skilled workforce, in-house R&D, widest machine range in India, ISO 9001:2015 certified. Exporting to 50+ countries.",
  keywords: [
    "AEX company strengths",
    "why choose AEX heat shrink",
    "ISO certified heat shrink manufacturer",
    "heat shrink global exporter",
    "AEX 35 years experience",
    "in-house R&D polymer company",
    "400 skilled workforce India",
    "widest machine range heat shrink India",
    "AEX manufacturing capabilities",
    "heat shrink quality assurance India",
  ],
  alternates: {
    canonical: "https://www.aexheatshrink.com/strength",
  },
  openGraph: {
    title: "Our Strengths — Why Choose AEX Heat Shrink Products",
    description:
      "35+ year legacy, 400+ workforce, ISO certified, widest machine range in India. Discover what makes AEX International Engineering a global leader.",
    url: "https://www.aexheatshrink.com/strength",
    type: "website",
    siteName: "AEX International Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Strengths — Why Choose AEX Heat Shrink Products",
    description:
      "35+ year legacy, 400+ workforce, ISO certified. Discover what makes AEX International Engineering a global leader.",
  },
};

const strengths = [
  {
    icon: faUsers,
    title: "Our Team",
    text: "We have a team of dedicated staff that combine to manage the supply chain for all our customers. AEX's highly motivated employees are committed to and encouraged to draw on each other's strengths and develop each other's skills to create a team that will ultimately be of greater service to the customer. At AEX, Collaboration is the key to achieving common goals with a belief in Win Together!",
  },
  {
    icon: faSitemap,
    title: "Leadership",
    text: "We believe in the power of a diverse, inclusive organization. Across AEX, we demonstrate our commitment to this belief every day. Our leadership team reflects and champions this belief. Our teams work closely together — across functions and regions — to meet the needs of customers, shareholders, partners, and employees.",
  },
  {
    icon: faBriefcase,
    title: "Approach to Work",
    text: "An agile and disciplined approach to leadership means a strong framework for dealing with complex environments. Our cohesive team has a wealth of knowledge and breadth of experience unmatched in the Plastics industry — enabling it to navigate the unexpected while strategically planning for the future.",
  },
];

export default function StrengthPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Strengths — AEX International Engineering",
    "url": "https://www.aexheatshrink.com/strength",
    "description": "AEX International Engineering has 35+ years of experience, 400+ skilled workforce, in-house R&D, and the widest machine range in India for heat shrink products.",
    "mainEntity": {
      "@type": "Organization",
      "name": "AEX International Engineering Works Pvt. Ltd.",
      "foundingDate": "1989",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 400 },
      "url": "https://www.aexheatshrink.com"
    }
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageTitle
        title="Our Strength"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Strength" }]}
      />

      {/* Our Strength */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Strength</p>
            <h2 className="section-title mt-3">What Makes AEX Strong</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="group bg-brand-light rounded-2xl p-8 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-brand-primary group-hover:text-white text-xl transition-colors duration-300"
                  />
                </div>
                <h3 className="font-extrabold text-brand-primary text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path to Success / CTA */}
      <section
        className="py-14 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,27,62,0.90), rgba(13,27,62,0.93)), url(/images/background/10.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faFlag} className="text-white text-2xl" />
          </div>
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4 text-center">
            Path to Success
          </p>
          <h2 className="text-3xl md:text-5xl text-center font-extrabold text-white mb-4">
            Ready To Reach New Heights?
          </h2>
          <h3 className="text-xl text-brand-accent font-bold mb-6">
            Let&apos;s Get There, Together.
          </h3>
          <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-2xl mx-auto">
            Never miss an opportunity to achieve your dreams. We can help you get there.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary text-lg px-8 py-4">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
