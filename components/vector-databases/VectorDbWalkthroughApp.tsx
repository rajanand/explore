"use client";

import React from "react";
import VectorDbSidebar, { VECTOR_DB_SECTION_IDS } from "@/components/vector-databases/VectorDbSidebar";
import IndexPickerInteractive from "@/components/vector-databases/IndexPickerInteractive";
import MetadataFilterInteractive from "@/components/vector-databases/MetadataFilterInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function VectorDbWalkthroughApp() {
  const activeId = useScrollSpy(VECTOR_DB_SECTION_IDS);

  return (
    <div className="app">
      <VectorDbSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · storage</p>
          <h1>
            Vector
            <br />
            <em>databases</em>
          </h1>
          <p className="lede">
            Embeddings need an index and metadata filters for enterprise ACLs. Practice picking ANN
            strategies and tenant-aware retrieval without vendor slogans.
          </p>
          <div className="panel mono pw-outcome">
            After this module: justify pgvector vs a dedicated store and explain pre-filters to
            security.
          </div>
        </section>

        <section className="step" id="when">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">When a vector DB</h2>
          <p className="lede">
            You need fast top-k over millions of vectors, often with hybrid search and replication.
            Small corpora in Postgres can be enough — do not over-buy infra on day one.
          </p>
        </section>

        <section className="step" id="index">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Index tradeoffs</h2>
          <IndexPickerInteractive />
        </section>

        <section className="step" id="filter">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Metadata filters</h2>
          <MetadataFilterInteractive />
        </section>

        <section className="step" id="ops">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Operations</h2>
          <ul className="pw-list">
            <li>Version embeddings — reindex when the model changes.</li>
            <li>Monitor recall@k on eval sets after index parameter changes.</li>
            <li>Keep chunk ids stable for hybrid + rerank pipelines.</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/hybrid-search", label: "Hybrid search" },
              { href: "/topics/reranking", label: "Reranking" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
