import { notFound } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { news } from "@/lib/data/news";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = news.find((item) => item.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: "News Not Found | AEX International Engineering",
    };
  }

  return {
    title: `${article.title} | AEX International Engineering`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = news.find((item) => item.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="bg-brand-light py-10">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors mb-8"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to News
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-primary px-3 py-1 rounded-full">
              <FontAwesomeIcon icon={article.icon} className="text-[10px]" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm font-medium">
              <FontAwesomeIcon icon={faCalendarAlt} />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {article.title}
          </h1>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="text-gray-700 leading-relaxed text-lg [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-brand-primary [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>p]:mb-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>
    </>
  );
}
