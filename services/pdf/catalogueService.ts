import { catalogues } from "@/lib/data/catalogues";
import { Catalogue, CatalogueFilters } from "@/types/pdf";
import { filterCatalogues, sortCatalogues } from "@/lib/pdf/utils";

/**
 * Service for fetching and managing catalogue data.
 * In the future, this can be swapped out to fetch from an API or database
 * without changing the rest of the application.
 */
export const catalogueService = {
  /**
   * Get all published catalogues
   */
  async getAllCatalogues(): Promise<Catalogue[]> {
    return catalogues.filter((c) => c.status === "published");
  },

  /**
   * Get a single catalogue by its slug
   */
  async getCatalogueBySlug(slug: string): Promise<Catalogue | null> {
    const catalogue = catalogues.find((c) => c.slug === slug);
    if (!catalogue || catalogue.status !== "published") {
      return null;
    }
    return catalogue;
  },

  /**
   * Get catalogues filtered and sorted based on criteria
   */
  async getFilteredCatalogues(filters: CatalogueFilters): Promise<{
    data: Catalogue[];
    total: number;
    categories: string[];
    subCategories: string[];
  }> {
    const all = await this.getAllCatalogues();
    
    // Extract available categories for filters
    const categories = Array.from(new Set(all.map((c) => c.category))).filter(Boolean);
    const subCategories = Array.from(
      new Set(all.map((c) => c.subCategory))
    ).filter(Boolean) as string[];

    // Apply filters and sorting
    const filtered = filterCatalogues(all, filters);
    const sorted = sortCatalogues(filtered, filters.sort || "latest");

    return {
      data: sorted,
      total: sorted.length,
      categories,
      subCategories,
    };
  },

  /**
   * Get featured catalogues for highlights
   */
  async getFeaturedCatalogues(limit: number = 3): Promise<Catalogue[]> {
    const all = await this.getAllCatalogues();
    return all.filter((c) => c.featured).slice(0, limit);
  },

  /**
   * Get related catalogues based on category or tags
   */
  async getRelatedCatalogues(currentSlug: string, limit: number = 4): Promise<Catalogue[]> {
    const current = await this.getCatalogueBySlug(currentSlug);
    if (!current) return [];

    const all = await this.getAllCatalogues();
    
    // Simple relevance: same category or overlapping tags
    const related = all.filter((c) => {
      if (c.slug === currentSlug) return false;
      
      const sameCategory = c.category === current.category;
      const sharedTags = current.tags?.some(tag => c.tags?.includes(tag));
      
      return sameCategory || sharedTags;
    });

    return related.slice(0, limit);
  },
  
  /**
   * Get most recently added catalogues
   */
  async getRecentCatalogues(limit: number = 4): Promise<Catalogue[]> {
    const all = await this.getAllCatalogues();
    return sortCatalogues(all, "latest").slice(0, limit);
  }
};
