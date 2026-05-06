"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Catalogue } from "@/types/pdf";
import { useDownloadTracking } from "@/hooks/useDownloadTracking";
import { hasRecentLeadCapture } from "@/lib/pdf/leadCapture";
import DownloadLeadModal from "./DownloadLeadModal";

interface ClientDownloadButtonProps {
  catalogue: Catalogue;
}

export default function ClientDownloadButton({ catalogue }: ClientDownloadButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trackDownload } = useDownloadTracking();

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasRecentLeadCapture()) {
      setIsModalOpen(true);
    } else {
      trackDownload(catalogue.id, "detail_download");
      
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
    
    const link = document.createElement('a');
    link.href = catalogue.fileUrl;
    link.download = catalogue.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        onClick={handleDownloadClick}
        className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(204,0,0,0.2)] flex items-center justify-center gap-3 text-lg"
      >
        <FontAwesomeIcon icon={faDownload} />
        Download PDF
      </button>

      <DownloadLeadModal 
        catalogue={catalogue}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleLeadSuccess}
      />
    </>
  );
}
