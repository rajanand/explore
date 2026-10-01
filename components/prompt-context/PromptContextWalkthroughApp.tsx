"use client";

import React from "react";
import Link from "next/link";
import PromptContextSidebar, {
  PROMPT_CONTEXT_SECTION_IDS,
} from "@/components/prompt-context/PromptContextSidebar";
import ContextBudgetInteractive from "@/components/prompt-context/ContextBudgetInteractive";
import StructuredOutputInteractive from "@/components/prompt-context/StructuredOutputInteractive";
import DecisionTreeInteractive from "@/components/prompt-context/DecisionTreeInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function PromptContextWalkthroughApp() {
  const activeId = useScrollSpy(PROMPT_CONTEXT_SECTION_IDS);

  return (
    <div className="app">
      <PromptContextSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · context</p>
          <h1>
            Prompt &amp; context
            <br />
            <em>engineering</em>
          </h1>
          <p className="lede">
            Models only see what you fit in the window. Design system prompts, pack context, and
            choose the right lever before fine-tuning.
          </p>
        </section>

        <section className="step" id="system">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">System prompt design</h2>
          <p className="lede">
            Separate <strong>role</strong> (who), <strong>constraints</strong> (must/must not), and
            <strong> format</strong> (citations, JSON). Few-shot examples belong here when the task
            is brittle.
          </p>
        </section>

        <section className="step" id="budget">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Context budget</h2>
          <ContextBudgetInteractive />
        </section>

        <section className="step" id="structured">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Structured output</h2>
          <StructuredOutputInteractive />
        </section>

        <section className="step" id="decide">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">RAG vs fine-tune vs agent</h2>
          <DecisionTreeInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap &amp; IT copilot checklist</h2>
          <ul className="pc-checklist">
            <li>Ground answers with RAG + graph when IDs matter (INC-1042).</li>
            <li>Measure with golden evals before widening access.</li>
            <li>Agents only for workflows; keep read paths simple.</li>
          </ul>
          <RelatedModules
            links={[
              { href: "/topics/embeddings", label: "Embeddings" },
              { href: "/topics/graph-rag", label: "Graph RAG" },
              { href: "/topics/llm-evals", label: "Evals" },
            ]}
          />
          <p className="note">
            Foundations: <Link href="/topics/llm-intro">LLM intro</Link> ·{" "}
            <Link href="/topics/rag">RAG</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
