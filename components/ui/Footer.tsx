// components/ui/Footer.tsx
import { personal, socialLinks } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui/Icons";

const iconMap = {
  github:   GitHubIcon,
  linkedin: LinkedInIcon,
  email:    EmailIcon,
  twitter:  EmailIcon, // placeholder
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
