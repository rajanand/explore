"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "tables", num: "01", label: "Tables" },
  { id: "pdf", num: "02", label: "PDF noise" },
  { id: "recap", num: "03", label: "Recap" },
] as const;

export const DOC_PARSE_SECTION_IDS = STEPS.map((s) => s.id);

export default function DocParseSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar doc-sidebar">
      <p className="brand">Doc parsing</p>
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
