/**
 * AEX PDF Management — Download Tracking
 * ========================================
 * Client-safe tracking utilities. Calls the /api/catalogues/track endpoint.
 * Stores counts in localStorage for offline/instant display.
 *
 * To upgrade to a real database later:
 * 1. Add a `downloads` table in prisma/schema.prisma
 * 2. Replace the console.log in app/api/catalogues/track/route.ts with a DB write
 * No changes needed in this file.
 *
 * @version 1.0.0
 */

import type { DownloadCountCache } from "@/types/pdf";

const STORAGE_KEY = "aex_catalogue_downloads";

// ---------------------------------------------------------------------------
// localStorage helpers (client-only)
// ---------------------------------------------------------------------------

function getCache(): DownloadCountCache {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DownloadCountCache) : {};
  } catch {
    return {};
  }
}

function setCache(cache: DownloadCountCache): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage quota exceeded or unavailable — silent fail
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Increments the download count for a catalogue.
 * - Updates localStorage immediately (optimistic)
 * - POSTs to /api/catalogues/track in the background
 * - Debounced per-slug per-session (one count per page load)
 */
const trackedThisSession = new Set<string>();

export async function incrementDownloadCount(slug: string): Promise<void> {
  // Debounce: track each slug only once per browser session
  if (trackedThisSession.has(slug)) return;
  trackedThisSession.add(slug);

  // Optimistic localStorage update
  const cache = getCache();
  const existing = cache[slug] ?? { count: 0, lastDownloaded: "" };
  cache[slug] = {
    count: existing.count + 1,
    lastDownloaded: new Date().toISOString(),
  };
  setCache(cache);

  // Background API call (non-blocking)
  try {
    await fetch("/api/catalogues/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, timestamp: new Date().toISOString() }),
      // Fire and forget — don't await result
      keepalive: true,
    });
  } catch {
    // Network error — silently ignore, localStorage still updated
  }
}

/**
 * Returns the locally cached download count for a slug.
 * Used for instant display without waiting for API.
 */
export function getLocalDownloadCount(slug: string): number {
  const cache = getCache();
  return cache[slug]?.count ?? 0;
}

/**
 * Returns the ISO timestamp of last local download for a slug.
 */
export function getLocalLastDownloaded(slug: string): string | null {
  const cache = getCache();
  return cache[slug]?.lastDownloaded ?? null;
}

/**
 * Returns the full local cache (for "Most Downloaded" section).
 */
export function getFullLocalCache(): DownloadCountCache {
  return getCache();
}
