"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, faEnvelope, faPhone, faBuilding,
  faIndustry, faCommentAlt, faPaperPlane, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "@/lib/data/products";

interface EnquiryFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  requirement: string;
}

const initialState: EnquiryFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  requirement: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState<EnquiryFormState>(initialState);
  const [errors, setErrors] = useState<Partial<EnquiryFormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return "";
      case "phone":
        if (!value.trim()) return "Phone is required";
        return "";
      case "requirement":
        if (!value.trim()) return "Requirement is required";
        if (value.trim().length < 10) return "Requirement must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof EnquiryFormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setGlobalError(null);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors: Partial<EnquiryFormState> = {};
    let isValid = true;

    Object.keys(initialState).forEach((key) => {
      const fieldName = key as keyof EnquiryFormState;
      const errorMsg = validateField(fieldName, form[fieldName]);
      if (errorMsg) {
        newErrors[fieldName] = errorMsg;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setGlobalError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry.");
      }
      setSuccess(true);
      setForm(initialState);
      setErrors({});
    } catch (err) {
      setGlobalError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />
        </div>
        <h3 className="text-2xl font-bold text-brand-primary mb-2">Enquiry Submitted!</h3>
        <p className="text-gray-500 mb-6">Our team will review your requirement and contact you shortly.</p>
        <button onClick={() => setSuccess(false)} className="btn-primary">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enq-name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.name ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="enq-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input pl-10 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enq-company" className="form-label">Company Name</label>
          <div className="relative">
            <FontAwesomeIcon icon={faBuilding} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              id="enq-company"
              name="company"
              type="text"
              placeholder="Your company"
              value={form.company}
              onChange={handleChange}
              className="form-input pl-10"
            />
          </div>
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enq-email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="enq-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input pl-10 ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="enq-phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faPhone} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="enq-phone"
              name="phone"
              type="tel"
              placeholder="+91 99999 99999"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input pl-10 ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Product + Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enq-product" className="form-label">Product / Category</label>
          <div className="relative">
            <FontAwesomeIcon icon={faIndustry} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <select
              id="enq-product"
              name="product"
              value={form.product}
              onChange={handleChange}
              className="form-input pl-10 appearance-none"
            >
              <option value="">Select a product</option>
              {products.map((p) => (
                <option key={p.slug} value={p.title}>{p.title}</option>
              ))}
              <option value="Other">Other / Custom Requirement</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="enq-quantity" className="form-label">Estimated Quantity</label>
          <input
            id="enq-quantity"
            name="quantity"
            type="text"
            placeholder="e.g., 500 pcs, 100 meters"
            value={form.quantity}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Requirement */}
      <div>
        <label htmlFor="enq-requirement" className="form-label">
          Your Requirement <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faCommentAlt} className={`absolute left-4 top-4 text-sm ${errors.requirement ? 'text-red-400' : 'text-gray-400'}`} />
          <textarea
            id="enq-requirement"
            name="requirement"
            rows={6}
            placeholder="Describe your requirement in detail — voltage rating, cable size, application, etc."
            value={form.requirement}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input pl-10 resize-none ${errors.requirement ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
          />
        </div>
        {errors.requirement && <p className="mt-1.5 text-xs text-red-500">{errors.requirement}</p>}
      </div>

      {/* Global Error */}
      {globalError && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {globalError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        id="enquiry-submit-btn"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPaperPlane} />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
