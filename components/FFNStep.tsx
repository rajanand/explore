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
import { FFN_SPECS } from "@/lib/transformer/modelSpecs";
import { IT_IDX } from "@/lib/transformer/constants";
import { randVec } from "@/lib/transformer/vectors";

const FFN_STAGES = [
  { id: "input", label: "input" },
  { id: "expand", label: "hidden (4×)" },
  { id: "output", label: "output" },
] as const;

export default function FFNStep() {
  const { tokens } = useTransformerWalkthrough();
  const [selectedIdx, setSelectedIdx] = useState(IT_IDX);
  const [stage, setStage] = useState<"input" | "expand" | "output">("input");

  const token = tokens[selectedIdx] ?? "it";
  const inputVec = useMemo(
    () => randVec(selectedIdx * 13 + 5, 4),
    [selectedIdx]
  );
  const hiddenVec = useMemo(
    () => randVec(selectedIdx * 29 + 11, 8),
    [selectedIdx]
  );
  const outputVec = useMemo(
    () => randVec(selectedIdx * 41 + 7, 4),
    [selectedIdx]
  );

  const stageVec =
    stage === "input"
      ? inputVec
      : stage === "expand"
        ? hiddenVec
        : outputVec;

  const stageNote =
    stage === "input"
      ? `"${token}" after attention — ${DEMO_HEAD_COUNT} heads mixed context into this vector.`
      : stage === "expand"
        ? `Expanded to ${hiddenVec.length * 3} dims (demo shows 8), ReLU zeros out negative values.`
        : `Projected back to embedding size — refined representation for "${token}".`;

  return (
    <>
      <StepMechanics
        formula={
          <>
            FFN(x) = max(0, xW<sub>1</sub> + b<sub>1</sub>)W<sub>2</sub> + b
            <sub>2</sub>
          </>
        }
      >
        After multi-head attention mixes information <strong>between</strong>{" "}
        tokens, each token vector passes through the <strong>same</strong>{" "}
        two-layer MLP — independently. Attention gathers context; the FFN
        refines what each token now knows on its own.
      </StepMechanics>

      <StepDetailNote>
        Click a token, then step through the FFN. The <strong>same weights</strong>{" "}
        process every position.
      </StepDetailNote>

      <StepModelList items={FFN_SPECS} />

      <div className="panel">
        <div className="tokrow ffn-token-picker">
          {tokens.map((t, i) => (
            <TokenChip
              key={`ffn-${t}-${i}`}
              token={t}
              size="small"
              state={selectedIdx === i ? "focus" : "dim"}
              onClick={() => {
                setSelectedIdx(i);
                setStage("input");
              }}
              ariaPressed={selectedIdx === i}
            />
          ))}
        </div>

        <div className="controls ffn-stage-controls">
          {FFN_STAGES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`btn ${stage === s.id ? "active" : ""}`}
              onClick={() => setStage(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="ffn-row ffn-stage-row">
          <div className="ffn-box">
            {stage === "input" && `"${token}" + attention context`}
            {stage === "expand" && "W₁ · x + b₁ → ReLU"}
            {stage === "output" && "W₂ · h + b₂"}
          </div>
          <span className="arrow">→</span>
          <div
            className={`ffn-box ${stage === "expand" ? "amber" : stage === "output" ? "teal" : ""}`}
          >
            <span className="mono">[{stageVec.join(", ")}]</span>
          </div>
        </div>
        <p className="legend interactive-explainer">{stageNote}</p>
      </div>

      <div className="panel step-layer-anatomy">
        <p className="step-layer-anatomy-title mono">Inside one transformer block</p>
        <div className="step-layer-anatomy-flow">
          <span>input vectors</span>
          <span className="arrow">→</span>
          <span>multi-head attention</span>
          <span className="arrow">→</span>
          <span>add &amp; norm</span>
          <span className="arrow">→</span>
          <span
            className="ffn-box amber"
            style={{ display: "inline-block", padding: "6px 10px" }}
          >
            feed-forward
          </span>
          <span className="arrow">→</span>
          <span>add &amp; norm</span>
          <span className="arrow">→</span>
          <span>output to next layer</span>
        </div>
      </div>

      <StepFootnote>
        Every token gets this private step — attention mixes tokens together,
        then each one thinks alone through the FFN.
      </StepFootnote>
    </>
  );
}
