import type { NavLink, SocialLink } from "@/types";

export const PROFILE = {
  name: "Manohar Mahadev Athani",
  role: "Backend Engineer",
  tagline: "I design and build backend systems that stay correct under load.",
  location: "Bengaluru, India",
  college: "Bangalore Institute of Technology",
  degree: "B.E. in Electronics and Communication",
  cgpa: "8.83",
  email: "athanimanohar27@gmail.com",
  phone: "+91-9353599181",
  github: "https://github.com/manoharathani27",
  linkedin: "https://www.linkedin.com/in/manohar-athani-777a84262",
  portfolio: "https://manoharathani27.github.io",
  leetcode: "https://leetcode.com/manohar27athani",
  swagger: "https://notification-service-710340448406.asia-south1.run.app/api-docs/",
  resume: "/resume.pdf",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#featured-project" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: PROFILE.github, icon: "github" },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "mail" },
];

