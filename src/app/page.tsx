import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
