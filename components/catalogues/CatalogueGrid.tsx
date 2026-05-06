import React from "react";
import { Catalogue } from "@/types/pdf";
import CatalogueCard from "./CatalogueCard";
import CatalogueSkeleton from "./CatalogueSkeleton";
import EmptyState from "./EmptyState";

interface CatalogueGridProps {
  catalogues: Catalogue[];
  isLoading: boolean;
  onClearFilters?: () => void;
  skeletonCount?: number;
}

export default function CatalogueGrid({ 
  catalogues, 
  isLoading, 
  onClearFilters,
  skeletonCount = 8 
}: CatalogueGridProps) {
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <CatalogueSkeleton key={`skeleton-${i}`} />
        ))}
      </div>
    );
  }

  if (catalogues.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {catalogues.map((catalogue) => (
        <CatalogueCard key={catalogue.id} catalogue={catalogue} />
      ))}
    </div>
  );
}
