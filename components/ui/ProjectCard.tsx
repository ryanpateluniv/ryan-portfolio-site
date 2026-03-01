// components/ui/ProjectCard.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Individual project card. Self-contained, data-driven.
//
// REACTBITS SLOT: Replace this entire component with a ReactBits animated card,
// or wrap the inner <article> with a ReactBits hover-effect component.
// ─────────────────────────────────────────────────────────────────────────────

import type { Project } from "@/types";
import { GitHubIcon, ExternalLinkIcon, VideoIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // ── REACTBITS SLOT — animated / 3D card wrapper goes here ─────────────────
    <article
      className="group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:border-[var(--accent-muted)]"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <span
          className="absolute right-4 top-4 rounded-full px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
          style={{
            background: "var(--accent-muted)",
            color: "var(--text-primary)",
            opacity: 0.7,
          }}
        >
          Featured
        </span>
      )}

      {/* Title */}
      <h3
        className="mb-2 text-base font-semibold leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="mb-4 flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-md px-2 py-0.5 font-mono text-[11px] tracking-wide"
            style={{
              background: "var(--bg-tertiary)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-muted)" }}
          aria-label={`GitHub repo for ${project.title}`}
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          Code
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLinkIcon className="h-3.5 w-3.5" />
            Live
          </a>
        )}

        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
            aria-label={`Demo video for ${project.title}`}
          >
            <VideoIcon className="h-3.5 w-3.5" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
