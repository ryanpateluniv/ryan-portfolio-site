// components/sections/Achievements.tsx
// Data-driven. Add achievements in lib/data.ts.

import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading   from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";
import type { AchievementCategory } from "@/types";
import { ExternalLinkIcon } from "@/components/ui/Icons";

const categoryColors: Record<AchievementCategory, string> = {
  Academic:      "#6e8cba",
  Hackathon:     "#7aab8a",
  Certification: "#b08a6e",
  Award:         "#a07ab0",
  Leadership:    "#8aa4b0",
};

export default function Achievements() {
  return (
    <SectionContainer id="achievements">
      <SectionHeading
        label="03 / Achievements"
        title="Milestones"
        subtitle="Academic recognition, competitions, and certifications."
      />

      <div className="space-y-4">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="flex flex-col gap-1 rounded-xl border p-5 transition-colors duration-200 hover:border-[var(--accent-muted)] sm:flex-row sm:items-start sm:gap-5"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-subtle)",
            }}
          >
            {/* Category badge */}
            <div className="shrink-0 pt-0.5">
              <span
                className="inline-block rounded-md px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
                style={{
                  color: categoryColors[achievement.category],
                  border: `1px solid ${categoryColors[achievement.category]}40`,
                  background: `${categoryColors[achievement.category]}10`,
                }}
              >
                {achievement.category}
              </span>
            </div>

            <div className="flex-1">
              {/* Title + optional link */}
              <div className="flex items-center gap-2">
                <h3
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {achievement.title}
                </h3>
                {achievement.url && (
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${achievement.title}`}
                    className="transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p
                className="mt-1 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {achievement.description}
              </p>
            </div>

            {/* Date */}
            <p
              className="shrink-0 font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {achievement.date}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
