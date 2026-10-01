"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · The agent",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "agent-loop", num: "01", label: "Agent loop" },
    ],
  },
  {
    title: "Part 2 · Extend behavior",
    steps: [
      { id: "skills", num: "02", label: "Skills" },
      { id: "hooks", num: "03", label: "Hooks" },
    ],
  },
  {
    title: "Part 3 · Scale work",
    steps: [
      { id: "subagents", num: "04", label: "Subagents" },
      { id: "stack", num: "05", label: "How it fits together" },
      { id: "recap", num: "06", label: "Recap" },
    ],
  },
] as const;

export const CURSOR_AGENTS_SECTION_IDS = PARTS.flatMap((p) =>
  p.steps.map((s) => s.id)
);

type CursorAgentsSidebarProps = {
  activeId: string;
};

export default function CursorAgentsSidebar({ activeId }: CursorAgentsSidebarProps) {
  return (
    <aside className="sidebar ca-sidebar">
      <p className="brand">Cursor agents</p>
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
