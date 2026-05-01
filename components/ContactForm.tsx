"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faTag, faCommentAlt, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
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
      case "subject":
        if (!value.trim()) return "Subject is required";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear the specific error when the user starts typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setGlobalError(null);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    let isValid = true;

    Object.keys(initialState).forEach((key) => {
      const fieldName = key as keyof FormState;
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send. Please try again.");
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
        <h3 className="text-2xl font-bold text-brand-primary mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setSuccess(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.name ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input pl-10 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="contact-email"
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
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="form-label">Phone Number</label>
          <div className="relative">
            <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+91 99999 99999"
              value={form.phone}
              onChange={handleChange}
              className="form-input pl-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-subject" className="form-label">
            Subject <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faTag} className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm ${errors.subject ? 'text-red-400' : 'text-gray-400'}`} />
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={form.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input pl-10 ${errors.subject ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faCommentAlt} className={`absolute left-4 top-4 text-sm ${errors.message ? 'text-red-400' : 'text-gray-400'}`} />
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input pl-10 resize-none ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
          />
        </div>
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
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
        id="contact-submit-btn"
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
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
