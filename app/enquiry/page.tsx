import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Product Enquiry — AEX International Engineering",
  description:
    "Submit a product enquiry to AEX International Engineering. Get a custom quote for heat shrink products, cable accessories, and industrial insulation solutions.",
};

export default function EnquiryPage() {
  return (
    <>
      <PageTitle
        title="Product Enquiry"
        breadcrumbs={[{ label: "Enquiry" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <p className="section-subtitle">Quick Enquiry</p>
            <h2 className="section-title mb-2">Request a Product Quote</h2>
            <p className="text-gray-500 mb-8">
              Describe your requirements and our technical sales team will provide a detailed
              quotation within 24 business hours.
            </p>
            <EnquiryForm />
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-brand-primary rounded-2xl p-8 text-white mb-6">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Our technical team is available to assist you in selecting the right product for
                your application.
              </p>
              <div className="space-y-4">
                <a href="tel:+919321198038" className="flex items-center gap-3 text-gray-200 hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Call Us</p>
                    <p className="font-semibold">+91 93211 98038</p>
                  </div>
                </a>
                <a href="mailto:tech@aexheatshrink.com" className="flex items-center gap-3 text-gray-200 hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email Us</p>
                    <p className="font-semibold text-sm">tech@aexheatshrink.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-brand-primary mb-3">Why Enquire with AEX?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "18+ years of manufacturing expertise",
                  "ISO 9001:2015 certified quality",
                  "Custom sizes and specifications available",
                  "Competitive pricing for bulk orders",
                  "Fast turnaround and global shipping",
                  "Technical support throughout the project",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold mt-0.5">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
