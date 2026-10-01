"use client";

import React, { useMemo, useState } from "react";
import { BUDGET_ITEMS, WINDOW } from "@/lib/context-windows/content";

export default function BudgetInteractive() {
  const [include, setInclude] = useState<Record<string, boolean>>({
    sys: true,
    tools: true,
    rag: true,
    thread: true,
  });

  const total = useMemo(
    () => BUDGET_ITEMS.filter((b) => include[b.id]).reduce((s, b) => s + b.tokens, 0),
    [include]
  );

  const over = total > WINDOW;

  return (
    <>
      <p className="lede">Toggle sections in a 128k window incident summarization job.</p>
      {BUDGET_ITEMS.map((b) => (
        <button
          key={b.id}
          type="button"
          className={`pw-chip ${include[b.id] ? "on" : ""}`}
          style={{ display: "block", width: "100%", marginBottom: 8, textAlign: "left" }}
          onClick={() => setInclude((prev) => ({ ...prev, [b.id]: !prev[b.id] }))}
        >
          {b.label} — ~{b.tokens.toLocaleString()} tokens
        </button>
      ))}
      <p className={`pw-verdict ${over ? "warn" : ""}`}>
        Total ~{total.toLocaleString()} / {WINDOW.toLocaleString()}
        {over ? " — summarize thread, trim RAG, or route to larger context model." : " — fits with headroom."}
      </p>
    </>
  );
}
