import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowRight,
  faIndustry,
  faShieldAlt,
  faCertificate,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import ProductCard from "@/components/ProductCard";
import IndustryCard from "@/components/IndustryCard";
import { featuredProducts } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Heat Shrink Products Manufacturer India | AEX International Engineering",
  description:
    "AEX International Engineering — India's leading manufacturer of heat shrink products, cable accessories, busbar insulation, and pipeline protection. ISO certified. 35+ years legacy. Export to 50+ countries.",
};



const whyChooseUs = [
  {
    icon: faCertificate,
    title: "ISO Triple Certified",
    text: "ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 — quality, environment, and safety certified.",
  },
  {
    icon: faShieldAlt,
    title: "35+ Years Legacy",
    text: "Backed by a 35+ year industry legacy via our parent company, AEX stands on proven foundations.",
  },
  {
    icon: faIndustry,
    title: "200,000 Sq Ft Facility",
    text: "State-of-the-art 200,000 sq ft facility at Jamnagar GIDC with 400+ skilled workforce.",
  },
  {
    icon: faLeaf,
    title: "Sustainable Products",
    text: "RoHS compliant, halogen-free, and low-smoke ranges — built for a greener industrial future.",
  },
];

const galleryImages = [
  "/images/resource/project-1.jpg",
  "/images/resource/project-2.jpg",
  "/images/resource/project-3.jpg",
  "/images/resource/project-4.jpg",
  "/images/resource/project-5.jpg",
  "/images/resource/project-6.jpg",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/resource/welcome.jpg"
                alt="AEX International Engineering — Manufacturing Facility"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white rounded-2xl p-5 shadow-xl text-center hidden md:block">
              <div className="text-4xl font-extrabold">35+</div>
              <div className="text-sm font-semibold">Years of Legacy</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle">Welcome to AEX Heat Shrink</p>
            <h2 className="section-title mb-5">
              With Decades of Proven Experience, Our Team Is Prepared to Help You Achieve Your Goals, And Beyond.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have a deep advantage of many years of experience in processing a wide variety of
              <strong> Thermoplastics and Thermoset Polymers</strong> including Flame-retardant materials
              across many industries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Guided by our Policy of <strong>Innovation and Flexibility</strong>, AEX leads the way in supplying
              high-quality services to the Energy industry worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              AEX is recognized as a worldwide leader in manufacturing a wide range of{" "}
              <strong>Heat Shrinkable Moulded Products</strong>, Heat Shrink Tubes, Power Cable Accessories,
              and Insulation Enhancement Products. Operating from a{" "}
              <strong>200,000 sq ft facility</strong> in Jamnagar with a{" "}
              <strong>400+ strong workforce</strong> and a <strong>35+ year legacy</strong>.
            </p>

            {/* Checkpoints */}
            <ul className="space-y-2 mb-8">
              {[
                "ISO 9001:2015 / 14001:2015 / 45001:2018 Triple Certified",
                "In-house R&D — Injection Moulding & Extrusion expertise",
                "Exported to 50+ countries across 6 continents",
                "Custom heat shrink solutions for unique applications",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-brand-primary mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-secondary inline-flex">
              Learn More About Us
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Featured Products */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Products</p>
            <h2 className="section-title">Premium Heat Shrink Solutions</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From cable accessories to pipeline protection — we manufacture a comprehensive range of
              heat shrink products for electrical and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Factory / Aerial View section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Factory image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/resource/factory-aerial.jpg"
                alt="AEX Manufacturing Facility — Aerial View"
                width={700}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Play button overlay for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@aexheatshrink"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch factory aerial video"
                  className="w-20 h-20 bg-brand-primary/90 hover:bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              {/* Tag */}
              <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Factory Aerial View
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-subtitle">Our Facility</p>
              <h2 className="section-title mt-3 mb-5">
                200,000 Sq Ft State-of-the-Art Manufacturing Unit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                AEX operates from a massive <strong>200,000 sq ft</strong> manufacturing facility
                at Jamnagar GIDC — one of India&apos;s premier industrial hubs. Our end-to-end
                in-house production capability ensures unmatched quality control at every stage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                The facility houses advanced testing laboratories calibrated to international
                standards, staffed by a <strong>400+ skilled workforce</strong> including experienced
                engineers and R&amp;D specialists dedicated to continuous product innovation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "200,000", unit: "sq ft", label: "Factory Area" },
                  { value: "400+", unit: "", label: "Skilled Workforce" },
                  { value: "35+", unit: "years", label: "Industry Legacy" },
                  { value: "50+", unit: "countries", label: "Global Export" },
                ].map((s) => (
                  <div key={s.label} className="bg-brand-light rounded-xl p-4 border border-gray-100">
                    <div className="text-2xl font-extrabold text-brand-primary">
                      {s.value} <span className="text-sm font-semibold text-gray-500">{s.unit}</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/facility" className="btn-primary">
                Explore Our Facility
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Why Choose AEX</p>
            <h2 className="section-title">Built on Quality & Trust</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-brand-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-brand-primary group-hover:text-white text-2xl transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Industries We Serve</p>
            <h2 className="section-title">Solutions Across Every Industry</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              AEX products power reliable performance across cable manufacturing, electric utilities,
              renewable energy, district heating, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 8).map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries/cable-industry" className="btn-secondary">
              View All Industries
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,27,62,0.88), rgba(13,27,62,0.92)), url(/images/background/10.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Ready to Reach New Heights?
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Let&apos;s Get There Together
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We transform your needs into solutions. Our technical team will work with you to
            identify the perfect heat shrink solution for your voltage class, environment, and application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary text-lg px-8 py-4">
              Submit Enquiry
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title">Projects Gallery</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl h-40">
                <Image
                  src={img}
                  alt={`AEX Project ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make in India strip */}
      <section className="py-6" style={{ background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 40%, #FFFFFF 60%, #138808 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="text-4xl">🇮🇳</div>
          <div>
            <div className="font-extrabold text-xl text-gray-900">Make in India</div>
            <div className="text-sm text-gray-700">
              AEX products are proudly manufactured at our world-class facility in Jamnagar, Gujarat.
              Supporting India&apos;s vision for global manufacturing excellence.
            </div>
          </div>
          <div className="text-4xl">🇮🇳</div>
        </div>
      </section>

      {/* Clients section */}
      <section className="py-14 bg-brand-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
            Trusted by Leading Companies
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-6 items-center">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <div key={n} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={`/images/clients/${n}.png`}
                  alt={`Client ${n}`}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
