import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/ProductPageView";
import { getOtherProducts, getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dew Flush",
  description:
    "Laya Beauty Dew Flush Liquid Blush - color that looks like you. 7 mL. Part of the Laya Glow Trio.",
  openGraph: {
    title: "Dew Flush | Laya Beauty",
    description: "Color that looks like you. Coming soon on Amazon US.",
    images: ["/brand/products/dew-flush.png"],
  },
};

export default function DewFlushPage() {
  const product = getProduct("dew-flush");
  if (!product) notFound();
  return (
    <ProductPageView product={product} others={getOtherProducts(product.slug)} />
  );
}
