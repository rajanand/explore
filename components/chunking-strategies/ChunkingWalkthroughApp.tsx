"use client";

import React from "react";
import ChunkingSidebar, { CHUNKING_SECTION_IDS } from "@/components/chunking-strategies/ChunkingSidebar";
import ChunkSizeInteractive from "@/components/chunking-strategies/ChunkSizeInteractive";
import ParentChildInteractive from "@/components/chunking-strategies/ParentChildInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function ChunkingWalkthroughApp() {
  const activeId = useScrollSpy(CHUNKING_SECTION_IDS);

  return (
    <div className="app">
      <ChunkingSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · retrieval</p>
          <h1>
            Advanced
            <br />
            <em>chunking</em>
          </h1>
          <p className="lede">
            Chunk boundaries decide what retrieval can ever find. Tune size, overlap, and parent/child
            patterns on runbook-shaped text.
          </p>
          <div className="panel mono pw-outcome">
            After this module: pick chunking strategy for procedural IT docs.
          </div>
        </section>

        <section className="step" id="size">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Size &amp; overlap</h2>
          <ChunkSizeInteractive />
        </section>

        <section className="step" id="parent">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Parent / child</h2>
          <ParentChildInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/rag", label: "RAG" },
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/document-parsing", label: "Document parsing" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
