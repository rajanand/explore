"use client";

import React, { useMemo, useState } from "react";
import {
  DEFAULT_QUERY,
  dist2,
  SCATTER_POINTS,
} from "@/lib/embeddings/content";

export default function NeighborMapInteractive() {
  const [qx, setQx] = useState(DEFAULT_QUERY.x);
  const [qy, setQy] = useState(DEFAULT_QUERY.y);

  const ranked = useMemo(() => {
    const q = { x: qx, y: qy };
    return [...SCATTER_POINTS]
      .map((p) => ({ ...p, d: dist2(q, p) }))
      .sort((a, b) => a.d - b.d);
  }, [qx, qy]);

  const top3 = ranked.slice(0, 3);

  return (
    <div className="emb-scatter-wrap panel">
      <svg
        className="emb-scatter"
        viewBox="0 0 1 1"
        aria-label="2D embedding space"
      >
        {SCATTER_POINTS.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={1 - p.y}
            r={top3.some((t) => t.id === p.id) ? 0.028 : 0.02}
            className={`emb-dot${top3.some((t) => t.id === p.id) ? " emb-dot--hit" : ""}`}
          />
        ))}
        <circle cx={qx} cy={1 - qy} r={0.035} className="emb-dot emb-dot--query" />
      </svg>
      <div className="emb-scatter-controls">
        <label className="mono">
          Query X
          <input
            type="range"
            min={0}
            max={100}
            value={qx * 100}
            onChange={(e) => setQx(Number(e.target.value) / 100)}
          />
        </label>
        <label className="mono">
          Query Y
          <input
            type="range"
            min={0}
            max={100}
            value={qy * 100}
            onChange={(e) => setQy(Number(e.target.value) / 100)}
          />
        </label>
      </div>
      <ol className="emb-rank-list">
        {top3.map((p, i) => (
          <li key={p.id}>
            <span className="mono">{i + 1}.</span> {p.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
