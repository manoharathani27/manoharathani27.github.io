import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={isCenter ? "text-center" : "text-left"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base text-[var(--color-ink-muted)] ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
