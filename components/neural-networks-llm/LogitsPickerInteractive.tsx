"use client";

import React, { useMemo, useState } from "react";
import { LOGITS_MOCK, VOCAB } from "@/lib/neural-networks-llm/content";

function softmax(xs: number[]) {
  const m = Math.max(...xs);
  const ex = xs.map((x) => Math.exp(x - m));
  const s = ex.reduce((a, b) => a + b, 0);
  return ex.map((e) => e / s);
}

export default function LogitsPickerInteractive() {
  const [temp, setTemp] = useState(1);
  const probs = useMemo(() => {
    const scaled = LOGITS_MOCK.map((l) => l / temp);
    return softmax(scaled);
  }, [temp]);
  const top = probs.indexOf(Math.max(...probs));

  return (
    <>
      <p className="lede">Simplified logits for context &quot;...payments-api&quot; → next token:</p>
      <label className="lede">
        Temperature divisor: {temp.toFixed(1)}
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>
      <ul className="pw-list">
        {VOCAB.map((w, i) => (
          <li key={w}>
            <strong>{w}</strong> — {(probs[i] * 100).toFixed(1)}% (logit {LOGITS_MOCK[i]})
          </li>
        ))}
      </ul>
      <p className="pw-verdict">
        Most likely next token here: <strong>{VOCAB[top]}</strong>. Training shaped these weights;
        inference only runs forward pass + decoding.
      </p>
    </>
  );
}
