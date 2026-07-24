import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { products } from "@/lib/products";

const ritualSteps = [
  {
    step: "01",
    line: "Lip",
    title: "Soft shine",
    text: "Start with Glass Lip Oil — light, peach-tinted, ready for the day.",
  },
  {
    step: "02",
    line: "Flush",
    title: "Lived-in color",
    text: "Blend Dew Flush until it looks like warmth that already belonged to you.",
  },
  {
    step: "03",
    line: "Light",
    title: "Quiet glow",
    text: "Finish with Light Drop where daylight naturally finds your face.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero - native 16:9 frame, no overlay; image already leaves room for copy */}
        <section className="bg-cream pt-[4.25rem] sm:pt-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/brand/hero-glow-trio.jpg"
              alt="Laya Glow Trio - Glass Lip Oil, Dew Flush, and Light Drop"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 lg:px-16">
              <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-[42%] sm:max-w-md">
                  <p className="animate-fade-up text-xs tracking-[0.28em] text-brand uppercase">
                    Laya Glow Trio
                  </p>
                  <h1 className="animate-fade-up delay-1 mt-2 font-display text-2xl font-medium leading-tight tracking-wide text-ink sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
                    Lip. Flush. Light.
                  </h1>
                  <p className="animate-fade-up delay-2 mt-2 text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base md:text-lg">
                    Three finishes. One glow. Made simple.
                  </p>
                  <div className="animate-fade-up delay-3 mt-4 flex flex-col items-start gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-6">
                    <Link
                      href="#collection"
                      className="inline-flex items-center bg-brand px-5 py-2.5 text-xs tracking-[0.16em] text-white uppercase transition-colors duration-300 hover:bg-brand-deep sm:px-7 sm:py-3.5 sm:text-sm"
                    >
                      Meet the collection
                    </Link>
                    <span className="text-[10px] tracking-[0.14em] text-ink/45 uppercase sm:text-xs">
                      Coming soon on Amazon US
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story beat — desire, conflict, turn */}
        <section
          id="story"
          className="scroll-mt-24 border-b border-lavender/40 bg-cream"
        >
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              The story
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              Glow without the noise
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/75 sm:text-lg">
              <p>
                Most of us want that lit-from-within look — not a twelve-step
                routine, not a face that feels heavy by noon.
              </p>
              <p>
                Too often, glow means sticky lips, chalky color, or a highlighter
                that only works under studio lights.
              </p>
              <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Laya simplifies the desire into three honest finishes.
              </p>
            </div>
          </div>
        </section>

        {/* Collection teasers */}
        <section
          id="collection"
          className="scroll-mt-24 bg-surface"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              The collection
            </p>
            <h2 className="mt-3 max-w-lg font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              Laya Glow Trio
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Glass Lip Oil. Dew Flush. Light Drop. Each product has its own
              story — and its own page.
            </p>

            <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-tint">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="mt-5 text-xs tracking-[0.22em] text-brand uppercase">
                    {product.line}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink transition-colors group-hover:text-brand sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65">{product.tagline}</p>
                  <p className="mt-1 text-xs tracking-[0.12em] text-ink/45 uppercase">
                    {product.size}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual banner + steps */}
        <section id="ritual" className="scroll-mt-24">
          <div className="relative min-h-[36vh] overflow-hidden sm:min-h-[42vh]">
            <Image
              src="/brand/banners/banner-ritual.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-cream/40" aria-hidden />
            <div className="relative z-10 flex min-h-[36vh] items-end px-5 pb-12 sm:min-h-[42vh] sm:px-8 sm:pb-16">
              <div className="mx-auto w-full max-w-6xl">
                <p className="text-xs tracking-[0.28em] text-brand uppercase">
                  The ritual
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
                  Lip · Flush · Light
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-cream">
            <ol className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-3 sm:gap-8 sm:px-8 sm:py-20">
              {ritualSteps.map((item) => (
                <li key={item.step} className="border-t border-lavender pt-6">
                  <p className="text-xs tracking-[0.2em] text-brand uppercase">
                    {item.step} · {item.line}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Founder */}
        <section
          id="founder"
          className="relative scroll-mt-24 overflow-hidden bg-ink"
        >
          <Image
            src="/brand/banners/banner-founders-note.png"
            alt=""
            fill
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" aria-hidden />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-lavender uppercase">
              A note from our founder
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-white sm:text-5xl">
              From Rama
            </h2>
            <blockquote className="mt-10 max-w-3xl">
              <p className="font-display text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
                &ldquo;I built Laya for the quiet confidence of a simple glow —
                lips soft, cheeks warm, light caught just where it should. Three
                finishes. One feeling. Happiness, close to the skin.&rdquo;
              </p>
              <footer className="mt-10 border-t border-white/15 pt-6">
                <div className="relative h-12 w-[180px] sm:h-14 sm:w-[220px]">
                  <Image
                    src="/brand/rama-signature.png"
                    alt="Rama signature"
                    fill
                    className="object-contain object-left"
                    sizes="220px"
                  />
                </div>
                <p className="mt-3 text-sm text-white/60">
                  Founder, Laya Beauty
                </p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-lavender/60 bg-tint"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              Contact
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Questions about Laya Glow Trio or the brand? We would love to hear
              from you.
            </p>

            <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-brand uppercase">
                  Email
                </p>
                <a
                  href="mailto:hello@laya-beauty.com"
                  className="mt-3 inline-block text-base text-ink transition-colors duration-300 hover:text-brand"
                >
                  hello@laya-beauty.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-brand uppercase">
                  Phone
                </p>
                <a
                  href="tel:+18166748976"
                  className="mt-3 inline-block text-base text-ink transition-colors duration-300 hover:text-brand"
                >
                  +1 (816) 674-8976
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-brand uppercase">
                  Address
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  2845 SW Carlton Dr
                  <br />
                  Lee&apos;s Summit, MO 64082
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
