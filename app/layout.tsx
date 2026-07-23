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
    default: "Laya Beauty",
    template: "%s · Laya Beauty",
  },
  description:
    "Laya Beauty — Happiness in every drop. Beauty Oil for nail & cuticle care, crafted with 100% natural oils.",
  keywords: [
    "Laya Beauty",
    "Beauty Oil",
    "nail oil",
    "cuticle care",
    "natural oils",
  ],
  authors: [{ name: "Laya Beauty" }],
  openGraph: {
    title: "Laya Beauty",
    description:
      "Beauty Oil for nail & cuticle care. 100% natural oils. Happiness in every drop.",
    url: "https://laya-beauty.com",
    siteName: "Laya Beauty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/logo.png",
        width: 2000,
        height: 1147,
        alt: "Laya Beauty logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laya Beauty",
    description:
      "Beauty Oil for nail & cuticle care. 100% natural oils. Happiness in every drop.",
    images: ["/brand/logo.png"],
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
