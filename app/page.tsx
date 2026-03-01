// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Root page. Import and order sections here.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar         from "@/components/ui/Navbar";
import Hero           from "@/components/sections/Hero";
import About          from "@/components/sections/About";
import Projects       from "@/components/sections/Projects";
import Achievements   from "@/components/sections/Achievements";
import Skills         from "@/components/sections/Skills";
import Contact        from "@/components/sections/Contact";
import Footer         from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
