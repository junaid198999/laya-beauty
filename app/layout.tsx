import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laya-beauty.com"),
  title: {
    default: "Laya Beauty · Glow Trio",
    template: "%s · Laya Beauty",
  },
  description:
    "Laya Beauty — LAYA GLOW TRIO. Glass Lip Oil, Dew Flush, and Light Drop. Lip. Flush. Light. Coming soon on Amazon US.",
  keywords: [
    "Laya Beauty",
    "Glow Trio",
    "Glass Lip Oil",
    "Dew Flush",
    "Light Drop",
    "liquid blush",
    "lip oil",
    "highlighter",
  ],
  authors: [{ name: "Laya Beauty" }],
  openGraph: {
    title: "Laya Beauty · Glow Trio",
    description:
      "Three finishes. One glow. Glass Lip Oil, Dew Flush, Light Drop — coming soon on Amazon US.",
    url: "https://laya-beauty.com",
    siteName: "Laya Beauty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/og.jpg",
        width: 1024,
        height: 539,
        alt: "Laya Beauty Glow Trio - Three essentials. One effortless glow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laya Beauty · Glow Trio",
    description:
      "Three finishes. One glow. Glass Lip Oil, Dew Flush, Light Drop.",
    images: ["/brand/og.jpg"],
  },
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
