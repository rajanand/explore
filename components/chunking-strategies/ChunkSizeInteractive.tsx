"use client";

import React, { useMemo, useState } from "react";
import { chunksForSize, QUERY } from "@/lib/chunking-strategies/content";

export default function ChunkSizeInteractive() {
  const [size, setSize] = useState(6);
  const [overlap, setOverlap] = useState(2);
  const chunks = useMemo(() => chunksForSize(size, overlap), [size, overlap]);

  const hit = chunks.some(
    (c) => c.toLowerCase().includes("escalate") && c.toLowerCase().includes("payments")
  );

  return (
    <>
      <p className="mono">Query: &quot;{QUERY}&quot;</p>
      <label className="lede">
        Words per chunk: {size}
        <input
          type="range"
          min={3}
          max={12}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>
      <label className="lede">
        Overlap (words): {overlap}
        <input
          type="range"
          min={0}
          max={5}
          value={overlap}
          onChange={(e) => setOverlap(Number(e.target.value))}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>
      <ol className="pw-list">
        {chunks.map((c, i) => (
          <li key={i}>
            <strong>Chunk {i + 1}:</strong> {c}
          </li>
        ))}
      </ol>
      <p className={`pw-verdict ${hit ? "" : "warn"}`}>
        {hit
          ? "A single chunk keeps escalation steps together — good retrieval target."
          : "Split broke the procedure — increase overlap or use structure-aware boundaries."}
      </p>
    </>
  );
}
