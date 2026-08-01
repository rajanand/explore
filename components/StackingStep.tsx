"use client";

import React, { useMemo, useState } from "react";
import TokenChip from "./TokenChip";
import { useTransformerWalkthrough } from "./TransformerWalkthroughProvider";
import {
  StepDetailNote,
  StepFootnote,
  StepMechanics,
  StepModelList,
} from "./walkthrough/StepEnrich";
import { DEMO_HEAD_COUNT } from "@/lib/transformer/multiHeadHighlights";
import { HEAD_COUNT_SPECS, LAYER_COUNT_SPECS } from "@/lib/transformer/modelSpecs";
import {
  LAYER_DEPTH_PRESETS,
  LAYER_STAGES,
} from "@/lib/transformer/walkthroughInteractivity";

export default function StackingStep() {
  const { tokens } = useTransformerWalkthrough();
  const [activeLayer, setActiveLayer] = useState(1);
  const [depthPreset, setDepthPreset] = useState(0);

  const depth = LAYER_DEPTH_PRESETS[depthPreset];
  const stage = LAYER_STAGES.find((l) => l.num === activeLayer) ?? LAYER_STAGES[0];

  const highlightIdxs = useMemo(() => {
    const lower = tokens.map((t) => t.toLowerCase());
    return stage.highlights
      .map((w) => lower.indexOf(w.toLowerCase()))
      .filter((i) => i >= 0);
  }, [stage, tokens]);

  return (
    <>
      <StepMechanics formula="output = Blockₙ(… Block₂(Block₁(input)) …)">
        One round of <strong>multi-head attention + feed-forward</strong> (with
        residual connections and layer norm) is a <strong>layer</strong>, or
        block. Real models repeat this block many times — each layer refines the
        representation using what earlier layers already computed.
      </StepMechanics>

      <div className="controls">
        {LAYER_DEPTH_PRESETS.map((preset, i) => (
          <button
            key={preset.label}
            type="button"
            className={`btn ${depthPreset === i ? "active" : ""}`}
            onClick={() => setDepthPreset(i)}
          >
            {preset.label} · <span className="mono">{preset.layers}</span> layers
          </button>
        ))}
      </div>

      <StepDetailNote>
        Click a layer to see what it emphasizes. Full model depth:{" "}
        <strong>{depth.layers} blocks</strong>.
      </StepDetailNote>

      <StepModelList items={LAYER_COUNT_SPECS} />

      <div className="panel">
        <div className="stack">
          {LAYER_STAGES.map((layer) => (
            <button
              key={layer.num}
              type="button"
              className={`layer-block layer-block-btn ${activeLayer === layer.num ? "active" : ""}`}
              onClick={() => setActiveLayer(layer.num)}
              aria-pressed={activeLayer === layer.num}
            >
              <span>
                <span className="lnum">Layer {layer.num}</span> —{" "}
                {DEMO_HEAD_COUNT} heads → FFN
              </span>
              <span>{layer.label}</span>
            </button>
          ))}
          <div className="stack-loop">
            ↻ × {depth.layers} in {depth.label} — then repeat for deeper models
          </div>
        </div>

        <div className="stack-depth-viz" aria-hidden="true">
          {Array.from({ length: Math.min(depth.layers, 24) }, (_, i) => (
            <div
              key={i}
              className={`stack-depth-bar ${i < activeLayer ? "filled" : ""} ${i === activeLayer - 1 ? "current" : ""}`}
            />
          ))}
          {depth.layers > 24 && (
            <span className="stack-depth-more mono">+{depth.layers - 24}</span>
          )}
        </div>

        <p className="legend">{stage.detail}</p>

        <div className="tokrow stack-highlight-row">
          {tokens.map((token, i) => {
            const state = highlightIdxs.includes(i) ? "focus" : "dim";
            return (
              <TokenChip
                key={`layer-${token}-${i}`}
                token={token}
                size="small"
                state={state}
              />
            );
          })}
        </div>
      </div>

      <StepDetailNote>Attention head count also grows with model size:</StepDetailNote>

      <StepModelList items={HEAD_COUNT_SPECS} />

      <StepFootnote>
        Early layers: grammar and local structure. Later layers: abstract
        understanding built on top — click each layer above to compare.
      </StepFootnote>
    </>
  );
}
