"use client";

import React, { useState } from "react";
import { COMPARE } from "@/lib/knowledge-graphs/content";

export default function RetrieverPickInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<"vector" | "graph" | null>(null);
  const q = COMPARE[idx];
  const ok = pick === q.winner;

  return (
    <>
      <div className="controls">
        {COMPARE.map((item, i) => (
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
      <p className="lede">{q.question}</p>
      <div className="pw-grid-2">
        <div className="panel">
          <p className="pw-col-title">Vector</p>
          <p>{q.vector}</p>
        </div>
        <div className="panel">
          <p className="pw-col-title">Graph</p>
          <p>{q.graph}</p>
        </div>
      </div>
      <div className="pw-toggle-row">
        {(["vector", "graph"] as const).map((id) => (
          <button
            key={id}
            type="button"
            className={`pw-chip ${pick === id ? "on" : ""}`}
            onClick={() => setPick(id)}
          >
            Use {id}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>
          {ok ? "Matches how teams combine both in Graph RAG." : "Try the other retriever for this question shape."}
        </p>
      )}
    </>
  );
}
