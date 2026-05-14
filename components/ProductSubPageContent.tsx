import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowRight,
  faPhone,
  faEnvelope,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Product, SubProduct, resolveProductUrl } from "@/lib/data/products";

interface Props {
  product: Product;
  sub: SubProduct;
}

export default function ProductSubPageContent({ product, sub }: Props) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left — Sub-product Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Product Overview</h2>
            <p className="text-gray-500 leading-relaxed text-lg">{sub.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-5">Key Features & Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sub.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-gray-100"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-5">Applications</h3>
            <ul className="space-y-2">
              {sub.applications.map((app) => (
                <li key={app} className="flex items-center gap-3 text-gray-600">
                  <FontAwesomeIcon icon={faArrowRight} className="text-brand-primary text-xs flex-shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other products in this category */}
          {product.subProducts && product.subProducts.length > 1 && (
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-5 flex items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} className="text-brand-accent" />
                More in {product.shortTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.subProducts.filter((s) => s.slug !== sub.slug).map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={resolveProductUrl(product.slug, sibling.slug)}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-brand-primary text-xs flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-primary transition-colors">{sibling.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          {/* CTA */}
          <div className="bg-brand-primary text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-white/90 text-sm mb-8 leading-relaxed">
              Our technical team is available to assist you in selecting the right product for your application.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-white/70 text-xs mb-0.5">Call Us</p>
                  <a href="tel:+919321198038" className="text-white font-bold text-lg hover:text-brand-accent transition-colors">
                    +91 93211 98038
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-white/70 text-xs mb-0.5">Email Us</p>
                  <a href="mailto:tech@aexheatshrink.com" className="text-white font-bold text-base hover:text-brand-accent transition-colors break-all lowercase">
                    tech@aexheatshrink.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to category */}
          <div className="bg-brand-light rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Product Category</p>
            <Link
              href={resolveProductUrl(product.slug)}
              className="flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-xs -rotate-180" />
              {product.shortTitle}
            </Link>
          </div>

          {/* Certs */}
          <div className="bg-brand-light rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Our Certifications</p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001", "CE"].map((c) => (
                <span key={c} className="bg-brand-primary text-white text-xs px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
