"use client";

import React, { useMemo, useState } from "react";
import {
  ONTOLOGY_EDGES,
  ONTOLOGY_NODES,
  type OntologyNode,
} from "@/lib/ontology/graph";

const WIDTH = 500;
const HEIGHT = 340;
const PAD = 28;

function toX(x: number) {
  return PAD + x * (WIDTH - 2 * PAD);
}

function toY(y: number) {
  return PAD + y * (HEIGHT - 2 * PAD);
}

const INSTANCE_BUTTONS = [
  { id: "inc-1042", label: "INC-1042" },
  { id: "sarah", label: "Sarah Chen" },
  { id: "events-api", label: "Events API" },
  { id: "hr-policy", label: "HR Policy" },
  { id: "api-runbook", label: "Runbook" },
];

export default function KnowledgeGraphInteractive() {
  const [selectedId, setSelectedId] = useState("inc-1042");

  const selected = ONTOLOGY_NODES.find((n) => n.id === selectedId);

  const connectedEdges = useMemo(
    () =>
      ONTOLOGY_EDGES.filter(
        (e) => e.from === selectedId || e.to === selectedId
      ),
    [selectedId]
  );

  const highlightIds = useMemo(() => {
    const ids = new Set<string>([selectedId]);
    connectedEdges.forEach((e) => {
      ids.add(e.from);
      ids.add(e.to);
    });
    return ids;
  }, [selectedId, connectedEdges]);

  return (
    <>
      <p className="step-detail-note">
        Scenario: production alert <strong>INC-1042</strong> (API latency).
        Click nodes to see how IT concepts connect across HR, ops, and engineering.
      </p>

      <div className="controls">
        {INSTANCE_BUTTONS.map((btn) => (
          <button
            key={btn.id}
            type="button"
            className={`btn ${selectedId === btn.id ? "active" : ""}`}
            onClick={() => setSelectedId(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="panel ont-graph-panel">
        <svg
          className="ont-graph-svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          aria-label="IT knowledge graph"
        >
          {ONTOLOGY_EDGES.map((edge) => {
            const from = ONTOLOGY_NODES.find((n) => n.id === edge.from);
            const to = ONTOLOGY_NODES.find((n) => n.id === edge.to);
            if (!from || !to) return null;
            const active =
              highlightIds.has(edge.from) && highlightIds.has(edge.to);
            return (
              <g key={`${edge.from}-${edge.rel}-${edge.to}`}>
                <line
                  x1={toX(from.x)}
                  y1={toY(from.y)}
                  x2={toX(to.x)}
                  y2={toY(to.y)}
                  className={`ont-graph-edge ${active ? "active" : ""} ${edge.rel === "isA" ? "isa" : ""}`}
                />
                {edge.rel !== "isA" && active && (
                  <text
                    x={(toX(from.x) + toX(to.x)) / 2}
                    y={(toY(from.y) + toY(to.y)) / 2 - 4}
                    className="ont-edge-label"
                    textAnchor="middle"
                  >
                    {edge.rel}
                  </text>
                )}
              </g>
            );
          })}

          {ONTOLOGY_NODES.map((node) => (
            <GraphNode
              key={node.id}
              node={node}
              selected={node.id === selectedId}
              dimmed={!highlightIds.has(node.id)}
              onSelect={() => setSelectedId(node.id)}
            />
          ))}
        </svg>

        {selected && (
          <div className="ont-node-detail">
            <p className="mono">
              {selected.label}{" "}
              <span className="ont-type-badge">{selected.type}</span>
            </p>
            <p>{selected.description}</p>
            {connectedEdges.length > 0 && (
              <ul className="ont-edge-list">
                {connectedEdges.map((e) => {
                  const otherId =
                    e.from === selectedId ? e.to : e.from;
                  const other = ONTOLOGY_NODES.find((n) => n.id === otherId);
                  const dir =
                    e.from === selectedId ? "→" : "←";
                  return (
                    <li key={`${e.from}-${e.rel}`} className="mono">
                      {e.rel} {dir} {other?.label}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function GraphNode({
  node,
  selected,
  dimmed,
  onSelect,
}: {
  node: OntologyNode;
  selected: boolean;
  dimmed: boolean;
  onSelect: () => void;
}) {
  const cx = toX(node.x);
  const cy = toY(node.y);
  const r = node.type === "class" ? 20 : 15;

  return (
    <g
      className={`ont-graph-node ${node.type} ${selected ? "selected" : ""} ${dimmed ? "dim" : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <circle cx={cx} cy={cy} r={r} className="ont-graph-circle" />
      <text x={cx} y={cy + r + 11} className="ont-graph-label" textAnchor="middle">
        {node.label}
      </text>
    </g>
  );
}
