"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "sse", num: "01", label: "SSE basics" },
  { id: "state", num: "02", label: "Client state" },
  { id: "timeout", num: "03", label: "Timeouts" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const STREAMING_SECTION_IDS = STEPS.map((s) => s.id);

export default function StreamingSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar strm-sidebar">
      <p className="brand">Streaming</p>
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
