import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { enquiryAdminTemplate, enquiryAutoReplyTemplate } from "@/lib/email/templates";

// ─── In-memory rate limiter (per IP, max 5 req / 10 min) ────────────────────
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface EnquiryBody {
  name: string;
  company?: string;
  email: string;
  phone: string;
  product?: string;
  quantity?: string;
  requirement: string;
  // Honeypot field — bots fill this, humans don't
  _hp?: string;
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body: EnquiryBody = await req.json();
    const { name, company, email, phone, product, quantity, requirement, _hp } = body;

    // Honeypot check
    if (_hp) {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted." },
        { status: 200 }
      );
    }

    // ── Validation ──────────────────────────────────────────────────────────
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email?.trim() || !validateEmail(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!requirement?.trim() || requirement.trim().length < 10) {
      return NextResponse.json(
        { error: "Please describe your requirement (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // ── Sanitize ────────────────────────────────────────────────────────────
    const cleanData = {
      name: sanitize(name),
      company: company ? sanitize(company) : "Not provided",
      email: sanitize(email),
      phone: sanitize(phone),
      product: product ? sanitize(product) : "Not specified",
      quantity: quantity ? sanitize(quantity) : "Not specified",
      requirement: sanitize(requirement),
    };

    // ── Check API key ───────────────────────────────────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const FROM_ADDRESS = process.env.FROM_EMAIL || "AEX Website <noreply@aexheatshrink.com>";
    const TO_ADDRESS = "aamiteshmaurya@gmail.com";

    // ── Send admin notification + auto-reply ────────────────────────────────
    const [adminResult, replyResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        replyTo: cleanData.email,
        subject: `New Product Enquiry — ${cleanData.product} from ${cleanData.name}`,
        html: enquiryAdminTemplate(cleanData),
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: [cleanData.email],
        subject: "We received your product enquiry — AEX Heat Shrink",
        html: enquiryAutoReplyTemplate(cleanData.name, cleanData.product),
      }),
    ]);

    if (adminResult.status === "rejected") {
      console.error("Failed to send admin email:", adminResult.reason);
      return NextResponse.json(
        { error: "Failed to send your enquiry. Please try again later." },
        { status: 500 }
      );
    }

    if (replyResult.status === "rejected") {
      console.warn("Auto-reply failed:", replyResult.reason);
    }

    return NextResponse.json(
      { success: true, message: "Your enquiry has been submitted. Our team will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
