import Image from "next/image";
import { LayaLogo } from "@/components/LayaLogo";

const ingredients = [
  "Olive oil",
  "Clove oil",
  "Rosemary oil",
  "Bay leaf oil",
  "Black seed oil",
  "Sesame oil",
];

const ritualSteps = [
  {
    step: "01",
    title: "Cleanse",
    text: "Clean nails and surrounding skin, then allow to dry.",
  },
  {
    step: "02",
    title: "Apply",
    text: "Place 1 to 2 drops of Beauty Oil on the nail and cuticle.",
  },
  {
    step: "03",
    title: "Massage",
    text: "Massage gently until the oil is fully absorbed.",
  },
  {
    step: "04",
    title: "Repeat",
    text: "Use twice daily, morning and evening, for lasting softness.",
  },
];

const promises = [
  {
    title: "100% natural oils",
    text: "A pure blend chosen for nourishment, not fillers.",
  },
  {
    title: "Simple ritual",
    text: "A few drops, twice a day. Care that fits real life.",
  },
  {
    title: "Made with intention",
    text: "Crafted to bring softness, calm, and quiet confidence.",
  },
];

function BotanicalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M60 18C60 18 52 48 52 78C52 108 60 138 60 182"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M58 52C42 48 28 56 22 70C28 72 44 68 58 56"
        fill="currentColor"
      />
      <path
        d="M62 72C78 68 92 76 98 90C92 92 76 88 62 76"
        fill="currentColor"
      />
      <path
        d="M58 98C40 96 26 106 22 122C30 122 46 116 58 104"
        fill="currentColor"
      />
      <path
        d="M62 118C80 114 96 124 100 140C92 140 76 134 62 122"
        fill="currentColor"
      />
      <ellipse cx="60" cy="28" rx="10" ry="12" fill="currentColor" />
    </svg>
  );
}

function DropMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M40 8C40 8 14 48 14 70C14 86 26 98 40 98C54 98 66 86 66 70C66 48 40 8 40 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-lavender/40 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-5 sm:h-16 sm:px-8">
          <a
            href="#top"
            className="flex shrink-0 items-center text-brand transition-colors duration-300 hover:text-brand-deep"
          >
            <LayaLogo className="h-7 w-auto sm:h-8" />
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs tracking-[0.14em] text-ink/80 uppercase sm:gap-x-7 sm:text-sm">
            <a
              href="#story"
              className="transition-colors duration-300 hover:text-brand"
            >
              Story
            </a>
            <a
              href="#product"
              className="transition-colors duration-300 hover:text-brand"
            >
              Product
            </a>
            <a
              href="#ritual"
              className="transition-colors duration-300 hover:text-brand"
            >
              Ritual
            </a>
            <a
              href="#founder"
              className="transition-colors duration-300 hover:text-brand"
            >
              Founder
            </a>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-brand"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative min-h-[100svh] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 75% 15%, #5a4269 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 15% 85%, #70548355 0%, transparent 50%), linear-gradient(165deg, #2a2330 0%, #3d3245 50%, #2a2330 100%)",
            }}
            aria-hidden
          />

          <BotanicalMark className="animate-fade-in pointer-events-none absolute -right-6 top-28 h-64 w-auto text-lavender/20 sm:right-10 sm:top-24 sm:h-[22rem]" />
          <DropMotif className="animate-fade-in delay-2 pointer-events-none absolute bottom-24 left-[8%] h-16 w-auto text-brand/40 sm:h-20" />
          <DropMotif className="animate-fade-in delay-3 pointer-events-none absolute top-[40%] left-[18%] h-10 w-auto text-lavender/25 sm:h-12" />

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start">
              <div className="animate-fade-up mb-8 text-cream sm:mb-10">
                <LayaLogo className="h-14 w-auto sm:h-[4.5rem] md:h-20" />
              </div>
              <p className="animate-fade-up delay-1 max-w-lg font-display text-3xl font-medium leading-snug tracking-wide text-white sm:text-4xl md:text-5xl">
                Happiness in every drop
              </p>
              <p className="animate-fade-up delay-2 mt-4 max-w-sm text-base leading-relaxed text-white/75 sm:text-lg">
                Nail and cuticle care, made with 100% natural oils.
              </p>
              <div className="animate-fade-up delay-3 mt-8">
                <a
                  href="#product"
                  className="inline-flex items-center bg-brand px-7 py-3.5 text-sm tracking-[0.16em] text-white uppercase transition-colors duration-300 hover:bg-brand-deep"
                >
                  Discover Beauty Oil
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          id="story"
          className="scroll-mt-20 border-b border-lavender/50 bg-cream"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.28em] text-brand uppercase">
                Our story
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
                Softness, rooted in nature
              </h2>
            </div>
            <div className="max-w-xl space-y-5 text-base leading-relaxed text-ink/75 lg:col-span-8 lg:pt-10">
              <p>
                Laya Beauty began with a simple belief: caring for yourself
                should feel calm, honest, and close to nature. Our first chapter
                is Beauty Oil, a nail and cuticle blend made only from natural
                oils.
              </p>
              <p>
                Every drop is meant to nourish quietly, turning a small daily
                ritual into a moment of ease. Happiness, for us, lives in those
                gentle details.
              </p>
            </div>
          </div>
        </section>

        {/* Product */}
        <section
          id="product"
          className="relative scroll-mt-20 overflow-hidden bg-surface"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 90% 10%, var(--tint) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, var(--lavender-soft) 0%, transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-8">
              <div className="relative aspect-[50/85] w-full max-w-[280px]">
                <Image
                  src="/brand/label-front.png"
                  alt="Laya Beauty Oil label artwork"
                  fill
                  className="animate-soft-rise object-contain drop-shadow-[0_24px_48px_rgba(42,35,48,0.12)]"
                  sizes="280px"
                />
              </div>
              <LayaLogo className="h-9 w-auto text-brand" />
            </div>

            <div>
              <p className="text-xs tracking-[0.28em] text-brand uppercase">
                First launch
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
                Beauty Oil
              </h2>
              <p className="mt-2 text-sm tracking-[0.2em] text-brand uppercase">
                Nail &amp; Cuticle Care
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
                A nourishing blend of natural oils designed to soften cuticles
                and care for nails - simple ritual, lasting softness.
              </p>
              <p className="mt-4 text-sm tracking-[0.12em] text-ink/60 uppercase">
                30 mL · 1.0 FL OZ · 100% natural oils
              </p>

              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-lavender pt-8 text-sm text-ink/80">
                {ingredients.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      className="inline-block h-1 w-1 rounded-full bg-brand"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section
          id="promise"
          className="scroll-mt-20 border-y border-lavender/50 bg-tint"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              Why Laya
            </p>
            <h2 className="mt-3 max-w-lg font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              Care you can feel
            </h2>
            <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
              {promises.map((item) => (
                <div key={item.title}>
                  <DropMotif className="mb-5 h-8 w-auto text-brand/70" />
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual */}
        <section id="ritual" className="scroll-mt-20 bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              Daily ritual
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              How to use
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Four quiet steps. Soft nails and cuticles, morning and night.
            </p>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {ritualSteps.map((item) => (
                <li key={item.step} className="border-t border-lavender pt-6">
                  <p className="text-xs tracking-[0.2em] text-brand uppercase">
                    {item.step}
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

        {/* Founder - Rama */}
        <section
          id="founder"
          className="relative scroll-mt-20 overflow-hidden bg-ink"
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 20% 30%, #5a4269 0%, transparent 55%), linear-gradient(160deg, #2a2330 0%, #3d3245 100%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-lavender uppercase">
              A note from our founder
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-white sm:text-5xl">
              From Rama
            </h2>
            <blockquote className="mt-10 max-w-3xl">
              <p className="font-display text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
                &ldquo;I created Laya Beauty for the quiet moments when care
                feels personal again. Beauty Oil is my invitation to slow down,
                nourish your hands, and find a little happiness in every
                drop.&rdquo;
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
          className="scroll-mt-20 border-t border-lavender/60 bg-tint"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs tracking-[0.28em] text-brand uppercase">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-wide text-ink sm:text-5xl">
              Contact
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Questions about Beauty Oil or Laya Beauty? We would love to hear
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

      <footer className="border-t border-lavender/50 bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
          <a href="#top" className="flex items-center text-brand">
            <LayaLogo className="h-7 w-auto sm:h-8" />
          </a>
          <p className="text-sm text-ink/55">
            © {year} Laya Beauty · laya-beauty.com
          </p>
        </div>
      </footer>
    </>
  );
}
