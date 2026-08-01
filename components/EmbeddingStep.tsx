"use client";

import React, { useMemo, useState } from "react";
import TokenChip from "./TokenChip";
import EmbeddingScatterPlot from "./EmbeddingScatterPlot";
import { useTransformerWalkthrough } from "./TransformerWalkthroughProvider";
import {
  StepDetailNote,
  StepFootnote,
  StepMechanics,
  StepModelList,
} from "./walkthrough/StepEnrich";
import { EMBEDDING_DIM_SPECS } from "@/lib/transformer/modelSpecs";
import { TROPHY_IDX } from "@/lib/transformer/constants";
import {
  getEmbeddingExplainer,
  getEmbeddingStates,
} from "@/lib/transformer/embeddingSimilarity";
import { findTokenIdx } from "@/lib/transformer/embeddingLayout";
import { randVec } from "@/lib/transformer/vectors";

const DIM_OPTIONS = [4, 8, 12] as const;

export default function EmbeddingStep() {
  const { tokens } = useTransformerWalkthrough();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(TROPHY_IDX);
  const [dims, setDims] = useState<number>(4);

  const vectors = useMemo(
    () => tokens.map((_, i) => randVec(i * 17 + 3, dims)),
    [tokens, dims]
  );

  const states = useMemo(
    () => getEmbeddingStates(selectedIdx, tokens),
    [selectedIdx, tokens]
  );

  const explainer = useMemo(
    () => getEmbeddingExplainer(selectedIdx, tokens),
    [selectedIdx, tokens]
  );

  const trophyIdx = findTokenIdx(tokens, "trophy");
  const suitcaseIdx = findTokenIdx(tokens, "suitcase");

  return (
    <>
      <StepMechanics formula="E = EmbeddingLookup(token_id)">
        Each token ID is mapped to a <strong>dense vector</strong> — a learned
        lookup table, not a hand-written definition. Similar words end up near
        each other in this space after training.
      </StepMechanics>

      <div className="controls">
        {DIM_OPTIONS.map((d) => (
          <button
            key={d}
            type="button"
            className={`btn ${dims === d ? "active" : ""}`}
            onClick={() => setDims(d)}
          >
            Show <span className="mono">{d}</span> dims
          </button>
        ))}
        {trophyIdx >= 0 && (
          <button
            type="button"
            className={`btn ${selectedIdx === trophyIdx ? "active" : ""}`}
            onClick={() => setSelectedIdx(trophyIdx)}
          >
            Highlight <span className="mono">trophy</span> cluster
          </button>
        )}
      </div>

      <StepDetailNote>
        Vectors show <strong>{dims} of 768+</strong> numbers per token. Click a
        chip to highlight an illustrative similarity cluster.
      </StepDetailNote>

      <StepModelList items={EMBEDDING_DIM_SPECS} />

      <div className="panel">
        <p className="embedding-vector-title mono">Raw vector values (demo)</p>
        <div className="tokrow">
          {tokens.map((token, i) => (
            <TokenChip
              key={`${token}-${i}`}
              token={token}
              sublabel={`[${vectors[i].join(", ")}]`}
              state={states[i]}
              onClick={() =>
                setSelectedIdx(selectedIdx === i ? null : i)
              }
              ariaPressed={selectedIdx === i}
            />
          ))}
        </div>
        <p className="legend interactive-explainer">{explainer}</p>
      </div>

      <div className="panel embedding-scatter-panel">
        <p className="embedding-scatter-title mono">
          Embedding space · 2D projection
        </p>
        <EmbeddingScatterPlot
          tokens={tokens}
          selectedIdx={selectedIdx}
          states={states}
          onSelect={setSelectedIdx}
        />
        {trophyIdx >= 0 && suitcaseIdx >= 0 && (
          <p className="legend embedding-distance-note">
            In this illustrative layout,{" "}
            <span className="mono">trophy</span> and{" "}
            <span className="mono">suitcase</span> are nearest neighbors among
            physical objects — farther from abstract words like{" "}
            <span className="mono">because</span>.
          </p>
        )}
      </div>

      <StepFootnote>
        Real models use hundreds of dimensions; we project to 2D so you can see
        that geometry encodes meaning — physical objects cluster together after
        training, not because we labeled them.
      </StepFootnote>
    </>
  );
}
