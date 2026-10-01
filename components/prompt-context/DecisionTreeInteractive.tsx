"use client";

import React, { useState } from "react";
import { DECISION_TREE } from "@/lib/prompt-context/content";

export default function DecisionTreeInteractive() {
  const [idx, setIdx] = useState(0);
  const node = DECISION_TREE[idx];

  return (
    <>
      <div className="controls">
        {DECISION_TREE.map((n, i) => (
          <button key={n.id} type="button" className={`btn ${idx === i ? "active" : ""}`} onClick={() => setIdx(i)}>
            Case {i + 1}
          </button>
        ))}
      </div>
      <div className="panel">
        <p>{node.q}</p>
        <p className="pc-answer mono">→ {node.answer}</p>
        <p className="legend">{node.detail}</p>
      </div>
    </>
  );
}
