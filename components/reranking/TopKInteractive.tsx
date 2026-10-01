"use client";

import React, { useState } from "react";

export default function TopKInteractive() {
  const [k, setK] = useState(50);

  return (
    <>
      <p className="lede">Rerank only the bi-encoder top-k — balance cost vs recall.</p>
      <label className="lede">
        k = {k}
        <input
          type="range"
          min={10}
          max={100}
          step={10}
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>
      <p className={`pw-verdict ${k < 30 ? "warn" : ""}`}>
        {k < 30
          ? "Small k may drop the right doc before rerank — validate on eval set."
          : "Typical production band — measure latency per query at your QPS."}
      </p>
    </>
  );
}
