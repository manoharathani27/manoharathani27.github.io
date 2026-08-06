import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { NAV_LINKS, PROFILE } from "@/data/social";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-[var(--color-line)] bg-[rgba(8,10,16,0.75)] backdrop-blur-xl shadow-[var(--shadow-glass)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-signal-500)] to-[var(--color-data-500)] text-[var(--color-base)]">
              MA
            </span>
            <span className="hidden text-[var(--color-ink)] sm:inline">Manohar Athani</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[var(--color-signal-500)]/12 ring-1 ring-inset ring-[var(--color-signal-400)]/30"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={PROFILE.resume} download className="btn-ghost hidden !py-2 !px-3.5 text-xs md:inline-flex">
              <HiOutlineArrowDownTray className="h-4 w-4" />
              Resume
            </a>
            <a href="#contact" className="btn-primary hidden !py-2 !px-3.5 text-xs sm:inline-flex">
              Let's talk
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="btn-ghost !p-2.5 md:hidden"
            >
              {menuOpen ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="section-shell overflow-hidden md:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-ink-muted)] hover:bg-white/5 hover:text-[var(--color-ink)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PROFILE.resume}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-signal-400)] hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
