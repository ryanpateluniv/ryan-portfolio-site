// ─────────────────────────────────────────────────────────────────────────────
// types/index.ts
// Central type definitions. Update these interfaces as your data grows.
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Tech stack tags shown as badges */
  tech: string[];
  githubUrl: string;
  /** Optional: live deployment URL */
  liveUrl?: string;
  /** Optional: YouTube video URL or embedded link */
  videoUrl?: string;
  /** Marks projects to highlight at the top */
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  /** e.g. "Academic" | "Hackathon" | "Certification" | "Award" */
  category: AchievementCategory;
  /** e.g. "Spring 2024" or "2024" */
  date: string;
  /** Optional: link to certificate, article, etc. */
  url?: string;
}

export type AchievementCategory =
  | "Academic"
  | "Hackathon"
  | "Certification"
  | "Award"
  | "Leadership";

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  /** Icon identifier — matches the ones exported from components/ui/Icons.tsx */
  icon: "github" | "linkedin" | "email" | "twitter";
}
