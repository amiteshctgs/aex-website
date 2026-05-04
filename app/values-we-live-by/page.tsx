import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandshake,
  faChartLine,
  faFire,
  faEye,
  faCertificate,
  faLeaf,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Values We Live By | AEX International Engineering",
  description: "Discover the 6 core values that drive AEX International Engineering.",
};

const values = [
  {
    num: "01",
    icon: faHandshake,
    title: "Collaboration With Our Associates",
    text: "AEX has a proud history of working closely with our associates to achieve the desired goals together. Our customers' success is our success!",
  },
  {
    num: "02",
    icon: faChartLine,
    title: "Steadily Improving",
    text: "Continuous upskilling of our workforce and true leadership allows us to stay at the cutting edge of product development and innovative solution providers.",
  },
  {
    num: "03",
    icon: faFire,
    title: "Passion For the Results",
    text: "At AEX we are results-oriented — not just for ourselves but for our customers too. No target is too ambitious. We like a challenge. We are passionate about performance through anticipation, speed and flexibility.",
  },
  {
    num: "04",
    icon: faEye,
    title: "Transparency",
    text: "At AEX, we communicate openly and prove integrity in all our activities.",
  },
  {
    num: "05",
    icon: faCertificate,
    title: "Stakeholder Appreciation",
    text: "AEX develops a committed and responsive community of Employees, Distributors and Vendors.",
  },
  {
    num: "06",
    icon: faLeaf,
    title: "Sustainability",
    text: "AEX is committed to protecting the environment and contributing to the society around us.",
  },
];

export default function ValuesWeLiveByPage() {
  return (
    <>
      <PageTitle
        title="Values We Live By"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Values We Live By" }]}
      />

      {/* Values */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Values We Live By</p>
            <h2 className="section-title mt-3">6 Core Values That Drive Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Big number watermark */}
                <span className="absolute top-4 right-5 text-7xl font-extrabold text-gray-50 select-none pointer-events-none leading-none">
                  {v.num}
                </span>
                <div className="w-12 h-12 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 relative z-10">
                  <FontAwesomeIcon
                    icon={v.icon}
                    className="text-brand-primary group-hover:text-white text-xl transition-colors duration-300"
                  />
                </div>
                <h3 className="font-extrabold text-brand-primary text-base mb-2 relative z-10">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path to Success / CTA */}
      <section
        className="py-20 relative"
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
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4">
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
