import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Events & News | AEX International Engineering",
  description:
    "Stay updated with the latest news, events, trade shows, and announcements from AEX International Engineering Works Pvt. Ltd.",
  keywords: [
    "AEX news",
    "AEX events",
    "heat shrink exhibitions",
    "cable accessories news",
    "AEX milestones",
    "ELECRAMA AEX",
    "manufacturing news",
  ],
  alternates: {
    canonical: "https://www.aexheatshrink.com/news",
  },
  openGraph: {
    title: "Events & News | AEX International Engineering",
    description: "Stay updated with the latest news, events, trade shows, and announcements from AEX International Engineering Works Pvt. Ltd.",
    url: "https://www.aexheatshrink.com/news",
    type: "website",
    siteName: "AEX International Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & News | AEX International Engineering",
    description: "Stay updated with the latest news, events, trade shows, and announcements from AEX International Engineering Works Pvt. Ltd.",
  },
};

export default function NewsPage() {
  return (
    <>
      <PageTitle
        title="Events & News"
        breadcrumbs={[{ label: "Events & News" }]}
      />

      {/* News grid */}
      <section className="py-14 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Latest Updates</p>
            <h2 className="section-title mt-3">News, Events & Milestones</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
              Stay updated with the latest from AEX — from global exhibitions and product launches
              to certification achievements and industry milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-8">
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
                    <Link href={`/news/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5 text-justify">
                    {item.excerpt}
                  </p>

                  <Link href={`/news/${item.slug}`} className="flex items-center gap-1.5 text-brand-primary font-semibold text-xs group-hover:gap-2.5 transition-all duration-200">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4 text-center">
            Stay Connected
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Follow AEX on Social Media
          </h2>
          <p className="text-gray-400 mb-8 text-sm  text-center">
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
