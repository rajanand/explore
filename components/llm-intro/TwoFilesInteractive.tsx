"use client";

import React, { useState } from "react";
import { MODEL_SIZE_PRESETS } from "@/lib/llm-intro/constants";

export default function TwoFilesInteractive() {
  const [presetIdx, setPresetIdx] = useState(0);
  const preset = MODEL_SIZE_PRESETS[presetIdx];

  return (
    <>
      <div className="controls">
        {MODEL_SIZE_PRESETS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`btn ${presetIdx === i ? "active" : ""}`}
            onClick={() => setPresetIdx(i)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="panel llm-two-files">
        <div className="llm-file-card llm-file-weights">
          <p className="llm-file-icon mono">weights.bin</p>
          <h4>Parameters (weights)</h4>
          <p className="llm-file-stat">{preset.weights}</p>
          <p className="llm-file-desc">
            {preset.params} learned numbers — the &quot;knowledge&quot; compressed
            from training data.
          </p>
        </div>
        <div className="llm-file-card llm-file-code">
          <p className="llm-file-icon mono">run.c / inference</p>
          <h4>Run code</h4>
          <p className="llm-file-stat">&lt; 1 MB</p>
          <p className="llm-file-desc">
            Matrix math + sampling loop — relatively tiny. Same code runs every
            model size; weights file changes.
          </p>
        </div>
      </div>

      <div className="panel llm-infra-compare">
        <div className="llm-infra-row">
          <span className="llm-infra-label">Inference</span>
          <span className="llm-infra-value teal">{preset.inference}</span>
          <span className="llm-infra-hint">Cheap at runtime — consumer hardware OK</span>
        </div>
        <div className="llm-infra-row">
          <span className="llm-infra-label">Training</span>
          <span className="llm-infra-value amber">{preset.training}</span>
          <span className="llm-infra-hint">Extremely expensive — GPU clusters</span>
        </div>
      </div>
    </>
  );
}
