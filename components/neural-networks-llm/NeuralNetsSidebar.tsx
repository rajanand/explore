"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "stack", num: "01", label: "Stack" },
  { id: "forward", num: "02", label: "Forward pass" },
  { id: "pick", num: "03", label: "Next token" },
  { id: "limits", num: "04", label: "Limits" },
  { id: "recap", num: "05", label: "Recap" },
] as const;

export const NEURAL_NETS_SECTION_IDS = STEPS.map((s) => s.id);

export default function NeuralNetsSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar nn-sidebar">
      <p className="brand">Neural nets</p>
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
