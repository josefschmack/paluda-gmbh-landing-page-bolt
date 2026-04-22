import * as React from "react";
import { Mail, MapPin, Link as Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Contact() {
  const { t } = useLang();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-ct='headline']", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 50, autoAlpha: 0, duration: 0.9, ease: "expo.out",
      });
      gsap.from("[data-ct='card']", {
        scrollTrigger: { trigger: "[data-ct='cards']", start: "top 80%" },
        y: 40, autoAlpha: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <section id="kontakt" ref={ref} className="relative isolate overflow-hidden border-t border-border/60 py-28 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.6_0.215_25/0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 paluda-grid-bg opacity-60" aria-hidden />

      <div className="mx-auto max-w-7xl px-6">
        <div className="accent-line pl-11 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t.contact.eyebrow}
        </div>
        <h2 data-ct="headline" className="mt-8 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-[5.5rem]">
          {t.contact.title}
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.contact.lede}</p>

        <div data-ct="cards" className="mt-16 grid gap-4 md:grid-cols-3">
          <a
            href={`mailto:${t.contact.email}`}
            data-ct="card"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <span className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary transition-colors group-hover:bg-primary/10">
              <Mail className="h-5 w-5" />
            </span>
            <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{t.contact.emailLabel}</div>
            <div className="mt-2 break-all text-lg font-semibold">{t.contact.email}</div>
            <div className="mt-auto pt-8 text-sm text-primary">
              <span className="inline-flex items-center gap-1">{t.contact.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </a>

          <div data-ct="card" className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{t.contact.addrLabel}</div>
            <address className="mt-2 not-italic leading-relaxed">
              {t.contact.addr.map((l) => (<div key={l}>{l}</div>))}
            </address>
          </div>

          <a
            href="https://www.linkedin.com/company/paluda"
            target="_blank"
            rel="noreferrer noopener"
            data-ct="card"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <span className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary transition-colors group-hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </span>
            <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{t.contact.linkedinLabel}</div>
            <div className="mt-2 text-lg font-semibold">Paluda GmbH</div>
            <div className="mt-auto pt-8 text-sm text-primary">
              <span className="inline-flex items-center gap-1">linkedin.com <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>{t.contact.founder}</div>
          <Button asChild size="lg">
            <a href={`mailto:${t.contact.email}`}>{t.contact.cta} <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
