import Link from "next/link";
import { LayaLogo } from "@/components/LayaLogo";

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/#ritual", label: "Ritual" },
  { href: "/#story", label: "Story" },
  { href: "/#founder", label: "Founder" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lavender/40 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-5 py-2 sm:h-[5rem] sm:px-8 sm:py-2.5">
        <Link
          href="/"
          className="flex shrink-0 items-center leading-none text-brand transition-colors duration-300 hover:text-brand-deep"
        >
          <LayaLogo className="h-11 w-auto sm:h-14" />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs tracking-[0.14em] text-ink/80 uppercase sm:gap-x-7 sm:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
