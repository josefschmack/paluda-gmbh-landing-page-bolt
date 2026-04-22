import * as React from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Differentiation() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-diff='row']", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        x: -40, autoAlpha: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <section id="warum" ref={ref} className="relative border-t border-border/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t.diff.eyebrow}
        </div>
        <h2 className="mt-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {t.diff.title}
        </h2>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {t.diff.items.map((it, i) => (
            <li key={it.t} data-diff="row" className="grid gap-4 py-8 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-10">
              <span className="font-mono text-xs tracking-widest text-primary">0{i + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{it.t}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{it.b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
