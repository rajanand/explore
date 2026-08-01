"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  StepDetailNote,
  StepFootnote,
  StepMechanics,
  StepModelList,
} from "./walkthrough/StepEnrich";
import { DEMO_HEAD_COUNT } from "@/lib/transformer/multiHeadHighlights";
import { VOCAB_SPECS } from "@/lib/transformer/modelSpecs";
import { PREDICTION_EXAMPLES } from "@/lib/transformer/walkthroughInteractivity";

export default function PredictionStep() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [exampleIdx, setExampleIdx] = useState(0);
  const [animated, setAnimated] = useState(false);

  const example = PREDICTION_EXAMPLES[exampleIdx];

  useEffect(() => {
    setAnimated(false);
    const t = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(t);
  }, [exampleIdx]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimated(true);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StepMechanics formula="P(next) = softmax(final_layer · W_vocab)">
        After the final layer, the model projects each token&apos;s vector onto
        the <strong>entire vocabulary</strong> and applies softmax — a
        probability for every possible next token. Training teaches the model to
        assign high probability to the token that actually came next.
      </StepMechanics>

      <div className="controls">
        {PREDICTION_EXAMPLES.map((ex, i) => (
          <button
            key={ex.id}
            type="button"
            className={`btn ${exampleIdx === i ? "active" : ""}`}
            onClick={() => setExampleIdx(i)}
          >
            {ex.id === "cat"
              ? "Cat on the ___"
              : ex.id === "trophy-big"
                ? "Trophy · too big"
                : "Trophy · too small"}
          </button>
        ))}
      </div>

      <StepDetailNote>
        Switch examples — only the <strong>last token&apos;s</strong> distribution
        drives the next-word prediction.
      </StepDetailNote>

      <StepModelList items={VOCAB_SPECS} />

      <div className="panel" ref={containerRef}>
        <p className="mono" style={{ color: "var(--ink)", marginBottom: 4 }}>
          &quot;{example.prompt} ___&quot;
        </p>
        <div className="bars">
          {example.preds.map((p) => (
            <button
              key={p.label}
              type="button"
              className="bar-row bar-row-btn"
              onClick={() => {
                setAnimated(false);
                requestAnimationFrame(() => setAnimated(true));
              }}
            >
              <div className="bar-label">{p.label}</div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: animated ? `${p.pct}%` : "0%" }}
                />
              </div>
              <div className="bar-pct">{p.pct}%</div>
            </button>
          ))}
        </div>
        <p className="legend interactive-explainer">{example.note}</p>
      </div>

      <StepFootnote>
        Everything before this — tokenizing, embedding, positional encoding,{" "}
        {DEMO_HEAD_COUNT} parallel attention heads per layer, feed-forward blocks,
        stacked dozens of times — exists to sharpen this one distribution.
      </StepFootnote>
    </>
  );
}
