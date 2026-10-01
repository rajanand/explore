"use client";

import React from "react";
import NeuralNetsSidebar, { NEURAL_NETS_SECTION_IDS } from "@/components/neural-networks-llm/NeuralNetsSidebar";
import ForwardPassInteractive from "@/components/neural-networks-llm/ForwardPassInteractive";
import LogitsPickerInteractive from "@/components/neural-networks-llm/LogitsPickerInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function NeuralNetsWalkthroughApp() {
  const activeId = useScrollSpy(NEURAL_NETS_SECTION_IDS);

  return (
    <div className="app">
      <NeuralNetsSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">AI basics · internals</p>
          <h1>
            Neural networks
            <br />
            <em>for LLM users</em>
          </h1>
          <p className="lede">
            You do not need calculus — but you do need a picture: embeddings, blocks, logits, then
            sampling. That is the whole inference story.
          </p>
          <div className="panel mono pw-outcome">
            After this module: trace text → logits → next token without math panic.
          </div>
        </section>

        <section className="step" id="stack">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">What stacks together</h2>
          <p className="lede">
            Decoder-only LLMs repeat: attention + MLP, then predict next token. Training adjusts
            weights; RAG does not change weights at inference.
          </p>
        </section>

        <section className="step" id="forward">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Forward pass</h2>
          <ForwardPassInteractive />
        </section>

        <section className="step" id="pick">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Logits → token</h2>
          <LogitsPickerInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/transformer", label: "Transformer" },
              { href: "/topics/decoding-sampling", label: "Decoding" },
              { href: "/topics/pretraining-pipeline", label: "Pretraining" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
