export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-base)]">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(232,234,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,234,241,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* aurora blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--color-signal-500)]/25 blur-[110px] animate-drift-a" />
      <div className="absolute right-[5%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-[var(--color-data-500)]/20 blur-[110px] animate-drift-b" />
      <div className="absolute left-[0%] top-[35%] h-[45vh] w-[45vh] rounded-full bg-[var(--color-pulse-500)]/20 blur-[110px] animate-drift-c" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, transparent 0%, var(--color-base) 75%), linear-gradient(180deg, transparent 0%, var(--color-base) 100%)",
        }}
      />
    </div>
  );
}
