"use client";

import React from "react";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "tokenize", num: "01", label: "Tokenization" },
  { id: "embed", num: "02", label: "Embeddings" },
  { id: "posenc", num: "03", label: "Positional encoding" },
  { id: "attention", num: "04", label: "Self-attention" },
  { id: "multihead", num: "05", label: "Multi-head attention" },
  { id: "ffn", num: "06", label: "Feed-forward" },
  { id: "stack", num: "07", label: "Stacking layers" },
  { id: "output", num: "08", label: "Predicting the next word" },
] as const;

export const WALKTHROUGH_SECTION_IDS = STEPS.map((s) => s.id);

type WalkthroughSidebarProps = {
  activeId: string;
};

export default function WalkthroughSidebar({ activeId }: WalkthroughSidebarProps) {
  return (
    <aside className="sidebar">
      <p className="brand">Inside a Transformer</p>
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
