import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faSitemap,
  faBriefcase,
  faHandshake,
  faChartLine,
  faFire,
  faShieldAlt,
  faStar,
  faEye,
  faRocket,
  faLeaf,
  faCheckCircle,
  faBullseye,
  faLightbulb,
  faBalanceScale,
  faCertificate,
  faHeart,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Our Strength, Vision & Values | AEX International Engineering",
  description:
    "Discover the vision, mission, ethics, team strengths, and core values that drive AEX International Engineering Works Pvt. Ltd. — a global leader in heat shrink products.",
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

export default function StrengthPage() {
  return (
    <>
      <PageTitle
        title="Our Strength & Values"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Strength & Values" }]}
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

      {/* Our Strength */}
      <section className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready To Reach New Heights?
          </h2>
          <h3 className="text-xl text-brand-accent font-bold mb-6">
            Let&apos;s Get There, Together.
          </h3>
          <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-2xl mx-auto">
            Never miss an opportunity to achieve your dreams. We can help you get there.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            We would be happy to receive your enquiries no matter what sector you&apos;re in. We will listen
            and transform your needs into solutions that allow you to fulfil your expectations.
            Clients are at the centre of everything we do — quality, reliability and committed service are guaranteed.
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
