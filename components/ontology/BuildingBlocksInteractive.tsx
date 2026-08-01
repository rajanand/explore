"use client";

import React, { useState } from "react";
import { BUILDING_BLOCKS } from "@/lib/ontology/graph";

export default function BuildingBlocksInteractive() {
  const [active, setActive] = useState(0);
  const block = BUILDING_BLOCKS[active];

  return (
    <>
      <div className="controls">
        {BUILDING_BLOCKS.map((b, i) => (
          <button
            key={b.id}
            type="button"
            className={`btn ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {b.title}
          </button>
        ))}
      </div>

      <div className="panel ont-block-detail">
        <h4>{block.title}</h4>
        <div className="step-formula mono">{block.formula}</div>
        <p>{block.detail}</p>
        <p className="ont-scenario-callout">{block.scenario}</p>
        <p className="legend">
          In Acme IT: <span className="mono">{block.example}</span>
        </p>
      </div>

      <div className="panel ont-triple-demo">
        <p className="mono ont-section-label">RDF-style triple (real incident)</p>
        <div className="ont-triple-row">
          <span className="ont-triple-cell subject">INC-1042</span>
          <span className="ont-triple-cell predicate">affects</span>
          <span className="ont-triple-cell object">Events API</span>
        </div>
        <p className="legend">
          Subject — predicate — object. Store thousands of these triples →
          knowledge graph queryable by SQL, SPARQL, or graph APIs.
        </p>
      </div>
    </>
  );
}
