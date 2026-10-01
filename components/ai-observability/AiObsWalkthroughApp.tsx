"use client";

import React from "react";
import AiObsSidebar, { AI_OBS_SECTION_IDS } from "@/components/ai-observability/AiObsSidebar";
import TraceMapInteractive from "@/components/ai-observability/TraceMapInteractive";
import SignalQuizInteractive from "@/components/ai-observability/SignalQuizInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function AiObsWalkthroughApp() {
  const activeId = useScrollSpy(AI_OBS_SECTION_IDS);

  return (
    <div className="app">
      <AiObsSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · operate</p>
          <h1>
            AI
            <br />
            <em>observability</em>
          </h1>
          <p className="lede">
            LLM features fail quietly — wrong chunk, wrong route, silent guardrail. Map traces you
            need to debug production screenshots.
          </p>
          <div className="panel mono pw-outcome">
            After this module: define minimum spans and attributes for one shipped copilot.
          </div>
        </section>

        <section className="step" id="why">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Why trace LLM apps</h2>
          <p className="lede">
            Logs alone miss retrieval context. Treat RAG like a distributed system: request → retrieve
            → generate → optional tools/guardrails.
          </p>
        </section>

        <section className="step" id="trace">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Span map</h2>
          <TraceMapInteractive />
        </section>

        <section className="step" id="signals">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Which span first?</h2>
          <SignalQuizInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/llm-evals", label: "Evals" },
              { href: "/topics/streaming-apis", label: "Streaming APIs" },
              { href: "/topics/ai-agents", label: "AI agents" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
