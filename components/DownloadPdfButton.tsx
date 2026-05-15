"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { hasRecentLeadCapture, saveLeadCaptureTimestamp } from "@/lib/pdf/leadCapture";

interface DownloadPdfButtonProps {
  label?: string;
  className?: string;
  fileName?: string;
  pdfUrl?: string; // Optional static PDF URL
  forceModal?: boolean; // Always ask for user info before downloading
}

export default function DownloadPdfButton({
  label = "Download Company Profile (PDF)",
  className = "btn-primary",
  fileName = "AEX_Company_Profile.pdf",
  pdfUrl,
  forceModal = false
}: DownloadPdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleDownloadClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (forceModal || !hasRecentLeadCapture()) {
      setIsModalOpen(true);
    } else {
      await processDownload();
    }
  };

  const processDownload = async () => {
    try {
      setIsGenerating(true);

      if (pdfUrl) {
        // Normal static PDF download
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = fileName || "AEX_Catalogue.pdf";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
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
        a.download = fileName || "AEX_Company_Profile.pdf";
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to generate PDF. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission to CRM/DB
    console.log("Form Submitted:", formData);

    setIsModalOpen(false);
    saveLeadCaptureTimestamp();

    await processDownload();
  };

  return (
    <>
      <button
        onClick={handleDownloadClick}
        disabled={isGenerating}
        className={`${className} flex items-center justify-center gap-2 ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        <FontAwesomeIcon icon={isGenerating ? faSpinner : faFilePdf} className={isGenerating ? 'animate-spin' : ''} />
        {isGenerating ? "Generating PDF..." : label}
      </button>

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
            <div className="p-6 sm:p-5 lg:p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-2">Request Download</h3>
              <p className="text-sm text-gray-500 mb-6">
                Please provide your contact details to download the <strong>{fileName.replace(".pdf", "").replace(/_/g, " ")}</strong>.
              </p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors text-black"
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
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors text-black"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors text-black"
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
    </>
  );
}
