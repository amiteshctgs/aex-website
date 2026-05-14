"use client";

// Inject scrollbar styles once (lightweight, no extra package needed)
const dropdownScrollbarStyle = `
  .aex-dropdown-scroll {
    scrollbar-width: thin;
    scrollbar-color: #c41e3a33 transparent;
  }
  .aex-dropdown-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .aex-dropdown-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .aex-dropdown-scroll::-webkit-scrollbar-thumb {
    background-color: #c41e3a55;
    border-radius: 4px;
  }
  @keyframes aex-dropdown-in {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .aex-dropdown-animate {
    animation: aex-dropdown-in 0.18s ease forwards;
  }
`;

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone, faEnvelope, faBars, faTimes,
  faChevronDown, faChevronRight, faSearch, faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { navigation } from "@/lib/data/navigation";
import GoogleTranslate from "./GoogleTranslate";
import GlobalSearch from "./GlobalSearch";

// ── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus mobile search input when panel opens
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 80);
  }, [searchOpen]);

  return (
    <div className="sticky top-0 z-50">
      {/* Scoped scrollbar + entrance-animation styles */}
      <style dangerouslySetInnerHTML={{ __html: dropdownScrollbarStyle }} />
      {/* ── Top Announcement Strip ─────────────────────────────────── */}
      <div className="text-gray-600 text-xs bg-brand-secondary font-bold uppercase tracking-wider border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: phone & email */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+919321198038" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-[10px]" />
              +91 93211 98038
            </a>
            <a href="mailto:tech@aexheatshrink.com" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors lowercase">
              <FontAwesomeIcon icon={faEnvelope} className="text-[10px]" />
              tech@aexheatshrink.com
            </a>
          </div>

          {/* Right: Translate, Make in India, Search */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* Google Translate */}
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faGlobe} className="text-[12px] text-brand-primary" />
              <GoogleTranslate />
            </div>
            {/* Make in India */}
            <div className="flex items-center gap-1.5" title="Make in India">
              <span className="text-lg leading-none">🇮🇳</span>
              <span>Make in India</span>
            </div>
            {/* Search Option */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 hover:text-red-700 transition-colors"
            >
              <FontAwesomeIcon icon={searchOpen ? faTimes : faSearch} className="text-[12px]" />
              <span>{searchOpen ? 'CLOSE SEARCH' : 'SEARCH'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main header ─────────────────────────────── */}
      <header ref={navRef}
        className={`transition-all duration-300 bg-brand-primary ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between h-16 xl:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center bg-white h-16 xl:h-20 pl-4 pr-6 xl:pr-10 flex-shrink-0 relative z-10">
              {/* Solid white fill extending to the left edge of the screen */}
              <div className="absolute top-0 right-full w-[50vw] h-full bg-white"></div>
              {/* Premium slanted edge */}
              <div className="absolute top-0 -right-6 w-6 h-full bg-white hidden sm:block" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
              <div className="absolute top-0 -right-4 w-4 h-full bg-white sm:hidden" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>

              <Image src="/images/logo-2.png" alt="AEX International Engineering"
                width={160} height={60} className="h-10 xl:h-14 w-auto object-contain relative z-10" priority />
            </Link>

            {/* ── Desktop nav ───────────────────────── */}
            <nav className="hidden xl:flex items-center h-full border-l border-white/20">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group h-full flex items-center border-r border-white/20"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}>
                    <Link href={item.href} className="flex items-center gap-1 px-4 py-2 text-[14px] font-bold uppercase tracking-wide transition-colors duration-200 text-white hover:text-gray-200">
                      {item.label}
                      <FontAwesomeIcon icon={faChevronDown} className="text-[10px] mt-0.5" />
                    </Link>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 z-50 aex-dropdown-animate flex items-start"
                           onMouseLeave={() => setActiveSubDropdown(null)}>
                        {/* Main Dropdown Scroll Wrapper */}
                        <div className="min-w-[260px] bg-white shadow-2xl rounded-xl border border-gray-100 py-2 max-h-[75vh] overflow-y-auto aex-dropdown-scroll">
                          {item.children.map((child) => (
                            <div key={child.label} className="relative"
                              onMouseEnter={() => setActiveSubDropdown(child.children ? child.label : null)}>
                              {child.children ? (
                                <Link href={child.href} onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); }} className={`w-full flex items-center justify-between px-5 py-3 text-[14px] font-semibold transition-colors duration-150 whitespace-nowrap ${activeSubDropdown === child.label ? 'bg-brand-primary text-white' : 'text-gray-700 hover:bg-brand-primary hover:text-white'}`}>
                                  {child.label}
                                  <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-4" />
                                </Link>
                              ) : (
                                <Link href={child.href} className="block px-5 py-3 text-[14px] font-semibold text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-150 whitespace-nowrap" onClick={() => setActiveDropdown(null)}>
                                  {child.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Active Sub-dropdown Flyout */}
                        {activeSubDropdown && (
                          <div className="min-w-[280px] ml-1 bg-white shadow-2xl rounded-xl border border-gray-100 py-2 max-h-[75vh] overflow-y-auto aex-dropdown-scroll aex-dropdown-animate">
                            {item.children.find(c => c.label === activeSubDropdown)?.children?.map((sub) => (
                              <Link key={sub.label} href={sub.href}
                                className="block px-5 py-3 text-[14px] font-semibold text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-150 whitespace-nowrap"
                                onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={item.label} className="h-full flex items-center border-r border-white/20">
                    <Link href={item.href}
                      className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide transition-colors duration-200 text-white hover:text-gray-200">
                      {item.label}
                    </Link>
                  </div>
                )
              )}
            </nav>

            {/* ── Mobile right buttons ──────────────── */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                className="p-2 rounded-md transition-colors text-white"
                onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop & Mobile Search Panel ──────────────────────────── */}
        <div className={`absolute w-full left-0 transition-all duration-300 bg-brand-primary z-40 ${searchOpen ? "top-[100%] opacity-100 pointer-events-auto shadow-md" : "top-[50%] opacity-0 pointer-events-none"}`}>
          <GlobalSearch
            variant="mobile"
            inputRef={searchInputRef}
            onClose={() => setSearchOpen(false)}
          />
        </div>

        {/* ── Mobile menu ───────────────────────────── */}
        <div className={`bg-brand-dark xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"}`}>
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    <Link href={item.href} onClick={() => setMobileOpen(false)} className="flex-1 py-2.5 px-3 text-left">
                      {item.label}
                    </Link>
                    <button
                    aria-label="Toggle dropdown"
                      className="px-4 py-3 border-l border-white/5"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                      <FontAwesomeIcon icon={faChevronDown}
                        className={`text-xs transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {mobileExpanded === item.label && (
                    <div className="mt-1 ml-3 border-l border-white/10 pl-3 space-y-1">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.label}>
                            <div className="flex items-center justify-between text-gray-300 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors">
                              <Link href={child.href} onClick={() => setMobileOpen(false)} className="flex-1 py-2 px-3 text-left">
                                {child.label}
                              </Link>
                              <button
                              aria-label="Toggle dropdown"
                                className="px-4 py-2 border-l border-white/5"
                                onClick={() => setMobileSubExpanded(mobileSubExpanded === child.label ? null : child.label)}>
                                <FontAwesomeIcon icon={faChevronDown}
                                  className={`text-xs transition-transform duration-200 ${mobileSubExpanded === child.label ? "rotate-180" : ""}`} />
                              </button>
                            </div>
                            {mobileSubExpanded === child.label && (
                              <div className="ml-3 border-l border-white/10 pl-3 space-y-1 mt-1">
                                {child.children.map((sub) => (
                                  <Link key={sub.label} href={sub.href}
                                    className="block text-gray-400 text-xs py-1.5 px-3 rounded hover:text-white hover:bg-white/5 transition-colors"
                                    onClick={() => setMobileOpen(false)}>
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link key={child.label} href={child.href}
                            className="block text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href}
                  className="block text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-2">
              <Link href="/enquiry"
                className="block w-full text-center bg-white text-brand-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
