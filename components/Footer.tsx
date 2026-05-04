"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faChevronRight,
  faChevronDown,
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
  { label: "Facility", href: "/facility" },
  { label: "Vision, Mission and Ethics", href: "/vision-mission-ethics" },
  { label: "Our Strength", href: "/strength" },
  { label: "Values We Live By", href: "/values-we-live-by" },
  { label: "Events & News", href: "/news" },
  { label: "Downloads", href: "/downloads" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact" },
];

interface SolutionSubLink { label: string; href: string; }
interface SolutionLink { label: string; href: string; children?: SolutionSubLink[]; }

const solutionLinks: SolutionLink[] = [
  { label: "Cable Industry", href: "/industries/cable-industry" },
  { label: "Switchgear Industry", href: "/industries/switchgear-industry" },
  { label: "Transformer & Busduct", href: "/industries/transformer-and-busduct-industry" },
  { label: "Electric Utilities (Power T&D)", href: "/industries/power-transmission-and-distribution" },
  {
    label: "Asset & Wildlife Protection",
    href: "/industries/asset-and-wildlife-protection",
    children: [
      { label: "Wildlife Protection Covers", href: "/products/overhead-line-covers" },
      { label: "Overhead Line Covers", href: "/products/overhead-line-covers" },
      { label: "Overhead Line Tubes", href: "/products/overhead-line-covers" },
      { label: "Busbar Sleeves", href: "/products/heat-shrink-tubes" },
      { label: "Heat Shrink Tape", href: "/products/tapes-and-sealants" },
    ],
  },
  { label: "Renewable Energy — Wind", href: "/industries/wind-energy-solutions" },
  { label: "Renewable Energy — Solar", href: "/industries/solar-energy-solutions" },
  { label: "Cable Joints & Terminations", href: "/industries/kit-components-cable-joints" },
  {
    label: "Pre-Insulated Pipe / District Heating",
    href: "/industries/district-heating-cooling",
    children: [
      { label: "Heat Shrink Pre-Insulated Pipe Seals", href: "/products/pre-insulated-pipe-management" },
      { label: "Heat Shrink Tubing", href: "/products/heat-shrink-tubes" },
      { label: "Heat Shrink Wrap Around Sleeves", href: "/products/heat-shrinkable-wrap-around-sleeves" },
      { label: "Mastic Tapes", href: "/products/tapes-and-sealants" },
    ],
  },
  {
    label: "Utility Pole / Street Pole",
    href: "/industries/utility-pole-industry",
    children: [
      { label: "Heat Shrink Pole Caps", href: "/products/pole-protection-products" },
      { label: "Heat Shrink Pole Protection Sleeves", href: "/products/pole-protection-products" },
    ],
  },
  { label: "Oil & Gas / Corrosion Protection", href: "/industries/oil-gas-corrosion-protection" },
  { label: "Cathodic Protection", href: "/industries/cathodic-protection" },
  { label: "Automobile / Wire Harness", href: "/industries/automobile-wire-harness" },
  { label: "Telecom Industry", href: "/industries/telecom-industry" },
];

const productLinks = [
  { label: "Heat Shrink Moulded Components", href: "/products/heat-shrink-moulded-components" },
  { label: "Heat Shrink Tubing", href: "/products/heat-shrink-tubing" },
  { label: "Power Cable Accessories", href: "/products/power-cable-accessories" },
  { label: "Busbar / Switchgear Insulation", href: "/products/busbar-switchgear-insulation" },
  { label: "Heat Shrink Wrap Around Sleeves", href: "/products/heat-shrink-wrap-around-sleeves" },
  { label: "Asset & Wildlife Protection", href: "/products/asset-wildlife-protection" },
  { label: "Tapes & Sealants", href: "/products/tapes-and-sealants" },
  { label: "Other Products", href: "/products/other-products" },
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
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

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
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
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
            {["ISO 9001", "CE"].map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-2 py-0.5 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3 — Solutions */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
            Solutions
          </h3>
          <ul className="space-y-1">
            {solutionLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setExpandedSolution(expandedSolution === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between gap-2 text-sm py-0.5 hover:text-brand-primary transition-colors duration-200 group text-left"
                    >
                      <span className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-brand-primary text-xs group-hover:translate-x-1 transition-transform"
                        />
                        {link.label}
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-[10px] text-brand-primary transition-transform duration-200 flex-shrink-0 ${
                          expandedSolution === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedSolution === link.label && (
                      <ul className="ml-4 mt-1 mb-1 border-l-2 border-brand-primary/20 pl-3 space-y-1">
                        <li>
                          <Link
                            href={link.href}
                            className="block text-xs text-brand-primary font-semibold py-0.5 hover:underline"
                          >
                            View All →
                          </Link>
                        </li>
                        {link.children.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block text-xs text-gray-500 py-0.5 hover:text-brand-primary transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm py-0.5 hover:text-brand-primary transition-colors duration-200 group"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-brand-primary text-xs group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Products */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
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
          <h3 className="text-gray-900 font-bold text-base mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-primary">
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
      <div className="border-t border-gray-100">
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
