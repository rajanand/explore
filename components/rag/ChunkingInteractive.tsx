"use client";

import React, { useMemo, useState } from "react";
import {
  chunkDocuments,
  CORPUS_DOCUMENTS,
  retrieveChunks,
  type ChunkStrategy,
} from "@/lib/rag/corpus";

const DEMO_QUERY = "What is the API rate limit per minute?";

export default function ChunkingInteractive() {
  const [strategy, setStrategy] = useState<ChunkStrategy>("sentence");

  const chunks = useMemo(
    () => chunkDocuments(CORPUS_DOCUMENTS, strategy),
    [strategy]
  );

  const retrieved = useMemo(
    () => retrieveChunks(DEMO_QUERY, chunks, 2),
    [chunks]
  );

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${strategy === "sentence" ? "active" : ""}`}
          onClick={() => setStrategy("sentence")}
        >
          Small chunks (sentences)
        </button>
        <button
          type="button"
          className={`btn ${strategy === "document" ? "active" : ""}`}
          onClick={() => setStrategy("document")}
        >
          Large chunks (full docs)
        </button>
      </div>

      <div className="panel">
        <p className="mono rag-query-line">Query: {DEMO_QUERY}</p>
        <p className="legend">
          <strong>{chunks.length}</strong> chunks in index · top match scores
          below
        </p>

        <div className="rag-chunking-compare">
          {retrieved.map((chunk) => (
            <div key={chunk.id} className="rag-chunk-card">
              <p className="mono rag-chunk-meta">
                {chunk.docTitle} · score {(chunk.score * 100).toFixed(0)}%
              </p>
              <p>{chunk.text}</p>
            </div>
          ))}
        </div>

        <p className="legend interactive-explainer">
          {strategy === "sentence"
            ? "Small chunks improve precision — the rate-limit sentence ranks high without extra noise."
            : "Large chunks add irrelevant text (auth headers, endpoints) — retrieval signal dilutes."}
        </p>
      </div>
    </>
  );
}
