import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import ProductSubPageContent from "@/components/ProductSubPageContent";
import JsonLd from "@/components/JsonLd";
import { getProductBySlug, getSubProductBySlug, getAllSubProductParams } from "@/lib/data/products";

interface Props {
  params: Promise<{ slug: string; sub: string }>;
}

export async function generateStaticParams() {
  return getAllSubProductParams().map(({ category, sub }) => ({ slug: category, sub }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params;
  const product = getProductBySlug(slug);
  const subProduct = getSubProductBySlug(slug, sub);
  if (!product || !subProduct) return { title: "Product Not Found" };

  return {
    title: `${subProduct.title} | ${product.shortTitle} | AEX International Engineering`,
    description: subProduct.description,
    keywords: [subProduct.title, product.title, "AEX", "heat shrink", "cable accessories"],
    alternates: { canonical: `https://www.aexheatshrink.com/products/${slug}/${sub}` },
    openGraph: {
      title: `${subProduct.title} | AEX International Engineering`,
      description: subProduct.description,
      url: `https://www.aexheatshrink.com/products/${slug}/${sub}`,
      type: "website",
      siteName: "AEX International Engineering",
    },
  };
}

export default async function ProductSubPage({ params }: Props) {
  const { slug, sub } = await params;
  const product = getProductBySlug(slug);
  const subProduct = getSubProductBySlug(slug, sub);
  if (!product || !subProduct) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": subProduct.title,
    "description": subProduct.description,
    "brand": {
      "@type": "Brand",
      "name": "AEX International Engineering"
    }
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <PageTitle
        title={subProduct.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.shortTitle, href: `/products/${product.slug}` },
          { label: subProduct.title },
        ]}
      />
      <ProductSubPageContent product={product} sub={subProduct} />
    </>
  );
}
