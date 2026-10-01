"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Prompts",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "system", num: "01", label: "System design" },
      { id: "budget", num: "02", label: "Context budget" },
    ],
  },
  {
    title: "Part 2 · Ship",
    steps: [
      { id: "structured", num: "03", label: "Structured output" },
      { id: "decide", num: "04", label: "RAG vs fine-tune" },
      { id: "recap", num: "05", label: "Recap" },
    ],
  },
] as const;

export const PROMPT_CONTEXT_SECTION_IDS = PARTS.flatMap((p) => p.steps.map((s) => s.id));

export default function PromptContextSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar pc-sidebar">
      <p className="brand">Prompt &amp; context</p>
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
