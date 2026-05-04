import { MetadataRoute } from "next";
import { getProductSlugs, getAllSubProductParams } from "@/lib/data/products";
import { getIndustrySlugs } from "@/lib/data/industries";

const BASE_URL = "https://www.aexheatshrink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/enquiry",
    "/facility",
    "/strength",
    "/vision-mission-ethics",
    "/values-we-live-by",
    "/news",
    "/downloads",
    "/certificates",
    "/industries",
    "/products",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Category-level product pages
  const productCategoryRoutes = getProductSlugs().map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Sub-product pages
  const subProductRoutes = getAllSubProductParams().map(({ category, sub }) => ({
    url: `${BASE_URL}/products/${category}/${sub}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = getIndustrySlugs().map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const certificateRoutes = ["iso-9001", "ce-marking"].map((slug) => ({
    url: `${BASE_URL}/certificates/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productCategoryRoutes,
    ...subProductRoutes,
    ...industryRoutes,
    ...certificateRoutes,
  ];
}
