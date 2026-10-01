"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Limits",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "limits", num: "01", label: "Vector-only limits" },
      { id: "graph", num: "02", label: "Knowledge graph" },
    ],
  },
  {
    title: "Part 2 · Hybrid",
    steps: [
      { id: "compare", num: "03", label: "Vector vs graph" },
      { id: "fusion", num: "04", label: "Fusion board" },
      { id: "recap", num: "05", label: "Recap" },
    ],
  },
] as const;

export const GRAPH_RAG_SECTION_IDS = PARTS.flatMap((p) => p.steps.map((s) => s.id));

export default function GraphRagSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar gr-sidebar">
      <p className="brand">Graph RAG</p>
      <nav>
        {PARTS.map((part) => (
          <div key={part.title} className="sidebar-part">
            <p className="sidebar-part-title">{part.title}</p>
            {part.steps.map((step) => (
              <a
                key={step.id}
                className={`step-link ${activeId === step.id ? "active" : ""}`}
                href={`#${step.id}`}
              >
                <span className="num">{step.num}</span>
                {step.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
