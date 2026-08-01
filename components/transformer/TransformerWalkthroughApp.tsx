"use client";

import React from "react";
import { TransformerWalkthroughProvider } from "@/components/TransformerWalkthroughProvider";
import WalkthroughSidebar, {
  WALKTHROUGH_SECTION_IDS,
} from "@/components/transformer/WalkthroughSidebar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import TokenStep from "@/components/TokenStep";
import EmbeddingStep from "@/components/EmbeddingStep";
import PosEncodingStep from "@/components/PosEncodingStep";
import SelfAttentionLoom from "@/components/SelfAttentionLoom";
import MultiHeadStep from "@/components/MultiHeadStep";
import FFNStep from "@/components/FFNStep";
import StackingStep from "@/components/StackingStep";
import PredictionStep from "@/components/PredictionStep";

function WalkthroughContent() {
  const activeId = useScrollSpy(WALKTHROUGH_SECTION_IDS);

  return (
    <div className="app">
      <WalkthroughSidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">A step-by-step walkthrough</p>
          <h1>
            What actually happens
            <br />
            inside a <em>transformer</em>?
          </h1>
          <p className="lede">
            We&apos;ll follow one sentence — the same one you can&apos;t parse
            without context — through every stage of the pipeline: from raw
            text, to numbers, to a model that knows exactly which word
            &quot;it&quot; refers to.
          </p>
          <div
            className="panel mono"
            style={{ fontSize: "15px", color: "var(--ink)" }}
          >
            &quot;The trophy didn&apos;t fit in the suitcase because it was too
            big.&quot;
          </div>
          <p className="note">
            Scroll down, or jump to any stage on the left. Most steps are
            interactive — Step 4 flips &quot;big&quot;/&quot;small&quot;; try
            tokenizers, embedding clusters, layer depth, and prediction examples
            too.
          </p>
        </section>

        <section className="step" id="tokenize">
          <p className="eyebrow">Step 01</p>
          <h2 className="title">Tokenization</h2>
          <p className="lede">
            The model can&apos;t read words — it reads <strong>tokens</strong>,
            small chunks of text. The first step splits input into a numbered
            sequence the rest of the pipeline can process.
          </p>
          <TokenStep />
        </section>

        <section className="step" id="embed">
          <p className="eyebrow">Step 02</p>
          <h2 className="title">Embeddings</h2>
          <p className="lede">
            Each token ID becomes a <strong>vector</strong> — hundreds or
            thousands of numbers that encode meaning learned from training data.
          </p>
          <EmbeddingStep />
        </section>

        <section className="step" id="posenc">
          <p className="eyebrow">Step 03</p>
          <h2 className="title">Positional encoding</h2>
          <p className="lede">
            Parallel processing has no built-in order. A positional signal is
            added to each embedding so the model knows{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>where</em>{" "}
            each token sits.
          </p>
          <PosEncodingStep />
        </section>

        <section className="step" id="attention">
          <p className="eyebrow">Step 04 — interactive</p>
          <h2 className="title">Self-attention</h2>
          <p className="lede">
            Every token asks every other token:{" "}
            <em style={{ fontStyle: "italic", color: "var(--amber)" }}>
              &quot;how relevant are you to me?&quot;
            </em>{" "}
            Flip the ending below and watch where &quot;it&quot; points.
          </p>
          <SelfAttentionLoom />
        </section>

        <section className="step" id="multihead">
          <p className="eyebrow">Step 05</p>
          <h2 className="title">Multi-head attention</h2>
          <p className="lede">
            One head captures one relationship type. Real models run{" "}
            <strong>many heads in parallel</strong> — often 8, 12, or more —
            then merge the results.
          </p>
          <MultiHeadStep />
        </section>

        <section className="step" id="ffn">
          <p className="eyebrow">Step 06</p>
          <h2 className="title">Feed-forward network</h2>
          <p className="lede">
            After attention mixes tokens together, each position passes through
            the same small MLP on its own — refining what it learned from
            context.
          </p>
          <FFNStep />
        </section>

        <section className="step" id="stack">
          <p className="eyebrow">Step 07</p>
          <h2 className="title">Stacking layers</h2>
          <p className="lede">
            Attention + feed-forward form one <strong>layer</strong>. Production
            models stack this block dozens of times — depth is a hyperparameter,
            not a fixed small number.
          </p>
          <StackingStep />
        </section>

        <section className="step" id="output">
          <p className="eyebrow">Step 08</p>
          <h2 className="title">Predicting the next word</h2>
          <p className="lede">
            The final layer projects onto the full vocabulary — a probability
            for every possible next token.
          </p>
          <PredictionStep />
        </section>

        <footer>
          Built to accompany our walkthrough on RNNs, attention, and
          transformers. Scroll back up any time — nothing here is timed or
          one-shot.
        </footer>
      </main>
    </div>
  );
}

export default function TransformerWalkthroughApp() {
  return (
    <TransformerWalkthroughProvider>
      <WalkthroughContent />
    </TransformerWalkthroughProvider>
  );
}
