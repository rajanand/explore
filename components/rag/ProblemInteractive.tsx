"use client";

import React, { useState } from "react";
import RagDataFlowDiagram from "@/components/rag/RagDataFlowDiagram";
import {
  chunkDocuments,
  CORPUS_DOCUMENTS,
  generateAnswer,
  retrieveChunks,
  SAMPLE_QUERIES,
  WITHOUT_RAG_ANSWERS,
} from "@/lib/rag/corpus";

export default function ProblemInteractive() {
  const [queryId, setQueryId] = useState<string>(SAMPLE_QUERIES[0].id);

  const sample = SAMPLE_QUERIES.find((q) => q.id === queryId) ?? SAMPLE_QUERIES[0];

  const retrieved = retrieveChunks(
    sample.query,
    chunkDocuments(CORPUS_DOCUMENTS, "sentence"),
    2
  );
  const ragAnswer = generateAnswer(sample.query, retrieved);

  return (
    <>
      <RagDataFlowDiagram />

      <p className="step-detail-note">
        Same question, two architectures — toggle a sample query below:
      </p>

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

      <div className="panel rag-compare-panel">
        <p className="mono rag-query-line">User: {sample.query}</p>

        <div className="rag-compare-grid">
          <div className="rag-answer-box rag-answer-warn">
            <p className="rag-answer-label mono">Without RAG</p>
            <p>
              {WITHOUT_RAG_ANSWERS[sample.id as keyof typeof WITHOUT_RAG_ANSWERS]}
            </p>
            <p className="rag-compare-meta">Weights only — docs never consulted</p>
          </div>

          <div className="rag-answer-box rag-answer-good">
            <p className="rag-answer-label mono">With RAG</p>
            <p>{ragAnswer}</p>
            <p className="rag-compare-meta">
              Retrieved from {retrieved[0]?.docTitle ?? "internal docs"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
