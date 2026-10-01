"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Basics",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "vs-chat", num: "01", label: "Agent vs chatbot" },
      { id: "loop", num: "02", label: "ReAct loop" },
    ],
  },
  {
    title: "Part 2 · Production",
    steps: [
      { id: "tools", num: "03", label: "Tool choice" },
      { id: "memory", num: "04", label: "Memory lanes" },
      { id: "ops", num: "05", label: "Safety & traces" },
      { id: "recap", num: "06", label: "Recap" },
    ],
  },
] as const;

export const AI_AGENTS_SECTION_IDS = PARTS.flatMap((p) => p.steps.map((s) => s.id));

export default function AiAgentsSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar aa-sidebar">
      <p className="brand">AI agents</p>
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
