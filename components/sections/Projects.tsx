// components/sections/Projects.tsx
// Data-driven. Add projects in lib/data.ts — no edits needed here.

import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading   from "@/components/ui/SectionHeading";
import ProjectCard      from "@/components/ui/ProjectCard";
import { projects }     from "@/lib/data";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeading
        label="02 / Projects"
        title="Things I've Built"
        subtitle="A selection of projects spanning ML, systems, and web. Add more in lib/data.ts."
      />

      {/* ── REACTBITS SLOT ──────────────────────────────────────────────────── */}
      {/* Replace the grid below with a ReactBits scroll-reveal grid or        */}
      {/* masonry layout. Each child is a self-contained <ProjectCard />.       */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
