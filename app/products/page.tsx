import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products | Heat Shrink Accessories",
  description:
    "Explore AEX's complete range of heat shrinkable moulded components, tubes, cable accessories, and pipeline protection products.",
};

export default function ProductsPage() {
  return (
    <>
      <PageTitle
        title="Our Products"
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Comprehensive Heat Shrink Solutions</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We manufacture a wide range of heat shrinkable products, cable jointing kits,
              and accessories designed for electrical, power, telecom, and pipeline industries.
            </p>
            <a
              href="/pdfs/ALL_PRODUCT_CATALOGUES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              ALL PRODUCT CATALOGUES (PDF)
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
