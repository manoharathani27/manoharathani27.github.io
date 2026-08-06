import { FiArrowUpRight, FiGithub, FiBookOpen } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { OTHER_PROJECTS } from "@/data/projects";
import { PROFILE } from "@/data/social";

const MOCKUP_LINES: Record<string, string[]> = {
  "notification-service": [
    "POST /v1/notifications",
    "{ channel: \"in-app\", template: \"ride_matched\" }",
    "→ 202 Accepted · queued (BullMQ)",
  ],
  "url-shortener": [
    "POST /v1/links { url }",
    "→ mnhr.to/x7Ka2 · cache: MISS",
    "→ 301 redirect · cache: HIT (95%)",
  ],
  "task-scheduler-system": [
    "task-scheduler --status",
    "pubsub: task-queue · at-least-once",
    "→ heap.peek() O(1) · executed, idempotent",
  ],
  "rate-limiter": [
    "GET /v1/analytics/summary",
    "algorithm: sliding-window · redis: OK",
    "→ 429 after burst · fail-open: enabled",
  ],
};

export default function OtherProjects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="More Work"
          title="Other projects worth a look"
          description="Smaller in scope, each one built to explore a specific backend problem in depth."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {OTHER_PROJECTS.map((project, i) => {
            const lines = MOCKUP_LINES[project.id] ?? [];
            const swaggerLink = project.links.find((l) => l.label.toLowerCase().includes("swagger"));
            const sourceLink = project.links.find((l) => l.label.toLowerCase().includes("source"));

            return (
              <Reveal key={project.id} delay={(i % 2) * 0.08}>
                <GlassCard className="flex h-full flex-col p-0">
                  <div className="border-b border-[var(--color-line)] bg-white/[0.02] p-5 font-mono text-[12px] leading-relaxed">
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                      <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                    </div>
                    {lines.map((line, idx) => (
                      <p key={idx} className={idx === 0 ? "text-[var(--color-ink-muted)]" : idx === lines.length - 1 ? "text-[var(--color-ok-500)]" : "text-[var(--color-ink-faint)]"}>
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">{project.name}</h3>
                    <p className="mt-1.5 text-sm text-[var(--color-ink-muted)]">{project.tagline}</p>

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-data-400)]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-[var(--color-line)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-ink-muted)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-1 flex-col justify-end gap-3">
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 border-t border-[var(--color-line)] pt-4">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-[10px] uppercase tracking-wide text-[var(--color-ink-faint)]">{m.label}</p>
                            <p className="text-xs font-medium text-[var(--color-ink)]">{m.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        {swaggerLink && (
                          <a
                            href={swaggerLink.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-signal-400)] hover:text-[var(--color-signal-500)]"
                          >
                            <FiBookOpen className="h-4 w-4" /> Swagger Docs <FiArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <a
                          href={sourceLink?.href ?? PROFILE.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                        >
                          <FiGithub className="h-4 w-4" /> Source
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
