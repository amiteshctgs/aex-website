import React from "react";

export default function CatalogueSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="aspect-[3/4] w-full bg-gray-200 relative">
        <div className="absolute top-4 left-4 w-20 h-6 bg-gray-300 rounded-full"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title Skeleton */}
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>

        {/* Info row Skeleton */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
