"use client";

import React, { useState } from "react";
import { GRAPH_EDGES, GRAPH_NODES } from "@/lib/knowledge-graphs/content";

export default function TraverseInteractive() {
  const [path, setPath] = useState<string[]>(["inc"]);

  const nextOptions = GRAPH_EDGES.filter((e) => e.from === path[path.length - 1]).map((e) => e.to);

  const label = (id: string) => GRAPH_NODES.find((n) => n.id === id)?.label ?? id;

  return (
    <>
      <p className="lede">Click forward along edges — multi-hop questions are graph-shaped.</p>
      <p className="mono">Path: {path.map(label).join(" → ")}</p>
      <div className="pw-toggle-row">
        {nextOptions.map((id) => (
          <button
            key={id}
            type="button"
            className="pw-chip on"
            onClick={() => setPath((p) => [...p, id])}
          >
            {GRAPH_EDGES.find((e) => e.from === path[path.length - 1] && e.to === id)?.rel} →{" "}
            {label(id)}
          </button>
        ))}
        {nextOptions.length === 0 && (
          <button type="button" className="pw-chip" onClick={() => setPath(["inc"])}>
            Reset walk
          </button>
        )}
      </div>
    </>
  );
}
