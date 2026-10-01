"use client";

import React, { useState } from "react";
import { BUDGET, CONTEXT_ITEMS } from "@/lib/prompt-context/content";

export default function ContextBudgetInteractive() {
  const [on, setOn] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(CONTEXT_ITEMS.map((c) => [c.id, true]))
  );

  const toggle = (id: string, required: boolean) => {
    if (required) return;
    setOn((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const used = CONTEXT_ITEMS.filter((c) => on[c.id]).reduce((s, c) => s + c.tokens, 0);
  const overflow = used > BUDGET;

  return (
    <>
      <p className="mono pc-budget">
        {used} / {BUDGET} tokens {overflow ? "— drop or summarize items" : ""}
      </p>
      <div className="pc-budget-bar">
        <div
          className={`pc-budget-fill${overflow ? " over" : ""}`}
          style={{ width: `${Math.min(100, (used / BUDGET) * 100)}%` }}
        />
      </div>
      <ul className="pc-ctx-list">
        {CONTEXT_ITEMS.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`pc-ctx-item${on[c.id] ? " on" : ""}`}
              onClick={() => toggle(c.id, c.required)}
              disabled={c.required}
            >
              <span>{c.label}</span>
              <span className="mono">{c.tokens} tok</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
