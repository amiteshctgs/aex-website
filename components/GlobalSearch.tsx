"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faBox, faLightbulb, faFile, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { SearchResult } from "@/app/api/search/route";

// ── Category badge config ────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  Product: {
    icon: faBox,
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-500",
  },
  Solution: {
    icon: faLightbulb,
    bg: "bg-amber-50",
    text: "text-amber-600",
    dot: "bg-amber-500",
  },
  Page: {
    icon: faFile,
    bg: "bg-gray-50",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
} as const;

// ── Quick suggestions shown before typing ────────────────────────────────────
const QUICK_SUGGESTIONS = [
  "Heat Shrink Tubes",
  "Cable End Caps",
  "LV Breakouts",
  "Busbar Sleeves",
  "Wind Energy",
  "Enquiry",
];

interface GlobalSearchProps {
  /** desktop: renders as inline pill in the nav */
  variant: "desktop" | "mobile";
  /** mobile only: called when user selects a result (to close the panel) */
  onClose?: () => void;
  /** desktop only: ref of the search input for focus management */
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function GlobalSearch({
  variant,
  onClose,
  inputRef,
}: GlobalSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Fetch from API with 300 ms debounce ──────────────────────────────────
  const fetchResults = useCallback((q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (q.trim().length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
        const data: { results: SearchResult[] } = await res.json();
        setResults(data.results);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    setActiveIdx(-1);
    fetchResults(q);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setActiveIdx(-1);
    setLoading(false);
    if (debounceRef.current) clearTimeout(debounceRef.current);
  };

  const handleSelect = (href: string) => {
    router.push(href);
    clearSearch();
    onClose?.();
  };

  // ── Keyboard navigation ───────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      clearSearch();
      onClose?.();
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    }
    if (e.key === "Enter" && activeIdx >= 0 && results[activeIdx]) {
      e.preventDefault();
      handleSelect(results[activeIdx].href);
    }
    if (e.key === "Enter" && activeIdx === -1 && query.trim().length >= 2) {
      // Navigate to search with first result if any
      if (results.length > 0) handleSelect(results[0].href);
    }
  };

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResults([]);
        setActiveIdx(-1);
        if (variant === "desktop") setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [variant]);

  // ── Cleanup debounce on unmount ───────────────────────────────────────────
  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  const showDropdown = query.trim().length >= 2;

  // ══════════════════════════════════════════════════════════════════════════
  // DESKTOP variant — compact pill in the navbar
  // ══════════════════════════════════════════════════════════════════════════
  if (variant === "desktop") {
    return (
      <div ref={dropdownRef} className="relative">
        {/* Input */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-white/60 pointer-events-none z-10"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search products, solutions…"
            autoComplete="off"
            className="w-44 xl:w-60 pl-9 pr-8 py-2 rounded-full text-xs font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:w-64"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
            </button>
          )}
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60]">
            {loading ? (
              <SkeletonRows />
            ) : results.length > 0 ? (
              <>
                <div className="px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
                </div>
                {results.map((item, idx) => (
                  <ResultRow
                    key={item.id}
                    item={item}
                    active={idx === activeIdx}
                    onSelect={() => handleSelect(item.href)}
                    onHover={() => setActiveIdx(idx)}
                  />
                ))}
                <div className="px-4 py-2 border-t border-gray-50 flex justify-end">
                  <span className="text-[10px] text-gray-400">
                    ↑↓ navigate · Enter select · Esc close
                  </span>
                </div>
              </>
            ) : (
              <NoResults query={query} />
            )}
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // MOBILE variant — full-width panel inside the mobile header
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div ref={dropdownRef} className="max-w-2xl mx-auto px-4 py-4">
      {/* Input */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-sm pointer-events-none"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search products, solutions, pages…"
          autoComplete="off"
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-yellow-400 bg-brand-primary text-white text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xs" />
          </button>
        )}
      </div>

      {/* Results */}
      {showDropdown && (
        <div className=" max-w-2xl mx-auto absolute left-4 right-4 top-[calc(100%+4px)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] max-h-[60vh] overflow-y-auto">
          {loading ? (
            <SkeletonRows />
          ) : results.length > 0 ? (
            <>
              <div className="px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
              </div>
              {results.map((item, idx) => (
                <ResultRow
                  key={item.id}
                  item={item}
                  active={idx === activeIdx}
                  onSelect={() => handleSelect(item.href)}
                  onHover={() => setActiveIdx(idx)}
                />
              ))}
            </>
          ) : (
            <NoResults query={query} />
          )}
        </div>
      )}

      {/* Quick suggestions when empty */}
      {!showDropdown && (
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_SUGGESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => {
                setQuery(q);
                fetchResults(q);
              }}
              className="text-xs bg-white/90 text-gray-700 px-3 py-1.5 rounded-full hover:bg-white hover:text-red-700 border border-gray-200 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function ResultRow({
  item,
  active,
  onSelect,
  onHover,
}: {
  item: SearchResult;
  active: boolean;
  onSelect: () => void;
  onHover: () => void;
}) {
  const cfg = CATEGORY_CONFIG[item.category];
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onHover}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-gray-50 last:border-0 transition-colors group ${active ? "bg-red-700 text-white" : "text-gray-800 hover:bg-red-50"
        }`}
    >
      {/* Category dot */}
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? "bg-white/70" : cfg.dot
          }`}
      />

      {/* Text */}
      <span className="flex-1 min-w-0">
        <span
          className={`block text-sm font-medium truncate ${active ? "text-white" : "text-gray-800"
            }`}
        >
          {item.title}
        </span>
        {item.subtitle && item.subtitle !== item.title && (
          <span
            className={`text-[11px] truncate ${active ? "text-white/70" : "text-gray-400"
              }`}
          >
            {item.subtitle}
          </span>
        )}
      </span>

      {/* Category badge */}
      <span
        className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${active ? "bg-white/20 text-white" : `${cfg.bg} ${cfg.text}`
          }`}
      >
        {item.category}
      </span>

      {/* Arrow */}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`text-[10px] flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${active ? "text-white/70" : "text-gray-300"
          }`}
      />
    </button>
  );
}

function NoResults({ query }: { query: string }) {
  return (
    <div className="px-4 py-6 text-center">
      <div className="text-gray-300 text-2xl mb-2">🔍</div>
      <p className="text-sm text-gray-500">
        No results for <strong className="text-gray-700">&ldquo;{query}&rdquo;</strong>
      </p>
      <p className="text-xs text-gray-400 mt-1">Try different keywords or check spelling</p>
      <Link
        href="/enquiry"
        className="inline-flex items-center gap-1.5 mt-3 text-xs text-red-700 font-semibold hover:underline"
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
        Submit an enquiry instead
      </Link>
    </div>
  );
}

function SkeletonRows() {
  return (
    <div className="p-3 space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1 h-4 bg-gray-100 rounded" />
          <div className="w-14 h-4 bg-gray-100 rounded-full" />
        </div>
      ))}
    </div>
  );
}
