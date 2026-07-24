import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/ProductPageView";
import { getOtherProducts, getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Light Drop",
  description:
    "Laya Beauty Light Drop Liquid Highlighter - the catch of light. 7 mL. Part of the Laya Glow Trio.",
  openGraph: {
    title: "Light Drop | Laya Beauty",
    description: "The catch of light. Coming soon on Amazon US.",
    images: ["/brand/products/light-drop.png"],
  },
};

export default function LightDropPage() {
  const product = getProduct("light-drop");
  if (!product) notFound();
  return (
    <ProductPageView product={product} others={getOtherProducts(product.slug)} />
  );
}
