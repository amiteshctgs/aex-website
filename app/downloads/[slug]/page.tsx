import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { catalogueService } from "@/services/pdf/catalogueService";
import { generateCatalogueMetadata } from "@/lib/pdf/metadata";
import Breadcrumbs from "@/components/catalogues/Breadcrumbs";
import PdfViewer from "@/components/catalogues/PdfViewer";
import RelatedCatalogues from "@/components/catalogues/RelatedCatalogues";
import ClientDownloadButton from "@/components/catalogues/ClientDownloadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf, faCalendarAlt, faTag, faLock } from "@fortawesome/free-solid-svg-icons";

// Define the type for the generic params that Next.js will pass
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const catalogue = await catalogueService.getCatalogueBySlug(slug);

  if (!catalogue) {
    return {
      title: "Document Not Found | AEX",
    };
  }

  return generateCatalogueMetadata(catalogue);
}

// Generate static params for build time optimization (optional but recommended)
export async function generateStaticParams() {
  const catalogues = await catalogueService.getAllCatalogues();
  return catalogues.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CatalogueDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const catalogue = await catalogueService.getCatalogueBySlug(slug);

  if (!catalogue) {
    notFound();
  }

  const relatedCatalogues = await catalogueService.getRelatedCatalogues(slug);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs 
          items={[
            { label: "Downloads & Catalogues", href: "/downloads" },
            { label: catalogue.category, href: `/downloads?category=${encodeURIComponent(catalogue.category)}` },
            { label: catalogue.title }
          ]} 
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          {/* Header Area */}
          <div className="p-8 md:p-10 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {catalogue.category}
                </span>
                {catalogue.subCategory && (
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {catalogue.subCategory}
                  </span>
                )}
                {catalogue.featured && (
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {catalogue.title}
              </h1>
              
              {catalogue.description && (
                <p className="text-lg text-gray-600 mb-6 max-w-3xl">
                  {catalogue.description}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                {catalogue.pages && (
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFilePdf} className="text-gray-400" />
                    {catalogue.pages} Pages
                  </div>
                )}
                {catalogue.fileSize && (
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} className="text-gray-400" />
                    {catalogue.fileSize}
                  </div>
                )}
                {catalogue.publishDate && (
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400" />
                    {new Date(catalogue.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </div>
                )}
              </div>

              {/* Tags */}
              {catalogue.tags && catalogue.tags.length > 0 && (
                <div className="mt-6 flex items-center gap-2 flex-wrap">
                  <FontAwesomeIcon icon={faTag} className="text-gray-300 mr-1" />
                  {catalogue.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Area */}
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
              <ClientDownloadButton catalogue={catalogue} />
              <p className="text-xs text-center text-gray-400 font-medium">
                Format: PDF • Secure Download
              </p>
            </div>
          </div>

          {/* PDF Viewer Area */}
          <div className="p-4 md:p-8 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Document Preview</h2>
            <PdfViewer url={catalogue.fileUrl} title={catalogue.title} />
          </div>
        </div>

        {/* Related Documents */}
        <RelatedCatalogues catalogues={relatedCatalogues} />

      </div>
    </div>
  );
}
