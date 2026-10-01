"use client";

import React, { useState } from "react";
import { LAYER_STEPS } from "@/lib/neural-networks-llm/content";

export default function ForwardPassInteractive() {
  const [idx, setIdx] = useState(0);
  const step = LAYER_STEPS[idx];

  return (
    <>
      <div className="controls">
        {LAYER_STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="panel">
        <p className="pw-col-title">{step.label}</p>
        <p>{step.detail}</p>
      </div>
    </>
  );
}
