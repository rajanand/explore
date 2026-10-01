"use client";

import React, { useState } from "react";
import { CHUNK_PRESETS } from "@/lib/embeddings/content";

export default function ChunkBoundaryInteractive() {
  const [preset, setPreset] = useState(0);
  const p = CHUNK_PRESETS[preset];

  return (
    <>
      <div className="controls">
        {CHUNK_PRESETS.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`btn ${preset === c.id ? "active" : ""}`}
            onClick={() => setPreset(c.id)}
          >
            {c.label.split("(")[0].trim()}
          </button>
        ))}
      </div>
      <div className="panel">
        <p className="mono emb-chunk-query">Query: &quot;VPN disconnect after laptop sleep&quot;</p>
        {p.chunks.map((chunk, i) => (
          <div
            key={i}
            className={`emb-chunk${i === p.retrieved ? " emb-chunk--retrieved" : ""}`}
          >
            <span className="mono">chunk {i + 1}</span>
            <p>{chunk}</p>
          </div>
        ))}
        <p className="legend">
          {p.retrieved === p.chunks.length - 1 && preset === 2
            ? "A bad split retrieved the wrong half — fix chunking or add overlap."
            : "Same document, different chunks → different embedding → different retrieval."}
        </p>
      </div>
    </>
  );
}
