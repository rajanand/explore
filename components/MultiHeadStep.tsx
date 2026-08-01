"use client";

import React, { useMemo } from "react";
import TokenChip from "./TokenChip";
import { useTransformerWalkthrough } from "./TransformerWalkthroughProvider";
import {
  DEMO_HEAD_COUNT,
  getMultiHeadHighlights,
} from "@/lib/transformer/multiHeadHighlights";
import { HEAD_COUNT_SPECS } from "@/lib/transformer/modelSpecs";
import {
  StepDetailNote,
  StepFootnote,
  StepMechanics,
  StepModelList,
} from "./walkthrough/StepEnrich";

export default function MultiHeadStep() {
  const { tokens } = useTransformerWalkthrough();
  const heads = useMemo(() => getMultiHeadHighlights(tokens), [tokens]);

  return (
    <>
      <StepMechanics
        formula={
          <>
            MultiHead(Q,K,V) = Concat(head₁, …, headₕ) · W<sup>O</sup>
          </>
        }
      >
        Step 04 showed <strong>one</strong> attention pattern. Multi-head
        attention runs that same operation{" "}
        <strong>{DEMO_HEAD_COUNT} times in parallel</strong> — each head uses
        its own learned projections (different Q, K, V matrices) on a slice of
        the embedding, so each head can specialize.
      </StepMechanics>

      <StepDetailNote>
        This demo shows <strong>{DEMO_HEAD_COUNT} illustrative heads</strong> for
        our sentence. Real models use many more — the count is a hyperparameter
        called <span className="mono">num_heads</span>, not fixed at 3:
      </StepDetailNote>

      <StepModelList items={HEAD_COUNT_SPECS} />

      <div className="heads">
        {heads.map((head) => (
          <div key={head.num} className="head-card">
            <h4>
              Head {head.num} · {head.label}
            </h4>
            <p className="head-card-desc">{head.description}</p>
            <div className="tokrow">
              {tokens.map((token, i) => {
                const state = head.highlightIdxs.includes(i) ? "focus" : "dim";
                return (
                  <TokenChip
                    key={`head-${head.num}-${token}-${i}`}
                    token={token}
                    state={state}
                    size="small"
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <StepFootnote>
        All {DEMO_HEAD_COUNT} head outputs are concatenated back into one vector
        per token — grammar, coreference, negation, and other patterns combined.
        We don&apos;t design these roles; they emerge during training.
      </StepFootnote>
    </>
  );
}
