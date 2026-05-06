import React from "react";
import { Catalogue } from "@/types/pdf";
import CatalogueCard from "./CatalogueCard";

interface RelatedCataloguesProps {
  catalogues: Catalogue[];
}

export default function RelatedCatalogues({ catalogues }: RelatedCataloguesProps) {
  if (!catalogues || catalogues.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Related Documents</h2>
        <p className="text-gray-500 mt-1">You might also be interested in these catalogues</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {catalogues.map((catalogue) => (
          <CatalogueCard key={catalogue.id} catalogue={catalogue} />
        ))}
      </div>
    </section>
  );
}
