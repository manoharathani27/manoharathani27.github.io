import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/social";

const GITHUB_USERNAME = "manoharathani27";

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Open Source"
          title="Code, in the open"
          description="Most of what I build lives on GitHub — commits, side projects and the occasional 2am refactor."
        />

        <Reveal delay={0.1} className="mt-12">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white/[0.03]">
                  <FiGithub className="h-5 w-5 text-[var(--color-ink)]" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-[var(--color-ink)]">@{GITHUB_USERNAME}</p>
                  <p className="text-sm text-[var(--color-ink-muted)]">Backend projects, tooling &amp; experiments</p>
                </div>
              </div>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-primary">
                View GitHub profile <FiArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=00000000&title_color=2F6FED&text_color=8C93A6&icon_color=22D3EE`}
                alt={`GitHub stats for ${GITHUB_USERNAME}`}
                loading="lazy"
                className="w-full rounded-xl"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=00000000&title_color=2F6FED&text_color=8C93A6`}
                alt={`Most used languages for ${GITHUB_USERNAME}`}
                loading="lazy"
                className="w-full rounded-xl"
              />
            </div>

            <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-line)] bg-white/[0.02] p-4">
              <img
                src={`https://ghchart.rshah.org/2F6FED/${GITHUB_USERNAME}`}
                alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
                loading="lazy"
                className="w-full min-w-[640px]"
              />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
