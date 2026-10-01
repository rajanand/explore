"use client";

import React, { useState } from "react";
import { BPE_STEPS } from "@/lib/tokenization/content";

export default function BpeMergeInteractive() {
  const [step, setStep] = useState(0);
  const current = BPE_STEPS[step];

  return (
    <>
      <p className="lede">
        Byte-Pair Encoding repeatedly merges frequent character pairs into new symbols — that vocabulary
        becomes the tokenizer.
      </p>
      <div className="controls">
        {BPE_STEPS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`btn ${step === i ? "active" : ""}`}
            onClick={() => setStep(i)}
          >
            Merge {i + 1}
          </button>
        ))}
      </div>
      <div className="panel mono">
        Pair: <strong>{current.pair}</strong> → token <strong>{current.merge}</strong>
      </div>
      <p className="pw-verdict">{current.note}</p>
    </>
  );
}
