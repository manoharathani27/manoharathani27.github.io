import { FiArrowUpRight, FiGithub, FiBookOpen } from "react-icons/fi";
import { TbArrowDown } from "react-icons/tb";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { FEATURED_PROJECT } from "@/data/projects";

const sourceLink = FEATURED_PROJECT.links.find((l) => l.label === "Source");
const swaggerLink = FEATURED_PROJECT.links.find((l) => l.label.toLowerCase().includes("swagger"));

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Featured Build" title="A closer look at my flagship project" />

        <Reveal delay={0.1} className="mt-12">
          <GlassCard hoverLift={false} className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10">
                <span className="eyebrow">Backend · Cloud-Native</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                  {FEATURED_PROJECT.name}
                </h3>
                <p className="mt-3 text-base text-[var(--color-ink-muted)]">{FEATURED_PROJECT.tagline}</p>

                <p className="mt-6 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {FEATURED_PROJECT.description}
                </p>

                {FEATURED_PROJECT.highlights && FEATURED_PROJECT.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {FEATURED_PROJECT.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-data-400)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--color-line)] bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                      The problem
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                      {FEATURED_PROJECT.problem}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-line)] bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                      My role
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                      {FEATURED_PROJECT.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {FEATURED_PROJECT.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-ink-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#architecture" className="btn-primary">
                    Explore the architecture <TbArrowDown className="h-4 w-4" />
                  </a>
                  {swaggerLink && (
                    <a href={swaggerLink.href} target="_blank" rel="noreferrer" className="btn-ghost">
                      <FiBookOpen className="h-4 w-4" /> Live API Docs
                    </a>
                  )}
                  {sourceLink && (
                    <a href={sourceLink.href} target="_blank" rel="noreferrer" className="btn-ghost">
                      <FiGithub className="h-4 w-4" /> Source
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 border-t border-[var(--color-line)] bg-white/[0.015] p-8 sm:p-10 lg:border-l lg:border-t-0">
                {FEATURED_PROJECT.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-[var(--color-ink-muted)]">{m.label}</span>
                    <span className="text-right font-mono text-sm font-medium text-[var(--color-ink)]">
                      {m.value}
                    </span>
                  </div>
                ))}
                <a
                  href="#architecture"
                  className="mt-2 flex items-center justify-between rounded-lg border border-dashed border-[var(--color-line-strong)] px-4 py-3 text-sm text-[var(--color-signal-400)] transition-colors hover:border-[var(--color-signal-400)] hover:bg-[var(--color-signal-500)]/5"
                >
                  View interactive diagram <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
