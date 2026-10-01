"use client";

import React from "react";
import StreamingSidebar, { STREAMING_SECTION_IDS } from "@/components/streaming-apis/StreamingSidebar";
import StreamStateInteractive from "@/components/streaming-apis/StreamStateInteractive";
import TimeoutQuizInteractive from "@/components/streaming-apis/TimeoutQuizInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function StreamingWalkthroughApp() {
  const activeId = useScrollSpy(STREAMING_SECTION_IDS);

  return (
    <div className="app">
      <StreamingSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · APIs</p>
          <h1>
            Streaming
            <br />
            <em>chat APIs</em>
          </h1>
          <p className="lede">
            SSE streaming feels simple until VPNs, timeouts, and partial markdown bite. Walk a client
            state machine you can defend in API review.
          </p>
          <div className="panel mono pw-outcome">
            After this module: specify SSE behavior for stalls, errors, and retries.
          </div>
        </section>

        <section className="step" id="sse">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">SSE basics</h2>
          <p className="lede">
            One long-lived HTTP response, event chunks, heartbeats optional. Auth at connection time;
            propagate request id in the first event.
          </p>
        </section>

        <section className="step" id="state">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Client state machine</h2>
          <StreamStateInteractive />
        </section>

        <section className="step" id="timeout">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Failure modes</h2>
          <TimeoutQuizInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/tool-calling", label: "Tool calling" },
              { href: "/topics/ai-observability", label: "Observability" },
              { href: "/topics/ai-agents", label: "AI agents" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
