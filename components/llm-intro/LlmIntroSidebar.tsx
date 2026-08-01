"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · How LLMs work",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "basics", num: "01", label: "Two files" },
      { id: "training", num: "02", label: "Training" },
      { id: "next-word", num: "03", label: "Next-word prediction" },
      { id: "finetune", num: "04", label: "Fine-tuning & RLHF" },
    ],
  },
  {
    title: "Part 2 · Future of LLMs",
    steps: [
      { id: "scaling", num: "05", label: "Scaling laws" },
      { id: "llm-os", num: "06", label: "LLM as OS" },
      { id: "system2", num: "07", label: "System 2 thinking" },
    ],
  },
  {
    title: "Part 3 · Security",
    steps: [{ id: "security", num: "08", label: "Vulnerabilities" }],
  },
] as const;

export const LLM_WALKTHROUGH_SECTION_IDS = PARTS.flatMap((p) =>
  p.steps.map((s) => s.id)
);

type LlmIntroSidebarProps = {
  activeId: string;
};

export default function LlmIntroSidebar({ activeId }: LlmIntroSidebarProps) {
  return (
    <aside className="sidebar">
      <p className="brand">Introduction to LLMs</p>
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
