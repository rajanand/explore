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
import { TOKENIZER_SPECS } from "@/lib/transformer/modelSpecs";
import {
  getTokenizedSequence,
  getTokenizerNote,
  TOKENIZER_MODES,
  type TokenizerMode,
} from "@/lib/transformer/tokenization";

export default function TokenStep() {
  const { variant } = useTransformerWalkthrough();
  const [mode, setMode] = useState<TokenizerMode>("word");

  const tokens = useMemo(
    () => getTokenizedSequence(mode, variant),
    [mode, variant]
  );

  return (
    <>
      <StepMechanics formula="tokens = Tokenizer(text)">
        Raw text is split into a <strong>sequence of token IDs</strong>. Each
        ID points to a row in an embedding table learned during training. There
        is no single universal tokenizer — models pick byte-pair encoding (BPE),
        word-piece, or other schemes.
      </StepMechanics>

      <div className="controls">
        {TOKENIZER_MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`btn ${mode === m.id ? "active" : ""}`}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <StepDetailNote>
        <strong>{TOKENIZER_MODES.find((m) => m.id === mode)?.description}</strong>
        — {tokens.length} tokens for our sentence.
      </StepDetailNote>

      <StepModelList items={TOKENIZER_SPECS} />

      <div className="panel">
        <div
          className={`tokrow ${mode === "chars" ? "tokrow-scroll" : ""}`}
        >
          {tokens.map((token, i) => (
            <TokenChip
              key={`${mode}-${token}-${i}`}
              token={token}
              sublabel={`id ${i}`}
              size={mode === "chars" ? "small" : "default"}
            />
          ))}
        </div>
        <p className="legend">{getTokenizerNote(mode, tokens.length)}</p>
      </div>

      <StepFootnote>
        Switch modes above to see how the same sentence splits differently.
        GPT-style models typically use BPE; character-level is rare at scale
        because sequences become very long.
      </StepFootnote>
    </>
  );
}
