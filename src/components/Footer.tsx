import { useLang } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold">P</span>
            <span className="font-semibold tracking-wide">Paluda GmbH</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:flex sm:gap-8">
          <a href="#markenkern" className="text-muted-foreground hover:text-foreground">{t.nav.markenkern}</a>
          <a href="#leistungen" className="text-muted-foreground hover:text-foreground">{t.nav.leistungen}</a>
          <a href="#werte" className="text-muted-foreground hover:text-foreground">{t.nav.werte}</a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground">{t.nav.kontakt}</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-border/60 px-6 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>&copy; {year} Paluda GmbH. {t.footer.rights}</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">{t.footer.impressum}</a>
          <a href="#" className="hover:text-foreground">{t.footer.datenschutz}</a>
        </div>
      </div>
    </footer>
  );
}
