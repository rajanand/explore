"use client";

import React from "react";
import RerankSidebar, { RERANK_SECTION_IDS } from "@/components/reranking/RerankSidebar";
import RankCompareInteractive from "@/components/reranking/RankCompareInteractive";
import TopKInteractive from "@/components/reranking/TopKInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function RerankWalkthroughApp() {
  const activeId = useScrollSpy(RERANK_SECTION_IDS);

  return (
    <div className="app">
      <RerankSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · retrieval</p>
          <h1>
            Reranking
            <br />
            <em>&amp; cross-encoders</em>
          </h1>
          <p className="lede">
            Bi-encoders are fast; cross-encoders score query–document pairs for a sharper top list.
            Reorder mock candidates and pick a sensible k.
          </p>
          <div className="panel mono pw-outcome">
            After this module: explain when to add a reranker after hybrid retrieval.
          </div>
        </section>

        <section className="step" id="bi">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Bi-encoder top-k</h2>
          <RankCompareInteractive />
        </section>

        <section className="step" id="cross">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Cross-encoder rerank</h2>
          <p className="lede">Toggle ranking mode above — same candidates, different winner.</p>
        </section>

        <section className="step" id="ops">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Operations</h2>
          <TopKInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/hybrid-search", label: "Hybrid search" },
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/llm-evals", label: "Evals" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
