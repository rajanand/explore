"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · The gap",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "problem", num: "01", label: "Gap & data flow" },
    ],
  },
  {
    title: "Part 2 · The pipeline",
    steps: [
      { id: "overview", num: "02", label: "Pipeline overview" },
      { id: "indexing", num: "03", label: "Indexing" },
      { id: "playground", num: "04", label: "Retrieve & generate" },
    ],
  },
  {
    title: "Part 3 · Ship it",
    steps: [
      { id: "chunking", num: "05", label: "Chunking" },
      { id: "pitfalls", num: "06", label: "Pitfalls & choices" },
    ],
  },
] as const;

export const RAG_WALKTHROUGH_SECTION_IDS = PARTS.flatMap((p) =>
  p.steps.map((s) => s.id)
);

type RagSidebarProps = {
  activeId: string;
};

export default function RagSidebar({ activeId }: RagSidebarProps) {
  return (
    <aside className="sidebar">
      <p className="brand">Retrieval-Augmented Generation</p>
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
