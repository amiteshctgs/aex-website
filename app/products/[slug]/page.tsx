import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowRight,
  faDownload,
  faPaperPlane,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import { getProductBySlug, getProductSlugs, products } from "@/lib/data/products";
import DownloadPdfButton from "@/components/DownloadPdfButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | AEX International Engineering`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageTitle
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products/heat-shrink-moulded-components" },
          { label: product.shortTitle },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — Product Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Product Overview</h2>
              <p className="text-gray-500 leading-relaxed text-lg">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-5">Key Features & Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
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
              <h3 className="text-xl font-bold text-brand-primary mb-5">Product Range / Applications</h3>
              <ul className="space-y-2">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-3 text-gray-600">
                    <FontAwesomeIcon icon={faArrowRight} className="text-brand-primary text-xs flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PDF Downloads */}
            <div className="p-6 bg-brand-light rounded-xl border border-brand-primary/20">
              <h4 className="font-bold text-brand-primary mb-2">Downloads</h4>
              <p className="text-gray-500 text-sm mb-5">
                Download the specific technical datasheet for this product, or grab our complete catalogue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {product.pdfUrl && (
                  <DownloadPdfButton 
                    label="Technical Datasheet"
                    className="btn-secondary flex-1"
                    fileName={`AEX_Datasheet_${product.slug}.pdf`}
                  />
                )}
                <DownloadPdfButton 
                  label="ALL CATALOGUES"
                  className="btn-primary flex-1"
                  fileName="AEX_ALL_CATALOGUES.pdf"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Need Help CTA */}
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
                    <a href="mailto:tech@aexheatshrink.com" className="text-white font-bold text-base hover:text-brand-accent transition-colors break-all">
                      tech@aexheatshrink.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related products */}
            <div>
              <h4 className="font-bold text-brand-primary text-lg mb-4">Other Products</h4>
              <div className="space-y-3">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-brand-accent hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-primary text-sm group-hover:text-brand-accent transition-colors leading-tight">{rp.shortTitle}</p>
                      <p className="text-xs text-gray-400 mt-0.5">View details →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div className="bg-brand-light rounded-xl p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Our Certifications</p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((c) => (
                  <span key={c} className="bg-brand-primary text-white text-xs px-3 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
