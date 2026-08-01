"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Foundations",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "what-is", num: "01", label: "What is an ontology?" },
      { id: "compare", num: "02", label: "Taxonomy vs ontology" },
    ],
  },
  {
    title: "Part 2 · Build it",
    steps: [
      { id: "create", num: "03", label: "How to create one" },
      { id: "building-blocks", num: "04", label: "Building blocks" },
      { id: "graph", num: "05", label: "Knowledge graph" },
    ],
  },
  {
    title: "Part 3 · AI stack",
    steps: [
      { id: "in-ai", num: "06", label: "Ontology in AI" },
      { id: "practice", num: "07", label: "Formats & checklist" },
    ],
  },
] as const;

export const ONTOLOGY_WALKTHROUGH_SECTION_IDS = PARTS.flatMap((p) =>
  p.steps.map((s) => s.id)
);

type OntologySidebarProps = {
  activeId: string;
};

export default function OntologySidebar({ activeId }: OntologySidebarProps) {
  return (
    <aside className="sidebar">
      <p className="brand">Ontologies</p>
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
