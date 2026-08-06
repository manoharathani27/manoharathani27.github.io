import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiSwagger,
  SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbStack2, TbSitemap } from "react-icons/tb";
import { FiKey, FiDatabase, FiRefreshCw } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { TECH_STACK, TECH_CATEGORIES } from "@/data/techstack";
import type { TechItem } from "@/types";

const ICON_MAP: Record<string, IconType> = {
  c: SiC,
  cpp: SiCplusplus,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: TbApi,
  socketio: SiSocketdotio,
  queue: TbStack2,
  jwt: FiKey,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  gcp: SiGooglecloud,
  cloudsql: FiDatabase,
  docker: SiDocker,
  cicd: FiRefreshCw,
  git: SiGit,
  vscode: VscVscode,
  swagger: SiSwagger,
  uml: TbSitemap,
  linux: SiLinux,
};

export default function TechStack() {
  const [active, setActive] = useState<TechItem["category"] | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.category === active)),
    [active]
  );

  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tooling"
          title="The stack behind the systems"
          description="Languages and infrastructure I reach for when building services that need to stay up."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {(["All", ...TECH_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-[var(--color-signal-400)] bg-[var(--color-signal-500)]/15 text-[var(--color-signal-50)]"
                  : "border-[var(--color-line)] text-[var(--color-ink-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((tech, i) => {
            const Icon = ICON_MAP[tech.icon];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 12) * 0.03 }}
              >
                <GlassCard className="flex flex-col items-center gap-2.5 px-3 py-5 text-center">
                  {Icon && <Icon className="h-7 w-7 text-[var(--color-signal-400)]" aria-hidden="true" />}
                  <span className="text-xs font-medium text-[var(--color-ink-muted)]">{tech.name}</span>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
