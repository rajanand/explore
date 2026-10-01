"use client";

import React, { useMemo, useState } from "react";
import { CORPUS, QUERIES } from "@/lib/hybrid-search/content";

export default function DualRankInteractive() {
  const [qIdx, setQIdx] = useState(0);
  const q = QUERIES[qIdx];

  const bm25 = useMemo(
    () => [...CORPUS].sort((a, b) => b.bm25 - a.bm25),
    []
  );
  const vector = useMemo(
    () => [...CORPUS].sort((a, b) => b.vector - a.vector),
    []
  );

  return (
    <>
      <div className="controls">
        {QUERIES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${qIdx === i ? "active" : ""}`}
            onClick={() => setQIdx(i)}
          >
            {item.id}
          </button>
        ))}
      </div>
      <p className="mono hs-query">Query: &quot;{q.text}&quot;</p>
      <div className="hs-dual">
        <div className="panel">
          <p className="hs-col-title">BM25 (lexical)</p>
          <ol className="hs-rank">
            {bm25.map((d, i) => (
              <li key={d.id}>
                <span className="mono">{i + 1}.</span> {d.title}
                <span className="hs-score">{Math.round(d.bm25 * 100)}%</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="panel">
          <p className="hs-col-title">Vector (semantic)</p>
          <ol className="hs-rank">
            {vector.map((d, i) => (
              <li key={d.id}>
                <span className="mono">{i + 1}.</span> {d.title}
                <span className="hs-score">{Math.round(d.vector * 100)}%</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="legend">{q.note}</p>
    </>
  );
}
