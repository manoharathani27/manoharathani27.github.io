import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put this into practice"
          description="Hands-on time building and operating backend services in real environments."
        />

        <div className="relative mt-14 space-y-8">
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-[var(--color-line)] sm:block" />

          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className="relative pl-0 sm:pl-10">
                <span className="absolute left-0 top-1.5 hidden h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[var(--color-signal-400)] ring-4 ring-[var(--color-signal-500)]/20 sm:block" />
                <GlassCard className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">{exp.role}</h3>
                      <p className="mt-1 text-sm text-[var(--color-signal-400)]">
                        {exp.org} · {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--color-ink-faint)]">{exp.period}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">{exp.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-data-400)]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-ink-muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
