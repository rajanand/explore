"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Measurement",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "golden", num: "01", label: "Golden sets" },
      { id: "retrieval", num: "02", label: "Retrieval metrics" },
    ],
  },
  {
    title: "Part 2 · Ship safe",
    steps: [
      { id: "judge", num: "03", label: "LLM-as-judge" },
      { id: "guardrails", num: "04", label: "Guardrails" },
      { id: "ci", num: "05", label: "CI for AI" },
      { id: "recap", num: "06", label: "Recap" },
    ],
  },
] as const;

export const LLM_EVALS_SECTION_IDS = PARTS.flatMap((p) => p.steps.map((s) => s.id));

export default function LlmEvalsSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar ev-sidebar">
      <p className="brand">LLM evals</p>
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
