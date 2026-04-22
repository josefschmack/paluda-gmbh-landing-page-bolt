import * as React from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Values() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-val='q']", {
        scrollTrigger: { trigger: "[data-val='questions']", start: "top 80%" },
        y: 30, autoAlpha: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
      gsap.from("[data-val='core']", {
        scrollTrigger: { trigger: "[data-val='coreGrid']", start: "top 80%" },
        y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <section id="werte" ref={ref} className="relative border-t border-border/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t.values.eyebrow}
        </div>
        <h2 className="mt-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {t.values.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.values.lede}</p>

        <div data-val="questions" className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { t: t.values.p1t, b: t.values.p1b, n: "01" },
            { t: t.values.p2t, b: t.values.p2b, n: "02" },
            { t: t.values.p3t, b: t.values.p3b, n: "03" },
          ].map((q) => (
            <div key={q.n} data-val="q" className="relative overflow-hidden rounded-xl border border-border bg-card p-8">
              <div className="font-mono text-xs tracking-widest text-primary">{q.n}</div>
              <div className="mt-6 text-2xl font-bold tracking-tight">{q.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.b}</p>
            </div>
          ))}
        </div>

        <div data-val="coreGrid" className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {t.values.core.map((c, i) => (
            <div key={c.t} data-val="core" className="bg-card p-8">
              <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <div className="mt-4 h-0.5 w-6 bg-primary" aria-hidden />
              <h3 className="mt-6 text-xl font-bold tracking-tight">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-y border-border/70 py-6">
          <div className="marquee">
            <div className="marquee-track">
              {[...t.values.marquee, ...t.values.marquee].map((w, i) => (
                <span key={i} className="flex items-center gap-8 text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl">
                  {w}
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
