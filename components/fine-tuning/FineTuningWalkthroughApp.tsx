"use client";

import React from "react";
import FineTuningSidebar, { FINE_TUNING_SECTION_IDS } from "@/components/fine-tuning/FineTuningSidebar";
import ApproachPickerInteractive from "@/components/fine-tuning/ApproachPickerInteractive";
import DatasetChecklistInteractive from "@/components/fine-tuning/DatasetChecklistInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function FineTuningWalkthroughApp() {
  const activeId = useScrollSpy(FINE_TUNING_SECTION_IDS);

  return (
    <div className="app">
      <FineTuningSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · adaptation</p>
          <h1>
            Fine-tuning
            <br />
            <em>when it fits</em>
          </h1>
          <p className="lede">
            Adapt model behavior and format — not a replacement for fresh documentation. Practice
            choosing fine-tune vs RAG vs prompts on real IT stories.
          </p>
        </section>

        <section className="step" id="what">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">What changes</h2>
          <p className="lede">
            Fine-tuning continues training on curated examples. Weights shift; hallucinated
            &quot;facts&quot; can get worse if you train on stale text. LoRA trains small adapter
            matrices — cheaper than full fine-tunes.
          </p>
        </section>

        <section className="step" id="pick">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Pick an approach</h2>
          <ApproachPickerInteractive />
        </section>

        <section className="step" id="data">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Dataset checklist</h2>
          <p className="lede">Toggle items you would require before a fine-tune job.</p>
          <DatasetChecklistInteractive />
        </section>

        <section className="step" id="lora">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">LoRA vs full fine-tune</h2>
          <p className="lede">
            Start with adapters on a strong base model. Full fine-tune when you own the whole stack,
            data volume is large, and you can afford retraining cycles.
          </p>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/rag", label: "RAG" },
              { href: "/topics/prompt-context", label: "Prompt & context" },
              { href: "/topics/llm-evals", label: "Evals" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
