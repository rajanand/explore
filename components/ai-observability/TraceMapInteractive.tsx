"use client";

import React, { useState } from "react";
import { TRACE_EVENTS } from "@/lib/ai-observability/content";

export default function TraceMapInteractive() {
  const [on, setOn] = useState<Record<string, boolean>>({
    req: true,
    ret: true,
    gen: true,
    guard: false,
  });

  return (
    <>
      <p className="lede">Toggle spans you would ship in v1 of an internal copilot.</p>
      <div className="pw-toggle-row">
        {TRACE_EVENTS.map((e) => (
          <button
            key={e.id}
            type="button"
            className={`pw-chip ${on[e.id] ? "on" : ""}`}
            onClick={() => setOn((prev) => ({ ...prev, [e.id]: !prev[e.id] }))}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="panel mono">
        {TRACE_EVENTS.filter((e) => on[e.id]).map((e) => (
          <div key={e.id} style={{ marginBottom: 8 }}>
            <strong>{e.label}</strong> — {e.detail}
          </div>
        ))}
        {!Object.values(on).some(Boolean) && <span>Enable at least request + retrieval.</span>}
      </div>
    </>
  );
}
