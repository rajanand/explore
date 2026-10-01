"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Vectors",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "what", num: "01", label: "What embeddings are" },
      { id: "neighbors", num: "02", label: "Nearest neighbors" },
      { id: "metrics", num: "03", label: "Similarity metrics" },
    ],
  },
  {
    title: "Part 2 · Retrieval",
    steps: [
      { id: "chunks", num: "04", label: "Chunk boundaries" },
      { id: "index", num: "05", label: "Indexing intuition" },
      { id: "failures", num: "06", label: "Failure modes" },
      { id: "recap", num: "07", label: "Recap" },
    ],
  },
] as const;

export const EMBEDDINGS_SECTION_IDS = PARTS.flatMap((p) => p.steps.map((s) => s.id));

export default function EmbeddingsSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar emb-sidebar">
      <p className="brand">Embeddings</p>
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
