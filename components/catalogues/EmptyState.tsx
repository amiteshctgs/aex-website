import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSearch } from "@fortawesome/free-solid-svg-icons";

interface EmptyStateProps {
  onClearFilters?: () => void;
}

export default function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-2xl" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">No catalogues found</h3>
      <p className="text-gray-500 max-w-md mb-6">
        We couldn&apos;t find any documents matching your current filters and search criteria.
      </p>
      
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="px-6 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
