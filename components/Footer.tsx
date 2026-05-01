"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faChevronRight,
  faDownload,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About AEX", href: "/about" },
  { label: "Our Facility", href: "/facility" },
  { label: "Strength & Values", href: "/strength" },
  { label: "Events & News", href: "/news" },
  { label: "Downloads", href: "/downloads" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "Heat Shrink Moulded Components", href: "/products/heat-shrink-moulded-components" },
  { label: "Heat Shrink Tubing / Sleeves", href: "/products/heat-shrink-tubes" },
  { label: "Power Cable Accessories", href: "/products/power-cable-accessories" },
  { label: "Busbar / Switchgear Insulation", href: "/products/switchgear-insulation-products" },
  { label: "Asset & Wildlife Protection", href: "/products/overhead-line-covers" },
  { label: "Heat Shrink Wrap Around Sleeves", href: "/products/heat-shrinkable-wrap-around-sleeves" },
  { label: "Tapes & Sealants", href: "/products/tapes-and-sealants" },
  { label: "Pre-Insulated Pipe Management", href: "/products/pre-insulated-pipe-management" },
];

const socialLinks = [
  { icon: faFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: faTwitter, label: "Twitter", href: "https://twitter.com" },
  { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: faYoutube, label: "YouTube", href: "https://youtube.com" },
  { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/919321198038" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#111111" }} className="text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo-2.png"
              alt="AEX International Engineering"
              width={160}
              height={60}
              className="h-12 w-auto object-contain mb-5 "
            />
          </Link>
          <p className="text-sm leading-relaxed mb-5 text-justify">
            AEX International Engineering — global leaders in thermoplastic & thermoset polymer
            solutions. Heat shrinkable moulded products, cable accessories, and insulation
            enhancement products. 200,000 sq ft facility. 400+ workforce. Exported to 50+ countries.
          </p>

          {/* Make in India badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xs font-black">🇮🇳</span>
            </div>
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                Make in India
              </span>
              <p className="text-gray-500 text-[10px]">Proudly manufactured in Gujarat, India</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 flex-wrap">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm hover:text-brand-primary transition-colors duration-200 group"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-brand-primary text-xs group-hover:translate-x-1 transition-transform"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ISO Certs badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {["ISO 9001", "ISO 14001", "ISO 45001", "CE", "RoHS"].map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-2 py-0.5 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3 — Products */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Our Products
          </h3>
          <ul className="space-y-2">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm hover:text-brand-primary transition-colors duration-200 group"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-brand-primary text-xs group-hover:translate-x-1 transition-transform"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Quick action links */}
          <div className="mt-6 flex flex-col gap-2">
            <Link
              href="/downloads"
              className="flex items-center gap-2 text-xs text-brand-primary hover:text-brand-accent font-semibold transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Catalogues
            </Link>
            <Link
              href="/news"
              className="flex items-center gap-2 text-xs text-brand-primary hover:text-brand-accent font-semibold transition-colors"
            >
              <FontAwesomeIcon icon={faNewspaper} />
              Events & News
            </Link>
          </div>
        </div>

        {/* Column 4 — Contact Info */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-brand-primary mt-1 flex-shrink-0" />
              <span className="text-justify">
                Plot No. B/10-11, Road No. 1,<br />
                GIDC Lodhika, Metoda,<br />
                Jamnagar – 360 021, Gujarat, India
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-brand-primary flex-shrink-0" />
              <a href="tel:+919321198038" className="hover:text-brand-primary transition-colors">
                +91 93211 98038
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-brand-primary flex-shrink-0" />
              <a href="mailto:tech@aexheatshrink.com" className="hover:text-brand-primary transition-colors break-all">
                tech@aexheatshrink.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <FontAwesomeIcon icon={faClock} className="text-brand-primary mt-1 flex-shrink-0" />
              <span>Mon – Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</span>
            </li>
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919321198038"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#1ebe57] transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-500">
            &copy; {year} AEX International Engineering Works Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <Link href="/certificates/iso-9001" className="hover:text-brand-primary transition-colors">Certifications</Link>
            <Link href="/downloads" className="hover:text-brand-primary transition-colors">Downloads</Link>
            <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
          </div>
          <p className="text-gray-600">
            🇮🇳 Designed & Developed with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
