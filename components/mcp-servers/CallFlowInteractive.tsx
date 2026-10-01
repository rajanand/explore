"use client";

import React, { useState } from "react";
import { TOOL_CALL_STEPS } from "@/lib/mcp-servers/content";

export default function CallFlowInteractive() {
  const [step, setStep] = useState(0);
  const current = TOOL_CALL_STEPS[step];

  return (
    <>
      <div className="mcp-flow-track">
        {TOOL_CALL_STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`mcp-flow-step${i === step ? " active" : ""}${i < step ? " done" : ""}`}
            onClick={() => setStep(i)}
          >
            <span className="mono">{i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="panel">
        <p className="mcp-role-title">{current.label}</p>
        <p>{current.detail}</p>
        {step === 1 && (
          <pre className="mono mcp-pre mcp-payload">
{`tools/call {
  "name": "search_issues",
  "arguments": { "query": "auth regression" }
}`}
          </pre>
        )}
        {step === 2 && (
          <pre className="mono mcp-pre mcp-payload">
{`→ GET api.github.com/search/issues?q=...`}
          </pre>
        )}
        {step === 3 && (
          <pre className="mono mcp-pre mcp-payload">
{`{ "content": [{ "type": "text", "text": "3 issues found..." }] }`}
          </pre>
        )}
      </div>

      <div className="controls">
        <button
          type="button"
          className="btn"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Back
        </button>
        <button
          type="button"
          className="btn active"
          disabled={step >= TOOL_CALL_STEPS.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
