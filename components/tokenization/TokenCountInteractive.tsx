"use client";

import React, { useMemo, useState } from "react";
import { COST_RATES, MOCK_TOKENS, SAMPLE_TEXT } from "@/lib/tokenization/content";

export default function TokenCountInteractive() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const tokens = useMemo(() => {
    const len = text.length;
    const ratio = len / SAMPLE_TEXT.length;
    const n = Math.max(8, Math.round(MOCK_TOKENS.length * ratio));
    return MOCK_TOKENS.slice(0, Math.min(n, MOCK_TOKENS.length));
  }, [text]);

  const cost = useMemo(() => {
    const perM = COST_RATES.inputPer1M;
    return ((tokens.length * perM) / 1_000_000).toFixed(5);
  }, [tokens.length]);

  return (
    <>
      <label className="lede">
        Edit incident text (mock tokenizer — counts scale with length):
        <textarea
          className="panel"
          style={{ width: "100%", minHeight: 80, marginTop: 8, fontFamily: "inherit" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <p className="mono">~{tokens.length} tokens</p>
      <div className="tok-chip-row">
        {tokens.map((t, i) => (
          <span key={i} className="tok-chip">{t}</span>
        ))}
      </div>
      <p className="pw-verdict">
        Mock input cost for this single prompt: ~${cost} (illustrative $/1M tokens).
        Long ACL headers and JSON tools eat the same budget.
      </p>
    </>
  );
}
