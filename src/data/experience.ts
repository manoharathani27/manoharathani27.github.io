import type { EducationItem, ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-mindmatrix",
    role: "Android App Development Intern — Generative AI",
    org: "Mindmatrix",
    period: "2026",
    location: "Remote",
    summary:
      "Built Android application features with a clean MVVM architecture, integrating REST APIs and local persistence to keep the app usable offline.",
    highlights: [
      "Built Android app features using Kotlin and Jetpack Compose, implementing clean UI components with MVVM architecture for clear separation of concerns.",
      "Integrated REST APIs for real-time data fetching and managed local data persistence using Room Database, enabling offline-first functionality.",
      "Implemented dynamic list rendering with RecyclerView and optimized app performance through efficient state management in the MVVM pattern.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Room Database", "REST APIs"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-bit",
    institution: "Bangalore Institute of Technology",
    degree: "B.E. in Electronics and Communication",
    period: "May 2026",
    detail: "CGPA: 8.83 / 10",
  },
  {
    id: "edu-pu",
    institution: "SRA Composite PU College",
    degree: "Pre-University (PUC)",
    period: "2022",
    detail: "Percentage: 84%",
  },
];
