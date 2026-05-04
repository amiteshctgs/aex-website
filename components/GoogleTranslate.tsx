"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any;
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Inject Google Translate script once
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "hi,gu,ar,fr,de,es,it,ja,ko,pt,ru,zh-CN,zh-TW,nl,pl,tr,vi,th,id,ms",
            layout: 0, // SIMPLE
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Hide Google's default top banner & branding */}
      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0 !important; }
        
        /* Hide the 'Powered by Google Translate' text */
        .goog-te-gadget {
          color: transparent !important;
          font-size: 0px !important;
          display: flex !important;
          align-items: center !important;
        }
        
        /* Force hide the Google logo, text, and anything that isn't the select */
        .goog-te-gadget > span,
        .goog-te-gadget a,
        .goog-te-gadget img {
          display: none !important;
        }
        
        /* Style the actual dropdown for a light background (top strip) */
        .goog-te-combo {
          color: #333333 !important;
          background-color: #ffffff !important;
          border: 1px solid #d1d5db !important;
          border-radius: 4px !important;
          padding: 2px 6px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          font-family: inherit !important;
          outline: none !important;
          cursor: pointer !important;
          margin: 0 !important;
          height: 22px !important;
          transition: all 0.2s ease;
        }
        
        .goog-te-combo:hover {
          border-color: #cc0000 !important;
          color: #cc0000 !important;
        }
        
        /* Dropdown options */
        .goog-te-combo option {
          color: #111 !important;
          background: white !important;
          font-size: 13px !important;
          padding: 4px !important;
        }
      `}</style>
      <div id="google_translate_element" />
    </>
  );
}
