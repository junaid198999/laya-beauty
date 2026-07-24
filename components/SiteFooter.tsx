import Link from "next/link";
import { LayaLogo } from "@/components/LayaLogo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lavender/50 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <Link href="/" className="flex items-center text-brand">
            <LayaLogo className="h-9 w-auto sm:h-11" />
        </Link>
        <p className="text-sm text-ink/55">
          {"\u00a9"} {year} Laya Beauty {"\u00b7"} laya-beauty.com
        </p>
      </div>
    </footer>
  );
}
