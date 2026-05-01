"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface DownloadCardProps {
  cat: {
    id: string;
    title: string;
    description: string;
    pages: string;
    size: string;
    pdf: string;
    category: string;
  };
}

export default function DownloadCard({ cat }: DownloadCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's the dynamic API route, intercept the click and handle loading state
    if (cat.pdf === "/api/generate-pdf") {
      e.preventDefault();
      try {
        setIsGenerating(true);
        const response = await fetch("/api/generate-pdf");
        
        if (!response.ok) {
          throw new Error("Failed to generate PDF from server");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = cat.title.replace(/\s+/g, "_") + ".pdf";
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error("Error downloading PDF:", error);
        alert("Failed to generate PDF. Please try again later.");
      } finally {
        setIsGenerating(false);
      }
    }
    // For normal static PDFs, let the default <a> tag behavior happen
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top red accent */}
      <div className="h-1 bg-brand-primary group-hover:bg-brand-accent transition-colors duration-300" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-red-50 group-hover:bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <FontAwesomeIcon
              icon={isGenerating ? faSpinner : faFilePdf}
              className={`text-brand-primary group-hover:text-white text-xl transition-colors duration-300 ${isGenerating ? 'animate-spin' : ''}`}
            />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
              {cat.category}
            </span>
            <h3 className="font-bold text-gray-900 text-sm leading-snug mt-0.5">
              {cat.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-5 text-justify">
          {cat.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {cat.pages} &bull; {cat.size}
          </span>
          <a
            href={cat.pdf}
            onClick={handleDownload}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 bg-brand-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 ${isGenerating ? 'opacity-70 cursor-not-allowed pointer-events-none' : ''}`}
          >
            <FontAwesomeIcon icon={isGenerating ? faSpinner : faDownload} className={isGenerating ? 'animate-spin' : ''} />
            {isGenerating ? "Generating..." : "Download"}
          </a>
        </div>
      </div>
    </div>
  );
}
