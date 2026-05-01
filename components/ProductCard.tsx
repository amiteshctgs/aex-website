import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <div className="card h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-gray-100 hover:border-brand-primary/30">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Red top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-brand-primary transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
            {product.description}
          </p>
          <div className="flex items-center gap-1.5 text-brand-primary font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
            <span>View Details</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </div>
        </div>
      </div>
    </Link>
  );
}
