"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "size", num: "01", label: "Size & overlap" },
  { id: "parent", num: "02", label: "Parent/child" },
  { id: "recap", num: "03", label: "Recap" },
] as const;

export const CHUNKING_SECTION_IDS = STEPS.map((s) => s.id);

export default function ChunkingSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar chunk-sidebar">
      <p className="brand">Chunking</p>
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
