import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
