import { NextRequest, NextResponse } from "next/server";

interface EnquiryBody {
  name: string;
  company?: string;
  email: string;
  phone: string;
  product?: string;
  quantity?: string;
  requirement: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryBody = await req.json();
    const { name, company, email, phone, product, quantity, requirement } = body;

    // Validation
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
      return NextResponse.json({ error: "Please describe your requirement (minimum 10 characters)." }, { status: 400 });
    }

    // Log to console (replace with nodemailer / CRM integration)
    console.log("📋 New Product Enquiry:", {
      name: name.trim(),
      company: company?.trim() || "Not provided",
      email: email.trim(),
      phone: phone.trim(),
      product: product || "Not specified",
      quantity: quantity?.trim() || "Not specified",
      requirement: requirement.trim(),
      timestamp: new Date().toISOString(),
    });

    /*
    // ─── Uncomment to use Nodemailer ───────────────────────────────────────
    import nodemailer from "nodemailer";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AEX Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "tech@aexheatshrink.com",
      subject: `Product Enquiry: ${product || "General"} from ${name}`,
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product || "Not specified"}</p>
        <p><strong>Quantity:</strong> ${quantity || "Not specified"}</p>
        <p><strong>Requirement:</strong><br/>${requirement}</p>
      `,
    });
    // ───────────────────────────────────────────────────────────────────────
    */

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
