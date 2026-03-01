# Portfolio — Next.js + TypeScript + Tailwind

Clean, minimal, dark-mode portfolio. Built to be extended.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css        ← CSS variables / design tokens
│   ├── layout.tsx         ← Root layout + metadata
│   └── page.tsx           ← Page composition (import sections here)
│
├── components/
│   ├── ui/                ← Reusable, layout-stable primitives
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Icons.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionContainer.tsx   ← Universal section wrapper
│   │   └── SectionHeading.tsx
│   │
│   ├── sections/          ← Full page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   │
│   └── reactbits/         ← Drop ReactBits components here
│       ├── README.md
│       └── ExampleWrapper.tsx
│
├── lib/
│   ├── data.ts            ← ✏️ All content lives here
│   └── utils.ts
│
└── types/
    └── index.ts           ← Project, Achievement, etc. interfaces
```

---

## ✏️ Updating Content

**Everything** is data-driven. Edit `lib/data.ts` only.

### Add a Project

```ts
// lib/data.ts → projects array
{
  id: "my-new-project",           // unique kebab-case string
  title: "My New Project",
  description: "What it does and why it's interesting.",
  tech: ["Python", "FastAPI", "React"],
  githubUrl: "https://github.com/you/project",
  liveUrl: "https://yourproject.com",     // optional
  videoUrl: "https://youtube.com/...",    // optional
  featured: true,                          // optional — shows a badge
}
```

### Add an Achievement

```ts
// lib/data.ts → achievements array
{
  id: "my-achievement",
  title: "Award / Certificate / Recognition",
  description: "Brief description of what it was for.",
  category: "Academic",   // Academic | Hackathon | Certification | Award | Leadership
  date: "Spring 2025",
  url: "https://...",     // optional
}
```

### Update Personal Info

```ts
// lib/data.ts → personal object
export const personal = {
  name: "Your Name",
  tagline: "CS Student at X · GPA · Focus Areas",
  bio: "Your professional bio...",
  focus: ["Area 1", "Area 2", "Area 3", "Area 4"],
  email: "you@school.edu",
}
```

### Update Skills

```ts
// lib/data.ts → skillCategories array
{ label: "Languages",   skills: ["Python", "TypeScript", ...] },
{ label: "Frameworks",  skills: ["React", "FastAPI", ...] },
{ label: "Tools",       skills: ["Docker", "AWS", ...] },
```

---

## 🎨 Changing the Theme

All design tokens are CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary:   #111214;   /* main background */
  --bg-secondary: #17191c;   /* cards */
  --accent:       #6e8cba;   /* links, highlights — change this to retheme */
  --accent-muted: #4a6080;   /* softer accent */
  /* ... */
}
```

Swap `--accent` to instantly change the highlight color site-wide.

---

## 🧩 Adding ReactBits Components

1. Copy your ReactBits component file into `/components/reactbits/`
2. Search for `REACTBITS SLOT` comments in section files
3. Import and drop your component at that location

**Example — animated hero background:**

```tsx
// components/sections/Hero.tsx
import ParticleField from "@/components/reactbits/ParticleField";

// Wrap the <section> tag:
<ParticleField>
  <section className="relative flex min-h-screen ...">
    ...
  </section>
</ParticleField>
```

**Layout contract for ReactBits components:**
- Must accept `children`
- Visual effects must use `position: absolute; inset: 0`
- Must not add margin/padding that breaks section spacing
- Content must stay at `z-index > 0`

---

## 🌍 Deploying to Vercel

```bash
# Option A: Vercel CLI
npm i -g vercel
vercel

# Option B: Vercel Dashboard
# Push to GitHub → import repo at vercel.com → deploy
```

The project is already Vercel-ready. No additional config needed.

---

## 🔧 Adding a Contact Form (No Backend)

**Option A — Formspree** (easiest)
1. Sign up at formspree.io
2. Create a form, get your endpoint URL
3. Replace the placeholder in `components/sections/Contact.tsx`

**Option B — EmailJS**
1. Sign up at emailjs.com
2. `npm install @emailjs/browser`
3. Wire up in Contact.tsx

---

## 📦 Dependencies

Only what's needed:
- `next` — framework
- `react` / `react-dom` — UI runtime
- `typescript` — type safety
- `tailwindcss` — styling
- `autoprefixer` + `postcss` — CSS processing

No state management, no animation libraries, no heavy UI kits.
Everything is extend-ready when you need it.
