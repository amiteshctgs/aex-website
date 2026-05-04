import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faRocket,
  faCheckCircle,
  faLightbulb,
  faBalanceScale,
  faStar,
  faUsers,
  faShieldAlt,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Vision, Mission and Ethics | AEX International Engineering",
  description: "Discover the vision, mission, and ethics that drive AEX International Engineering Works Pvt. Ltd.",
};

const visionPoints = [
  "To be the most reliable Global Network for the Customers and Suppliers, that delivers value through Products and Services.",
  "To grow and achieve sustained leadership positions in all our chosen lines of business.",
  "To win the respect of all our stakeholders.",
];

const missionPoints = [
  "To be a responsible value creator for all our Associates.",
  "To accelerate growth with a focus on new products and services introduction.",
  "To provide the solution for the world's hardest engineering challenges.",
  "Committed to helping our Partners overcome any challenges and attain spectacular results.",
  "To associate with the Customers worldwide to design the next generation technology.",
  "To be committed to helping customers achieve business value and ultimate satisfaction through innovation in Engineering, Manufacturing, and Materials.",
];

const ethics = [
  {
    icon: faLightbulb,
    title: "Innovative",
    text: "We will be energetic and proactive, always ready to take challenges, using deep customer insight to develop innovative solutions.",
    color: "bg-brand-primary",
  },
  {
    icon: faBalanceScale,
    title: "Integrity",
    text: "We will be fair, honest, and transparent in our code of conduct. We believe that People with integrity do what they say they are going to do.",
    color: "bg-[#1a2b5f]",
  },
  {
    icon: faStar,
    title: "Excellence",
    text: "We will be passionate about achieving the highest standards of quality and customer satisfaction.",
    color: "bg-brand-primary",
  },
  {
    icon: faUsers,
    title: "Unity",
    text: "We will work as a team and grow together. We believe that Teamwork is the secret that makes common people achieve uncommon results. We will build caring and collaborative relationships based on trust and mutual respect.",
    color: "bg-[#1a2b5f]",
  },
  {
    icon: faShieldAlt,
    title: "Responsibility",
    text: "We will always be committed to the customer to deliver our best performance and to ensure quality and contract fulfilment on time.",
    color: "bg-brand-primary",
  },
];

export default function VisionMissionEthicsPage() {
  return (
    <>
      <PageTitle
        title="Vision, Mission and Ethics"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Vision, Mission and Ethics" }]}
      />

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Direction</p>
            <h2 className="section-title mt-3">Vision &amp; Mission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-brand-primary px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEye} className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Our Vision</h3>
              </div>
              <div className="bg-white p-8">
                <ul className="space-y-5">
                  {visionPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 bg-brand-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-gray-600 leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-[#1a2b5f] px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Our Mission</h3>
              </div>
              <div className="bg-white p-8">
                <ul className="space-y-4">
                  {missionPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-brand-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Ethics</p>
            <h2 className="section-title mt-3">The Principles We Live By</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our code of conduct defines who we are. These five pillars guide every decision,
              every product, and every relationship at AEX.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethics.map((e, idx) => (
              <div
                key={e.title}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`${e.color} p-8 text-white h-full`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                    <FontAwesomeIcon icon={e.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="font-extrabold text-xl mb-3">{e.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{e.text}</p>
                </div>
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
