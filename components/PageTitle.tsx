import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageTitleProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageTitle({
  title,
  breadcrumbs = [],
  backgroundImage = "/images/background/9.jpg",
}: PageTitleProps) {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10,20,50,0.82), rgba(10,20,50,0.88)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Red accent left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary" />

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Tag line */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 bg-brand-primary" />
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em]">
            AEX International Engineering
          </span>
          <span className="h-px w-8 bg-brand-primary" />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5">{title}</h1>

        {/* Red underline */}
        <div className="w-14 h-1 bg-brand-primary mx-auto mb-6 rounded-full" />

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-1 text-gray-400 hover:text-brand-accent transition-colors"
          >
            <FontAwesomeIcon icon={faHome} className="text-xs" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-xs" />
              {crumb.href && idx < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="text-gray-400 hover:text-brand-accent transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-accent font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
