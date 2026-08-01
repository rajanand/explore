"use client";

import React, { useState } from "react";

const SCALE_POINTS = [
  { label: "Small", params: "1B", score: 35, cost: "$" },
  { label: "Base", params: "7B", score: 55, cost: "$$" },
  { label: "Large", params: "70B", score: 78, cost: "$$$$$" },
  { label: "Frontier", params: "400B+", score: 92, cost: "$$$$$$$$" },
];

export default function ScalingLawsInteractive() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(2);

  return (
    <div className="panel llm-scaling-panel">
      <svg
        className="llm-scaling-chart"
        viewBox="0 0 400 220"
        aria-label="Scaling laws chart"
      >
        <line x1="50" y1="180" x2="370" y2="180" className="embedding-axis" />
        <line x1="50" y1="30" x2="50" y2="180" className="embedding-axis" />
        <text x="210" y="210" className="embedding-axis-label" textAnchor="middle">
          model scale →
        </text>
        <text
          x="16"
          y="105"
          className="embedding-axis-label"
          textAnchor="middle"
          transform="rotate(-90, 16, 105)"
        >
          capability
        </text>

        <path
          d="M 80 150 Q 180 120, 260 70 T 340 40"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="2.5"
          opacity="0.5"
        />

        {SCALE_POINTS.map((pt, i) => {
          const x = 80 + i * 85;
          const y = 180 - pt.score * 1.4;
          const active = hoverIdx === i;
          return (
            <g
              key={pt.label}
              className="llm-scale-point"
              onMouseEnter={() => setHoverIdx(i)}
              onFocus={() => setHoverIdx(i)}
              role="button"
              tabIndex={0}
            >
              <circle
                cx={x}
                cy={y}
                r={active ? 8 : 6}
                className={`llm-scale-dot ${active ? "active" : ""}`}
              />
              <text x={x} y={y - 14} className="llm-scale-label" textAnchor="middle">
                {pt.params}
              </text>
            </g>
          );
        })}
      </svg>

      {hoverIdx !== null && (
        <div className="llm-scale-detail">
          <p className="mono">
            {SCALE_POINTS[hoverIdx].label} · {SCALE_POINTS[hoverIdx].params}
          </p>
          <p className="legend">
            Illustrative capability score: {SCALE_POINTS[hoverIdx].score}/100 ·
            Training cost: {SCALE_POINTS[hoverIdx].cost}
          </p>
        </div>
      )}

      <p className="legend llm-scaling-note">
        Scaling laws: bigger models + more data → predictable gains. This drives
        the current &quot;gold rush&quot; in AI compute — but inference still uses
        the same two-file pattern.
      </p>
    </div>
  );
}
