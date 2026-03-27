// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts
// ✏️  Edit this file to update your portfolio content.
// All sections are data-driven — no component edits needed for content changes.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  Achievement,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types";

// ── Personal Info ─────────────────────────────────────────────────────────────
export const personal = {
  name: "Ryan Patel",
  tagline: "Machine Learning · Systems · Arizona State University",
  bio: `I'm a Computer Science student at Arizona State University with a 4.0 GPA,
  focused on building machine learning systems from first principles. I care deeply
  about understanding architectures beyond surface-level implementation — from
  attention mechanisms to optimization dynamics. My goal is to design intelligent,
  scalable systems that create meaningful real-world impact.`,
  focus: [
    "Transformer Architectures & Deep Learning",
    "Applied Computer Vision",
    "Quantitative Modeling & Time-Series Analysis",
    "Systems Thinking & Optimization",
  ],
  email: "official@ryanvpatel.com",
} as const;

// ── Social Links ──────────────────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ryanpateluniv",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-patel-asu29",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:official@ryanvpatel.com`,
    icon: "email",
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
// ✏️  Add a new object to this array to add a project.
// Required: id, title, description, tech, githubUrl
// Optional: liveUrl, videoUrl, featured
export const projects: Project[] = [
  {
    id: "transformer-from-scratch",
    title: "Transformer Language Model — From Scratch (In Progress)",
    description:
      "Implemented a multi-layer decoder-only transformer in PyTorch from first principles, including embeddings, multi-head self-attention, feedforward blocks, and layer normalization. Built a full training pipeline with batching, optimization, evaluation, and autoregressive text generation. Conducting experiments on training dynamics and generalization behavior.",
    tech: ["Python", "PyTorch", "Deep Learning"],
    githubUrl: "https://github.com/ryanpateluniv/transformer-from-scratch",
    featured: false,
  },
  {
    id: "yolo-object-detection",
    title: "Real-Time Object Detection Web App (YOLOv8)",
    description:
      "Developed an interactive web application for real-time object detection on images and videos using YOLOv8 and OpenCV. Includes adjustable confidence thresholds, model size selection, and visual comparison tools for experimentation and performance analysis.",
    tech: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    githubUrl: "https://github.com/ryanpateluniv/object-detector",
    featured: true,
  },
  {
    id: "lstm-stock-prediction",
    title: "Stock Price Direction Prediction — LSTM Model",
    description:
      "Built an LSTM-based time-series model predicting next-day stock direction using nine engineered technical indicators (RSI, MACD, Bollinger Bands). Implemented a custom loss function optimizing for trading profitability and applied time-series cross-validation, achieving 55% directional accuracy and 1.28% MAE.",
    tech: ["Python", "TensorFlow", "Keras", "Pandas"],
    githubUrl: "https://github.com/ryanpateluniv/stock-price-predictor",
    featured: true
  },
  {
  id: "r-stratos",
  title: "R-Stratos — Interactive Global Intelligence Dashboard",
  description:
    "Built a full-stack web application featuring a real-time 3D globe interface with location-based intelligence panels. Users can explore cities and countries to access structured news aggregation, live weather data, and publicly available webcam feeds. Developed with a modular React frontend and Node.js/Express backend including API integration, caching, and rate limiting.",
  tech: ["React", "Node.js", "Express", "Globe.gl", "REST APIs", "Full-Stack Development"],
  githubUrl: "https://github.com/ryanpateluniv/R-Stratos",
  featured: true,
  },
  {
  id: "Life OS",
  title: "Life OS — AI-Powered Personal Life Management App",
  description:
    "AI-powered personal life management web app built with Next.js 16, TypeScript, and Tailwind CSS. Features four modules: a smart scheduler with calendar view and AI-generated time-block plans, a spend tracker with budget alerts and AI roast reports, a Health OS tracking workouts, nutrition, sleep, and mental wellness, and a CS Learning Tracker with resource management and AI study plans. Powered by five specialized Llama 3.3 agents (via Groq) for domain-specific insights across each module. Includes a badge/achievement system, shareable badge cards, and is deployed as a PWA installable on mobile.",
   tech: ["Next.js", "Typescript", "Tailwind CSS", "shadcn/ui", "Prisma", "SQLite", "Groq", "Llama 3.3"],
   githubUrl: "https://github.com/ryanpateluniv/life-os",
   liveUrl: "https://lifeos.ryanvpatel.com/",
  featured: true,
}

];

// ── Achievements ──────────────────────────────────────────────────────────────
// ✏️  Add a new object to add an achievement. Categories: Academic | Hackathon | Certification | Award | Leadership
export const achievements: Achievement[] = [
  {
    id: "jpmorgan-quant-program",
    title: "JPMorgan Chase Quantitative Research Experience (Forage)",
    description:
      "Modeled probability of default on a loan portfolio and applied dynamic programming techniques to categorize FICO scores for predictive modeling.",
    category: "Certification",
    date: "Dec 2025",
  },
  {
    id: "asu-deans-list",
    title: "Dean’s List — Arizona State University",
    description: "Maintained a 4.0 (4.2 internal) GPA during first semester (Fall 2025) in Computer Science.",
    category: "Academic",
    date: "Dec 2025",
  },
  {
  id: "aws-genai-foundations",
  title: "AWS Generative AI Foundations",
  description:
    "Completed certifications in Foundation Models & LLMs, Introduction to GenAI, and Prompt Engineering.",
  category: "Certification",
  date: "Nov 2025",
  },
  {
  id: "coursera-business-analysis",
  title: "Business Analysis & Process Management",
  description:
    "Completed project-based certification focused on structured problem-solving, process optimization, and analytical decision-making.",
  category: "Certification",
  date: "Dec 2024",
  },
  {
    id: "coursera-investment-risk",
    title: "Investment Risk Management",
    description:
      "Completed certification covering risk assessment principles, financial modeling fundamentals, and quantitative evaluation techniques.",
    category: "Certification",
    date: "Dec 2024",
  },
  {
    id: "sof-english-olympiad",
    title: "SOF International English Olympiad",
    description:
      "School Rank 1 · Zonal Rank 20 (Maharashtra & Goa) · International Rank 20.",
    category: "Award",
    date: "2017",
  },
  {
    id: "national-cyber-olympiad",
    title: "National Cyber Olympiad — School Rank 1",
    description:
      "Achieved top performance in national-level computer science competition.",
    category: "Award",
    date: "2014-15",
  }
];

// ── Skills ────────────────────────────────────────────────────────────────────
// ✏️  Add or remove skills within each category freely.
export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "C++ (Learning)"],
  },
  {
    label: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "LSTM Networks", "Computer Vision (YOLO)", "Deep Learning"],
  },
  {
    label: "Tools & Systems",
    skills: ["Git", "GitHub", "Linux", "OpenCV", "Streamlit", "API Integration"],
  },
];
