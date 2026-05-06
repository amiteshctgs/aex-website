import React from "react";
import { Catalogue } from "@/types/pdf";
import CatalogueCard from "./CatalogueCard";

interface RecentlyAddedProps {
  catalogues: Catalogue[];
}

export default function RecentlyAdded({ catalogues }: RecentlyAddedProps) {
  if (!catalogues || catalogues.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
          <p className="text-gray-500 mt-1">The latest documents uploaded to our library</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {catalogues.map((catalogue) => (
          <CatalogueCard key={catalogue.id} catalogue={catalogue} />
        ))}
      </div>
    </section>
  );
}
