"use client";
// components/ui/Navbar.tsx
// Fixed top navigation with smooth-scroll links.

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { personal } from "@/lib/data";

const NAV_ITEMS = [
  { label: "About",        href: "#about"        },
  { label: "Projects",     href: "#projects"     },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills",       href: "#skills"       },
  { label: "Contact",      href: "#contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-sm tracking-wider transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
        >
          {personal.name.split(" ")[0].toLowerCase()}
          <span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-px w-5 bg-[var(--text-secondary)] transition-all",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-[var(--text-secondary)] transition-all",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-[var(--text-secondary)] transition-all",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
