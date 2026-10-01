"use client";

import React from "react";
import DecodingSidebar, { DECODING_SECTION_IDS } from "@/components/decoding-sampling/DecodingSidebar";
import DecodingProfilesInteractive from "@/components/decoding-sampling/DecodingProfilesInteractive";
import StopStrategyInteractive from "@/components/decoding-sampling/StopStrategyInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function DecodingWalkthroughApp() {
  const activeId = useScrollSpy(DECODING_SECTION_IDS);

  return (
    <div className="app">
      <DecodingSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">AI basics · generation</p>
          <h1>
            Decoding &amp;
            <br />
            <em>sampling</em>
          </h1>
          <p className="lede">
            After logits, the model <strong>samples</strong> the next token. Temperature and top-p
            control randomness — critical for support bots vs brainstorming.
          </p>
          <div className="panel mono pw-outcome">
            After this module: pick decoding settings for deterministic vs varied outputs.
          </div>
        </section>

        <section className="step" id="logits">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">From logits to text</h2>
          <p className="lede">
            The model outputs a score per vocabulary token. Decoding turns that distribution into one
            chosen token per step, repeated until stop.
          </p>
        </section>

        <section className="step" id="profiles">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Three profiles</h2>
          <DecodingProfilesInteractive />
        </section>

        <section className="step" id="stop">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Stop &amp; structure</h2>
          <StopStrategyInteractive />
        </section>

        <section className="step" id="limits">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Limits</h2>
          <p className="lede">
            Structured outputs often need constrained decoding or tool schemas — temperature alone
            does not guarantee valid JSON. Match API features to your contract.
          </p>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/tokenization", label: "Tokenization" },
              { href: "/topics/prompt-context", label: "Prompt & context" },
              { href: "/topics/llm-intro", label: "LLM intro" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
