import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import JsonLd from "@/components/JsonLd";
import { products, resolveProductUrl } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Heat Shrink Products & Cable Accessories | AEX",
  description:
    "Browse AEX's full range of heat shrink products — moulded components, tubing, cable joints, busbar sleeves, wrap-around sleeves & pipeline protection. Request a quote today.",
  keywords: [
    "heat shrink products India",
    "heat shrinkable moulded components",
    "heat shrink cable accessories",
    "busbar insulating sleeves",
    "heat shrink wrap around sleeves",
    "cable jointing kits India",
    "heat shrink tubing manufacturer",
    "pipeline protection products",
    "wildlife protection heat shrink",
    "power cable accessories supplier",
  ],
  alternates: { canonical: "https://www.aexheatshrink.com/products" },
  openGraph: {
    title: "Heat Shrink Products & Cable Accessories | AEX International",
    description: "Explore AEX's complete range of heat shrinkable products, cable accessories, busbar insulation and pipeline protection solutions.",
    url: "https://www.aexheatshrink.com/products",
    type: "website",
    siteName: "AEX International Engineering",
    images: [{ url: "/images/logo-2.png", width: 400, height: 150, alt: "AEX Heat Shrink Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heat Shrink Products & Cable Accessories | AEX International",
    description: "Explore AEX's complete range of heat shrinkable products and cable accessories.",
  },
};

export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AEX Heat Shrink Products",
    "description": "Complete range of heat shrinkable products, cable accessories, and industrial insulation solutions by AEX International Engineering.",
    "url": "https://www.aexheatshrink.com/products",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": product.title,
      "url": `https://www.aexheatshrink.com/products/${product.slug}`,
      "image": `https://www.aexheatshrink.com${product.image}`,
      "description": product.description,
    }))
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
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
            {/* <DownloadPdfButton
              label="ALL PRODUCT CATALOGUES (PDF)"
              className="btn-primary inline-flex items-center gap-2"
              fileName="AEX_heat_shrink_products.pdf"
              pdfUrl="/pdfs/AEX_heat_shrink_products.pdf"
            /> */}
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={resolveProductUrl(product.slug)}
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
