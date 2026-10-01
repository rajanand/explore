"use client";

import React, { useState } from "react";
import { QUERIES } from "@/lib/hybrid-search/content";

export default function RetrieverQuizInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const q = QUERIES[idx];
  const correct = pick === q.best;

  return (
    <div className="panel">
      <p className="mono hs-query">&quot;{q.text}&quot;</p>
      <div className="controls">
        {(["bm25", "vector", "hybrid"] as const).map((k) => (
          <button
            key={k}
            type="button"
            className={`btn ${pick === k ? "active" : ""}`}
            onClick={() => setPick(k)}
          >
            {k}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`hs-verdict ${correct ? "ok" : "warn"}`}>
          {correct ? `Yes — ${q.note}` : `Prefer ${q.best}: ${q.note}`}
        </p>
      )}
      <div className="controls" style={{ marginTop: 12 }}>
        {QUERIES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => {
              setIdx(i);
              setPick(null);
            }}
          >
            Q{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
