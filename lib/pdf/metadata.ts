/**
 * AEX PDF Management — SEO Metadata Helpers
 * @version 1.0.0
 */

import type { Metadata } from "next";
import type { Catalogue } from "@/types/pdf";

const SITE_URL = "https://www.aexheatshrink.com";
const SITE_NAME = "AEX International Engineering";

export function generateCatalogueMetadata(catalogue: Catalogue): Metadata {
  const title = catalogue.seoTitle ?? `${catalogue.title} | AEX Catalogues`;
  const description =
    catalogue.seoDescription ??
    `Download the ${catalogue.title} PDF from AEX International Engineering. ${catalogue.description}`;
  const url = `${SITE_URL}/downloads/${catalogue.slug}`;

  return {
    title,
    description,
    keywords: [catalogue.title, catalogue.category, ...(catalogue.tags ?? []), "AEX catalogue", "PDF download"],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", siteName: SITE_NAME },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function generateDownloadsPageMetadata(): Metadata {
  return {
    title: "Downloads & Catalogues | AEX International Engineering",
    description:
      "Download product catalogues, technical datasheets, and brochures from AEX International Engineering. Heat shrink, cable accessories, busbar insulation, and wildlife protection PDFs.",
    keywords: ["AEX catalogues", "heat shrink downloads", "cable accessories datasheet", "technical PDF"],
    alternates: { canonical: `${SITE_URL}/downloads` },
    openGraph: {
      title: "Downloads & Catalogues | AEX International Engineering",
      description: "Download product catalogues, technical datasheets, and brochures from AEX International Engineering.",
      url: `${SITE_URL}/downloads`,
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: "Downloads & Catalogues | AEX International Engineering",
      description: "Download product catalogues, technical datasheets, and brochures from AEX.",
    },
  };
}

export function generateCatalogueSchema(catalogue: Catalogue): object {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: catalogue.title,
    description: catalogue.description,
    url: `${SITE_URL}/downloads/${catalogue.slug}`,
    fileFormat: "application/pdf",
    contentUrl: `${SITE_URL}${catalogue.fileUrl}`,
    datePublished: catalogue.publishDate,
    inLanguage: catalogue.language,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function generateBreadcrumbSchema(catalogue: Catalogue): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Downloads", item: `${SITE_URL}/downloads` },
      { "@type": "ListItem", position: 3, name: catalogue.title, item: `${SITE_URL}/downloads/${catalogue.slug}` },
    ],
  };
}
