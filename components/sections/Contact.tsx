"use client";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading   from "@/components/ui/SectionHeading";
import Button           from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui/Icons";
import { personal, socialLinks } from "@/lib/data";

const iconMap = {
  github:   GitHubIcon,
  linkedin: LinkedInIcon,
  email:    EmailIcon,
  twitter:  EmailIcon,
};

export default function Contact() {
  return (
    <SectionContainer id="contact" size="sm">
      <SectionHeading label="05 / Contact" title="Let's Connect" />

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">

        {/* Left */}
        <div className="flex-1 space-y-5">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I'm open to internships, research collaborations, and interesting side projects.
            The best way to reach me is by email — I try to respond within a day.
          </p>

          <Button href={`mailto:${personal.email}`} variant="primary" external>
            <EmailIcon className="h-4 w-4" />
            {personal.email}
          </Button>

          <div className="flex items-center gap-5 pt-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: contact form */}
        <div
          className="w-full max-w-sm rounded-xl border p-6 md:w-auto"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <p
            className="mb-4 font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Quick Form
          </p>

          <form
            action="https://formspree.io/f/meelwaqe"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="rounded-md px-3 py-2 text-sm outline-none placeholder:text-[var(--text-muted)]"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-md px-3 py-2 text-sm outline-none placeholder:text-[var(--text-muted)]"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="resize-none rounded-md px-3 py-2 text-sm outline-none placeholder:text-[var(--text-muted)]"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              className="rounded-md px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </SectionContainer>
  );
}