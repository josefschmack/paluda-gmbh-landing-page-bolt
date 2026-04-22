import * as React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const { t } = useLang();
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero='eyebrow']", { y: 20, autoAlpha: 0, duration: 0.8 })
        .from("[data-hero='word']", { y: 80, autoAlpha: 0, duration: 1, stagger: 0.12 }, "-=0.4")
        .from("[data-hero='lede']", { y: 20, autoAlpha: 0, duration: 0.8 }, "-=0.5")
        .from("[data-hero='cta'] > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from("[data-hero='meta'] > *", { autoAlpha: 0, y: 10, duration: 0.5, stagger: 0.06 }, "-=0.3");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative isolate overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 -z-10 paluda-grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.215_25/0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-40 top-40 h-[560px] w-[560px] -z-10 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[420px] w-[420px] -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <div data-hero="eyebrow" className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-[8rem]">
            <span data-hero="word" className="block">{t.hero.h1a}</span>
            <span data-hero="word" className="block">{t.hero.h1b}</span>
            <span data-hero="word" className="block text-primary">{t.hero.h1c}</span>
          </h1>

          <p data-hero="lede" className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.hero.lede}
          </p>

          <div data-hero="cta" className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#kontakt">{t.hero.primary} <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#process-intelligence">{t.hero.secondary} <ArrowDown className="h-4 w-4" /></a>
            </Button>
          </div>

          <dl data-hero="meta" className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-4">
            {[t.hero.meta1, t.hero.meta2, t.hero.meta3, t.hero.meta4].map((m) => (
              <div key={m} className="border-t border-border/60 pt-3">
                <span className="block h-0.5 w-6 -mt-3 mb-3 bg-primary" aria-hidden />
                <span className="text-muted-foreground">{m}</span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
