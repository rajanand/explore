"use client";

import React from "react";
import ContextSidebar, { CONTEXT_SECTION_IDS } from "@/components/context-windows/ContextSidebar";
import BudgetInteractive from "@/components/context-windows/BudgetInteractive";
import CacheLayoutInteractive from "@/components/context-windows/CacheLayoutInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function ContextWalkthroughApp() {
  const activeId = useScrollSpy(CONTEXT_SECTION_IDS);

  return (
    <div className="app">
      <ContextSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · runtime</p>
          <h1>
            Context windows
            <br />
            <em>&amp; KV cache</em>
          </h1>
          <p className="lede">
            Everything competes for the same window — system, tools, retrieval, history. Pack
            deliberately and order prompts for cache hits.
          </p>
          <div className="panel mono pw-outcome">
            After this module: budget context for a long thread and spot cache-friendly layout.
          </div>
        </section>

        <section className="step" id="budget">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Budget the window</h2>
          <BudgetInteractive />
        </section>

        <section className="step" id="cache">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">KV cache layout</h2>
          <CacheLayoutInteractive />
        </section>

        <section className="step" id="overflow">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Overflow strategies</h2>
          <ul className="pw-list">
            <li>Summarize older thread turns into a rolling memory block.</li>
            <li>Retrieve fewer, higher-quality chunks instead of stuffing context.</li>
            <li>Route only overflow jobs to long-context models — costs more per token.</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/prompt-context", label: "Prompt & context" },
              { href: "/topics/transformer", label: "Transformer" },
              { href: "/topics/rag", label: "RAG" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
