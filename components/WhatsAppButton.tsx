"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = "919321198038";
  const message = encodeURIComponent(
    "Hello AEX International Engineering! I'm interested in your heat shrink products. Please provide more information."
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip label */}
      {hovered && (
        <div className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap animate-fade-in">
          Chat with us on WhatsApp
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
    </div>
  );
}
