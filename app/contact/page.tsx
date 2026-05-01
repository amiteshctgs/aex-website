import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us | AEX International Engineering",
  description:
    "Contact AEX International Engineering Works Pvt. Ltd. for heat shrink product enquiries, technical support, and business partnerships. Jamnagar, Gujarat, India.",
  openGraph: {
    title: "Contact Us | AEX International Engineering",
    description:
      "Get in touch with AEX — India's leading heat shrink manufacturer. We respond within 24 business hours.",
  },
};

const contactInfo = [
  {
    icon: faMapMarkerAlt,
    label: "Our Address",
    value: "Plot No. B/10-11, Road No. 1, GIDC Lodhika, Metoda, Jamnagar – 360 021, Gujarat, India",
    href: undefined,
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+91 93211 98038",
    href: "tel:+919321198038",
  },
  {
    icon: faEnvelope,
    label: "Email",
    value: "tech@aexheatshrink.com",
    href: "mailto:tech@aexheatshrink.com",
  },
  {
    icon: faClock,
    label: "Business Hours",
    value: "Monday – Saturday: 9:00 AM – 6:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form — 2 cols */}
          <div className="lg:col-span-2">
            <p className="section-subtitle">Get in Touch</p>
            <h2 className="section-title mb-2 mt-3">Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Have a technical question or need a custom product solution? Fill in the form below
              and our engineering team will respond within <strong>24 business hours</strong>.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info sidebar */}
          <div>
            <p className="section-subtitle">Contact Details</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-3">Reach Us Directly</h3>
            <div className="space-y-5">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon icon={icon} className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-500 text-sm hover:text-brand-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ISO badges */}
            <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Our Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((cert) => (
                  <span
                    key={cert}
                    className="bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick enquiry link */}
            <div className="mt-5 p-5 rounded-xl border border-brand-primary/20 bg-red-50">
              <p className="text-sm font-semibold text-gray-900 mb-1">Need a Product Quote?</p>
              <p className="text-gray-500 text-xs mb-3">
                Use our dedicated enquiry form for product-specific requirements.
              </p>
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-1 text-brand-primary text-sm font-semibold hover:underline"
              >
                Submit Enquiry <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title mt-3">Our Location</h2>
          </div>
          <GoogleMap />
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-4">
            Ready to Reach New Heights?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Let&apos;s Get There Together
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            We transform your needs into solutions. Our technical engineers are ready to help you
            find the right heat shrink product for your exact application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary text-sm px-8 py-4">
              Submit Enquiry <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/products/heat-shrink-moulded-components" className="btn-outline text-sm px-8 py-4">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
