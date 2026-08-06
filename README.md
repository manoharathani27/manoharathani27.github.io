# Manohar Mahadev Athani — Portfolio

A production-grade personal portfolio built with **React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, React Icons and React Router**. Dark theme, glassmorphism, an animated aurora background, and an interactive architecture diagram for the flagship project.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (dev server + build)
- **Tailwind CSS v4** (CSS-first `@theme` config, no `tailwind.config.js`)
- **Framer Motion** for scroll reveals and micro-interactions
- **React Icons** (Feather + Simple Icons + fa6 sets)
- **React Router** (single route today, wired up for growth)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── ui/              # AuroraBackground, GlassCard, Reveal, SectionHeading
│   └── sections/        # Hero, About, Experience, TechStack, FeaturedProject,
│                         # ArchitectureVisualization, OtherProjects, GitHubSection, Contact
├── data/                 # social.ts, techstack.ts, experience.ts, projects.ts — all editable content
├── hooks/                # useScrollSpy
├── pages/                # Home.tsx (composes all sections)
├── types/                # shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css             # Tailwind v4 theme tokens + design system
```

Everything renders from the files in `src/data/` — **edit content there**, not inside the components, unless you're changing layout/behavior.

## Things to personalize before you ship this

1. **Resume** — `public/resume.pdf` is a placeholder. Replace it with your real resume, keeping the same filename (or update `PROFILE.resume` in `src/data/social.ts` if you rename it).
2. **Experience** — `src/data/experience.ts` has one placeholder role clearly marked with a `TODO`. Replace it with your real internship/work history. Add more objects to the array for additional roles.
3. **Project repo links** — In `src/data/projects.ts`, every project's "Source" link currently points at your GitHub profile as a placeholder. Update each `links` array with the actual repo URL once you confirm the exact repo names.
4. **Profile photo (optional)** — The Hero section currently uses an animated terminal-style panel instead of a photo. If you'd like a photo instead, drop it in `src/assets/`, import it in `Hero.tsx`, and I can help wire it in.
5. **Email address** — `PROFILE.email` in `src/data/social.ts` is a placeholder (`manoharathani27@gmail.com`). Update it to your real inbox — the Contact form and footer both use it.

## Deploying to GitHub Pages (manoharathani27.github.io)

Since your portfolio URL is a root **user page** (`https://manoharathani27.github.io`), this repo should be named exactly `manoharathani27.github.io`.

**Option A — GitHub Actions (included, recommended)**

A workflow is already set up at `.github/workflows/deploy.yml`. It builds and deploys automatically on every push to `main`.

1. Push this project to a repo named `manoharathani27.github.io`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Push to `main` — the site will build and publish automatically.

**Option B — Manual `gh-pages` deploy**

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Then set **Settings → Pages → Source** to the `gh-pages` branch.

## Notes on the Contact form

The contact form doesn't call a backend — it composes a `mailto:` link with the visitor's message and opens their email client. This keeps the site fully static (no server, no data stored) and works out of the box on GitHub Pages. If you'd rather collect messages directly, swap the `handleSubmit` in `src/components/sections/Contact.tsx` for a service like Formspree, EmailJS, or a small serverless function.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (aurora drift, transitions and scroll animations are disabled).
- Visible focus states on all interactive elements.
- Fully responsive from small mobile widths up; the architecture diagram scrolls horizontally on narrow screens rather than cramping.
