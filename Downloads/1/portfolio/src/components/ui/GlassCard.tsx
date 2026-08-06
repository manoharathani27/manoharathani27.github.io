import type { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverLift?: boolean;
}

export default function GlassCard({ children, hoverLift = true, className = "", ...rest }: GlassCardProps) {
  return (
    <div
      className={`glass ${hoverLift ? "glass-hover" : ""} rounded-2xl ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
