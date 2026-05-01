import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Industry } from "@/lib/data/industries";

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Link href={`/industries/${industry.slug}`}>
      <div className="group relative overflow-hidden rounded-xl h-64 block">
        {/* Background Image */}
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent group-hover:via-brand-dark/60 transition-colors duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h3 className="text-white font-bold text-base leading-tight mb-1 group-hover:text-brand-accent transition-colors duration-200">
            {industry.title}
          </h3>
          <div className="flex items-center gap-1 text-brand-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Learn More</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </div>
        </div>
      </div>
    </Link>
  );
}
