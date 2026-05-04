"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission to CRM/DB
    console.log("Form Submitted:", formData);

    setIsModalOpen(false);
    
    // Proceed with download
    if (cat.pdf === "/api/generate-pdf") {
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
    } else {
      // Normal static PDF download
      const a = document.createElement("a");
      a.href = cat.pdf;
      a.download = cat.title.replace(/\s+/g, "_") + ".pdf";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
          <button
            onClick={handleDownloadClick}
            disabled={isGenerating}
            className={`inline-flex items-center gap-1.5 bg-brand-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 ${isGenerating ? 'opacity-70 cursor-not-allowed pointer-events-none' : ''}`}
          >
            <FontAwesomeIcon icon={isGenerating ? faSpinner : faDownload} className={isGenerating ? 'animate-spin' : ''} />
            {isGenerating ? "Generating..." : "Download"}
          </button>
        </div>
      </div>

      {/* Lead Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Request Download</h3>
              <p className="text-sm text-gray-500 mb-6">
                Please provide your contact details to download the <strong>{cat.title}</strong> catalogue.
              </p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 mt-2"
                >
                  Submit & Download
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
