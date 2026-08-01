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
import { CONTEXT_LENGTH_SPECS } from "@/lib/transformer/modelSpecs";
import { IT_IDX } from "@/lib/transformer/constants";
import {
  formatPosVector,
  getAltPositionForToken,
  getPosEncodingExplainer,
  positionalEncoding,
} from "@/lib/transformer/positionalEncoding";

export default function PosEncodingStep() {
  const { tokens } = useTransformerWalkthrough();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(IT_IDX);
  const [swapIt, setSwapIt] = useState(false);

  const displayPos = useMemo(() => {
    if (selectedIdx === null) return null;
    const token = tokens[selectedIdx];
    const alt = getAltPositionForToken(token, selectedIdx, tokens);
    if (swapIt && alt !== null) return alt;
    return selectedIdx;
  }, [selectedIdx, swapIt, tokens]);

  const explainer = useMemo(() => {
    const alt =
      selectedIdx !== null && swapIt
        ? getAltPositionForToken(tokens[selectedIdx], selectedIdx, tokens)
        : null;
    return getPosEncodingExplainer(selectedIdx, tokens, alt);
  }, [selectedIdx, swapIt, tokens]);

  const canSwapIt =
    selectedIdx !== null &&
    tokens[selectedIdx]?.toLowerCase() === "it";

  return (
    <>
      <StepMechanics formula="xᵢ = E(tokenᵢ) + P(positionᵢ)">
        Attention reads all tokens in parallel, so position is not implicit.
        A <strong>positional pattern</strong> is added to each embedding —
        sinusoidal in the original Transformer, rotary (RoPE) in many modern
        models.
      </StepMechanics>

      {canSwapIt && (
        <div className="controls">
          <button
            type="button"
            className={`btn ${!swapIt ? "active" : ""}`}
            onClick={() => setSwapIt(false)}
          >
            &quot;it&quot; at position <span className="mono">8</span>
          </button>
          <button
            type="button"
            className={`btn ${swapIt ? "active" : ""}`}
            onClick={() => setSwapIt(true)}
          >
            Move &quot;it&quot; to position <span className="mono">1</span>
          </button>
        </div>
      )}

      <StepDetailNote>
        Click any token to inspect its position encoding. Same word, different
        slot → different vector added to the embedding.
      </StepDetailNote>

      <StepModelList items={CONTEXT_LENGTH_SPECS} />

      <div className="panel posenc-demo">
        <div className="posenc-row">
          <span className="posenc-label mono">embedding</span>
          <div className="tokrow">
            {tokens.map((token, i) => (
              <TokenChip
                key={`emb-${token}-${i}`}
                token={token}
                size="small"
                state={
                  selectedIdx === i ? "focus" : selectedIdx !== null ? "dim" : "default"
                }
                onClick={() => {
                  setSelectedIdx(i);
                  setSwapIt(false);
                }}
                ariaPressed={selectedIdx === i}
              />
            ))}
          </div>
        </div>
        <div className="posenc-row">
          <span className="posenc-label mono">+ position</span>
          <div className="tokrow">
            {tokens.map((token, i) => {
              const pos =
                selectedIdx === i && displayPos !== null ? displayPos : i;
              return (
                <TokenChip
                  key={`pos-${token}-${i}`}
                  token={`pos ${pos}`}
                  size="small"
                  state={
                    selectedIdx === i
                      ? "target"
                      : selectedIdx !== null
                        ? "dim"
                        : "default"
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="posenc-row posenc-row-result">
          <span className="posenc-label mono">= input</span>
          <div className="tokrow">
            {tokens.map((token, i) => {
              const pos =
                selectedIdx === i && displayPos !== null ? displayPos : i;
              const sublabel =
                selectedIdx === i
                  ? `+ [${formatPosVector(positionalEncoding(pos))}]`
                  : `pos ${i}`;
              return (
                <TokenChip
                  key={`in-${token}-${i}`}
                  token={token}
                  sublabel={sublabel}
                  size="small"
                  state={selectedIdx === i ? "focus" : "default"}
                  onClick={() => {
                    setSelectedIdx(i);
                    setSwapIt(false);
                  }}
                  ariaPressed={selectedIdx === i}
                />
              );
            })}
          </div>
        </div>
        <p className="legend interactive-explainer">{explainer}</p>
      </div>

      <StepFootnote>
        Toggle &quot;it&quot; positions to see why position must be injected —
        the embedding for &quot;it&quot; alone cannot tell the model where it
        sits in the sentence.
      </StepFootnote>
    </>
  );
}
