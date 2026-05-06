"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faFileDownload, faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Catalogue } from "@/types/pdf";
import { saveLeadCaptureTimestamp } from "@/lib/pdf/leadCapture";

interface DownloadLeadModalProps {
  catalogue: Catalogue;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (leadData: any) => void;
}

export default function DownloadLeadModal({ 
  catalogue, 
  isOpen, 
  onClose,
  onSuccess
}: DownloadLeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call for lead capture
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setIsSuccess(true);
      
      // Pass data back up to trigger the actual download
      setTimeout(() => {
        saveLeadCaptureTimestamp();
        onSuccess(formData);
        setIsSuccess(false);
        setFormData({ name: "", email: "", company: "", phone: "" });
      }, 1500);

    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-brand-primary p-6 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
            aria-label="Close modal"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
          
          <h3 className="text-2xl font-bold mb-2">Download Document</h3>
          <p className="text-white/90 text-sm">
            Please provide your details to download the <span className="font-semibold">{catalogue.title}</span>.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 flex flex-col items-center justify-center text-center animate-fade-in">
              <FontAwesomeIcon icon={faCheckCircle} className="text-5xl text-green-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-500">Your download will begin shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors outline-none"
                  placeholder="Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <FontAwesomeIcon icon={faFileDownload} />
                )}
                {isSubmitting ? "Processing..." : "Download PDF"}
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
