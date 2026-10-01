"use client";

import React, { useState } from "react";
import { HYBRID_QUESTIONS } from "@/lib/graph-rag/content";

export default function FusionBoardInteractive() {
  const [idx, setIdx] = useState(0);
  const q = HYBRID_QUESTIONS[idx];

  return (
    <>
      <div className="controls">
        {HYBRID_QUESTIONS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {item.id}
          </button>
        ))}
      </div>
      <div className="panel">
        <p>{q.q}</p>
        <div className="gr-fusion-badges">
          <span className={`gr-badge${q.vector ? " on" : ""}`}>Vector</span>
          <span className={`gr-badge${q.graph ? " on" : ""}`}>Graph</span>
        </div>
        <p className="legend">{q.note}</p>
      </div>
    </>
  );
}
