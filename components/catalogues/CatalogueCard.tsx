"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { Catalogue } from "@/types/pdf";
import { useDownloadTracking } from "@/hooks/useDownloadTracking";
import DownloadLeadModal from "./DownloadLeadModal";
import { hasRecentLeadCapture } from "@/lib/pdf/leadCapture";

interface CatalogueCardProps {
  catalogue: Catalogue;
}

export default function CatalogueCard({ catalogue }: CatalogueCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackDownload } = useDownloadTracking();

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasRecentLeadCapture()) {
      setIsModalOpen(true);
    } else {
      trackDownload(catalogue.id, "card_download");
      
      // Trigger actual download programmatically
      const link = document.createElement('a');
      link.href = catalogue.fileUrl;
      link.download = catalogue.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleLeadSuccess = (leadData: any) => {
    trackDownload(catalogue.id, "lead_capture", leadData);
    setIsModalOpen(false);
    
    // Trigger actual download programmatically
    const link = document.createElement('a');
    link.href = catalogue.fileUrl;
    link.download = catalogue.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col h-full">
        {/* Thumbnail Section */}
        <Link 
          href={`/downloads/${catalogue.slug}`}
          className="relative aspect-[3/4] w-full bg-gray-50 block overflow-hidden"
        >
          {catalogue.thumbnailUrl ? (
            <Image
              src={catalogue.thumbnailUrl}
              alt={catalogue.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6 text-center transition-transform duration-500 group-hover:scale-105 border-b-4 border-brand-primary/20">
              <div className="w-16 h-20 bg-white rounded shadow-md flex flex-col items-center justify-center mb-4 border border-gray-100 relative overflow-hidden transform group-hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-primary"></div>
                <FontAwesomeIcon icon={faFilePdf} className="text-3xl text-brand-primary/80 mt-1" />
              </div>
              <h4 className="text-gray-800 font-bold text-sm leading-snug line-clamp-3 drop-shadow-sm">
                {catalogue.title}
              </h4>
              <span className="mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                AEX Document
              </span>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {catalogue.subCategory}
            </span>
            {catalogue.requiresLead && (
              <span className="bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md inline-flex items-center gap-1 w-fit">
                <FontAwesomeIcon icon={faLock} className="w-2 h-2" /> Premium
              </span>
            )}
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <Link href={`/downloads/${catalogue.slug}`}>
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
              {catalogue.title}
            </h3>
          </Link>
          
          {catalogue.description && (
            <p className="text-sm text-gray-500 line-clamp-2 mb-4">
              {catalogue.description}
            </p>
          )}

          {/* Info row */}
          <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-6 mt-auto">
            {catalogue.pages && (
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faFilePdf} className="w-3 h-3" />
                {catalogue.pages} Pages
              </span>
            )}
            {catalogue.fileSize && (
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                {catalogue.fileSize}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-gray-100 flex gap-2">
            <Link 
              href={`/downloads/${catalogue.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2.5 px-2 rounded-lg transition-colors text-[13px] whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" /> View
            </Link>
            
            <button
              onClick={handleDownloadClick}
              className="flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-2.5 px-2 rounded-lg transition-colors text-[13px] flex-1 whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" /> Download
            </button>
          </div>
        </div>
      </div>

      <DownloadLeadModal 
        catalogue={catalogue}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleLeadSuccess}
      />
    </>
  );
}
