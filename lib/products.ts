export type Product = {
  slug: string;
  name: string;
  line: string;
  size: string;
  tagline: string;
  desire: string;
  story: string[];
  useLine: string;
  image: string;
  /** Designed marketing banner with baked-in copy. Optional until provided. */
  banner?: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "glass-lip-oil",
    name: "Glass Lip Oil",
    line: "Lip",
    size: "5 mL / 0.17 FL OZ",
    tagline: "The first soft shine",
    desire: "A clear, peach-tinted gloss that feels light and looks alive.",
    story: [
      "It starts with the mouth - the first place people notice when you speak, smile, or pause.",
      "Glass Lip Oil is the soft invitation into the Laya glow: a non-sticky shine that catches light without asking for attention.",
      "One swipe. Everyday ease. The beginning of Lip. Flush. Light.",
    ],
    useLine: "Glide onto bare lips, or wear over color for a glass finish.",
    image: "/brand/products/glass-lip-oil.png",
    banner: "/brand/banners/banner-glass-lip-oil.jpg",
    accent: "peach",
  },
  {
    slug: "dew-flush",
    name: "Dew Flush",
    line: "Flush",
    size: "7 mL / 0.24 FL OZ",
    tagline: "Color that looks like you",
    desire: "A buildable liquid blush with a natural, lived-in flush.",
    story: [
      "Color should feel like a moment, not a mask - the warmth that rises when you laugh.",
      "Dew Flush is the heart of the trio: a peachy-nude liquid blush that blends into skin and stays soft, not chalky.",
      "Layer lightly for a hint of life, or build for a fuller flush. Always yours.",
    ],
    useLine: "Dot on cheeks and blend with fingers or brush until the color melts in.",
    image: "/brand/products/dew-flush.png",
    banner: "/brand/banners/banner-dew-flush.jpg",
    accent: "rose",
  },
  {
    slug: "light-drop",
    name: "Light Drop",
    line: "Light",
    size: "7 mL / 0.24 FL OZ",
    tagline: "The catch of light",
    desire: "A champagne pearl highlighter with a smooth, daylight finish.",
    story: [
      "Glow is not glitter. It is the quiet catch of light on cheekbones when the day finds you.",
      "Light Drop finishes the ritual - a champagne-gold pearl that sits soft on skin, never harsh, never heavy.",
      "The last step that makes Lip and Flush feel complete.",
    ],
    useLine: "Tap onto high points of the face where light naturally lands.",
    image: "/brand/products/light-drop.png",
    banner: "/brand/banners/banner-light-drop.jpg",
    accent: "champagne",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getOtherProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug);
}

export function getProductsWithBanners(): Product[] {
  return products.filter((p) => Boolean(p.banner));
}
