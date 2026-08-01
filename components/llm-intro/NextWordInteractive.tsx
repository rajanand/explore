"use client";

import React, { useEffect, useState } from "react";
import { NEXT_WORD_PROMPTS } from "@/lib/llm-intro/constants";

export default function NextWordInteractive() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [animated, setAnimated] = useState(true);

  const prompt = NEXT_WORD_PROMPTS[promptIdx];

  useEffect(() => {
    setAnimated(false);
    const t = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(t);
  }, [promptIdx]);

  return (
    <>
      <div className="controls">
        {NEXT_WORD_PROMPTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`btn ${promptIdx === i ? "active" : ""}`}
            onClick={() => setPromptIdx(i)}
          >
            {p.id === "france" ? "Geography" : "Code"}
          </button>
        ))}
      </div>

      <div className="panel">
        <p className="mono" style={{ color: "var(--ink)", marginBottom: 8 }}>
          &quot;{prompt.prefix} ___&quot;
        </p>
        <div className="bars">
          {prompt.options.map((opt) => (
            <div key={opt.word} className="bar-row">
              <div className="bar-label">{opt.word}</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: animated ? `${opt.pct}%` : "0%" }}
                />
              </div>
              <div className="bar-pct">{opt.pct}%</div>
            </div>
          ))}
        </div>
        <p className="legend interactive-explainer">{prompt.note}</p>
      </div>

      <div className="panel step-mechanics">
        <p className="step-mechanics-lead">
          <strong>Key insight for engineers:</strong> there is no separate
          &quot;world knowledge database.&quot; Facts, syntax, and reasoning
          patterns are all side effects of optimizing next-token prediction on
          huge text corpora.
        </p>
      </div>
    </>
  );
}
