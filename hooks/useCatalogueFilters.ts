"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Catalogue, CatalogueFilters } from "@/types/pdf";

interface UseCatalogueFiltersReturn {
  catalogues: Catalogue[];
  isLoading: boolean;
  totalResults: number;
  categories: string[];
  subCategories: string[];
  filters: CatalogueFilters;
  handleCategoryChange: (category: string) => void;
  handleSubCategoryChange: (subCategory: string) => void;
  handleSortChange: (sort: string) => void;
  handleSearchChange: (query: string) => void;
  handleClearFilters: () => void;
}

export function useCatalogueFilters(initialFilters?: CatalogueFilters): UseCatalogueFiltersReturn {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  const [catalogues, setCatalogues] = useState<Catalogue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);

  // Current filter state (syncs with URL)
  const [filters, setFilters] = useState<CatalogueFilters>({
    query: searchParams.get("q") || initialFilters?.query || "",
    category: searchParams.get("category") || initialFilters?.category || "",
    subCategory: searchParams.get("subCategory") || initialFilters?.subCategory || "",
    sort: (searchParams.get("sort") as any) || initialFilters?.sort || "latest",
  });

  // Debounce search to avoid rapid API calls
  const [debouncedQuery, setDebouncedQuery] = useState(filters.query);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedQuery !== filters.query) {
        setDebouncedQuery(filters.query);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [filters.query, debouncedQuery]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.query) params.set("q", filters.query);
    if (filters.category) params.set("category", filters.category);
    if (filters.subCategory) params.set("subCategory", filters.subCategory);
    if (filters.sort && filters.sort !== "latest") params.set("sort", filters.sort);

    const newUrl = `/downloads${params.toString() ? `?${params.toString()}` : ""}`;
    
    // Only update if URL actually changed to prevent infinite loops
    const currentUrl = `/downloads${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    if (newUrl !== currentUrl) {
      router.push(newUrl, { scroll: false });
    }
  }, [filters, router, searchParams]);

  // Fetch data
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (debouncedQuery) params.set("query", debouncedQuery);
      if (filters.category) params.set("category", filters.category);
      if (filters.subCategory) params.set("subCategory", filters.subCategory);
      if (filters.sort) params.set("sort", filters.sort);

      const response = await fetch(`/api/catalogues?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      
      setCatalogues(data.data);
      setTotalResults(data.total);
      setCategories(data.categories);
      
      // Only update subcategories if we don't have an active one, 
      // or if category changed, to prevent dropdown from changing options unexpectedly
      setSubCategories(data.subCategories);

    } catch (error) {
      console.error("Error fetching catalogues:", error);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedQuery, filters.category, filters.subCategory, filters.sort]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handlers
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category, subCategory: "" })); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (subCategory: string) => {
    setFilters(prev => ({ ...prev, subCategory }));
  };

  const handleSortChange = (sort: string) => {
    setFilters(prev => ({ ...prev, sort: sort as any }));
  };

  const handleSearchChange = (query: string) => {
    setFilters(prev => ({ ...prev, query }));
  };

  const handleClearFilters = () => {
    setFilters({
      query: "",
      category: "",
      subCategory: "",
      sort: "latest"
    });
  };

  return {
    catalogues,
    isLoading,
    totalResults,
    categories,
    subCategories,
    filters,
    handleCategoryChange,
    handleSubCategoryChange,
    handleSortChange,
    handleSearchChange,
    handleClearFilters
  };
}
