import type { Metadata } from "next";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700", "800"] });

// Prevent Font Awesome from injecting CSS twice (we import it above)
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://aex.in"),
  title: {
    template: "%s | AEX International Engineering",
    default: "AEX International Engineering Works Pvt. Ltd.",
  },
  description:
    "AEX International Engineering Works Pvt. Ltd. — 35+ years manufacturing Heat Shrink products, Cable Accessories, Pipeline Protection, and Switchgear Insulation. ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified. Export to 50+ countries. Based in Jamnagar, India.",
  keywords: [
    "heat shrink",
    "heat shrinkable",
    "cable accessories",
    "AEX",
    "Jamnagar",
    "busbar insulation",
    "pipeline protection",
    "moulded components",
    "switchgear insulation",
    "India",
  ],
  authors: [{ name: "AEX International Engineering Works Pvt. Ltd." }],
  creator: "AEX International Engineering",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aexheatshrink.com",
    siteName: "AEX International Engineering",
    title: "AEX International Engineering Works Pvt. Ltd.",
    description:
      "Leading manufacturer of heat shrink products and cable accessories in India. ISO certified. Export to 50+ countries.",
    images: [
      {
        url: "/images/logo-2.png",
        width: 400,
        height: 150,
        alt: "AEX International Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEX International Engineering Works Pvt. Ltd.",
    description: "Leading manufacturer of heat shrink products in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow overflow-x-hidden">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
