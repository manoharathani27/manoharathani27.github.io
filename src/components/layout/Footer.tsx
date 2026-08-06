import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { PROFILE, NAV_LINKS } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-line)] py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-lg font-semibold text-[var(--color-ink)]">
              Manohar Athani
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Backend engineer building distributed systems, one durable queue at a time.
              Based in Bengaluru, India.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-signal-400)] hover:text-[var(--color-ink)]"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-signal-400)] hover:text-[var(--color-ink)]"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-signal-400)] hover:text-[var(--color-ink)]"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow">Navigate</p>
              <ul className="mt-3 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={PROFILE.swagger} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row">
          <p className="font-mono text-xs text-[var(--color-ink-faint)]">
            © {year} Manohar Mahadev Athani. Built from scratch with React &amp; Tailwind.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Back to top <FiArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
