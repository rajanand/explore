"use client";

import React from "react";
import Link from "next/link";
import EmbeddingsSidebar, {
  EMBEDDINGS_SECTION_IDS,
} from "@/components/embeddings/EmbeddingsSidebar";
import NeighborMapInteractive from "@/components/embeddings/NeighborMapInteractive";
import MetricToggleInteractive from "@/components/embeddings/MetricToggleInteractive";
import ChunkBoundaryInteractive from "@/components/embeddings/ChunkBoundaryInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function EmbeddingsWalkthroughApp() {
  const activeId = useScrollSpy(EMBEDDINGS_SECTION_IDS);

  return (
    <div className="app">
      <EmbeddingsSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · retrieval</p>
          <h1>
            Embeddings &amp;
            <br />
            <em>vector search</em>
          </h1>
          <p className="lede">
            RAG depends on turning text into vectors and finding neighbors. This module makes
            similarity, metrics, and chunking tangible — without calling an API.
          </p>
        </section>

        <section className="step" id="what">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">What embeddings are</h2>
          <p className="lede">
            An embedding maps text to a dense vector so that <strong>similar meaning</strong> sits
            close in space. Search becomes geometry: find the closest stored vectors to the query
            vector.
          </p>
          <ul className="emb-list">
            <li>Same model must embed queries and documents at index time.</li>
            <li>Dimensions are fixed (e.g. 384, 1536) — you store arrays of floats.</li>
            <li>Quality beats raw size: bad chunks break good models.</li>
          </ul>
        </section>

        <section className="step" id="neighbors">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Nearest neighbors</h2>
          <p className="lede">
            Move the query point (synthetic 2D space). Top matches are the three closest document
            embeddings.
          </p>
          <NeighborMapInteractive />
        </section>

        <section className="step" id="metrics">
          <p className="eyebrow">Part 1 · Step 03</p>
          <h2 className="title">Cosine vs dot product</h2>
          <p className="lede">
            Ranking depends on the metric. Toggle and compare paired IT support phrases.
          </p>
          <MetricToggleInteractive />
        </section>

        <section className="step" id="chunks">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Chunk boundaries</h2>
          <p className="lede">
            Embeddings are per chunk, not per file. Splitting changes what retrieval can see.
          </p>
          <ChunkBoundaryInteractive />
        </section>

        <section className="step" id="index">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Indexing intuition</h2>
          <p className="lede">
            At small scale you can compare the query to every vector (flat search). At millions of
            vectors, <strong>approximate nearest neighbor</strong> indexes (HNSW, IVF) trade a little
            accuracy for speed — same API, different latency curve.
          </p>
          <div className="panel mono emb-index-compare">
            <p>flat: exact top-k · O(n) per query</p>
            <p>ANN: ~top-k · O(log n) typical</p>
          </div>
        </section>

        <section className="step" id="failures">
          <p className="eyebrow">Part 2 · Step 06</p>
          <h2 className="title">Failure modes</h2>
          <ul className="emb-list">
            <li><strong>Stale index</strong> — doc updated, vectors not re-embedded.</li>
            <li><strong>Duplicates</strong> — same policy in 12 places floods top-k.</li>
            <li><strong>Semantic drift</strong> — query uses jargon the index never saw.</li>
            <li><strong>Wrong metric / no normalization</strong> — long boilerplate wins.</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 07</p>
          <h2 className="title">Recap</h2>
          <p className="lede">
            Embeddings are the engine behind RAG retrieval. Tune chunks and metrics before buying a
            bigger model.
          </p>
          <RelatedModules
            links={[
              { href: "/topics/rag", label: "RAG pipeline" },
              { href: "/topics/graph-rag", label: "Graph RAG & hybrid retrieval" },
              { href: "/topics/llm-evals", label: "Evals & guardrails" },
            ]}
          />
          <p className="note">
            Continue with <Link href="/topics/graph-rag">Graph RAG</Link> when questions need
            multi-hop structure, not just similar paragraphs.
          </p>
        </section>
      </main>
    </div>
  );
}
