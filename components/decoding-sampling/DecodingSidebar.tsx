"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "logits", num: "01", label: "From logits" },
  { id: "profiles", num: "02", label: "Profiles" },
  { id: "stop", num: "03", label: "Stops" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const DECODING_SECTION_IDS = STEPS.map((s) => s.id);

export default function DecodingSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar dec-sidebar">
      <p className="brand">Decoding</p>
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
