import * as React from "react";
import { Eye, Activity, Compass, Rocket, Settings } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const icons = [Eye, Activity, Compass, Rocket, Settings];

export function ProcessIntelligence() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  const steps = [
    { t: t.pi.s1t, b: t.pi.s1b },
    { t: t.pi.s2t, b: t.pi.s2b },
    { t: t.pi.s3t, b: t.pi.s3b },
    { t: t.pi.s4t, b: t.pi.s4b },
    { t: t.pi.s5t, b: t.pi.s5b },
  ];

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-pi='step']", {
        scrollTrigger: { trigger: "[data-pi='steps']", start: "top 75%" },
        y: 40, autoAlpha: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
      gsap.to("[data-pi='rail-fill']", {
        scrollTrigger: { trigger: "[data-pi='steps']", start: "top 80%", end: "bottom 70%", scrub: 0.4 },
        scaleY: 1, transformOrigin: "top center", ease: "none",
      });
    }, ref);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <section id="process-intelligence" ref={ref} className="relative border-t border-border/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t.pi.eyebrow}
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.pi.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.pi.lede}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.pi.badges.map((b) => (
                <li key={b} className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div data-pi="steps" className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border" aria-hidden />
            <div data-pi="rail-fill" className="absolute left-[22px] top-0 bottom-0 w-px bg-primary origin-top scale-y-0" aria-hidden />

            <ol className="space-y-10">
              {steps.map((s, i) => {
                const Icon = icons[i];
                return (
                  <li key={s.t} data-pi="step" className="relative pl-16">
                    <div className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{s.t}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{s.b}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
