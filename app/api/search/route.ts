import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";
import { navigation } from "@/lib/data/navigation";

export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  category: "Product" | "Solution" | "Page";
  href: string;
  score: number;
}

// ── Fuzzy scoring ──────────────────────────────────────────────────────────────
// Returns a 0-100 relevance score for `text` against `query`.
function score(text: string, query: string): number {
  const t = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  // Exact match
  if (t === q) return 100;
  // Starts with
  if (t.startsWith(q)) return 90;
  // Word starts with
  if (t.split(/\s+/).some((w) => w.startsWith(q))) return 80;
  // Contains substring
  if (t.includes(q)) return 70;
  // All characters of query appear in order (subsequence)
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++;
  }
  if (qi === q.length) return 40 + Math.floor((qi / t.length) * 20);
  // Partial token overlap
  const tokens = q.split(/\s+/);
  const matchedTokens = tokens.filter((tok) => t.includes(tok));
  if (matchedTokens.length > 0) {
    return 30 + Math.floor((matchedTokens.length / tokens.length) * 20);
  }
  return 0;
}

function bestScore(fields: string[], query: string): number {
  return Math.max(...fields.map((f) => score(f, query)));
}

// ── Build index ────────────────────────────────────────────────────────────────
function buildResults(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const MIN_SCORE = 30;

  // 1. Products (category level)
  products.forEach((p) => {
    const fields = [
      p.title,
      p.shortTitle,
      p.description,
      ...p.features,
      ...p.applications,
    ];
    const s = bestScore(fields, query);
    if (s >= MIN_SCORE) {
      results.push({
        id: `product-${p.slug}`,
        title: p.title,
        subtitle: p.shortTitle,
        category: "Product",
        href: `/products/${p.slug}`,
        score: s,
      });
    }

    // 1b. Sub-products
    p.subProducts?.forEach((sub) => {
      const subFields = [sub.title, sub.description, ...sub.features, ...sub.applications];
      const ss = bestScore(subFields, query);
      if (ss >= MIN_SCORE) {
        results.push({
          id: `product-${p.slug}-${sub.slug}`,
          title: sub.title,
          subtitle: p.shortTitle,
          category: "Product",
          href: `/products/${p.slug}/${sub.slug}`,
          score: ss,
        });
      }
    });
  });

  // 2. Industries / Solutions
  industries.forEach((ind) => {
    const fields = [
      ind.title,
      ind.shortTitle,
      ind.description,
      ...ind.products,
    ];
    const s = bestScore(fields, query);
    if (s >= MIN_SCORE) {
      results.push({
        id: `industry-${ind.slug}`,
        title: ind.title,
        subtitle: ind.shortTitle,
        category: "Solution",
        href: `/industries/${ind.slug}`,
        score: s,
      });
    }
  });

  // 3. Navigation pages (top-level and children, deduplicated)
  const seen = new Set<string>();
  navigation.forEach((nav) => {
    const addIfNew = (label: string, href: string, parent?: string) => {
      if (seen.has(href)) return;
      const fields = [label, parent ?? ""].filter(Boolean);
      const s = bestScore(fields, query);
      if (s >= MIN_SCORE && href !== "#") {
        seen.add(href);
        results.push({
          id: `page-${href}`,
          title: label,
          subtitle: parent,
          category: "Page",
          href,
          score: s,
        });
      }
    };

    addIfNew(nav.label, nav.href);
    nav.children?.forEach((child) => {
      addIfNew(child.label, child.href, nav.label);
      child.children?.forEach((sub) => {
        addIfNew(sub.label, sub.href, child.label);
      });
    });
  });

  // Sort by score descending, return top 8
  return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

// ── Route handler ──────────────────────────────────────────────────────────────
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = buildResults(q);
  return NextResponse.json({ results });
}
