"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "schema", num: "01", label: "Schema" },
  { id: "errors", num: "02", label: "Errors" },
  { id: "mcp", num: "03", label: "MCP parallel" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const TOOL_CALLING_SECTION_IDS = STEPS.map((s) => s.id);

export default function ToolCallingSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar tc-sidebar">
      <p className="brand">Tool calling</p>
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
