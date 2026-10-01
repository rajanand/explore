"use client";

import React from "react";
import LlmSecuritySidebar, { LLM_SECURITY_SECTION_IDS } from "@/components/llm-security/LlmSecuritySidebar";
import InjectionLabInteractive from "@/components/llm-security/InjectionLabInteractive";
import ChunkAclInteractive from "@/components/llm-security/ChunkAclInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function LlmSecurityWalkthroughApp() {
  const activeId = useScrollSpy(LLM_SECURITY_SECTION_IDS);

  return (
    <div className="app">
      <LlmSecuritySidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · risk</p>
          <h1>
            LLM security
            <br />
            <em>for RAG &amp; agents</em>
          </h1>
          <p className="lede">
            Untrusted text in tickets and docs becomes model context. Layer controls instead of
            hoping the system prompt is enough.
          </p>
        </section>

        <section className="step" id="threat">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Threat model</h2>
          <p className="lede">
            Prompt injection, poisoned index content, over-broad tools, and missing retrieval ACLs
            are the usual enterprise failures — not movie-style &quot;hacking the weights.&quot;
          </p>
        </section>

        <section className="step" id="injection">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Injection lab</h2>
          <InjectionLabInteractive />
        </section>

        <section className="step" id="acl">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Chunk ACLs</h2>
          <p className="lede">Retrieval must respect the user&apos;s role — not every doc belongs in context.</p>
          <ChunkAclInteractive />
        </section>

        <section className="step" id="agents">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Agent blast radius</h2>
          <p className="lede">
            Scope tools per environment; require human approval for deploy, spend, and external
            comms. See <a href="/topics/ai-agents">AI agents</a> for patterns.
          </p>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/llm-evals", label: "Evals & guardrails" },
              { href: "/topics/rag", label: "RAG" },
              { href: "/topics/ai-governance", label: "Governance (guide)" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
