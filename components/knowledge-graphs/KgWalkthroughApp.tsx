"use client";

import React from "react";
import KgSidebar, { KG_SECTION_IDS } from "@/components/knowledge-graphs/KgSidebar";
import TraverseInteractive from "@/components/knowledge-graphs/TraverseInteractive";
import RetrieverPickInteractive from "@/components/knowledge-graphs/RetrieverPickInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function KgWalkthroughApp() {
  const activeId = useScrollSpy(KG_SECTION_IDS);

  return (
    <div className="app">
      <KgSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · structure</p>
          <h1>
            Knowledge
            <br />
            <em>graphs</em>
          </h1>
          <p className="lede">
            Ontology is schema; the graph is live instances — services, incidents, owners. Some IT
            questions are hops, not similarity search.
          </p>
          <div className="panel mono pw-outcome">
            After this module: say when traversals beat vectors for on-call questions.
          </div>
        </section>

        <section className="step" id="vs">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Graph vs vector</h2>
          <p className="lede">
            Vectors excel at language; graphs excel at relationships you already modeled. Most
            copilots use both — see Graph RAG.
          </p>
        </section>

        <section className="step" id="walk">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Traverse a path</h2>
          <TraverseInteractive />
        </section>

        <section className="step" id="quiz">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Pick a retriever</h2>
          <RetrieverPickInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/ontology", label: "Ontologies" },
              { href: "/topics/graph-rag", label: "Graph RAG" },
              { href: "/topics/rag", label: "RAG" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
