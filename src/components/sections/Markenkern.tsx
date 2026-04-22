import * as React from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Markenkern() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-mk='claim'] span", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        yPercent: 110,
        stagger: 0.05,
        duration: 1,
        ease: "expo.out",
      });
      gsap.from("[data-mk='body']", {
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from("[data-mk='kpi']", {
        scrollTrigger: { trigger: "[data-mk='kpis']", start: "top 80%" },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  const claim = t.marken.claim.split(" ");

  return (
    <section id="markenkern" ref={ref} className="relative border-t border-border/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t.marken.eyebrow}
        </div>
        <h2 data-mk="claim" className="mt-10 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {claim.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-top pr-[0.22em]">
              <span className="inline-block">{w}</span>
            </span>
          ))}
        </h2>
        <p data-mk="body" className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {t.marken.body}
        </p>

        <div data-mk="kpis" className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {[
            { k: t.marken.kpi1k, v: t.marken.kpi1v },
            { k: t.marken.kpi2k, v: t.marken.kpi2v },
            { k: t.marken.kpi3k, v: t.marken.kpi3v },
          ].map((item) => (
            <div key={item.k} data-mk="kpi" className="bg-card p-8">
              <div className="h-0.5 w-8 bg-primary" aria-hidden />
              <div className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">{item.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
