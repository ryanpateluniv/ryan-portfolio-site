// components/ui/SectionHeading.tsx
// Consistent typographic heading used at the top of every section.

interface SectionHeadingProps {
  label: string;   // small mono label above the title (e.g. "02 / Projects")
  title: string;   // main heading
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p
        className="mb-3 font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </p>
      <h2
        className="text-3xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
