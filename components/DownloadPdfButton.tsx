"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function DownloadPdfButton({ 
  label = "Download Company Profile (PDF)", 
  className = "btn-primary",
  fileName = "AEX_Company_Profile.pdf"
}: { 
  label?: string;
  className?: string;
  fileName?: string;
}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      // Call the Puppeteer API
      const response = await fetch("/api/generate-pdf");
      
      if (!response.ok) {
        throw new Error("Failed to generate PDF from server");
      }

      // Convert the response to a Blob
      const blob = await response.blob();
      
      // Create a temporary link to download the Blob
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to generate PDF. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`${className} flex items-center justify-center gap-2 ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      <FontAwesomeIcon icon={isGenerating ? faSpinner : faFilePdf} className={isGenerating ? 'animate-spin' : ''} />
      {isGenerating ? "Generating PDF..." : label}
    </button>
  );
}
