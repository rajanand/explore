"use client";

import React, { useState } from "react";

const EVENTS = [
  { id: "q", label: "User query", detail: "INC-1042 summary for exec" },
  { id: "r", label: "Retrieve", detail: "chunks: runbook-12, postmortem-1042" },
  { id: "t", label: "Tool", detail: "search_tickets(query=INC-1042)" },
  { id: "a", label: "Answer", detail: "Grounded reply with citations" },
];

export default function TraceTimelineInteractive() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="panel aa-trace">
      <div className="aa-trace-row">
        {EVENTS.map((e, i) => (
          <button
            key={e.id}
            type="button"
            className={`aa-trace-step${i === idx ? " active" : ""}${i < idx ? " done" : ""}`}
            onClick={() => setIdx(i)}
          >
            {e.label}
          </button>
        ))}
      </div>
      <p className="mono">{EVENTS[idx].detail}</p>
      <p className="legend">Ship traces like this — one id ties retrieve, tools, and generation.</p>
    </div>
  );
}
