"use client";

import React from "react";
import Link from "next/link";
import LlmEvalsSidebar, { LLM_EVALS_SECTION_IDS } from "@/components/llm-evals/LlmEvalsSidebar";
import GoldenSetInteractive from "@/components/llm-evals/GoldenSetInteractive";
import RetrievalMetricsInteractive from "@/components/llm-evals/RetrievalMetricsInteractive";
import GuardrailInteractive from "@/components/llm-evals/GuardrailInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function LlmEvalsWalkthroughApp() {
  const activeId = useScrollSpy(LLM_EVALS_SECTION_IDS);

  return (
    <div className="app">
      <LlmEvalsSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · quality</p>
          <h1>
            Evals, tests &amp;
            <br />
            <em>guardrails</em>
          </h1>
          <p className="lede">
            Demos lie. Golden sets, retrieval metrics, and layered guardrails keep RAG and agents
            shippable.
          </p>
        </section>

        <section className="step" id="golden">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Golden Q&amp;A sets</h2>
          <GoldenSetInteractive />
        </section>

        <section className="step" id="retrieval">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Retrieval metrics</h2>
          <RetrievalMetricsInteractive />
        </section>

        <section className="step" id="judge">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">LLM-as-judge caveats</h2>
          <p className="lede">
            Using a model to score answers is fast but biased toward fluent wrong answers. Prefer
            exact match or human labels for high-stakes facts; use judges for rubric-style quality.
          </p>
        </section>

        <section className="step" id="guardrails">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Attack cards</h2>
          <GuardrailInteractive />
        </section>

        <section className="step" id="ci">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">CI for AI features</h2>
          <ul className="ev-list">
            <li>Run golden eval on PR when prompts or retrieval config change.</li>
            <li>Block deploy if faithfulness or citation rate drops below threshold.</li>
            <li>Version datasets like code — diffs are reviewable.</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 06</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/rag", label: "RAG pitfalls" },
              { href: "/topics/llm-intro", label: "LLM security intro" },
              { href: "/topics/prompt-context", label: "Prompt & context" },
            ]}
          />
          <p className="note">
            Tighten prompts and context in <Link href="/topics/prompt-context">Prompt &amp; context engineering</Link>.
          </p>
        </section>
      </main>
    </div>
  );
}
