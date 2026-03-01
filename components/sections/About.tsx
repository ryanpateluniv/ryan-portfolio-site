// components/sections/About.tsx
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading   from "@/components/ui/SectionHeading";
import { personal }     from "@/lib/data";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionHeading label="01 / About" title="Who I Am" />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Bio */}
        <div className="space-y-4">
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {personal.bio}
          </p>
          <p
            className="font-mono text-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Currently pursuing a B.S. in Computer Science at Arizona State University.
            Open to internships, research roles, and collaborative projects.
          </p>
        </div>

        {/* Focus areas */}
        <div>
          <p
            className="mb-4 font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Current Focus
          </p>
          <ul className="space-y-3">
            {personal.focus.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {/* Accent dash */}
                <span
                  className="mt-2 block h-px w-4 shrink-0"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
