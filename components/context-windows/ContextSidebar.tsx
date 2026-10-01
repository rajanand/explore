"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "budget", num: "01", label: "Budget" },
  { id: "cache", num: "02", label: "KV cache" },
  { id: "overflow", num: "03", label: "Overflow" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const CONTEXT_SECTION_IDS = STEPS.map((s) => s.id);

export default function ContextSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar ctx-sidebar">
      <p className="brand">Context</p>
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
