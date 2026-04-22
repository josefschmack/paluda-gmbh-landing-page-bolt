/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { resources, type I18nDict, type Lang } from "./resources";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: I18nDict;
};

const LanguageContext = React.createContext<Ctx | undefined>(undefined);

const STORAGE_KEY = "paluda.lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "de";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  const nav = navigator.language?.toLowerCase() ?? "de";
  return nav.startsWith("de") ? "de" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(detectInitial);

  const setLang = React.useCallback((l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = React.useMemo<Ctx>(() => ({ lang, setLang, t: resources[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
