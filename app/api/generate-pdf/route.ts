import "server-only";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

import chromium from "@sparticuz/chromium";
import puppeteerCore from "puppeteer-core";
import { products } from "@/lib/data/products";
import { industries } from "@/lib/data/industries";

// Build the full HTML string for the PDF — no React, pure HTML
function buildProfileHtml(): string {
  const productListHtml = products
    .map(
      (p) => `
      <div class="product-card">
        <div class="product-title">${p.title}</div>
        <div class="product-desc">${p.description}</div>
      </div>`
    )
    .join("");

  const industryListHtml = industries
    .map(
      (ind) => `
      <div class="industry-item">
        <span class="industry-dot"></span>
        <span>${ind.title}</span>
      </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AEX International — Company Profile</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; background: #fff; }

    /* ── Page layout ── */
    .page { width: 210mm; min-height: 297mm; padding: 18mm 16mm; page-break-after: always; }
    .page:last-child { page-break-after: avoid; }

    /* ── Cover ── */
    .cover { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(135deg, #cc0000 0%, #1a2b5f 100%); color: #fff; }
    .cover-logo-area { margin-bottom: 40px; }
    .cover h1 { font-size: 40px; font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; }
    .cover .tagline { font-size: 18px; opacity: 0.85; font-weight: 300; letter-spacing: 2px; margin-bottom: 40px; }
    .cover-divider { width: 80px; height: 4px; background: rgba(255,255,255,0.5); margin: 0 auto 40px; }
    .cover-meta { font-size: 13px; opacity: 0.7; line-height: 2; }
    .cover-cert { margin-top: 50px; display: flex; gap: 20px; justify-content: center; }
    .cert-badge { border: 1px solid rgba(255,255,255,0.4); border-radius: 6px; padding: 8px 16px; font-size: 11px; font-weight: 700; letter-spacing: 1px; }

    /* ── Section headers ── */
    .section-label { font-size: 10px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; color: #cc0000; margin-bottom: 6px; }
    .section-title { font-size: 26px; font-weight: 800; color: #1a2b5f; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #eee; }

    /* ── Page header bar ── */
    .page-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; margin-bottom: 24px; border-bottom: 3px solid #cc0000; }
    .page-header .brand { font-size: 13px; font-weight: 800; color: #1a2b5f; letter-spacing: 0.5px; }
    .page-header .section-name { font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 2px; }

    /* ── Page footer bar ── */
    .page-footer { position: fixed; bottom: 10mm; left: 16mm; right: 16mm; display: flex; justify-content: space-between; align-items: center; font-size: 9px; color: #aaa; border-top: 1px solid #eee; padding-top: 6px; }

    /* ── Body text ── */
    p { font-size: 13px; line-height: 1.9; color: #444; margin-bottom: 14px; }
    strong { color: #1a2b5f; }

    /* ── Highlight boxes ── */
    .highlight-box { border-left: 4px solid #cc0000; background: #fdf5f5; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; }
    .highlight-box h4 { font-size: 14px; color: #1a2b5f; font-weight: 700; margin-bottom: 4px; }
    .highlight-box p { font-size: 12px; margin: 0; }

    /* ── Stats row ── */
    .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0; }
    .stat-box { text-align: center; background: #1a2b5f; color: #fff; padding: 18px 10px; border-radius: 10px; }
    .stat-box .num { font-size: 28px; font-weight: 900; color: #f5a623; line-height: 1; }
    .stat-box .label { font-size: 10px; margin-top: 4px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px; }

    /* ── Product cards ── */
    .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .product-card { border: 1px solid #eee; border-radius: 8px; padding: 14px; border-top: 3px solid #cc0000; }
    .product-title { font-size: 13px; font-weight: 700; color: #1a2b5f; margin-bottom: 5px; }
    .product-desc { font-size: 11px; color: #666; line-height: 1.6; }

    /* ── Vision / Mission bullets ── */
    .bullet-list { list-style: none; padding: 0; }
    .bullet-list li { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: #444; line-height: 1.7; margin-bottom: 12px; }
    .bullet-dot { width: 8px; height: 8px; background: #cc0000; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }

    /* ── Values grid ── */
    .values-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-top: 16px; }
    .value-card { padding: 14px; border-radius: 8px; background: #f8f9fa; border-top: 3px solid #1a2b5f; }
    .value-card.red { border-top-color: #cc0000; }
    .value-card h4 { font-size: 12px; font-weight: 800; color: #1a2b5f; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
    .value-card p { font-size: 11px; color: #666; margin: 0; line-height: 1.6; }

    /* ── Industries ── */
    .industry-item { display: flex; align-items: center; gap: 10px; font-size: 12px; color: #444; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
    .industry-dot { width: 8px; height: 8px; background: #cc0000; border-radius: 50%; flex-shrink: 0; }

    /* ── Contact page ── */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
    .contact-item { padding: 16px; background: #f8f9fa; border-radius: 8px; }
    .contact-item h4 { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #cc0000; margin-bottom: 8px; }
    .contact-item p { font-size: 12px; line-height: 1.8; margin: 0; }
    .contact-cta { margin-top: 30px; text-align: center; background: linear-gradient(135deg, #cc0000 0%, #1a2b5f 100%); color: #fff; padding: 30px; border-radius: 12px; }
    .contact-cta h3 { font-size: 20px; margin-bottom: 10px; }
    .contact-cta p { color: rgba(255,255,255,0.85); font-size: 13px; margin: 0; }

    @media print {
      .page { page-break-after: always; }
    }
  </style>
</head>
<body>

  <!-- ══════════════════ PAGE 1: COVER ══════════════════ -->
  <div class="page cover">
    <div class="cover-logo-area">
      <div style="font-size:12px; letter-spacing:4px; opacity:0.6; margin-bottom:8px;">ESTABLISHED 1988</div>
    </div>
    <h1>AEX International<br/>Engineering Works</h1>
    <div class="tagline">HEAT SHRINK SPECIALISTS — GLOBAL LEADERS</div>
    <div class="cover-divider"></div>
    <div style="font-size: 15px; font-weight: 600; margin-bottom: 6px;">Company Profile</div>
    <div class="cover-meta">
      <div>Jamnagar, Gujarat, India</div>
      <div>www.aexheatshrink.com</div>
      <div>Export to 50+ Countries Worldwide</div>
    </div>
    <div class="cover-cert">
      <div class="cert-badge">ISO 9001:2015</div>
      <div class="cert-badge">ISO 14001:2015</div>
      <div class="cert-badge">ISO 45001:2018</div>
    </div>
  </div>

  <!-- ══════════════════ PAGE 2: ABOUT ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">About Company</div>
    </div>
    <div class="section-label">Who We Are</div>
    <div class="section-title">About AEX International Engineering</div>

    <p>
      <strong>AEX International Engineering Works Pvt. Ltd.</strong> is a leading global manufacturer of Heat Shrinkable Products, Power Cable Accessories, Insulation Enhancement Products, and Pipeline Protection Systems. We have a deep advantage of many years of experience in processing a wide variety of Thermoplastics and Thermoset Polymers including Flame-retardant materials across many industries.
    </p>
    <p>
      AEX is a subsidiary of <strong>Apple International Engineering Works Pvt. Ltd.</strong> — the single largest manufacturer and exporter of Ferrous and Non-Ferrous Electrical Accessories with a presence in the market for more than <strong>35 years</strong>. Guided by our Policy of Innovation and flexibility, AEX leads the way in supplying high-quality services to the Energy industry worldwide.
    </p>
    <p>
      AEX is recognized as a worldwide leader in manufacturing a wide range of Heat Shrinkable Moulded Products, Heat Shrink Tubes, Power Cable Accessories, Insulation Enhancement Products, and more. Our R&amp;D team and manufacturing setups employ cutting-edge processes to deliver products of the highest standard. AEX has an established quality assurance structure designed strictly following ISO 9001 and ISO 14001.
    </p>

    <div class="stats-row">
      <div class="stat-box"><div class="num">35+</div><div class="label">Years Legacy</div></div>
      <div class="stat-box"><div class="num">50+</div><div class="label">Countries</div></div>
      <div class="stat-box"><div class="num">400+</div><div class="label">Workforce</div></div>
      <div class="stat-box"><div class="num">200K</div><div class="label">Sq Ft Facility</div></div>
    </div>

    <div class="highlight-box">
      <h4>ISO Certifications</h4>
      <p>AEX maintains ISO 9001:2015 (Quality), ISO 14001:2015 (Environment) and ISO 45001:2018 (Safety) certifications, independently tested at accredited facilities worldwide.</p>
    </div>
  </div>

  <!-- ══════════════════ PAGE 3: FACILITY ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Our Facility</div>
    </div>
    <div class="section-label">World-Class Manufacturing</div>
    <div class="section-title">Our State-of-the-Art Facility</div>

    <p>
      Our manufacturing unit is spread across <strong>200,000 square feet</strong> at GIDC Lodhika, Metoda, Jamnagar — one of India's premier industrial zones. Right from Compounding to the Finished Product, everything is produced in-house, ensuring complete quality control at every stage of manufacturing.
    </p>

    <div class="highlight-box">
      <h4>End-to-End In-House Production</h4>
      <p>From raw polymer compounding through injection moulding, extrusion, anti-static treatment, to final dispatch — every step is controlled internally, eliminating third-party risk and ensuring consistency.</p>
    </div>
    <div class="highlight-box">
      <h4>Advanced Test Laboratory</h4>
      <p>Equipped with modern test apparatus, our in-house laboratory tests all products to international standards. Independent type testing at accredited global facilities confirms reliability.</p>
    </div>
    <div class="highlight-box">
      <h4>Widest Machine Capacity in India</h4>
      <p>We possess one of the widest ranges of injection moulding and extrusion machines in India — enabling us to handle any volume, any size, any specification, in-house.</p>
    </div>
    <div class="highlight-box">
      <h4>400+ Skilled Workforce</h4>
      <p>Our team of 400+ dedicated engineers and production staff are experts in Injection Moulding, Extrusion, Anti-Static Treatment, Project Management, and Supply Chain Management.</p>
    </div>
  </div>

  <!-- ══════════════════ PAGE 4: PRODUCTS ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Product Range</div>
    </div>
    <div class="section-label">What We Make</div>
    <div class="section-title">Our Complete Product Portfolio</div>
    <p>AEX manufactures an extensive range of heat shrink and cable protection products designed to serve the Electrical, Energy, Telecom, Automotive, and Pipeline industries.</p>
    <div class="products-grid">
      ${productListHtml}
    </div>
  </div>

  <!-- ══════════════════ PAGE 5: VISION & MISSION ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Vision &amp; Mission</div>
    </div>
    <div class="section-label">Our Direction</div>
    <div class="section-title">Vision &amp; Mission</div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div>
        <div style="background: #cc0000; color: #fff; padding: 10px 16px; border-radius: 6px 6px 0 0; font-size: 14px; font-weight: 800; letter-spacing: 1px;">OUR VISION</div>
        <div style="border: 1px solid #eee; border-top: 0; border-radius: 0 0 6px 6px; padding: 16px;">
          <ul class="bullet-list">
            <li><span class="bullet-dot"></span><span>To be the most reliable Global Network for Customers and Suppliers, delivering value through Products and Services.</span></li>
            <li><span class="bullet-dot"></span><span>To grow and achieve sustained leadership positions in all our chosen lines of business.</span></li>
            <li><span class="bullet-dot"></span><span>To win the respect of all our stakeholders worldwide.</span></li>
          </ul>
        </div>
      </div>
      <div>
        <div style="background: #1a2b5f; color: #fff; padding: 10px 16px; border-radius: 6px 6px 0 0; font-size: 14px; font-weight: 800; letter-spacing: 1px;">OUR MISSION</div>
        <div style="border: 1px solid #eee; border-top: 0; border-radius: 0 0 6px 6px; padding: 16px;">
          <ul class="bullet-list">
            <li><span class="bullet-dot" style="background:#1a2b5f;"></span><span>To be a responsible value creator for all our Associates.</span></li>
            <li><span class="bullet-dot" style="background:#1a2b5f;"></span><span>To accelerate growth with a focus on new products and services.</span></li>
            <li><span class="bullet-dot" style="background:#1a2b5f;"></span><span>To provide solutions for the world's hardest engineering challenges.</span></li>
            <li><span class="bullet-dot" style="background:#1a2b5f;"></span><span>Committed to helping our Partners attain spectacular results.</span></li>
            <li><span class="bullet-dot" style="background:#1a2b5f;"></span><span>To associate with Customers worldwide to design next-generation technology.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div style="margin-top: 28px;">
      <div class="section-label">Ethics We Live By</div>
      <div class="values-grid" style="margin-top: 12px;">
        <div class="value-card red"><h4>Innovative</h4><p>Energetic and proactive, always ready to take challenges with deep customer insight.</p></div>
        <div class="value-card"><h4>Integrity</h4><p>Fair, honest, and transparent in our code of conduct — we do what we say.</p></div>
        <div class="value-card red"><h4>Excellence</h4><p>Passionate about achieving the highest standards of quality and customer satisfaction.</p></div>
        <div class="value-card"><h4>Unity</h4><p>We work as a team and grow together — teamwork makes common people achieve uncommon results.</p></div>
        <div class="value-card red"><h4>Responsibility</h4><p>Always committed to deliver our best performance and ensure quality on time.</p></div>
      </div>
    </div>
  </div>

  <!-- ══════════════════ PAGE 6: STRENGTH & VALUES ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Strength &amp; Values</div>
    </div>
    <div class="section-label">What Makes Us Strong</div>
    <div class="section-title">Our Core Strengths &amp; Values</div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 28px;">
      <div class="highlight-box">
        <h4>Our Team</h4>
        <p>Dedicated staff managing the supply chain for all customers, committed to collaborative success. Win Together is our belief.</p>
      </div>
      <div class="highlight-box">
        <h4>Leadership</h4>
        <p>A diverse, inclusive organization. Our leadership team works closely across functions to meet customer, shareholder, and partner needs.</p>
      </div>
      <div class="highlight-box">
        <h4>Approach to Work</h4>
        <p>An agile and disciplined approach with a wealth of knowledge in the Plastics industry — planning strategically for the future.</p>
      </div>
    </div>

    <div class="section-label">Values We Live By</div>
    <div class="values-grid" style="margin-top: 12px;">
      <div class="value-card red"><h4>01 — Collaboration</h4><p>AEX works closely with associates. Our customers' success is our success.</p></div>
      <div class="value-card"><h4>02 — Steadily Improving</h4><p>Continuous upskilling to stay at the cutting edge of product development.</p></div>
      <div class="value-card red"><h4>03 — Passion for Results</h4><p>Results-oriented for ourselves and our customers — no target is too ambitious.</p></div>
      <div class="value-card"><h4>04 — Transparency</h4><p>Open communication and proven integrity in all activities.</p></div>
      <div class="value-card red"><h4>05 — Stakeholder Appreciation</h4><p>Developing a committed and responsive community of Employees, Distributors and Vendors.</p></div>
      <div class="value-card"><h4>06 — Sustainability</h4><p>Committed to protecting the environment and contributing to society around us.</p></div>
    </div>
  </div>

  <!-- ══════════════════ PAGE 7: INDUSTRIES ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Industries Served</div>
    </div>
    <div class="section-label">Our Market Reach</div>
    <div class="section-title">Industries We Serve</div>
    <p>AEX supplies to over 50 countries across multiple industries. Our products are trusted by Electrical Utilities, OEMs, contractors, and industrial companies worldwide.</p>
    <div style="columns: 2; gap: 20px; margin-top: 8px;">
      ${industryListHtml}
    </div>
  </div>

  <!-- ══════════════════ PAGE 8: CONTACT ══════════════════ -->
  <div class="page">
    <div class="page-header">
      <div class="brand">AEX International Engineering</div>
      <div class="section-name">Contact Us</div>
    </div>
    <div class="section-label">Get In Touch</div>
    <div class="section-title">Contact &amp; Connect With AEX</div>

    <div class="contact-grid">
      <div class="contact-item">
        <h4>Registered Office</h4>
        <p>AEX International Engineering Works Pvt. Ltd.<br/>GIDC Lodhika, Metoda<br/>Jamnagar — 360 021<br/>Gujarat, India</p>
      </div>
      <div class="contact-item">
        <h4>Website &amp; Online</h4>
        <p>www.aexheatshrink.com<br/>Email: info@aexheatshrink.com<br/>Available in English, for global enquiries</p>
      </div>
      <div class="contact-item">
        <h4>Quality Certifications</h4>
        <p>ISO 9001:2015 — Quality Management<br/>ISO 14001:2015 — Environmental<br/>ISO 45001:2018 — Occupational Health &amp; Safety</p>
      </div>
      <div class="contact-item">
        <h4>Global Presence</h4>
        <p>Exporting to 50+ Countries<br/>Americas · Asia/Pacific · EMEA<br/>Distributors &amp; branches worldwide</p>
      </div>
    </div>

    <div class="contact-cta">
      <h3>Ready to Work With a World-Class Manufacturer?</h3>
      <p>We would be happy to receive your enquiries in any sector. We listen and transform your needs into solutions — quality, reliability, and committed service guaranteed.</p>
    </div>
  </div>

</body>
</html>`;
}

export async function GET(request: Request) {
  try {
    const html = buildProfileHtml();

    const isLocal = !!process.env.NEXT_PUBLIC_VERCEL_URL === false;

    let browser;
    if (isLocal) {
      // Local development on Windows/Mac
      browser = await puppeteer.launch({
        headless: true,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
        ],
      });
    } else {
      // Vercel Serverless environment
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    }

    const page = await browser.newPage();

    // Load the HTML directly — no network dependency, instant render
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
      displayHeaderFooter: false,
    });

    await browser.close();

    return new NextResponse(pdfBuffer as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="AEX_Company_Profile.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
