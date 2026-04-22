import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const links = [
  { id: "markenkern", key: "markenkern" },
  { id: "process-intelligence", key: "plattform" },
  { id: "leistungen", key: "leistungen" },
  { id: "werte", key: "werte" },
  { id: "warum", key: "warum" },
  { id: "kontakt", key: "kontakt" },
] as const;

export function Navigation() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Paluda GmbH">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary">
            <img
              src="/Paluda_GmbH_P_vector_LOGO_2025_12_22_trimmed.svg"
              alt="Paluda"
              className="h-5 w-5 brightness-0 invert"
            />
          </span>
          <span className="font-semibold tracking-wide">Paluda</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">GmbH</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border/70 p-0.5 text-xs sm:flex" role="group" aria-label="Language">
            <button
              onClick={() => setLang("de")}
              className={cn("rounded-full px-2.5 py-1 transition", lang === "de" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")}
              aria-pressed={lang === "de"}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn("rounded-full px-2.5 py-1 transition", lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#kontakt">{t.nav.contactCta}</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-96">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-5">
                {links.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium"
                  >
                    {t.nav[l.key]}
                  </a>
                ))}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setLang("de")}
                    className={cn("rounded-md border px-3 py-1.5 text-sm", lang === "de" && "bg-foreground text-background")}
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={cn("rounded-md border px-3 py-1.5 text-sm", lang === "en" && "bg-foreground text-background")}
                  >
                    English
                  </button>
                </div>
                <Button asChild className="mt-2">
                  <a href="#kontakt" onClick={() => setOpen(false)}>{t.nav.contactCta}</a>
                </Button>
                <Button variant="ghost" size="icon" className="absolute right-3 top-3" onClick={() => setOpen(false)} aria-label="Close">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
