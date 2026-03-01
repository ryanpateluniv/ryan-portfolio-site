// components/reactbits/ExampleWrapper.tsx
// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE: Copy this file and replace the inner logic with your ReactBits
// component. The wrapper interface guarantees layout compatibility.
// ─────────────────────────────────────────────────────────────────────────────

interface ReactBitsWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Template wrapper for ReactBits components.
 * 1. Copy this file
 * 2. Rename it (e.g., ParticleBackground.tsx)
 * 3. Import your ReactBits component inside
 * 4. Render it behind children using position: absolute
 */
export default function ReactBitsWrapper({ children, className }: ReactBitsWrapperProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* ── INSERT REACTBITS COMPONENT HERE ─────────────────────────────────── */}
      {/* Example:
          <YourReactBitsComponent
            className="pointer-events-none absolute inset-0 z-0"
          />
      */}
      {/* ─────────────────────────────────────────────────────────────────────── */}

      {/* Content always sits above the effect */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
