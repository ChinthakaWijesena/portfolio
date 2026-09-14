// ============================================================
//  PORTFOLIO DATA — edit this file to customise your portfolio
// ============================================================

export const personal = {
  name: "Chinthaka Wijesena",
  title: "Full Stack Software Engineer",
  tagline: "Building scalable, elegant software that makes a difference.",
  bio: `I'm a passionate Full Stack Software Engineer with a love for crafting
clean, performant applications. I specialise in building end-to-end products —
from pixel-perfect UIs to robust backend services and cloud infrastructure.
When I'm not coding, I enjoy exploring new technologies and contributing to
open-source projects.`,
  email: "chinthaka@example.com",
  location: "Sri Lanka 🇱🇰",
  resumeUrl: "#",
  social: {
    github: "https://github.com/ChinthakaWijesena",
    linkedin: "https://linkedin.com/in/chinthaka",
    twitter: "https://twitter.com/chinthaka",
  },
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Technologies", value: "15+" },
  ],
};

// ── Skills ────────────────────────────────────────────────────
export type SkillGroup = {
  category: string;
  icon: string;
  items: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    icon: "⌨️",
    items: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 82 },
      { name: "HTML / CSS", level: 95 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: "☁️",
    items: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 72 },
      { name: "Git / GitHub", level: 92 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "DevFlow — Collaborative IDE",
    description:
      "A real-time collaborative code editor with syntax highlighting, live cursors, and integrated terminal. Built with React, WebSockets, and Monaco Editor.",
    tags: ["React", "TypeScript", "WebSockets", "Node.js"],
    github: "https://github.com/ChinthakaWijesena",
    live: "#",
    featured: true,
  },
  {
    title: "ShopSync — E-Commerce Platform",
    description:
      "Full-stack e-commerce app featuring product management, cart, Stripe payments, and an admin dashboard. Deployed on AWS with Docker.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Docker", "AWS"],
    github: "https://github.com/ChinthakaWijesena",
    live: "#",
    featured: true,
  },
  {
    title: "Lumina — AI Task Manager",
    description:
      "AI-powered productivity app that categorises tasks, estimates effort using an LLM, and sends smart reminders. Features a sleek dark dashboard.",
    tags: ["React", "FastAPI", "Python", "OpenAI API"],
    github: "https://github.com/ChinthakaWijesena",
    live: "#",
    featured: true,
  },
  {
    title: "DataLens — Analytics Dashboard",
    description:
      "Interactive data visualisation dashboard that connects to multiple data sources and renders live charts, heatmaps, and KPI widgets.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/ChinthakaWijesena",
  },
];

// ── Experience ────────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Ltd.",
    period: "2024 — Present",
    description:
      "Lead development of customer-facing React apps and Node.js APIs. Reduced page load time by 40% through code splitting and CDN optimisation.",
    type: "work",
  },
  {
    role: "Junior Software Engineer",
    company: "StartupXYZ",
    period: "2023 — 2024",
    description:
      "Built REST APIs, integrated third-party services, and contributed to a micro-frontend architecture migration from a monolithic Angular app.",
    type: "work",
  },
  {
    role: "BSc (Hons) Software Engineering",
    company: "Java Institue",
    period: "2023 — 2026",
    description:
      "Graduated with First Class Honours. Final year project: AI-driven code review tool using static analysis and NLP.",
    type: "education",
  },
];
