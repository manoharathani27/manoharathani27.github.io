export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "external" | "resume";
}

export interface TechItem {
  name: string;
  category: "Languages" | "Backend" | "Cloud & Infra" | "Data" | "Tooling";
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  detail: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  stack: string[];
  highlights?: string[];
  metrics: { label: string; value: string }[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  detail: string;
  x: number;
  y: number;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
}
