"use client";

import React, { useMemo, useState } from "react";
import {
  CORPUS_DOCUMENTS,
  chunkDocuments,
  type ChunkStrategy,
} from "@/lib/rag/corpus";

export default function IndexingInteractive() {
  const [strategy, setStrategy] = useState<ChunkStrategy>("sentence");
  const [activeDoc, setActiveDoc] = useState(CORPUS_DOCUMENTS[0].id);

  const chunks = useMemo(
    () => chunkDocuments(CORPUS_DOCUMENTS, strategy),
    [strategy]
  );

  const docChunks = chunks.filter((c) => c.docId === activeDoc);

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${strategy === "sentence" ? "active" : ""}`}
          onClick={() => setStrategy("sentence")}
        >
          Sentence chunks
        </button>
        <button
          type="button"
          className={`btn ${strategy === "document" ? "active" : ""}`}
          onClick={() => setStrategy("document")}
        >
          Whole-document chunks
        </button>
      </div>

      <div className="controls">
        {CORPUS_DOCUMENTS.map((doc) => (
          <button
            key={doc.id}
            type="button"
            className={`btn ${activeDoc === doc.id ? "active" : ""}`}
            onClick={() => setActiveDoc(doc.id)}
          >
            {doc.title}
          </button>
        ))}
      </div>

      <div className="panel rag-index-panel">
        <div className="rag-index-stats mono">
          <span>{CORPUS_DOCUMENTS.length} documents</span>
          <span>{chunks.length} chunks indexed</span>
          <span>768-dim vectors (illustrative)</span>
        </div>

        <div className="rag-chunk-grid">
          {docChunks.map((chunk) => (
            <div key={chunk.id} className="rag-chunk-card">
              <p className="mono rag-chunk-meta">
                chunk {chunk.index} · {chunk.source}
              </p>
              <p>{chunk.text}</p>
              <p className="rag-embed-badge mono">→ vector[i]</p>
            </div>
          ))}
        </div>

        <p className="legend">
          Indexing runs offline: split text, embed each chunk, upsert into a
          vector database (Pinecone, pgvector, OpenSearch, etc.).
        </p>
      </div>
    </>
  );
}
