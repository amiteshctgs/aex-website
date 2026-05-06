/**
 * AEX PDF/Catalogue Management System — Type Definitions
 * ========================================================
 * Central TypeScript interfaces for all PDF/catalogue data.
 * Adding a new catalogue: add an entry to lib/data/catalogues.ts — no type changes needed.
 *
 * @version 1.0.0
 * @updated 2026-05-06
 */

// ---------------------------------------------------------------------------
// Core Catalogue Type
// ---------------------------------------------------------------------------

export type CatalogueStatus = "published" | "draft" | "archived";
export type CatalogueCategory = "Products" | "Corporate" | "Certificates" | "Technical";
export type CatalogueSubCategory =
  | "Moulded Components"
  | "Heat Shrink Tubing"
  | "Busbar & Switchgear"
  | "Cable Accessories"
  | "Asset & Wildlife Protection"
  | "Pipe Management"
  | "Pole Protection"
  | "Tapes & Sealants"
  | "Company Profile"
  | "ISO Certificates"
  | "Other";

export type SortOption = "latest" | "popular" | "alpha" | "size";

export interface Catalogue {
  /** Unique machine-readable identifier (also used as slug) */
  id: string;

  /** URL-friendly slug — used for /downloads/[slug] pages */
  slug: string;

  /** Display title */
  title: string;

  /** Top-level category (used for tabs/pills) */
  category: CatalogueCategory;

  /** Optional sub-category for finer filtering */
  subCategory?: CatalogueSubCategory;

  /** Short description shown on the card (~150 chars) */
  description: string;

  /** Actual PDF filename as stored in /public/pdfs/ */
  fileName: string;

  /** Public URL path to the PDF (e.g., "/pdfs/My_File.pdf") */
  fileUrl: string;

  /** Optional thumbnail image URL (/pdfs/thumbnails/<slug>.jpg) */
  thumbnailUrl?: string;

  /** Estimated page count */
  pages: number;

  /** Human-readable file size (e.g., "1.5 MB") */
  fileSize: string;

  /** ISO date string of when the PDF was published/added */
  publishDate: string;

  /** Whether this catalogue is pinned to the "Featured" section */
  featured: boolean;

  /** Whether downloading this PDF requires lead-capture form */
  requiresLead: boolean;

  /** Searchable tags */
  tags: string[];

  /** Publication status */
  status: CatalogueStatus;

  /** Language code (default: "en") */
  language: string;

  /** SEO override title (falls back to title) */
  seoTitle?: string;

  /** SEO override description (falls back to description) */
  seoDescription?: string;

  /** Download count — tracked client-side, stored in localStorage + API */
  downloadCount: number;

  /** ISO timestamp of last download */
  lastDownloaded?: string;

  /** IDs of related catalogues (shown in "Related" section on detail page) */
  relatedIds?: string[];
}

// ---------------------------------------------------------------------------
// Filter & Search
// ---------------------------------------------------------------------------

export interface CatalogueFilters {
  category?: CatalogueCategory | "All";
  subCategory?: CatalogueSubCategory;
  query?: string;
  sort?: SortOption;
  featured?: boolean;
  language?: string;
  status?: CatalogueStatus;
}

export interface CataloguePaginationResult {
  items: Catalogue[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ---------------------------------------------------------------------------
// Download Lead Capture
// ---------------------------------------------------------------------------

export interface DownloadLeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

// ---------------------------------------------------------------------------
// Download Tracking
// ---------------------------------------------------------------------------

export interface DownloadTrackPayload {
  slug: string;
  timestamp: string;
}

export interface DownloadCountCache {
  [slug: string]: {
    count: number;
    lastDownloaded: string;
  };
}

// ---------------------------------------------------------------------------
// Admin Helper — code generation
// ---------------------------------------------------------------------------

export interface AdminCatalogueFormData {
  title: string;
  category: CatalogueCategory;
  subCategory?: CatalogueSubCategory;
  description: string;
  fileName: string;
  pages: number;
  fileSize: string;
  publishDate: string;
  featured: boolean;
  requiresLead: boolean;
  tags: string;
  language: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedIds?: string;
}
