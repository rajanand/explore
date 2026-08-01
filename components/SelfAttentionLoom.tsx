"use client";

import React, { useMemo, useRef, useState } from "react";
import TokenChip from "./TokenChip";
import { useTransformerWalkthrough } from "./TransformerWalkthroughProvider";
import { applyVariant, getFullAttentionConfig } from "@/lib/transformer/attentionConfigs";
import { IT_IDX } from "@/lib/transformer/constants";
import { useVerticalAttentionLayout } from "@/hooks/useVerticalAttentionLayout";
import { StepMechanics } from "./walkthrough/StepEnrich";

export default function SelfAttentionLoom() {
  const { tokens, variant, setVariant } = useTransformerWalkthrough();
  const [focusIdx, setFocusIdx] = useState(IT_IDX);

  const displayTokens = useMemo(
    () => applyVariant(tokens, variant),
    [tokens, variant]
  );

  const config = useMemo(() => {
    if (displayTokens.length === 0) return null;
    return getFullAttentionConfig(focusIdx, displayTokens.length, variant);
  }, [displayTokens, focusIdx, variant]);

  const matrixRef = useRef<HTMLDivElement>(null);
  const queryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const keyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { svgSize, paths, queryStates, keyStates, keyWeights } =
    useVerticalAttentionLayout(
      matrixRef,
      queryRefs,
      keyRefs,
      config,
      displayTokens.length,
      [displayTokens, config, focusIdx]
    );

  return (
    <>
      <StepMechanics
        formula={
          <>
            Attention(Q,K,V) = softmax(QK<sup>T</sup> / √d<sub>k</sub>) · V
          </>
        }
      >
        Every token projects into <strong>query</strong>, <strong>key</strong>,
        and <strong>value</strong> vectors. Each query scores every key; those
        scores become weights that mix values. Step 05 runs this{" "}
        <strong>many times in parallel</strong> as separate heads.
      </StepMechanics>

      <div className="controls">
        <button
          type="button"
          className={`btn ${variant === "big" ? "active" : ""}`}
          onClick={() => setVariant("big")}
        >
          …it was too <span className="mono">big</span>.
        </button>
        <button
          type="button"
          className={`btn ${variant === "small" ? "active" : ""}`}
          onClick={() => setVariant("small")}
        >
          …it was too <span className="mono">small</span>.
        </button>
      </div>

      <div className="panel attention-matrix-wrap">
        <div className="attention-matrix-header">
          <span className="attention-col-label">Query</span>
          <span className="attention-col-label attention-col-label-center">
            Attention
          </span>
          <span className="attention-col-label">Key</span>
        </div>

        <div className="attention-matrix" ref={matrixRef}>
          <svg
            className="attention-lines-svg"
            width={svgSize.width}
            height={svgSize.height}
            aria-hidden="true"
          >
            {paths.map((p) => (
              <g
                key={p.key}
                className={`attention-link ${p.isTarget ? "target" : "default"}`}
                opacity={p.opacity}
              >
                <path
                  d={p.d}
                  className="attention-line"
                  strokeWidth={p.strokeWidth}
                  fill="none"
                />
                <polygon points={p.arrow} className="attention-arrow" />
              </g>
            ))}
          </svg>

          {displayTokens.map((token, i) => (
            <React.Fragment key={`row-${token}-${i}`}>
              <button
                type="button"
                className="attention-row-btn attention-cell-query"
                onClick={() => setFocusIdx(i)}
                aria-pressed={focusIdx === i}
              >
                <TokenChip
                  token={token}
                  state={queryStates[i] ?? "default"}
                  chipRef={(el) => {
                    queryRefs.current[i] = el;
                  }}
                />
              </button>

              <div className="attention-cell-mid" aria-hidden="true" />

              <div className="attention-key-row attention-cell-key">
                <TokenChip
                  token={token}
                  state={keyStates[i] ?? "default"}
                  chipRef={(el) => {
                    keyRefs.current[i] = el;
                  }}
                />
                <span className="attention-weight mono">
                  {((keyWeights[i] ?? 0) * 100).toFixed(0)}%
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="legend">
        Click a <strong>query</strong> token on the left to see which{" "}
        <strong>key</strong> tokens it attends to. Thicker arrows = higher
        weight.
      </p>

      {focusIdx === IT_IDX && variant === "big" ? (
        <p id="attention-explainer">
          With <strong>&quot;big,&quot;</strong> the thing that didn&apos;t fit
          is the trophy — so &quot;it&quot; attends strongly to{" "}
          <span className="mono" style={{ color: "var(--teal)" }}>trophy</span>{" "}
          and barely to <span className="mono">suitcase</span>.
        </p>
      ) : focusIdx === IT_IDX && variant === "small" ? (
        <p id="attention-explainer">
          With <strong>&quot;small,&quot;</strong> the thing too small to
          contain the trophy is the suitcase — so &quot;it&quot; now attends
          strongly to{" "}
          <span className="mono" style={{ color: "var(--teal)" }}>suitcase</span>{" "}
          instead.
        </p>
      ) : (
        <p id="attention-explainer">
          <span className="mono" style={{ color: "var(--amber)" }}>
            {displayTokens[focusIdx]}
          </span>{" "}
          is the current query — arrows show how much each key token contributes
          to updating its representation.
        </p>
      )}
    </>
  );
}
