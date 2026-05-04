import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products | Heat Shrink Cable Accessories | AEX International Engineering",
  description:
    "Explore AEX's complete range of heat shrinkable moulded components, tubing, power cable accessories, busbar insulation, wrap-around sleeves, and wildlife protection products.",
  keywords: [
    "heat shrink accessories",
    "moulded components",
    "heat shrink tubes",
    "cable accessories",
    "busbar insulation",
    "wrap around sleeves",
    "wildlife protection covers",
    "AEX products",
  ],
  alternates: { canonical: "https://www.aexheatshrink.com/products" },
  openGraph: {
    title: "Products | AEX International Engineering",
    description: "Explore AEX's complete range of heat shrinkable products and cable accessories.",
    url: "https://www.aexheatshrink.com/products",
    type: "website",
    siteName: "AEX International Engineering",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageTitle title="Our Products" breadcrumbs={[{ label: "Products" }]} />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Comprehensive Heat Shrink Solutions</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We manufacture a wide range of heat shrinkable products, cable jointing kits, and
              accessories designed for electrical, power, telecom, and pipeline industries.
            </p>
            <a
              href="/pdfs/ALL_PRODUCT_CATALOGUES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
              ALL PRODUCT CATALOGUES (PDF)
            </a>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Sub-product count badge */}
                  {product.subProducts && product.subProducts.length > 0 && (
                    <div className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.subProducts.length} Products
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 group-hover:text-brand-primary transition-colors text-base leading-snug mb-2">
                    {product.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Sub-items preview */}
                  {product.subProducts && product.subProducts.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {product.subProducts.slice(0, 3).map((sub) => (
                        <li key={sub.slug} className="text-xs text-gray-400 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                          {sub.title}
                        </li>
                      ))}
                      {product.subProducts.length > 3 && (
                        <li className="text-xs text-brand-primary font-semibold">
                          +{product.subProducts.length - 3} more
                        </li>
                      )}
                    </ul>
                  )}

                  <div className="mt-4 flex items-center gap-1.5 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    View Range
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
