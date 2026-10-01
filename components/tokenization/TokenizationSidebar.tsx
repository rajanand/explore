"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "why", num: "01", label: "Why tokens" },
  { id: "bpe", num: "02", label: "BPE merges" },
  { id: "count", num: "03", label: "Count & cost" },
  { id: "limits", num: "04", label: "Limits" },
  { id: "recap", num: "05", label: "Recap" },
] as const;

export const TOKENIZATION_SECTION_IDS = STEPS.map((s) => s.id);

export default function TokenizationSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar tok-sidebar">
      <p className="brand">Tokenization</p>
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
