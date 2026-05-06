export const LEAD_CAPTURE_STORAGE_KEY = "aex_pdf_lead_capture_timestamp";
export const LEAD_CAPTURE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

export function hasRecentLeadCapture(): boolean {
  if (typeof window === "undefined") return false;
  
  const timestampStr = localStorage.getItem(LEAD_CAPTURE_STORAGE_KEY);
  if (!timestampStr) return false;
  
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;
  
  const now = Date.now();
  if (now - timestamp < LEAD_CAPTURE_EXPIRY_MS) {
    return true;
  }
  
  // Clean up expired timestamp
  localStorage.removeItem(LEAD_CAPTURE_STORAGE_KEY);
  return false;
}

export function saveLeadCaptureTimestamp(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LEAD_CAPTURE_STORAGE_KEY, Date.now().toString());
}
