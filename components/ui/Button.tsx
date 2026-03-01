// components/ui/Button.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Reusable button. Designed to be drop-in replaceable with a ReactBits
// fancy button — just swap <Button> for the ReactBits component in the section.
//
// REACTBITS SLOT: To use a ReactBits animated button, replace usages of
// <Button variant="primary"> with the ReactBits component in Hero.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  /** Opens link in new tab */
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "border border-transparent text-[var(--bg-primary)] bg-[var(--accent)] hover:opacity-90 focus-visible:ring-[var(--accent)]",
    ghost:
      "border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-muted)] bg-transparent focus-visible:ring-[var(--accent-muted)]",
  };

  const allStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={allStyles}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allStyles}>
      {children}
    </button>
  );
}
