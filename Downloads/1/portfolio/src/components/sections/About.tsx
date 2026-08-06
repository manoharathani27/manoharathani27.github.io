import { FiDatabase, FiLayers, FiCloud, FiShield } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { EDUCATION } from "@/data/experience";

const FOCUS_AREAS = [
  {
    icon: FiLayers,
    title: "Async & queues",
    description: "BullMQ, Redis and job queues — designing for a slow provider, not just the happy path.",
  },
  {
    icon: FiCloud,
    title: "Cloud-native services",
    description: "Stateless APIs on Cloud Run, containerized and deployed with CI/CD from day one.",
  },
  {
    icon: FiDatabase,
    title: "Data-intensive backends",
    description: "Schema design, caching strategy, and query performance under real traffic patterns.",
  },
  {
    icon: FiShield,
    title: "Reliability & correctness",
    description: "Locking, retries and SOLID design that protect systems without punishing users.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Backend-first, systems-minded."
              description="I care less about what a framework looks like and more about what happens when a node dies mid-request."
            />

            <Reveal delay={0.1} className="mt-8">
              <GlassCard className="p-6">
                <p className="eyebrow">Education</p>
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="mt-3">
                    <p className="font-display text-lg font-semibold text-[var(--color-ink)]">{edu.institution}</p>
                    <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{edu.degree}</p>
                    <div className="mt-3 flex items-center gap-4 border-t border-[var(--color-line)] pt-3 font-mono text-xs text-[var(--color-ink-faint)]">
                      <span>{edu.period}</span>
                      <span className="text-[var(--color-signal-400)]">{edu.detail}</span>
                    </div>
                  </div>
                ))}
              </GlassCard>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
                I'm a recently graduated Electronics and Communication engineer from {EDUCATION[0]?.institution},
                but most of my time goes into backend development, Low-Level and High-Level Design — most of what
                I build starts from the same question: what happens when this fails? That habit shapes everything
                from a notification service that survives a slow provider to a booking system that can't
                double-sell a seat.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                I spend most of my time in Node.js and Express backends, with C++ for the LLD-heavy pieces where
                the design of the classes matters as much as the code, deployed on Google Cloud with Cloud Run,
                Cloud SQL and Redis-backed queues doing the heavy lifting underneath.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FOCUS_AREAS.map((area, i) => (
                <Reveal key={area.title} delay={0.1 + i * 0.06}>
                  <GlassCard className="h-full p-5">
                    <area.icon className="h-5 w-5 text-[var(--color-signal-400)]" />
                    <p className="mt-3 font-display text-sm font-semibold text-[var(--color-ink)]">{area.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">{area.description}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
