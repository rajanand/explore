"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "vs", num: "01", label: "Graph vs vector" },
  { id: "walk", num: "02", label: "Traverse" },
  { id: "quiz", num: "03", label: "Pick retriever" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const KG_SECTION_IDS = STEPS.map((s) => s.id);

export default function KgSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar kg-sidebar">
      <p className="brand">Knowledge graphs</p>
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
