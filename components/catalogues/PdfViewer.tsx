"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

interface PdfViewerProps {
  url: string;
  title: string;
  height?: string;
}

export default function PdfViewer({ url, title, height = "800px" }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="w-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative"
      style={{ height }}
    >
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
          <FontAwesomeIcon icon={faSpinner} className="text-4xl text-brand-primary animate-spin mb-4" />
          <p className="text-gray-500 font-medium">Loading Document Viewer...</p>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl text-amber-500 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Preview Unavailable</h3>
          <p className="text-gray-500 max-w-sm text-center mb-6">
            The document viewer could not be loaded. You can still download the file directly.
          </p>
          <a
            href={url}
            download
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Download PDF
          </a>
        </div>
      )}

      {/* Embedded Viewer */}
      <iframe
        src={`${url}#toolbar=0`}
        title={`PDF Viewer - ${title}`}
        className="w-full h-full border-none"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
