import Image from "next/image";
import Link from "next/link";
import { LayaLogo } from "@/components/LayaLogo";
import { ProductBanner } from "@/components/ProductBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  others: Product[];
};

export function ProductPageView({ product, others }: Props) {
  return (
    <>
      <SiteHeader />
      <main>
        {product.banner ? (
          <section className="bg-cream pt-[4.25rem] sm:pt-20">
            <ProductBanner
              src={product.banner}
              alt={`${product.name} - ${product.tagline}`}
              priority
            />
          </section>
        ) : null}

        <section
          className={`relative overflow-hidden bg-cream ${
            product.banner ? "" : "min-h-[85svh] pt-[4.25rem] sm:pt-20"
          }`}
        >
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-tint">
              <Image
                src={product.image}
                alt={`${product.name} by Laya Beauty`}
                fill
                priority={!product.banner}
                className="animate-soft-rise object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-8 text-brand">
                <LayaLogo className="h-10 w-auto sm:h-12" />
              </div>
              <p className="text-xs tracking-[0.28em] text-brand uppercase">
                {product.line} {"\u00b7"} Laya Glow Trio
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm tracking-[0.16em] text-ink/55 uppercase">
                {product.size}
              </p>
              <p className="mt-6 font-display text-2xl font-medium text-brand sm:text-3xl">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
                {product.desire}
              </p>
              <p className="mt-8 text-sm text-ink/50">
                Coming soon on Amazon US
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-lavender/50 bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              The story
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              {product.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-10 border-t border-lavender pt-8 text-sm leading-relaxed text-ink/65">
              {product.useLine}
            </p>
          </div>
        </section>

        <section className="border-t border-lavender/50 bg-tint">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              In the trio
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-medium tracking-wide text-ink sm:text-4xl">
              Complete the glow
            </h2>
            <p className="mt-4 max-w-md text-base text-ink/70">
              {product.name} is one step in Lip {"\u00b7"} Flush {"\u00b7"} Light.
              Meet the rest of the set.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                  <p className="mt-4 text-xs tracking-[0.2em] text-brand uppercase">
                    {item.line}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium text-ink transition-colors group-hover:text-brand">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65">{item.tagline}</p>
                </Link>
              ))}
            </div>
            <div className="mt-14">
              <Link
                href="/#collection"
                className="inline-flex text-sm tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-deep"
              >
                Back to collection
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
