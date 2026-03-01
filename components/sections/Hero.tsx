// components/sections/Hero.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Hero section — first thing visitors see. Full-viewport with centered content.
//
// REACTBITS SLOTS (marked with comments):
//   • Animated background: wrap <section> with a ReactBits background component
//   • Fancy buttons: replace <Button> components with ReactBits button variants
//   • Text animations: wrap <h1> / <p> in ReactBits text reveal components
// ─────────────────────────────────────────────────────────────────────────────
"use client";
import dynamic from "next/dynamic";

const Orb = dynamic(() => import("@/components/reactbits/Orb"), { ssr: false });

import { personal, socialLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon, EmailIcon, ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";


const iconMap = {
  github:   GitHubIcon,
  linkedin: LinkedInIcon,
  email:    EmailIcon,
  twitter:  EmailIcon,
};

export default function Hero() {
  return (
    // ── REACTBITS SLOT — Animated background ──────────────────────────────────
    // Example: <AnimatedBackground> wrapping <section> below
    // The section itself must stay position: relative with z-10 on content
    // ─────────────────────────────────────────────────────────────────────────
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Orb background ───────────────────────────────────────────────────
      Positioned absolute, full bleed behind all content.
      Tweak hue (0–360) to shift the orb color. ── */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={220}
          forceHoverState={false}
          backgroundColor="#111214"
        />
      </div>

      {/* Subtle vignette so content stays readable over the orb */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, var(--bg-primary) 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-20 flex max-w-2xl flex-col items-center gap-8">

        {/* ── REACTBITS SLOT — Text reveal animation ────────────────────────── */}
        {/* Wrap the content below in a ReactBits stagger/reveal component    */}

        {/* Mono label */}
        <p
          className="animate-fade-in font-mono text-xs tracking-[0.3em] uppercase opacity-0-start"
          style={{ color: "var(--accent)", animationFillMode: "forwards" }}
        >
          Computer Science · Machine Learning Enthusiast
        </p>

        {/* Name */}
        <h1
          className="animate-fade-up font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl opacity-0-start animate-delay-100"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
            animationFillMode: "forwards",
          }}
        >
          {personal.name}
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up max-w-md text-base leading-relaxed opacity-0-start animate-delay-200"
          style={{
            color: "var(--text-secondary)",
            animationFillMode: "forwards",
          }}
        >
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        {/* ── REACTBITS SLOT — Replace buttons with ReactBits variants ──────── */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-3 opacity-0-start animate-delay-300"
          style={{ animationFillMode: "forwards" }}
        >
          <Button href="#projects" variant="primary">
            View Projects <ArrowRightIcon className="h-3.5 w-3.5" />
          </Button>
          <Button href="#contact" variant="ghost">
            Contact Me
          </Button>
          <Button href="/resume.pdf" variant="ghost" external>
            <DownloadIcon className="h-3.5 w-3.5" />
            Resume
          </Button>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-up flex items-center gap-5 opacity-0-start animate-delay-400"
          style={{ animationFillMode: "forwards" }}
        >
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
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40"
        aria-hidden="true"
      >
        <div className="h-8 w-px" style={{ background: "var(--text-muted)" }} />
      </div>
    </section>
  );
}
