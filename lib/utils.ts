// lib/utils.ts
// Lightweight class-name merger. Avoids a clsx/cn dependency.

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
