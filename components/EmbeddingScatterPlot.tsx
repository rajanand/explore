"use client";

import React, { useMemo } from "react";
import type { TokenChipState } from "./TokenChip";
import {
  OBJECTS_CLUSTER_REGION,
  getEmbedding2DLayout,
} from "@/lib/transformer/embeddingLayout";
import { EMBEDDING_CLUSTER_LABELS } from "@/lib/transformer/embeddingSimilarity";

const WIDTH = 420;
const HEIGHT = 280;
const PAD = { left: 44, right: 20, top: 24, bottom: 40 };

function toSvgX(x: number): number {
  return PAD.left + x * (WIDTH - PAD.left - PAD.right);
}

function toSvgY(y: number): number {
  return PAD.top + (1 - y) * (HEIGHT - PAD.top - PAD.bottom);
}

type EmbeddingScatterPlotProps = {
  tokens: string[];
  selectedIdx: number | null;
  states: Record<number, TokenChipState>;
  onSelect: (idx: number | null) => void;
};

export default function EmbeddingScatterPlot({
  tokens,
  selectedIdx,
  states,
  onSelect,
}: EmbeddingScatterPlotProps) {
  const points = useMemo(() => getEmbedding2DLayout(tokens), [tokens]);

  const trophy = points.find((p) => p.token.toLowerCase() === "trophy");
  const suitcase = points.find((p) => p.token.toLowerCase() === "suitcase");

  const region = OBJECTS_CLUSTER_REGION;
  const regionCx = toSvgX(region.cx);
  const regionCy = toSvgY(region.cy);
  const regionRx = region.rx * (WIDTH - PAD.left - PAD.right);
  const regionRy = region.ry * (HEIGHT - PAD.top - PAD.bottom);

  const showObjectsLink =
    trophy &&
    suitcase &&
    (selectedIdx === null ||
      selectedIdx === trophy.idx ||
      selectedIdx === suitcase.idx ||
      states[trophy.idx] === "target" ||
      states[suitcase.idx] === "target");

  return (
    <div className="embedding-scatter-wrap">
      <svg
        className="embedding-scatter"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="2D embedding scatter plot showing token clusters"
      >
        <defs>
          <pattern
            id="embed-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="var(--line-soft)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect
          x={PAD.left}
          y={PAD.top}
          width={WIDTH - PAD.left - PAD.right}
          height={HEIGHT - PAD.top - PAD.bottom}
          fill="url(#embed-grid)"
          rx="6"
        />

        <line
          x1={PAD.left}
          y1={HEIGHT - PAD.bottom}
          x2={WIDTH - PAD.right}
          y2={HEIGHT - PAD.bottom}
          className="embedding-axis"
        />
        <line
          x1={PAD.left}
          y1={PAD.top}
          x2={PAD.left}
          y2={HEIGHT - PAD.bottom}
          className="embedding-axis"
        />

        <text
          x={WIDTH / 2}
          y={HEIGHT - 10}
          className="embedding-axis-label"
          textAnchor="middle"
        >
          dimension 1
        </text>
        <text
          x={14}
          y={HEIGHT / 2}
          className="embedding-axis-label"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${HEIGHT / 2})`}
        >
          dimension 2
        </text>

        <ellipse
          cx={regionCx}
          cy={regionCy}
          rx={regionRx}
          ry={regionRy}
          className="embedding-cluster-region"
        />
        <text
          x={regionCx}
          y={regionCy - regionRy - 6}
          className="embedding-cluster-label"
          textAnchor="middle"
        >
          {region.label}
        </text>

        {showObjectsLink && trophy && suitcase && (
          <g className="embedding-nearby-link">
            <line
              x1={toSvgX(trophy.x)}
              y1={toSvgY(trophy.y)}
              x2={toSvgX(suitcase.x)}
              y2={toSvgY(suitcase.y)}
            />
            <text
              x={(toSvgX(trophy.x) + toSvgX(suitcase.x)) / 2}
              y={(toSvgY(trophy.y) + toSvgY(suitcase.y)) / 2 - 8}
              className="embedding-nearby-label"
              textAnchor="middle"
            >
              nearby
            </text>
          </g>
        )}

        {points.map((point) => (
          <EmbeddingPointNode
            key={`${point.token}-${point.idx}`}
            point={point}
            state={states[point.idx] ?? "default"}
            selected={selectedIdx === point.idx}
            onSelect={() =>
              onSelect(selectedIdx === point.idx ? null : point.idx)
            }
          />
        ))}
      </svg>

      <p className="embedding-scatter-hint legend">
        Trophy and suitcase sit in the same region — both are{" "}
        <strong>physical objects</strong>, closer than either is to function
        words like &quot;because.&quot;
      </p>
    </div>
  );
}

function EmbeddingPointNode({
  point,
  state,
  selected,
  onSelect,
}: {
  point: { idx: number; token: string; x: number; y: number; cluster?: string };
  state: TokenChipState;
  selected: boolean;
  onSelect: () => void;
}) {
  const cx = toSvgX(point.x);
  const cy = toSvgY(point.y);
  const r = selected || state === "focus" ? 7 : 5;
  const clusterLabel =
    point.cluster ? EMBEDDING_CLUSTER_LABELS[point.cluster] : undefined;

  return (
    <g
      className={`embedding-point-group ${state} ${selected ? "selected" : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${point.token}${clusterLabel ? `, ${clusterLabel}` : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <circle cx={cx} cy={cy} r={r + 4} className="embedding-point-halo" />
      <circle cx={cx} cy={cy} r={r} className="embedding-point" />
      <text
        x={cx}
        y={cy - r - 6}
        className="embedding-point-label"
        textAnchor="middle"
      >
        {point.token}
      </text>
    </g>
  );
}
