"use client";

import React, { useMemo, useState } from "react";
import {
  buildAugmentedPrompt,
  chunkDocuments,
  CORPUS_DOCUMENTS,
  generateAnswer,
  retrieveChunks,
  SAMPLE_QUERIES,
} from "@/lib/rag/corpus";

export default function RagPlaygroundInteractive() {
  const [queryId, setQueryId] = useState<string>(SAMPLE_QUERIES[0].id);
  const [topK, setTopK] = useState(2);
  const [showPrompt, setShowPrompt] = useState(true);

  const sample = SAMPLE_QUERIES.find((q) => q.id === queryId) ?? SAMPLE_QUERIES[0];

  const allChunks = useMemo(
    () => chunkDocuments(CORPUS_DOCUMENTS, "sentence"),
    []
  );

  const retrieved = useMemo(
    () => retrieveChunks(sample.query, allChunks, topK),
    [sample.query, allChunks, topK]
  );

  const prompt = useMemo(
    () => buildAugmentedPrompt(sample.query, retrieved),
    [sample.query, retrieved]
  );

  const answer = useMemo(
    () => generateAnswer(sample.query, retrieved),
    [sample.query, retrieved]
  );

  return (
    <>
      <div className="controls">
        {SAMPLE_QUERIES.map((q) => (
          <button
            key={q.id}
            type="button"
            className={`btn ${queryId === q.id ? "active" : ""}`}
            onClick={() => setQueryId(q.id)}
          >
            {q.label}
          </button>
        ))}
      </div>

      <div className="controls">
        {[1, 2, 3].map((k) => (
          <button
            key={k}
            type="button"
            className={`btn ${topK === k ? "active" : ""}`}
            onClick={() => setTopK(k)}
          >
            Top-<span className="mono">{k}</span> chunks
          </button>
        ))}
        <button
          type="button"
          className={`btn ${showPrompt ? "active" : ""}`}
          onClick={() => setShowPrompt(!showPrompt)}
        >
          {showPrompt ? "Hide" : "Show"} augmented prompt
        </button>
      </div>

      <div className="panel">
        <p className="mono rag-query-line">Query: {sample.query}</p>

        <div className="rag-retrieval-results">
          <p className="mono rag-section-label">Retrieved chunks</p>
          {retrieved.map((chunk, i) => (
            <div key={chunk.id} className="rag-retrieval-row">
              <div className="rag-score-bar">
                <div
                  className="rag-score-fill"
                  style={{ width: `${Math.round(chunk.score * 100)}%` }}
                />
              </div>
              <span className="mono rag-score-pct">
                {(chunk.score * 100).toFixed(0)}%
              </span>
              <div className="rag-retrieval-text">
                <span className="mono rag-chunk-meta">
                  #{i + 1} · {chunk.docTitle}
                </span>
                <p>{chunk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPrompt && (
        <div className="panel">
          <p className="mono rag-section-label">Augmented prompt</p>
          <pre className="llm-stage-example">{prompt}</pre>
        </div>
      )}

      <div className="panel rag-answer-box rag-answer-good">
        <p className="rag-answer-label mono">Generated answer</p>
        <p>{answer}</p>
      </div>
    </>
  );
}
