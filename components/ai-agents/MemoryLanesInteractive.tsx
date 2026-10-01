"use client";

import React, { useState } from "react";
import { MEMORY_ITEMS } from "@/lib/ai-agents/content";

export default function MemoryLanesInteractive() {
  const [inCtx, setInCtx] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(MEMORY_ITEMS.map((m) => [m.id, m.inContext]))
  );

  const toggle = (id: string, movable: boolean) => {
    if (!movable) return;
    setInCtx((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const used = Object.values(inCtx).filter(Boolean).length;
  const budget = 6;

  return (
    <>
      <p className="mono aa-budget">
        Context slots: {used} / {budget} {used > budget ? "(overflow — drop or summarize)" : ""}
      </p>
      <ul className="aa-memory-list">
        {MEMORY_ITEMS.map((m) => (
          <li key={m.id}>
            <button
              type="button"
              className={`aa-memory-item${inCtx[m.id] ? " in" : " out"}${!m.movable ? " locked" : ""}`}
              onClick={() => toggle(m.id, m.movable)}
              disabled={!m.movable}
            >
              <span>{m.label}</span>
              <span className="mono">{inCtx[m.id] ? "in context" : "external"}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
