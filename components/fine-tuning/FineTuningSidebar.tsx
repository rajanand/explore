"use client";

import React from "react";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "what", num: "01", label: "What changes" },
  { id: "pick", num: "02", label: "Pick approach" },
  { id: "data", num: "03", label: "Dataset checklist" },
  { id: "lora", num: "04", label: "LoRA vs full" },
  { id: "recap", num: "05", label: "Recap" },
] as const;

export const FINE_TUNING_SECTION_IDS = STEPS.map((s) => s.id);

export default function FineTuningSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar ft-sidebar">
      <p className="brand">Fine-tuning</p>
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
