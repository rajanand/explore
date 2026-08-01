"use client";

import React, { useState } from "react";
import {
  ONTOLOGY_EXAMPLE,
  ONTOLOGY_EDGES,
  ONTOLOGY_NODES,
  TAXONOMY_EXAMPLE,
} from "@/lib/ontology/graph";

export default function TaxonomyVsOntologyInteractive() {
  const [mode, setMode] = useState<"taxonomy" | "ontology">("taxonomy");
  const cross = ONTOLOGY_EXAMPLE.crossLink;

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${mode === "taxonomy" ? "active" : ""}`}
          onClick={() => setMode("taxonomy")}
        >
          Taxonomy (folders)
        </button>
        <button
          type="button"
          className={`btn ${mode === "ontology" ? "active" : ""}`}
          onClick={() => setMode("ontology")}
        >
          Ontology (links)
        </button>
      </div>

      <div className="panel ont-compare-panel">
        {mode === "taxonomy" ? (
          <>
            <p className="mono ont-section-label">{TAXONOMY_EXAMPLE.label}</p>
            <div className="ont-tree">
              {TAXONOMY_EXAMPLE.nodes.map((line) => (
                <div
                  key={line}
                  className="ont-tree-node"
                  style={{ paddingLeft: line.startsWith(" ") ? 16 : 0 }}
                >
                  <span className="mono">{line.trim()}</span>
                </div>
              ))}
            </div>
            <p className="legend interactive-explainer">
              {TAXONOMY_EXAMPLE.limitation}
            </p>
          </>
        ) : (
          <>
            <p className="mono ont-section-label">
              Same company — cross-system facts
            </p>
            <div className="ont-cross-links">
              <div className="ont-cross-col">
                <span className="mono">{cross.from}</span>
                <span className="ont-cross-meta">{cross.fromType}</span>
              </div>
              <div className="ont-cross-rel mono">{cross.rel}</div>
              <div className="ont-cross-col">
                <span className="mono">{cross.to}</span>
                <span className="ont-cross-meta">{cross.toType}</span>
              </div>
            </div>
            <ul className="ont-rel-list">
              {ONTOLOGY_EXAMPLE.extraLinks.map((line) => (
                <li key={line} className="mono">{line}</li>
              ))}
            </ul>
            <p className="legend">
              When an engineer asks &quot;what runbook for INC-1042?&quot; the
              graph traverses <span className="mono">affects</span> then{" "}
              <span className="mono">documents</span> — no keyword luck required.
            </p>
          </>
        )}
      </div>
    </>
  );
}
