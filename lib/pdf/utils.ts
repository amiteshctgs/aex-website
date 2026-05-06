/**
 * AEX PDF Management — Pure Utility Functions
 * ============================================
 * All functions are pure (no side-effects) and fully testable.
 * Safe to call from both Server Components and Client Components.
 *
 * @version 1.0.0
 */

import type { Catalogue, CatalogueFilters, SortOption } from "@/types/pdf";

// ---------------------------------------------------------------------------
// File Size Formatting
// ---------------------------------------------------------------------------

/**
 * Formats raw byte count into human-readable file size string.
 * @example formatFileSize(1572864) → "1.5 MB"
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, i)).toFixed(1);
  return `${size} ${units[i]}`;
}

// ---------------------------------------------------------------------------
// Slug Generation
// ---------------------------------------------------------------------------

/**
 * Converts a title string into a clean URL slug.
 * @example generateSlug("Heat Shrink Tape & Sealants") → "heat-shrink-tape-sealants"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars (keep hyphens/spaces)
    .replace(/\s+/g, "-")          // spaces → hyphens
    .replace(/-+/g, "-")           // collapse multiple hyphens
    .replace(/^-|-$/g, "");        // trim leading/trailing hyphens
}

// ---------------------------------------------------------------------------
// URL Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the public URL path to a PDF file.
 */
export function buildFileUrl(fileName: string): string {
  return `/pdfs/${fileName}`;
}

/**
 * Returns the public URL path to a catalogue thumbnail image.
 * Falls back to a category icon if the thumbnail doesn't exist.
 */
export function buildThumbnailUrl(slug: string): string {
  return `/pdfs/thumbnails/${slug}.jpg`;
}

// ---------------------------------------------------------------------------
// Sorting
// ---------------------------------------------------------------------------

/**
 * Returns a sorted copy of the catalogue array.
 * Original array is not mutated.
 */
export function sortCatalogues(
  catalogues: Catalogue[],
  by: SortOption = "latest"
): Catalogue[] {
  const arr = [...catalogues];
  switch (by) {
    case "latest":
      return arr.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
    case "popular":
      return arr.sort((a, b) => b.downloadCount - a.downloadCount);
    case "alpha":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    case "size":
      // Sort by raw file size — parse from "X.X MB" strings
      return arr.sort((a, b) => parseSizeToMB(b.fileSize) - parseSizeToMB(a.fileSize));
    default:
      return arr;
  }
}

/** Parses "1.5 MB" / "800 KB" strings to a numeric MB value for sorting */
function parseSizeToMB(sizeStr: string): number {
  const [val, unit] = sizeStr.split(" ");
  const num = parseFloat(val);
  if (unit === "KB") return num / 1024;
  if (unit === "GB") return num * 1024;
  return num; // MB
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

/**
 * Fuzzy keyword search across title, description, tags, and category.
 * Returns items that match ALL words in the query.
 */
export function searchCatalogues(catalogues: Catalogue[], query: string): Catalogue[] {
  if (!query || query.trim() === "") return catalogues;

  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 1);

  if (words.length === 0) return catalogues;

  return catalogues.filter((cat) => {
    const searchSpace = [
      cat.title,
      cat.description,
      cat.category,
      cat.subCategory ?? "",
      ...(cat.tags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return words.every((word) => searchSpace.includes(word));
  });
}

// ---------------------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------------------

/**
 * Applies a CatalogueFilters object to an array of catalogues.
 * Returns a filtered copy; original array unchanged.
 */
export function filterCatalogues(
  catalogues: Catalogue[],
  filters: CatalogueFilters
): Catalogue[] {
  let result = catalogues.filter((cat) => cat.status === "published");

  if (filters.category && filters.category !== "All") {
    result = result.filter((cat) => cat.category === filters.category);
  }

  if (filters.subCategory) {
    result = result.filter((cat) => cat.subCategory === filters.subCategory);
  }

  if (filters.featured === true) {
    result = result.filter((cat) => cat.featured);
  }

  if (filters.language) {
    result = result.filter((cat) => cat.language === filters.language);
  }

  if (filters.query) {
    result = searchCatalogues(result, filters.query);
  }

  if (filters.tags && filters.tags.length > 0) {
    result = result.filter((cat) =>
      filters.tags!.some((tag) => cat.tags?.includes(tag))
    );
  }

  if (filters.sort) {
    result = sortCatalogues(result, filters.sort);
  }

  return result;
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

/**
 * Returns a paginated slice of an array.
 */
export function getPaginatedCatalogues(
  catalogues: Catalogue[],
  page: number = 1,
  pageSize: number = 12
) {
  const total = catalogues.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const items = catalogues.slice(start, start + pageSize);

  return { items, total, page, pageSize, totalPages };
}

// ---------------------------------------------------------------------------
// Derived Collections
// ---------------------------------------------------------------------------

/** Returns catalogues marked as featured */
export function getFeaturedCatalogues(catalogues: Catalogue[]): Catalogue[] {
  return catalogues.filter((c) => c.featured && c.status === "published");
}

/** Returns the N most recently published catalogues */
export function getRecentCatalogues(catalogues: Catalogue[], n: number = 5): Catalogue[] {
  return sortCatalogues(
    catalogues.filter((c) => c.status === "published"),
    "latest"
  ).slice(0, n);
}

/** Returns the N most downloaded catalogues */
export function getTopDownloaded(catalogues: Catalogue[], n: number = 5): Catalogue[] {
  return sortCatalogues(
    catalogues.filter((c) => c.status === "published"),
    "popular"
  ).slice(0, n);
}

/** Returns related catalogues by ID list, falling back to same-category */
export function getRelatedCatalogues(
  all: Catalogue[],
  current: Catalogue,
  limit: number = 3
): Catalogue[] {
  const published = all.filter((c) => c.status === "published" && c.id !== current.id);

  // First: use explicit relatedIds
  if (current.relatedIds && current.relatedIds.length > 0) {
    const related = current.relatedIds
      .map((id) => published.find((c) => c.id === id))
      .filter(Boolean) as Catalogue[];
    if (related.length >= limit) return related.slice(0, limit);
  }

  // Fallback: same category, sorted by popularity
  return sortCatalogues(
    published.filter((c) => c.category === current.category),
    "popular"
  ).slice(0, limit);
}

// ---------------------------------------------------------------------------
// Date Formatting
// ---------------------------------------------------------------------------

/**
 * Formats an ISO date string to "Month YYYY".
 * @example formatPublishDate("2024-01-15") → "Jan 2024"
 */
export function formatPublishDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
