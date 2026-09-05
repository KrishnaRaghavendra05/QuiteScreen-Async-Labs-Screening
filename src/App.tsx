import { Header } from "./components/layout/Header.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Hero } from "./components/sections/Hero.tsx";
import { SpecStrip } from "./components/sections/SpecStrip.tsx";
import { ValueProposition } from "./components/sections/ValueProposition.tsx";
import { Capabilities } from "./components/sections/Capabilities.tsx";
import { Concepts } from "./components/sections/Concepts.tsx";
import { UseCases } from "./components/sections/UseCases.tsx";
import { HowItWorks } from "./components/sections/HowItWorks.tsx";
import { FinalCta } from "./components/sections/FinalCta.tsx";

/** Composition only — every section owns its own markup, data and styling. */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="top" />
      <Header />

      <main id="main">
        <Hero />
        <SpecStrip />
        <ValueProposition />
        <Capabilities />
        <UseCases />
        <HowItWorks />
        <Concepts />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
