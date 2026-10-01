"use client";

import React, { useState } from "react";
import { GRAPH_EDGES, GRAPH_NODES } from "@/lib/graph-rag/content";

export default function IncidentGraphInteractive() {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (id: string) => {
    setActive(id);
    setExpanded((prev) => (prev.includes(id) ? prev : [...prev, id]));
    GRAPH_EDGES.filter((e) => e.from === id).forEach((e) => {
      setExpanded((prev) => (prev.includes(e.to) ? prev : [...prev, e.to]));
    });
  };

  return (
    <div className="gr-graph panel">
      <div className="gr-graph-nodes">
        {GRAPH_NODES.map((n) => (
          <button
            key={n.id}
            type="button"
            className={`gr-node${active === n.id ? " active" : ""}${expanded.includes(n.id) ? " expanded" : ""}`}
            onClick={() => toggle(n.id)}
          >
            <span className="mono">{n.type}</span>
            {n.label}
          </button>
        ))}
      </div>
      <ul className="gr-edges mono">
        {GRAPH_EDGES.map((e) => (
          <li key={`${e.from}-${e.to}`}>
            {GRAPH_NODES.find((n) => n.id === e.from)?.label} —{e.label}→{" "}
            {GRAPH_NODES.find((n) => n.id === e.to)?.label}
          </li>
        ))}
      </ul>
      {expanded.length > 0 && (
        <p className="legend">
          Context bundle: {expanded.map((id) => GRAPH_NODES.find((n) => n.id === id)?.label).join(", ")}
        </p>
      )}
    </div>
  );
}
