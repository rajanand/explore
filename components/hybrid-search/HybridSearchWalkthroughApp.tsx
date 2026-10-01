"use client";

import React from "react";
import Link from "next/link";
import HybridSearchSidebar, {
  HYBRID_SEARCH_SECTION_IDS,
} from "@/components/hybrid-search/HybridSearchSidebar";
import DualRankInteractive from "@/components/hybrid-search/DualRankInteractive";
import FusionInteractive from "@/components/hybrid-search/FusionInteractive";
import RetrieverQuizInteractive from "@/components/hybrid-search/RetrieverQuizInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function HybridSearchWalkthroughApp() {
  const activeId = useScrollSpy(HYBRID_SEARCH_SECTION_IDS);

  return (
    <div className="app">
      <HybridSearchSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · retrieval</p>
          <h1>
            Hybrid
            <br />
            <em>search</em>
          </h1>
          <p className="lede">
            Real internal search needs <strong>keywords</strong> (INC-1042, error codes) and{" "}
            <strong>meaning</strong> (paraphrased symptoms). Compare rankings side by side, then
            fuse them like production systems do.
          </p>
          <div className="panel mono hs-outcome">
            After this module: you can justify BM25 + vectors and explain RRF to your team.
          </div>
        </section>

        <section className="step" id="why">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Why hybrid</h2>
          <p className="lede">
            Vector-only RAG misses exact tokens; keyword-only search misses paraphrases. Most IT
            copilots run both and merge results.
          </p>
        </section>

        <section className="step" id="dual">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Two rankings, same corpus</h2>
          <DualRankInteractive />
        </section>

        <section className="step" id="fusion">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Reciprocal Rank Fusion</h2>
          <FusionInteractive />
        </section>

        <section className="step" id="choose">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Pick a retriever strategy</h2>
          <RetrieverQuizInteractive />
        </section>

        <section className="step" id="ops">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Operations</h2>
          <ul className="hs-list">
            <li>Keep chunk ids aligned across both indexes.</li>
            <li>Measure recall@k on golden queries — tune fusion on evals, not vibes.</li>
            <li>Reindex both when ACL or content changes.</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 06</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/rag", label: "RAG" },
              { href: "/topics/llm-evals", label: "Evals" },
            ]}
          />
          <p className="note">
            Next depth: <Link href="/topics/vector-databases">Vector databases</Link> (guide, being
            expanded).
          </p>
        </section>
      </main>
    </div>
  );
}
