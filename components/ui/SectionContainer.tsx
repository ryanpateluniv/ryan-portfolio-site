// components/ui/SectionContainer.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Universal section wrapper. Every page section should use this component
// to ensure consistent max-width, padding, and spacing across the layout.
//
// ReactBits integration: Drop animated backgrounds or scroll-effect wrappers
// AROUND this component. The container itself stays layout-stable.
//
// Usage:
//   <SectionContainer id="projects" className="optional-extra-classes">
//     {children}
//   </SectionContainer>
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  /** Extra Tailwind classes — only add spacing/visual overrides, not layout */
  className?: string;
  /** Use 'sm' for tighter sections like contact */
  size?: "default" | "sm";
}

export default function SectionContainer({
  id,
  children,
  className,
  size = "default",
}: SectionContainerProps) {
  return (
    // ── REACTBITS SLOT ────────────────────────────────────────────────────────
    // To add an animated background (e.g. particles, grid, noise) from ReactBits:
    //   1. Wrap <section> with your ReactBits background component
    //   2. Give the background component position: absolute / inset-0
    //   3. Add relative + overflow-hidden to the <section> below
    // ─────────────────────────────────────────────────────────────────────────
    <section
      id={id}
      className={cn(
        "w-full py-24 px-6",
        size === "sm" && "py-16",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          size === "default" ? "max-w-5xl" : "max-w-2xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
