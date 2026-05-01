// ─── Shared Email HTML Templates ────────────────────────────────────────────

const brandColor = "#0a5c8a";
const accentColor = "#e8a020";

// Wrapper / shell shared by all outgoing emails
function emailShell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${brandColor} 0%,#0d7ab5 100%);padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
                      AEX Heat Shrink
                    </p>
                    <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">
                      Precision Cable Accessories
                    </p>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:${accentColor};color:#fff;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;">
                      AEX
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e8ecf0;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} AEX Heat Shrink · This is an automated email — please do not reply directly.
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:#94a3b8;">
                <a href="https://www.aexheatshrink.com" style="color:${brandColor};text-decoration:none;">www.aexheatshrink.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Row helper ─────────────────────────────────────────────────────────────
function row(label: string, value: string): string {
  if (!value || value === "Not provided" || value === "Not specified") {
    return `<tr>
      <td style="padding:10px 14px;background:#f8fafc;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 14px;font-size:13px;color:#94a3b8;font-style:italic;">Not provided</td>
    </tr>
    <tr><td colspan="2" style="height:6px;"></td></tr>`;
  }
  return `<tr>
    <td style="padding:10px 14px;background:#f8fafc;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;width:140px;vertical-align:top;">${label}</td>
    <td style="padding:10px 14px;font-size:14px;color:#1e293b;">${value.replace(/\n/g, "<br/>")}</td>
  </tr>
  <tr><td colspan="2" style="height:6px;"></td></tr>`;
}

// ─── Admin: Contact Form ─────────────────────────────────────────────────────
export function contactAdminTemplate(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  const body = `
    <p style="margin:0 0 6px;font-size:20px;font-weight:700;color:#1e293b;">New Website Enquiry</p>
    <p style="margin:0 0 28px;font-size:14px;color:#64748b;">
      Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;">
      ${row("Name", data.name)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${brandColor};text-decoration:none;">${data.email}</a>`)}
      ${row("Phone", data.phone)}
      ${row("Subject", data.subject)}
      ${row("Message", data.message)}
    </table>

    <div style="margin-top:28px;padding:16px;background:#fffbeb;border-left:4px solid ${accentColor};border-radius:4px;">
      <p style="margin:0;font-size:13px;color:#92400e;font-weight:500;">
        💡 Reply to <strong>${data.email}</strong> to respond to this enquiry.
      </p>
    </div>
  `;
  return emailShell("New Website Enquiry — AEX Heat Shrink", body);
}

// ─── Auto-Reply: Contact Form ────────────────────────────────────────────────
export function contactAutoReplyTemplate(name: string): string {
  const body = `
    <p style="margin:0 0 24px;font-size:20px;font-weight:700;color:#1e293b;">
      Thank you, ${name}! 👋
    </p>
    <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 16px;">
      We've received your message and our team will get back to you within <strong>24 hours</strong>.
    </p>
    <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 28px;">
      In the meantime, feel free to explore our product range or connect with us on WhatsApp for faster support.
    </p>

    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:20px;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#0369a1;">📋 Your Submission Summary</p>
      <p style="margin:0;font-size:13px;color:#0c4a6e;">
        We received your contact request and have logged your details. An AEX representative will reach you at your provided email address.
      </p>
    </div>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${brandColor};border-radius:8px;padding:0;">
          <a href="https://www.aexheatshrink.com/products"
             style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
            View Our Products →
          </a>
        </td>
      </tr>
    </table>
  `;
  return emailShell("We received your enquiry — AEX Heat Shrink", body);
}

// ─── Admin: Enquiry Form ─────────────────────────────────────────────────────
export function enquiryAdminTemplate(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  requirement: string;
}): string {
  const body = `
    <p style="margin:0 0 6px;font-size:20px;font-weight:700;color:#1e293b;">New Product Enquiry</p>
    <p style="margin:0 0 28px;font-size:14px;color:#64748b;">
      Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;">
      ${row("Name", data.name)}
      ${row("Company", data.company)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${brandColor};text-decoration:none;">${data.email}</a>`)}
      ${row("Phone", data.phone)}
      ${row("Product", data.product)}
      ${row("Quantity", data.quantity)}
      ${row("Requirement", data.requirement)}
    </table>

    <div style="margin-top:28px;padding:16px;background:#fffbeb;border-left:4px solid ${accentColor};border-radius:4px;">
      <p style="margin:0;font-size:13px;color:#92400e;font-weight:500;">
        💡 Reply to <strong>${data.email}</strong> to follow up on this product enquiry.
      </p>
    </div>
  `;
  return emailShell("New Product Enquiry — AEX Heat Shrink", body);
}

// ─── Auto-Reply: Enquiry Form ────────────────────────────────────────────────
export function enquiryAutoReplyTemplate(name: string, product: string): string {
  const productText = product && product !== "Not specified"
    ? `regarding <strong>${product}</strong>`
    : "for a product";

  const body = `
    <p style="margin:0 0 24px;font-size:20px;font-weight:700;color:#1e293b;">
      Enquiry Received, ${name}! ✅
    </p>
    <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 16px;">
      Thank you for your enquiry ${productText}. Our sales team has been notified and will reach out to you within <strong>1 business day</strong> with pricing and availability details.
    </p>

    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:20px;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#166534;">✅ What Happens Next?</p>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#14532d;line-height:1.8;">
        <li>Our technical team reviews your requirement</li>
        <li>We prepare a customized quotation</li>
        <li>You receive a detailed response via email or phone</li>
      </ul>
    </div>

    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${brandColor};border-radius:8px;padding:0;">
          <a href="https://www.aexheatshrink.com/products"
             style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
            Browse More Products →
          </a>
        </td>
      </tr>
    </table>
  `;
  return emailShell("We received your product enquiry — AEX Heat Shrink", body);
}
