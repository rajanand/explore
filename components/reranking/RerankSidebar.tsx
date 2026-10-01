"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "bi", num: "01", label: "Bi-encoder top-k" },
  { id: "cross", num: "02", label: "Cross-encoder" },
  { id: "ops", num: "03", label: "When to rerank" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const RERANK_SECTION_IDS = STEPS.map((s) => s.id);

export default function RerankSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar rr-sidebar">
      <p className="brand">Reranking</p>
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
