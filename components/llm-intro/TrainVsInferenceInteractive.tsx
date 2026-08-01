"use client";

import React, { useState } from "react";

const TRAINING_TB = 10;
const PARAM_GB = 140;

export default function TrainVsInferenceInteractive() {
  const [showFlow, setShowFlow] = useState(true);

  const compressionRatio = ((TRAINING_TB * 1024) / PARAM_GB).toFixed(0);

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${showFlow ? "active" : ""}`}
          onClick={() => setShowFlow(true)}
        >
          Show compression flow
        </button>
        <button
          type="button"
          className={`btn ${!showFlow ? "active" : ""}`}
          onClick={() => setShowFlow(false)}
        >
          Compare cost
        </button>
      </div>

      {showFlow ? (
        <div className="panel llm-compression-flow">
          <div className="llm-compression-stage">
            <p className="mono llm-compression-label">Input text</p>
            <div className="llm-compression-bar llm-compression-input">
              ~{TRAINING_TB} TB of text
            </div>
            <p className="legend">Web pages, books, code, forums — scraped at scale</p>
          </div>
          <div className="llm-compression-arrow">↓ training (lossy compression)</div>
          <div className="llm-compression-stage">
            <p className="mono llm-compression-label">Parameters</p>
            <div className="llm-compression-bar llm-compression-output">
              ~{PARAM_GB} GB weights
            </div>
            <p className="legend">
              ~{compressionRatio}× smaller — knowledge is compressed, not copied
              verbatim. Like a zip file you can&apos;t perfectly unzip.
            </p>
          </div>
        </div>
      ) : (
        <div className="panel llm-cost-compare">
          <div className="llm-cost-card">
            <h4>Training (once)</h4>
            <ul>
              <li>Thousands of GPUs for weeks/months</li>
              <li>Millions to $100M+ for frontier models</li>
              <li>Done by a few labs + big tech</li>
            </ul>
          </div>
          <div className="llm-cost-card">
            <h4>Inference (every request)</h4>
            <ul>
              <li>Forward pass through existing weights</li>
              <li>Runs on laptop, phone, or API</li>
              <li>What most developers actually ship</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
