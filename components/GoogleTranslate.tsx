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
        
        /* Style the actual dropdown */
        .goog-te-combo {
          color: white !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          border-radius: 6px !important;
          padding: 3px 8px !important;
          font-size: 12px !important;
          font-family: inherit !important;
          outline: none !important;
          cursor: pointer !important;
          margin: 0 !important;
          transition: all 0.2s ease;
        }
        
        .goog-te-combo:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        
        /* Dropdown options */
        .goog-te-combo option {
          color: #111 !important;
          background: white !important;
          font-size: 14px !important;
          padding: 4px !important;
        }
      `}</style>
      <div id="google_translate_element" />
    </>
  );
}
