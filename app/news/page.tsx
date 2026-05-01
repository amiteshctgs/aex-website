import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faArrowRight,
  faTrophy,
  faNewspaper,
  faGlobe,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Events & News | AEX International Engineering",
  description:
    "Stay updated with the latest news, events, trade shows, and announcements from AEX International Engineering Works Pvt. Ltd.",
};

const news = [
  {
    id: 1,
    type: "Event",
    icon: faIndustry,
    date: "March 2024",
    title: "AEX at ELECRAMA 2024 — India's Largest Power & Energy Expo",
    excerpt:
      "AEX International Engineering participated in ELECRAMA 2024, showcasing its latest range of heat shrink cable accessories, busbar insulation products, and renewable energy solutions to global buyers and OEMs.",
    category: "Exhibition",
    color: "bg-brand-primary",
  },
  {
    id: 2,
    type: "News",
    icon: faTrophy,
    date: "January 2024",
    title: "AEX Achieves ISO 45001:2018 Occupational Health & Safety Certification",
    excerpt:
      "AEX International Engineering is proud to announce the successful renewal of its ISO 45001:2018 certification — reaffirming our commitment to employee safety, health, and well-being across all 200,000 sq ft of our manufacturing operations.",
    category: "Certification",
    color: "bg-[#1a2b5f]",
  },
  {
    id: 3,
    type: "News",
    icon: faGlobe,
    date: "December 2023",
    title: "AEX Expands Export Reach to 50+ Countries Across 6 Continents",
    excerpt:
      "AEX now exports its heat shrink and cable accessory products to more than 50 countries spanning Africa, Europe, the Middle East, Asia-Pacific, the Americas, and Australia — reinforcing our position as a truly global manufacturing partner.",
    category: "Milestone",
    color: "bg-emerald-600",
  },
  {
    id: 4,
    type: "Event",
    icon: faIndustry,
    date: "November 2023",
    title: "Participation in Gulf Electric & Power Expo — Dubai",
    excerpt:
      "Our team represented AEX at the Gulf Electric & Power Expo in Dubai, connecting with cable manufacturers, utilities, and EPC contractors from the Middle East and North Africa regions.",
    category: "Exhibition",
    color: "bg-brand-primary",
  },
  {
    id: 5,
    type: "News",
    icon: faNewspaper,
    date: "September 2023",
    title: "New Product Launch: Heat Shrink Pole Protection Range",
    excerpt:
      "AEX introduces its expanded pole protection product range including heat shrink pole caps and protection sleeves designed specifically for utility poles, street poles, and telecom infrastructure.",
    category: "Product Launch",
    color: "bg-brand-accent",
  },
  {
    id: 6,
    type: "News",
    icon: faTrophy,
    date: "June 2023",
    title: "AEX Recognized as Top Exporter by GIDC Jamnagar Chamber of Commerce",
    excerpt:
      "AEX International Engineering was honored by the Jamnagar GIDC Chamber of Commerce for outstanding export performance and contribution to India's industrial manufacturing sector.",
    category: "Award",
    color: "bg-[#1a2b5f]",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageTitle
        title="Events & News"
        breadcrumbs={[{ label: "Events & News" }]}
      />

      {/* News grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Latest Updates</p>
            <h2 className="section-title mt-3">News, Events & Milestones</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
              Stay updated with the latest from AEX — from global exhibitions and product launches
              to certification achievements and industry milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Top color bar */}
                <div className={`h-1.5 ${item.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-primary px-3 py-1 rounded-full">
                      <FontAwesomeIcon icon={item.icon} className="text-[10px]" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-brand-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5 text-justify">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 text-brand-primary font-semibold text-xs group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4">
            Stay Connected
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Follow AEX on Social Media
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            Get the latest product launches, industry insights, and event updates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
