"use client";

import React from "react";
import TokenizationSidebar, { TOKENIZATION_SECTION_IDS } from "@/components/tokenization/TokenizationSidebar";
import BpeMergeInteractive from "@/components/tokenization/BpeMergeInteractive";
import TokenCountInteractive from "@/components/tokenization/TokenCountInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function TokenizationWalkthroughApp() {
  const activeId = useScrollSpy(TOKENIZATION_SECTION_IDS);

  return (
    <div className="app">
      <TokenizationSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">AI basics · text</p>
          <h1>
            Tokenization
            <br />
            <em>deep dive</em>
          </h1>
          <p className="lede">
            Models read <strong>tokens</strong>, not characters. Token boundaries drive cost, context
            limits, and why INC-1042 might split oddly in logs.
          </p>
          <div className="panel mono pw-outcome">
            After this module: estimate token cost and explain splits on incident text.
          </div>
        </section>

        <section className="step" id="why">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Why tokens matter</h2>
          <p className="lede">
            API pricing, max context, and truncation all count tokens. English averages ~4 characters
            per token — code, IDs, and JSON are often worse.
          </p>
        </section>

        <section className="step" id="bpe">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">BPE intuition</h2>
          <BpeMergeInteractive />
        </section>

        <section className="step" id="count">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Count &amp; cost</h2>
          <TokenCountInteractive />
        </section>

        <section className="step" id="limits">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Limits</h2>
          <p className="lede">
            Tokenizers differ by model family — always use the tokenizer tied to the model you call.
            Mock counts here teach intuition; ship features with the official token counter API.
          </p>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/llm-intro", label: "LLM intro" },
              { href: "/topics/context-windows", label: "Context windows" },
              { href: "/topics/decoding-sampling", label: "Decoding" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
