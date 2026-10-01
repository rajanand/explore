"use client";

import React, { useMemo, useState } from "react";
import type { LabConfig } from "@/lib/workshop/types";

export default function WorkshopLab({ lab }: { lab: LabConfig }) {
  switch (lab.kind) {
    case "quiz":
      return <LabQuiz lab={lab} />;
    case "profiles":
      return <LabProfiles lab={lab} />;
    case "checklist":
      return <LabChecklist lab={lab} />;
    case "slider":
      return <LabSlider lab={lab} />;
    case "steps":
      return <LabSteps lab={lab} />;
    case "compare":
      return <LabCompare lab={lab} />;
    default:
      return null;
  }
}

function LabQuiz({ lab }: { lab: Extract<LabConfig, { kind: "quiz" }> }) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const cases = lab.cases ?? [{ id: "0", label: "Scenario" }];
  const ok = pick === lab.correctId;

  return (
    <>
      {lab.cases && (
        <div className="controls">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              className={`btn ${caseIdx === i ? "active" : ""}`}
              onClick={() => {
                setCaseIdx(i);
                setPick(null);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      <p className="lede">{lab.prompt}</p>
      <div className="pw-toggle-row">
        {lab.options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`pw-chip ${pick === o.id ? "on" : ""}`}
            onClick={() => setPick(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {pick && <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? lab.ok : lab.bad}</p>}
    </>
  );
}

function LabProfiles({ lab }: { lab: Extract<LabConfig, { kind: "profiles" }> }) {
  const [idx, setIdx] = useState(0);
  const p = lab.profiles[idx];
  return (
    <>
      {lab.prompt && <p className="mono">{lab.prompt}</p>}
      <div className="controls">
        {lab.profiles.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {p.meta && <p className="mono">{p.meta}</p>}
      <div className="panel">{p.body}</div>
      <p className="pw-verdict">{p.verdict}</p>
    </>
  );
}

function LabChecklist({ lab }: { lab: Extract<LabConfig, { kind: "checklist" }> }) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const score = lab.items.filter((i) => on[i.id]).length;
  return (
    <>
      <p className="lede">{lab.intro}</p>
      {lab.items.map((i) => (
        <button
          key={i.id}
          type="button"
          className={`pw-chip ${on[i.id] ? "on" : ""}`}
          style={{ display: "block", width: "100%", marginBottom: 8, textAlign: "left" }}
          onClick={() => setOn((prev) => ({ ...prev, [i.id]: !prev[i.id] }))}
        >
          {i.label}
        </button>
      ))}
      <p className={`pw-verdict ${score >= lab.goodScore ? "" : "warn"}`}>
        {score >= lab.goodScore ? lab.goodMsg : lab.badMsg}
      </p>
    </>
  );
}

function LabSlider({ lab }: { lab: Extract<LabConfig, { kind: "slider" }> }) {
  const [v, setV] = useState(Math.round((lab.min + lab.max) / 2));
  const msg = useMemo(() => {
    const t = [...lab.thresholds].sort((a, b) => a.max - b.max);
    const hit = t.find((x) => v <= x.max) ?? t[t.length - 1];
    return hit;
  }, [v, lab.thresholds]);

  return (
    <>
      <label className="lede">
        {lab.label}: {v}
        <input
          type="range"
          min={lab.min}
          max={lab.max}
          step={lab.step}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>
      <p className={`pw-verdict ${msg.warn ? "warn" : ""}`}>{msg.msg}</p>
    </>
  );
}

function LabSteps({ lab }: { lab: Extract<LabConfig, { kind: "steps" }> }) {
  const [idx, setIdx] = useState(0);
  const s = lab.steps[idx];
  return (
    <>
      <div className="controls">
        {lab.steps.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="panel">{s.body}</div>
    </>
  );
}

function LabCompare({ lab }: { lab: Extract<LabConfig, { kind: "compare" }> }) {
  const [pick, setPick] = useState<string | null>(null);
  const ok = pick === lab.correctId;
  return (
    <>
      <p className="lede">{lab.question}</p>
      <div className="pw-grid-2">
        <div className="panel">
          <p className="pw-col-title">{lab.left.title}</p>
          <p>{lab.left.body}</p>
        </div>
        <div className="panel">
          <p className="pw-col-title">{lab.right.title}</p>
          <p>{lab.right.body}</p>
        </div>
      </div>
      <div className="pw-toggle-row">
        {lab.pick.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`pw-chip ${pick === p.id ? "on" : ""}`}
            onClick={() => setPick(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
      {pick && <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? lab.ok : lab.bad}</p>}
    </>
  );
}
