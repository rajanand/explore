"use client";

import React, { useState } from "react";
import { BUDGET_ITEMS } from "@/lib/context-windows/content";

export default function CacheLayoutInteractive() {
  const [staticFirst, setStaticFirst] = useState(true);

  const order = staticFirst
    ? [...BUDGET_ITEMS].sort((a, b) => Number(b.cacheable) - Number(a.cacheable))
    : BUDGET_ITEMS;

  return (
    <>
      <p className="lede">
        Put stable prefix (system + tools) before dynamic RAG/thread so providers can cache prefix
        KV blocks.
      </p>
      <button
        type="button"
        className={`btn ${staticFirst ? "active" : ""}`}
        onClick={() => setStaticFirst((v) => !v)}
      >
        {staticFirst ? "Cache-friendly order" : "Random order (bad)"}
      </button>
      <ol className="pw-list" style={{ marginTop: 12 }}>
        {order.map((b) => (
          <li key={b.id}>
            {b.label} {b.cacheable ? "(static prefix)" : "(dynamic)"}
          </li>
        ))}
      </ol>
    </>
  );
}
