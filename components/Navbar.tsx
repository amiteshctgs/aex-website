"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone, faEnvelope, faBars, faTimes,
  faChevronDown, faChevronRight, faSearch, faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { navigation } from "@/lib/data/navigation";
import GoogleTranslate from "./GoogleTranslate";

// ── Flat searchable index built from navigation ──────────────────────────────
interface SearchItem { label: string; href: string; parent?: string }

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  navigation.forEach((nav) => {
    items.push({ label: nav.label, href: nav.href });
    nav.children?.forEach((child) => {
      items.push({ label: child.label, href: child.href, parent: nav.label });
      child.children?.forEach((sub) => {
        items.push({ label: sub.label, href: sub.href, parent: child.label });
      });
    });
  });
  return items;
}

const SEARCH_INDEX = buildSearchIndex();

// ── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [resultIndex, setResultIndex] = useState(-1);

  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 80);
  }, [searchOpen]);

  // Live search
  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
    setResultIndex(-1);
    if (q.trim().length < 2) { setSearchResults([]); return; }
    const lower = q.toLowerCase();
    setSearchResults(
      SEARCH_INDEX.filter((i) => i.label.toLowerCase().includes(lower)).slice(0, 8)
    );
  }, []);

  // Keyboard navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }
    if (e.key === "ArrowDown") setResultIndex((i) => Math.min(i + 1, searchResults.length - 1));
    if (e.key === "ArrowUp") setResultIndex((i) => Math.max(i - 1, -1));
    if (e.key === "Enter" && resultIndex >= 0) {
      router.push(searchResults[resultIndex].href);
      setSearchOpen(false); setSearchQuery(""); setSearchResults([]);
    }
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────── */}
      <div className="text-white text-xs" style={{ backgroundColor: "#1a2b5f" }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: faFacebook, href: "https://facebook.com", label: "Facebook" },
              { icon: faTwitter, href: "https://twitter.com", label: "Twitter" },
              { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
              { icon: faLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label} className="hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>

          {/* Right: contact + Google Translate */}
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a href="tel:+919321198038" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-[10px]" />
              <span>+91 93211 98038</span>
            </a>
            <a href="mailto:tech@aexheatshrink.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-[10px]" />
              <span>tech@aexheatshrink.com</span>
            </a>
            {/* Google Translate */}
            <div className="flex items-center gap-1.5 text-white/80">
              <FontAwesomeIcon icon={faGlobe} className="text-yellow-400 text-[10px]" />
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>

      {/* ── Main header ─────────────────────────────── */}
      <header ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 bg-brand-primary ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
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
            <nav className="hidden xl:flex items-center gap-0.5">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}>
                    <Link href={item.href} className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 text-white hover:text-yellow-400">
                      {item.label}
                      <FontAwesomeIcon icon={faChevronDown} className="text-[10px] mt-0.5" />
                    </Link>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-2xl rounded-xl border border-gray-100 z-50 py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <div key={child.label} className="relative group/sub"
                            onMouseEnter={() => child.children ? setActiveSubDropdown(child.label) : undefined}
                            onMouseLeave={() => child.children ? setActiveSubDropdown(null) : undefined}>
                            {child.children ? (
                              <>
                                <Link href={child.href} onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); }} className="w-full flex items-center justify-between px-5 py-3 text-[14px] text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-150 whitespace-nowrap">
                                  {child.label}
                                  <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-4" />
                                </Link>
                                {activeSubDropdown === child.label && (
                                  <div className="absolute top-0 left-full min-w-[260px] bg-white shadow-2xl rounded-xl border border-gray-100 z-50 py-2 overflow-hidden">
                                    {child.children.map((sub) => (
                                      <Link key={sub.label} href={sub.href}
                                        className="block px-5 py-3 text-[14px] text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-150 whitespace-nowrap"
                                        onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}>
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link href={child.href}
                                className="block px-5 py-3 text-[14px] text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-150 whitespace-nowrap"
                                onClick={() => setActiveDropdown(null)}>
                                {child.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.label} href={item.href}
                    className="px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 text-white hover:text-yellow-400">
                    {item.label}
                  </Link>
                )
              )}

              {/* ── Desktop Inline Search ── */}
              <div className="hidden xl:block relative ml-2 group">
                <FontAwesomeIcon icon={faSearch}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none z-10 text-white/70" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  className="w-40 xl:w-56 pl-9 pr-4 py-2 rounded-full text-xs font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20"
                />
                
                {/* Desktop Results Dropdown */}
                {searchQuery.length >= 2 && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      searchResults.map((item, idx) => (
                        <Link key={idx} href={item.href}
                          onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                          className={`flex items-center justify-between px-4 py-3 text-sm border-b border-gray-50 last:border-0 transition-colors ${
                            idx === resultIndex ? "bg-brand-primary text-white" : "text-gray-700 hover:bg-red-50 hover:text-brand-primary"
                          }`}>
                          <span className="truncate">{item.label}</span>
                          {item.parent && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                              idx === resultIndex ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
                            }`}>
                              {item.parent}
                            </span>
                          )}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500 text-center">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Get Quote CTA */}
              <Link href="/enquiry"
                className="ml-2 bg-yellow-400 text-gray-900 text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0">
                Get Quote
              </Link>
            </nav>

            {/* ── Mobile right buttons ──────────────── */}
            <div className="flex items-center gap-2 xl:hidden">
              <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"
                className="p-2 rounded-md transition-colors text-white">
                <FontAwesomeIcon icon={searchOpen ? faTimes : faSearch} />
              </button>
              <button
                className="p-2 rounded-md transition-colors text-white"
                onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Search Panel ──────────────────────────── */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 bg-brand-primary ${searchOpen ? "max-h-[400px]" : "max-h-0"}`}>
          <div className="max-w-3xl mx-auto px-4 py-4">
            {/* Search input */}
            <div className="relative">
              <FontAwesomeIcon icon={faSearch}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
              <input ref={searchInputRef} type="text" value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search products, solutions, pages…"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              {searchQuery && (
                <button onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} className="text-xs" />
                </button>
              )}
            </div>

            {/* Results dropdown */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                {searchResults.map((item, idx) => (
                  <Link key={idx} href={item.href}
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); setSearchResults([]); }}
                    className={`flex items-center justify-between px-4 py-3 text-sm border-b border-gray-50 last:border-0 transition-colors ${
                      idx === resultIndex ? "bg-brand-primary text-white" : "text-gray-700 hover:bg-red-50 hover:text-brand-primary"}`}>
                    <span>{item.label}</span>
                    {item.parent && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${idx === resultIndex ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                        {item.parent}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}

            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="mt-2 bg-white rounded-xl px-4 py-3 text-sm text-gray-500 text-center shadow">
                No results found for &quot;<strong>{searchQuery}</strong>&quot;
              </div>
            )}

            {/* Quick links shown when search is empty */}
            {searchQuery.length < 2 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {["Heat Shrink Tubes", "Cable End Caps", "LV Breakouts", "Busbar Sleeves", "Enquiry", "Downloads"].map((q) => (
                  <button key={q} onClick={() => handleSearch(q)}
                    className="text-xs bg-white/90 text-gray-700 px-3 py-1.5 rounded-full hover:bg-white hover:text-brand-primary border border-gray-200 transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────── */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"}`}
          style={{ backgroundColor: "#111111" }}>
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    <Link href={item.href} onClick={() => setMobileOpen(false)} className="flex-1 py-2.5 px-3 text-left">
                      {item.label}
                    </Link>
                    <button
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
                                    className="block text-gray-400 text-xs py-1.5 px-3 rounded hover:text-yellow-400 hover:bg-white/5 transition-colors"
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
                className="block w-full text-center bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
                onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
