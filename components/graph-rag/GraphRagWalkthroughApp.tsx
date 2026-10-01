"use client";

import React from "react";
import Link from "next/link";
import GraphRagSidebar, { GRAPH_RAG_SECTION_IDS } from "@/components/graph-rag/GraphRagSidebar";
import IncidentGraphInteractive from "@/components/graph-rag/IncidentGraphInteractive";
import CompareInteractive from "@/components/graph-rag/CompareInteractive";
import FusionBoardInteractive from "@/components/graph-rag/FusionBoardInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function GraphRagWalkthroughApp() {
  const activeId = useScrollSpy(GRAPH_RAG_SECTION_IDS);

  return (
    <div className="app">
      <GraphRagSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · retrieval</p>
          <h1>
            Graph RAG &amp;
            <br />
            <em>hybrid retrieval</em>
          </h1>
          <p className="lede">
            Some answers need similar paragraphs; others need <strong>multi-hop structure</strong>.
            Combine vector search with the knowledge graphs you built in the ontology module.
          </p>
        </section>

        <section className="step" id="limits">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Vector-only limits</h2>
          <p className="lede">
            Embeddings excel at &quot;sounds like this&quot; but can miss explicit relations —
            especially when the question names an entity ID.
          </p>
        </section>

        <section className="step" id="graph">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Knowledge graph view</h2>
          <p className="lede">
            Click nodes to expand context along IT support edges (incident → service → policy).
          </p>
          <IncidentGraphInteractive />
        </section>

        <section className="step" id="compare">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Vector vs graph</h2>
          <CompareInteractive />
        </section>

        <section className="step" id="fusion">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Fusion board</h2>
          <p className="lede">Pick a question type; see which retrievers should run.</p>
          <FusionBoardInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <p className="lede">
            Hybrid RAG is not always worth the ops cost — use graphs when relations and IDs matter.
          </p>
          <RelatedModules
            links={[
              { href: "/topics/ontology", label: "Ontologies" },
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/rag", label: "RAG" },
            ]}
          />
          <p className="note">
            See also <Link href="/topics/prompt-context">Prompt &amp; context engineering</Link> for
            packing graph facts into the model window.
          </p>
        </section>
      </main>
    </div>
  );
}
