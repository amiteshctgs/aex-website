"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useCatalogueFilters } from "@/hooks/useCatalogueFilters";
import CatalogueFilters from "@/components/catalogues/CatalogueFilters";
import CatalogueGrid from "@/components/catalogues/CatalogueGrid";
import FeaturedBanner from "@/components/catalogues/FeaturedBanner";
import RecentlyAdded from "@/components/catalogues/RecentlyAdded";
import MostDownloaded from "@/components/catalogues/MostDownloaded";

// We need a wrapper component for the hook since it uses useSearchParams
function DownloadsContent() {
  const {
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
  } = useCatalogueFilters();

  // Extract special lists for the default view (when no filters are active)
  const isDefaultView = !filters.query && !filters.category && !filters.subCategory;

  const featuredCatalogue = isDefaultView ? catalogues.find(c => c.featured) : undefined;

  // For the default view, we show "Recently Added" and "Most Popular" sections
  // In a real app with more data, these would be separate API calls or specialized filters
  const recentCatalogues = isDefaultView ? catalogues.slice(0, 4) : [];
  // Simulating "Most Downloaded" by grabbing some random ones for demo purposes
  const popularCatalogues = isDefaultView && catalogues.length > 4 ? catalogues.slice(4, 8) : [];

  return (
    <>
      <CatalogueFilters
        categories={categories}
        subCategories={subCategories}
        currentCategory={filters.category}
        currentSubCategory={filters.subCategory}
        currentSort={filters.sort}
        searchQuery={filters.query}
        onCategoryChange={handleCategoryChange}
        onSubCategoryChange={handleSubCategoryChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        onClearFilters={handleClearFilters}
        totalResults={totalResults}
      />

      {isDefaultView && !isLoading ? (
        <>
          {featuredCatalogue && <FeaturedBanner catalogue={featuredCatalogue} />}
          {recentCatalogues.length > 0 && <RecentlyAdded catalogues={recentCatalogues} />}
          {popularCatalogues.length > 0 && <MostDownloaded catalogues={popularCatalogues} />}

          <div className="mt-16 pt-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Documents</h2>
            <CatalogueGrid
              catalogues={catalogues}
              isLoading={isLoading}
              onClearFilters={handleClearFilters}
            />
          </div>
        </>
      ) : (
        <CatalogueGrid
          catalogues={catalogues}
          isLoading={isLoading}
          onClearFilters={handleClearFilters}
        />
      )}
    </>
  );
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Downloads & <span className="text-brand-primary">Catalogues</span>
          </h1>
          <p className="text-lg text-gray-600">
            Access our comprehensive library of product catalogues, technical specifications, brochures, and company profiles.
          </p>
        </div>

        {/* Suspense boundary for useSearchParams */}
        <Suspense fallback={
          <div className="animate-pulse space-y-8">
            <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="h-[450px]  bg-white rounded-xl shadow-sm border border-gray-100"></div>
              ))}
            </div>
          </div>
        }>
          <DownloadsContent />
        </Suspense>

      </div>
    </div>
  );
}
