"use client";

import React from "react";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "why", num: "01", label: "Why hybrid" },
  { id: "dual", num: "02", label: "Two rankings" },
  { id: "fusion", num: "03", label: "RRF fusion" },
  { id: "choose", num: "04", label: "Choose retriever" },
  { id: "ops", num: "05", label: "Operations" },
  { id: "recap", num: "06", label: "Recap" },
] as const;

export const HYBRID_SEARCH_SECTION_IDS = STEPS.map((s) => s.id);

export default function HybridSearchSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar hs-sidebar">
      <p className="brand">Hybrid search</p>
      <nav>
        {STEPS.map((step) => (
          <a
            key={step.id}
            className={`step-link ${activeId === step.id ? "active" : ""}`}
            href={`#${step.id}`}
          >
            <span className="num">{step.num}</span>
            {step.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
