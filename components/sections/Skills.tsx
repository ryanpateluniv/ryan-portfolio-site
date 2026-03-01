// components/sections/Skills.tsx
// Data-driven. Add or remove skills in lib/data.ts → skillCategories.

import SectionContainer   from "@/components/ui/SectionContainer";
import SectionHeading     from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading label="04 / Skills" title="Technical Toolkit" />

      {/* ── REACTBITS SLOT ──────────────────────────────────────────────────── */}
      {/* Wrap the grid below with a ReactBits stagger animation.              */}
      {/* Each badge is a plain <span> — swap for animated chip components.   */}

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <p
              className="mb-4 font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {category.label}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200 hover:border-[var(--accent-muted)] hover:text-[var(--text-primary)]"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
