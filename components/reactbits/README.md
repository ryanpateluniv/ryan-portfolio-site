// components/reactbits/README.md
//
// ═══════════════════════════════════════════════════════════════════════════
// /components/reactbits/ — ReactBits Integration Folder
// ═══════════════════════════════════════════════════════════════════════════
//
// PURPOSE
// This folder is your designated drop zone for ReactBits components.
// It keeps third-party animated components isolated from your core layout.
//
// HOW TO ADD A REACTBITS COMPONENT
// ───────────────────────────────────────────────────────────────────────────
// 1. Install the component (follow ReactBits install instructions)
// 2. Copy/paste the component file into this folder
// 3. Look for "REACTBITS SLOT" comments in the section components to find
//    exactly where to import and drop your component
//
// EXAMPLE: Adding an animated background to the Hero section
// ───────────────────────────────────────────────────────────────────────────
//
//   // components/reactbits/ParticleBackground.tsx  ← your ReactBits file
//   export default function ParticleBackground({ children }) { ... }
//
//   // In components/sections/Hero.tsx, replace:
//   <section className="relative flex min-h-screen ...">
//
//   // With:
//   import ParticleBackground from "@/components/reactbits/ParticleBackground";
//   <ParticleBackground>
//     <section className="relative flex min-h-screen ...">
//       ...
//     </section>
//   </ParticleBackground>
//
// LAYOUT CONTRACT
// ───────────────────────────────────────────────────────────────────────────
// ReactBits components added here MUST:
//   • Accept children and render them
//   • Use position: absolute (not relative/sticky) for visual effects
//   • Not add margin/padding that conflicts with SectionContainer
//   • Not change the document flow
//
// COMPONENTS YOU MIGHT ADD HERE:
//   • AnimatedBackground.tsx  — particles, grid, noise
//   • FancyButton.tsx         — magnetic, shimmer button
//   • AnimatedCard.tsx        — 3D tilt, spotlight hover
//   • TextReveal.tsx          — stagger, typewriter, scramble
//   • ScrollProgress.tsx      — scroll-linked animations
//   • CountUp.tsx             — animated number counters
