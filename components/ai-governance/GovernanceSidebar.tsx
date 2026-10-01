"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "check", num: "01", label: "Checklist" },
  { id: "region", num: "02", label: "Regions" },
  { id: "recap", num: "03", label: "Recap" },
] as const;

export const GOVERNANCE_SECTION_IDS = STEPS.map((s) => s.id);

export default function GovernanceSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar gov-sidebar">
      <p className="brand">Governance</p>
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
