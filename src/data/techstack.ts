import type { TechItem } from "@/types";

export const TECH_STACK: TechItem[] = [
  // Languages
  { name: "C", category: "Languages", icon: "c" },
  { name: "C++", category: "Languages", icon: "cpp" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "REST APIs", category: "Backend", icon: "api" },
  { name: "Socket.IO", category: "Backend", icon: "socketio" },
  { name: "BullMQ", category: "Backend", icon: "queue" },
  { name: "JWT", category: "Backend", icon: "jwt" },

  // Data
  { name: "PostgreSQL", category: "Data", icon: "postgresql" },
  { name: "MongoDB", category: "Data", icon: "mongodb" },
  { name: "Redis", category: "Data", icon: "redis" },

  // Cloud & Infra
  { name: "Google Cloud Run", category: "Cloud & Infra", icon: "gcp" },
  { name: "Cloud SQL", category: "Cloud & Infra", icon: "cloudsql" },
  { name: "Docker", category: "Cloud & Infra", icon: "docker" },
  { name: "CI/CD", category: "Cloud & Infra", icon: "cicd" },

  // Tooling
  { name: "Git", category: "Tooling", icon: "git" },
  { name: "VS Code", category: "Tooling", icon: "vscode" },
  { name: "Swagger / OpenAPI", category: "Tooling", icon: "swagger" },
  { name: "UML & Design Patterns", category: "Tooling", icon: "uml" },
  { name: "Linux", category: "Tooling", icon: "linux" },
];

export const TECH_CATEGORIES: TechItem["category"][] = [
  "Languages",
  "Backend",
  "Cloud & Infra",
  "Data",
  "Tooling",
];
