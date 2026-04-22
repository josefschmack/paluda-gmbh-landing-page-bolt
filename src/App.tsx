import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Markenkern } from "@/components/sections/Markenkern";
import { ProcessIntelligence } from "@/components/sections/ProcessIntelligence";
import { Services } from "@/components/sections/Services";
import { Values } from "@/components/sections/Values";
import { Differentiation } from "@/components/sections/Differentiation";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-svh bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Markenkern />
          <ProcessIntelligence />
          <Services />
          <Values />
          <Differentiation />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
