import * as React from "react";
import { BrainCircuit, GitBranch, ChartLine as LineChart, Code as Code2, ServerCog, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const icons = [BrainCircuit, GitBranch, LineChart, Code2, ServerCog];

export function Services() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-svc='card']", {
        scrollTrigger: { trigger: "[data-svc='grid']", start: "top 80%" },
        y: 50, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  const cards = t.services.cards;

  return (
    <section id="leistungen" ref={ref} className="relative border-t border-border/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t.services.eyebrow}
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{t.services.lede}</p>
        </div>

        <div data-svc="grid" className="mt-14 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {cards.map((c, i) => {
            const Icon = icons[i];
            const span = i === 0
              ? "lg:col-span-4 lg:row-span-1"
              : i === 1
              ? "lg:col-span-2 lg:row-span-2"
              : i === 2
              ? "lg:col-span-2 lg:row-span-1"
              : i === 3
              ? "lg:col-span-2 lg:row-span-1"
              : "lg:col-span-2 lg:row-span-1";
            const featured = i === 0 || i === 1;
            return (
              <article
                key={c.name}
                data-svc="card"
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/60",
                  span,
                  featured && "lg:p-10"
                )}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">{c.tag}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border text-primary transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className={cn("mt-8 font-bold leading-tight tracking-tight", featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")}>
                  {c.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <ul className="mt-6 grid gap-2 text-sm">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-primary" aria-hidden />
                      <span className="text-muted-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-end pt-8 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
