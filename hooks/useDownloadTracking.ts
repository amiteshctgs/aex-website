"use client";

import { useCallback } from "react";
import { TrackingSource } from "@/types/pdf";

export function useDownloadTracking() {
  const trackDownload = useCallback((
    catalogueId: string, 
    source: TrackingSource, 
    leadData?: any
  ) => {
    // Basic local tracking
    try {
      const stored = localStorage.getItem("aex_downloads");
      const history = stored ? JSON.parse(stored) : [];
      
      const newEntry = {
        catalogueId,
        timestamp: new Date().toISOString(),
        source
      };
      
      localStorage.setItem("aex_downloads", JSON.stringify([...history, newEntry]));
      
      // Send to server in background
      fetch("/api/catalogues/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          catalogueId,
          source,
          timestamp: new Date().toISOString(),
          leadData
        }),
        // Use keepalive to ensure request completes even if page unloads
        keepalive: true
      }).catch(err => {
        // Silently fail - tracking shouldn't break user experience
        console.warn("Background tracking failed:", err);
      });
      
    } catch (err) {
      console.warn("Local storage tracking failed:", err);
    }
  }, []);

  return { trackDownload };
}
