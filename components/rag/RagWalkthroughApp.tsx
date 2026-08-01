"use client";

import React from "react";
import RagSidebar, { RAG_WALKTHROUGH_SECTION_IDS } from "@/components/rag/RagSidebar";
import ProblemInteractive from "@/components/rag/ProblemInteractive";
import PipelineOverviewInteractive from "@/components/rag/PipelineOverviewInteractive";
import IndexingInteractive from "@/components/rag/IndexingInteractive";
import RagPlaygroundInteractive from "@/components/rag/RagPlaygroundInteractive";
import ChunkingInteractive from "@/components/rag/ChunkingInteractive";
import PitfallsInteractive from "@/components/rag/PitfallsInteractive";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function RagWalkthroughApp() {
  const activeId = useScrollSpy(RAG_WALKTHROUGH_SECTION_IDS);

  return (
    <div className="app">
      <RagSidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Interactive guide</p>
          <h1>
            Retrieval-Augmented
            <br />
            <em>Generation (RAG)</em>
          </h1>
          <p className="lede">
            LLMs are powerful but blind to your private docs and yesterday&apos;s
            deploy. RAG retrieves relevant passages at query time, stuffs them
            into the prompt, and grounds the answer — without retraining weights.
          </p>
          <div
            className="panel mono"
            style={{ fontSize: "14px", color: "var(--ink-dim)" }}
          >
            Demo corpus: fictional Acme Analytics internal docs (HR, API, ops,
            FAQ). You&apos;ll query them like a real enterprise search + chat
            stack.
          </div>
          <p className="note">
            Three parts: <strong>The gap</strong> → <strong>The pipeline</strong>{" "}
            → <strong>Ship it</strong>. Step 04 is the full retrieve → generate
            playground.
          </p>
        </section>

        <section className="step" id="problem">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">The gap RAG fills</h2>
          <p className="lede">
            Start with how LLM chat works <strong>today</strong>, name what&apos;s
            missing, then walk the <strong>full RAG data flow</strong> — indexing
            offline, retrieval and generation at query time.
          </p>
          <ProblemInteractive />
        </section>

        <section className="step" id="overview">
          <p className="eyebrow">Part 2 · Step 02</p>
          <h2 className="title">The RAG pipeline</h2>
          <p className="lede">
            Two phases: <strong>indexing</strong> (offline) builds a searchable
            memory; <strong>query time</strong> retrieves, augments, and generates.
          </p>
          <PipelineOverviewInteractive />
        </section>

        <section className="step" id="indexing">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Indexing: chunk, embed, store</h2>
          <p className="lede">
            Documents are split into <strong>chunks</strong>, converted to
            vectors, and stored in a vector database. This is the knowledge base
            your app queries — not the LLM weights.
          </p>
          <IndexingInteractive />
        </section>

        <section className="step" id="playground">
          <p className="eyebrow">Part 2 · Step 04 — interactive</p>
          <h2 className="title">Retrieve, augment, generate</h2>
          <p className="lede">
            Watch similarity scores pick chunks, see the augmented prompt, and
            read the grounded answer. This is what most &quot;chat with your
            docs&quot; products implement under the hood.
          </p>
          <RagPlaygroundInteractive />
        </section>

        <section className="step" id="chunking">
          <p className="eyebrow">Part 3 · Step 05</p>
          <h2 className="title">Chunking tradeoffs</h2>
          <p className="lede">
            Chunk size shapes retrieval quality. Too large adds noise; too small
            loses context. Production systems often use 256–512 tokens with
            overlap.
          </p>
          <ChunkingInteractive />
        </section>

        <section className="step" id="pitfalls">
          <p className="eyebrow">Part 3 · Step 06</p>
          <h2 className="title">Pitfalls &amp; architecture choices</h2>
          <p className="lede">
            RAG shifts the problem from &quot;can the model answer?&quot; to
            &quot;did we fetch the right evidence?&quot; — plus classic LLM
            security and freshness concerns.
          </p>
          <PitfallsInteractive />
        </section>

        <footer>
          Pair with Introduction to LLMs for the model layer and Transformer
          walkthrough for embeddings and attention underneath vector search.
        </footer>
      </main>
    </div>
  );
}
