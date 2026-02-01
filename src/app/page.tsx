import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import { Contact } from "./components/Contact";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <FadeInSection>
        <TechStack />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </main>
  );
}
