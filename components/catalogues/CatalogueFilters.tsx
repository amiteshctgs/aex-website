"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

interface CatalogueFiltersProps {
  categories: string[];
  subCategories: string[];
  currentCategory?: string;
  currentSubCategory?: string;
  currentSort?: string;
  searchQuery?: string;
  onCategoryChange: (category: string) => void;
  onSubCategoryChange: (subCategory: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
  totalResults: number;
}

export default function CatalogueFilters({
  categories,
  subCategories,
  currentCategory,
  currentSubCategory,
  currentSort = "latest",
  searchQuery = "",
  onCategoryChange,
  onSubCategoryChange,
  onSortChange,
  onSearchChange,
  onClearFilters,
  totalResults,
}: CatalogueFiltersProps) {
  const hasActiveFilters = currentCategory || currentSubCategory || searchQuery;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search catalogues, products, keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>

        {/* Filters Group */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Dropdown */}
          <div className="min-w-[160px]">
            <select
              value={currentCategory || ""}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sub-Category Dropdown */}
          <div className="min-w-[180px]">
            <select
              value={currentSubCategory || ""}
              onChange={(e) => onSubCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none appearance-none cursor-pointer"
            >
              <option value="">All Sub-Categories</option>
              {subCategories.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="min-w-[140px]">
            <select
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none appearance-none cursor-pointer"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Name (A-Z)</option>
              <option value="za">Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Meta & Active Filters Bar */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-medium">
          Showing <span className="text-gray-900 font-bold">{totalResults}</span> results
        </p>

        {hasActiveFilters && (
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-gray-400 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faFilter} className="w-3 h-3" /> Active Filters:
            </span>
            
            {currentCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold">
                {currentCategory}
                <button onClick={() => onCategoryChange("")} className="hover:text-brand-primary/70">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </span>
            )}
            
            {currentSubCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold">
                {currentSubCategory}
                <button onClick={() => onSubCategoryChange("")} className="hover:text-brand-primary/70">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </span>
            )}
            
            <button 
              onClick={onClearFilters}
              className="text-xs text-gray-500 hover:text-brand-primary font-medium underline underline-offset-2 transition-colors ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
