import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { PROFILE } from "@/data/social";
import { ALL_PROJECTS } from "@/data/projects";
import profilePhoto from "@/assets/profile-photo.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-28 pb-16">
      <div className="section-shell grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-[var(--color-ink-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ok-500)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-ok-500)]" />
            </span>
            open to backend engineering roles
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
          >
            Building systems that
            <br />
            <span className="text-gradient">stay correct under load.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
            I'm <span className="text-[var(--color-ink)]">{PROFILE.name}</span>, a backend engineer who designs
            distributed services, message-driven pipelines and APIs that hold up in production —
            not just in a demo.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#featured-project" className="btn-primary">
              View featured work <FiArrowUpRight className="h-4 w-4" />
            </a>
            <a href={PROFILE.resume} download className="btn-ghost">
              <HiOutlineArrowDownTray className="h-4 w-4" />
              Download résumé
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <FiGithub className="h-4.5 w-4.5" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <FiLinkedin className="h-4.5 w-4.5" /> LinkedIn
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--color-ink)]">8.83</p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">CGPA · {PROFILE.college}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--color-ink)]">{ALL_PROJECTS.length}</p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">Backend systems shipped</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--color-ink)]">1</p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">Live documented API</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass relative overflow-hidden rounded-[28px] p-2.5">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src={profilePhoto}
                alt={PROFILE.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(5,6,10,0.65) 100%)",
                }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ok-500)] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-ok-500)]" />
            </span>
            <div>
              <p className="text-xs font-semibold text-[var(--color-ink)]">{PROFILE.role}</p>
              <p className="font-mono text-[10px] text-[var(--color-ink-faint)]">{PROFILE.location}</p>
            </div>
          </motion.div>

          <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-[var(--color-signal-500)]/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-[var(--color-data-500)]/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
