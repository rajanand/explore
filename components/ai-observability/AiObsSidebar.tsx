"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "why", num: "01", label: "Why trace LLM" },
  { id: "trace", num: "02", label: "Span map" },
  { id: "signals", num: "03", label: "Debug signals" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const AI_OBS_SECTION_IDS = STEPS.map((s) => s.id);

export default function AiObsSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar aobs-sidebar">
      <p className="brand">Observability</p>
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
