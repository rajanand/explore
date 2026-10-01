"use client";

import React, { useState } from "react";
import { mockRetrievalMetrics } from "@/lib/llm-evals/content";

export default function RetrievalMetricsInteractive() {
  const [k, setK] = useState(3);
  const m = mockRetrievalMetrics(k);

  return (
    <>
      <label className="mono">
        top-k = {k}
        <input type="range" min={1} max={10} value={k} onChange={(e) => setK(Number(e.target.value))} />
      </label>
      <div className="ev-bars panel">
        <div className="bar-row">
          <div className="bar-label">Precision@{k}</div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${m.precision * 100}%` }} />
          </div>
          <div className="bar-pct">{Math.round(m.precision * 100)}%</div>
        </div>
        <div className="bar-row">
          <div className="bar-label">Recall@{k}</div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${m.recall * 100}%` }} />
          </div>
          <div className="bar-pct">{Math.round(m.recall * 100)}%</div>
        </div>
      </div>
      <p className="legend">Higher k often helps recall but hurts precision — tune for your SLA.</p>
    </>
  );
}
