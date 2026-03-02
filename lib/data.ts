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
    featured: true,
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
  },
];

// ── Achievements ──────────────────────────────────────────────────────────────
// ✏️  Add a new object to add an achievement. Categories: Academic | Hackathon | Certification | Award | Leadership
export const achievements: Achievement[] = [
  {
    id: "asu-deans-list",
    title: "Dean’s List — Arizona State University",
    description: "Maintained a 4.0 (4.2 internal) GPA during first semester in Computer Science.",
    category: "Academic",
    date: "Fall 2025",
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
  },
  {
    id: "icpc-regional",
    title: "ICPC Regional Qualifier",
    description:
      "Qualified for the ICPC North America Regional contest, placing in the top 20% among university teams.",
    category: "Award",
    date: "Nov 2024",
  },
  {
    id: "jpmorgan-quant-program",
    title: "JPMorgan Chase Quantitative Research Experience (Forage)",
    description:
      "Modeled probability of default on a loan portfolio and applied dynamic programming techniques to categorize FICO scores for predictive modeling.",
    category: "Certification",
    date: "Dec 2025",
  },
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
