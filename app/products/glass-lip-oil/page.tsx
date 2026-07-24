import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/ProductPageView";
import { getOtherProducts, getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Glass Lip Oil",
  description:
    "Laya Beauty Glass Lip Oil - the first soft shine. 5 mL. Part of the Laya Glow Trio.",
  openGraph: {
    title: "Glass Lip Oil | Laya Beauty",
    description: "The first soft shine. Coming soon on Amazon US.",
    images: ["/brand/products/glass-lip-oil.png"],
  },
};

export default function GlassLipOilPage() {
  const product = getProduct("glass-lip-oil");
  if (!product) notFound();
  return (
    <ProductPageView product={product} others={getOtherProducts(product.slug)} />
  );
}
