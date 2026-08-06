import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiUser, FiServer } from "react-icons/fi";
import { SiGooglecloud, SiRedis, SiCplusplus, SiPostgresql } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ARCHITECTURE_NODES, ARCHITECTURE_EDGES } from "@/data/projects";
import type { ArchitectureEdge, ArchitectureNode } from "@/types";

const NODE_ICONS: Record<string, IconType> = {
  client: FiUser,
  "cloud-run": SiGooglecloud,
  "redis-geo": SiRedis,
  "cpp-engine": SiCplusplus,
  bullmq: FiServer,
  "cloud-sql": SiPostgresql,
};

// Perpendicular curvature (in viewBox units) applied per directed edge,
// so forward/return paths between the same two nodes visually separate.
const CURVATURE: Record<string, number> = {
  "client-cloud-run": 0,
  "cloud-run-client": -10,
  "cloud-run-redis-geo": -16,
  "redis-geo-cpp-engine": 16,
  "cpp-engine-cloud-run": 12,
  "cloud-run-bullmq": -14,
  "cloud-run-cloud-sql": -34,
};

function buildPath(from: ArchitectureNode, to: ArchitectureNode, curvature: number) {
  const { x: x1, y: y1 } = from;
  const { x: x2, y: y2 } = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * curvature;
  const cy = my + ny * curvature;
  return `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
}

export default function ArchitectureVisualization() {
  const nodeMap = useMemo(
    () => Object.fromEntries(ARCHITECTURE_NODES.map((n) => [n.id, n])) as Record<string, ArchitectureNode>,
    []
  );
  const [selectedId, setSelectedId] = useState<string>(ARCHITECTURE_NODES[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeId = hoveredId ?? selectedId;
  const selectedNode = nodeMap[selectedId];

  const isEdgeActive = (edge: ArchitectureEdge) => edge.from === activeId || edge.to === activeId;

  return (
    <section id="architecture" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Interactive Diagram"
          title="How a ride actually moves through the system"
          description="Click any node to inspect its role. The highlighted paths show exactly where that piece sits in the request lifecycle."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="overflow-x-auto">
              <div className="relative aspect-[16/9] min-w-[720px]">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                  <defs>
                    <marker id="arrow-primary" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-signal-400)" />
                    </marker>
                    <marker id="arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-ink-faint)" />
                    </marker>
                  </defs>

                  {ARCHITECTURE_EDGES.map((edge) => {
                    const from = nodeMap[edge.from];
                    const to = nodeMap[edge.to];
                    if (!from || !to) return null;
                    const curvature = CURVATURE[`${edge.from}-${edge.to}`] ?? 0;
                    const d = buildPath(from, to, curvature);
                    const active = isEdgeActive(edge);
                    const isLivePath = edge.from === "cloud-run" && edge.to === "client";
                    const pathId = `path-${edge.from}-${edge.to}`;

                    return (
                      <g key={pathId}>
                        <path
                          id={pathId}
                          d={d}
                          fill="none"
                          stroke={active ? "var(--color-signal-400)" : "var(--color-line-strong)"}
                          strokeWidth={active ? 0.5 : 0.35}
                          strokeDasharray={isLivePath ? "1.5 1.5" : undefined}
                          markerEnd={active ? "url(#arrow-primary)" : "url(#arrow-muted)"}
                          style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
                          vectorEffect="non-scaling-stroke"
                        />
                        {active && (
                          <circle r="1" fill="var(--color-data-400)">
                            <animateMotion dur="1.8s" repeatCount="indefinite" path={d} />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {ARCHITECTURE_NODES.map((node) => {
                  const Icon = NODE_ICONS[node.id];
                  const isActive = activeId === node.id;
                  const isSelected = selectedId === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedId(node.id)}
                      onMouseEnter={() => setHoveredId(node.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(node.id)}
                      onBlur={() => setHoveredId(null)}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:z-10"
                    >
                      <span
                        className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 backdrop-blur-md transition-all duration-200 sm:px-4 ${
                          isSelected
                            ? "border-[var(--color-signal-400)] bg-[var(--color-signal-500)]/15 shadow-[0_0_0_4px_rgba(47,111,237,0.12)]"
                            : isActive
                            ? "border-[var(--color-line-strong)] bg-white/[0.06]"
                            : "border-[var(--color-line)] bg-white/[0.03]"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`h-5 w-5 sm:h-6 sm:w-6 ${
                              isSelected || isActive ? "text-[var(--color-signal-400)]" : "text-[var(--color-ink-muted)]"
                            }`}
                          />
                        )}
                        <span className="whitespace-nowrap text-[11px] font-semibold text-[var(--color-ink)] sm:text-xs">
                          {node.label}
                        </span>
                        <span className="whitespace-nowrap font-mono text-[9px] text-[var(--color-ink-faint)] sm:text-[10px]">
                          {node.sublabel}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-[var(--color-line)] pt-6">
              <AnimatePresence mode="wait">
                {selectedNode && (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
                  >
                    <span className="eyebrow whitespace-nowrap">{selectedNode.label}</span>
                    <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{selectedNode.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--color-ink-faint)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-data-400)]" />
          dot marks live request flow · dashed line is the WebSocket live-tracking push
        </Reveal>
      </div>
    </section>
  );
}
