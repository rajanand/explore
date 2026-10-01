"use client";

import React from "react";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "when", num: "01", label: "When vector DB" },
  { id: "index", num: "02", label: "Index choice" },
  { id: "filter", num: "03", label: "Metadata filters" },
  { id: "ops", num: "04", label: "Operations" },
  { id: "recap", num: "05", label: "Recap" },
] as const;

export const VECTOR_DB_SECTION_IDS = STEPS.map((s) => s.id);

export default function VectorDbSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar vdb-sidebar">
      <p className="brand">Vector DBs</p>
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
