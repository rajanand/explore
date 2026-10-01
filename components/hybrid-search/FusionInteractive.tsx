"use client";

import React, { useMemo } from "react";
import { CORPUS, fusedOrder } from "@/lib/hybrid-search/content";

export default function FusionInteractive() {
  const fused = useMemo(() => fusedOrder(CORPUS), []);

  return (
    <div className="panel">
      <p className="hs-col-title">RRF fused ranking (simulated)</p>
      <ol className="hs-rank">
        {fused.map((d, i) => (
          <li key={d.id} className={i === 0 ? "hs-top" : ""}>
            <span className="mono">{i + 1}.</span> {d.title}
          </li>
        ))}
      </ol>
      <p className="legend">
        Reciprocal Rank Fusion adds <span className="mono">1/(k+rank)</span> from each list — docs
        strong in both lists rise without hand-tuned weights.
      </p>
    </div>
  );
}
