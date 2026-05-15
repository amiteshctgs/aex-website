"use client";

import React, { useState } from "react";
import { generateSlug, formatFileSize } from "@/lib/pdf/utils";

/**
 * Internal Admin Helper
 * This is a utility page to help generate the TypeScript snippets for new catalogues
 * so you don't have to write the objects manually.
 */
export default function AdminCataloguesPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Products",
    subCategory: "",
    description: "",
    fileName: "",
    pages: 1,
    fileSizeMB: 1.5,
    featured: false,
    requiresLead: false,
    tags: "",
  });

  const [generatedCode, setGeneratedCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const generateCode = () => {
    const slug = generateSlug(formData.title);
    const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean);

    const code = `{
  id: "${slug}",
  slug: "${slug}",
  title: "${formData.title}",
  category: "${formData.category}",
  subCategory: "${formData.subCategory}",
  description: "${formData.description.replace(/"/g, '\\"')}",
  fileName: "${formData.fileName || formData.title + '.pdf'}",
  fileUrl: "/pdfs/${formData.fileName || formData.title + '.pdf'}",
  pages: ${formData.pages},
  fileSize: "${formData.fileSizeMB} MB",
  publishDate: new Date().toISOString(),
  featured: ${formData.featured},
  requiresLead: ${formData.requiresLead},
  tags: ${JSON.stringify(tagsArray)},
  status: "published",
  language: "en",
  downloadCount: 0,
},`;

    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Copied to clipboard! Add this to lib/data/catalogues.ts");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Catalogue Generator Helper</h1>

        <div className="bg-white p-5 lg:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text" name="title" value={formData.title} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. Heat Shrink End Caps"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category" value={formData.category} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="Products">Products</option>
                <option value="Corporate">Corporate</option>
                <option value="Technical">Technical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category</label>
              <input
                type="text" name="subCategory" value={formData.subCategory} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. Moulded Components"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description" value={formData.description} onChange={handleChange} rows={3}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">File Name (Exact PDF Name)</label>
              <input
                type="text" name="fileName" value={formData.fileName} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" placeholder="Leave blank to use Title + .pdf"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
                <input
                  type="number" name="pages" value={formData.pages} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Size (MB)</label>
                <input
                  type="number" step="0.1" name="fileSizeMB" value={formData.fileSizeMB} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags (Comma separated)</label>
              <input
                type="text" name="tags" value={formData.tags} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. high voltage, joints"
              />
            </div>

            <div className="flex gap-6 col-span-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
                <span className="text-sm font-medium">Featured (Shows in Hero)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="requiresLead" checked={formData.requiresLead} onChange={handleChange} />
                <span className="text-sm font-medium">Requires Email to Download</span>
              </label>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <button
              onClick={generateCode}
              className="bg-brand-primary text-white px-6 py-2 rounded-lg font-bold"
            >
              Generate Object Code
            </button>
          </div>
        </div>

        {generatedCode && (
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
              <span className="text-white font-mono text-sm">lib/data/catalogues.ts</span>
              <button
                onClick={copyToClipboard}
                className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded transition-colors"
              >
                Copy
              </button>
            </div>
            <pre className="p-4 text-green-400 font-mono text-sm overflow-x-auto">
              {generatedCode}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
