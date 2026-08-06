import { useState, type FormEvent } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowUpRight, FiCheck } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/data/social";

const CONTACT_CARDS = [
  { icon: FiMail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "in/manoharathani", href: PROFILE.linkedin },
  { icon: FiGithub, label: "GitHub", value: "@manoharathani27", href: PROFILE.github },
  { icon: FiMapPin, label: "Based in", value: PROFILE.location, href: undefined },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Let's build something reliable together"
          description="Open to backend engineering roles, internships and collaborations. I usually reply within a day."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {CONTACT_CARDS.map((card) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--color-line)] bg-white/[0.03]">
                    <card.icon className="h-4 w-4 text-[var(--color-signal-400)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-[var(--color-ink-faint)]">{card.label}</span>
                    <span className="block truncate text-sm font-medium text-[var(--color-ink)]">{card.value}</span>
                  </span>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label} className="glass flex items-center gap-3 rounded-xl p-4">
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-[var(--color-ink-muted)]">Your name</span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Jane Doe"
                      className="rounded-lg border border-[var(--color-line)] bg-white/[0.02] px-3.5 py-2.5 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-signal-400)]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-[var(--color-ink-muted)]">Your email</span>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="jane@company.com"
                      className="rounded-lg border border-[var(--color-line)] bg-white/[0.02] px-3.5 py-2.5 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-signal-400)]"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="text-[var(--color-ink-muted)]">Message</span>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell me a bit about the role or project…"
                    className="resize-none rounded-lg border border-[var(--color-line)] bg-white/[0.02] px-3.5 py-2.5 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-signal-400)]"
                  />
                </label>
                <button type="submit" className="btn-primary justify-center">
                  {sent ? (
                    <>
                      <FiCheck className="h-4 w-4" /> Opening your mail app…
                    </>
                  ) : (
                    <>
                      Send message <FiArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-[var(--color-ink-faint)]">
                  This opens your email client addressed to {PROFILE.email} — no data is stored anywhere.
                </p>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
