"use client";

import React, { useState } from "react";
import { METRIC_PAIRS } from "@/lib/embeddings/content";

export default function MetricToggleInteractive() {
  const [metric, setMetric] = useState<"cosine" | "dot">("cosine");
  const [pairIdx, setPairIdx] = useState(0);
  const pair = METRIC_PAIRS[pairIdx];
  const score = metric === "cosine" ? pair.cosine : pair.dot;

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${metric === "cosine" ? "active" : ""}`}
          onClick={() => setMetric("cosine")}
        >
          Cosine similarity
        </button>
        <button
          type="button"
          className={`btn ${metric === "dot" ? "active" : ""}`}
          onClick={() => setMetric("dot")}
        >
          Dot product
        </button>
      </div>
      <div className="controls">
        {METRIC_PAIRS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`btn ${pairIdx === i ? "active" : ""}`}
            onClick={() => setPairIdx(i)}
          >
            Pair {i + 1}
          </button>
        ))}
      </div>
      <div className="panel emb-metric-panel">
        <p>
          <strong>{pair.a}</strong> ↔ <strong>{pair.b}</strong>
        </p>
        <p className="mono emb-score">
          {metric === "cosine" ? "cosine" : "dot"} = {score.toFixed(2)}
        </p>
        <p className="legend">
          Production systems usually <strong>normalize</strong> vectors so cosine and dot rank
          similarly; with unnormalized vectors, dot product favors longer texts.
        </p>
      </div>
    </>
  );
}
