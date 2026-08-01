"use client";

import React from "react";
import LlmIntroSidebar, {
  LLM_WALKTHROUGH_SECTION_IDS,
} from "@/components/llm-intro/LlmIntroSidebar";
import TwoFilesInteractive from "@/components/llm-intro/TwoFilesInteractive";
import TrainVsInferenceInteractive from "@/components/llm-intro/TrainVsInferenceInteractive";
import NextWordInteractive from "@/components/llm-intro/NextWordInteractive";
import FineTuningInteractive from "@/components/llm-intro/FineTuningInteractive";
import ScalingLawsInteractive from "@/components/llm-intro/ScalingLawsInteractive";
import LlmOsInteractive from "@/components/llm-intro/LlmOsInteractive";
import System2Interactive from "@/components/llm-intro/System2Interactive";
import SecurityInteractive from "@/components/llm-intro/SecurityInteractive";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function LlmIntroWalkthroughApp() {
  const activeId = useScrollSpy(LLM_WALKTHROUGH_SECTION_IDS);

  return (
    <div className="app">
      <LlmIntroSidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">High-level introduction</p>
          <h1>
            Large Language Models
            <br />
            <em>for IT professionals</em>
          </h1>
          <p className="lede">
            A scaffolded tour inspired by Andrej Karpathy&apos;s overview: what
            LLMs are, how they are built, where the field is heading, and what
            security risks you should plan for when shipping AI features.
          </p>
          <div className="panel mono" style={{ fontSize: "14px", color: "var(--ink-dim)" }}>
            No PhD required — we start from files on disk and end with jailbreaks
            and prompt injection. Interactive at each step.
          </div>
          <p className="note">
            Three parts: <strong>How they work</strong> →{" "}
            <strong>Future direction</strong> → <strong>Security</strong>. Use
            the sidebar to jump ahead.
          </p>
        </section>

        <section className="step" id="basics">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Two files: weights + run code</h2>
          <p className="lede">
            At the core, an LLM is surprisingly simple: a <strong>large
            weights file</strong> (parameters) and a <strong>small inference
            program</strong> that runs matrix math. Loading weights is cheap to
            run; creating them is not.
          </p>
          <TwoFilesInteractive />
          <p className="note">
            As an engineer, you rarely train from scratch — you download weights
            and call an API or run locally. Training is a separate, industrial
            process.
          </p>
        </section>

        <section className="step" id="training">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Training = lossy compression</h2>
          <p className="lede">
            Pre-training feeds roughly <strong>10 TB of text</strong> through a
            GPU cluster and compresses it into billions of parameters — lossy,
            like a zip file of the internet you cannot fully decompress.
          </p>
          <TrainVsInferenceInteractive />
        </section>

        <section className="step" id="next-word">
          <p className="eyebrow">Part 1 · Step 03</p>
          <h2 className="title">Next-word prediction</h2>
          <p className="lede">
            The training objective is deceptively simple:{" "}
            <strong>predict the next token</strong>. That single loss function
            forces the network to absorb grammar, facts, code, and reasoning
            patterns.
          </p>
          <NextWordInteractive />
          <p className="note">
            This connects directly to the Transformer walkthrough — attention
            stacks are how modern models implement this prediction objective at
            scale.
          </p>
        </section>

        <section className="step" id="finetune">
          <p className="eyebrow">Part 1 · Step 04</p>
          <h2 className="title">Fine-tuning &amp; RLHF</h2>
          <p className="lede">
            A pre-trained model is mostly a <strong>document generator</strong>.
            Fine-tuning on curated Q&amp;A makes it an assistant; RLHF optionally
            aligns outputs with human preferences.
          </p>
          <FineTuningInteractive />
        </section>

        <section className="step" id="scaling">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Scaling laws</h2>
          <p className="lede">
            Performance improves predictably with <strong>more parameters and
            more data</strong> — fueling massive investment in compute. The trend
            is empirical, not guaranteed forever.
          </p>
          <ScalingLawsInteractive />
        </section>

        <section className="step" id="llm-os">
          <p className="eyebrow">Part 2 · Step 06</p>
          <h2 className="title">LLM as operating system</h2>
          <p className="lede">
            Modern deployments treat the LLM as a <strong>kernel</strong> that
            schedules tools — browsers, calculators, code sandboxes, search — to
            solve tasks it cannot do with text alone.
          </p>
          <LlmOsInteractive />
        </section>

        <section className="step" id="system2">
          <p className="eyebrow">Part 2 · Step 07</p>
          <h2 className="title">System 2 thinking</h2>
          <p className="lede">
            Researchers explore letting models <strong>think longer</strong> —
            chain-of-thought, self-correction, extra inference steps — mirroring
            deliberate human reasoning vs fast instinct.
          </p>
          <System2Interactive />
        </section>

        <section className="step" id="security">
          <p className="eyebrow">Part 3 · Step 08</p>
          <h2 className="title">Security vulnerabilities</h2>
          <p className="lede">
            LLM products face a fast-moving <strong>cat-and-mouse</strong> threat
            landscape: jailbreaks, prompt injection, and training-data poisoning
            each target different layers of the stack.
          </p>
          <SecurityInteractive />
        </section>

        <footer>
          Based on Andrej Karpathy&apos;s high-level LLM overview. Continue with
          the Transformer walkthrough for the neural architecture underneath
          next-token prediction.
        </footer>
      </main>
    </div>
  );
}
