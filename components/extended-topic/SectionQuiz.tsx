"use client";

import React, { useState } from "react";
import type { TopicSection } from "@/lib/extended-topics/types";

export default function SectionQuiz({ section }: { section: TopicSection }) {
  const [pick, setPick] = useState<string | null>(null);
  if (!section.quiz) return null;
  const chosen = section.quiz.options.find((o) => o.id === pick);

  return (
    <div className="panel ext-quiz">
      <p>{section.quiz.prompt}</p>
      <div className="controls">
        {section.quiz.options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`btn ${pick === o.id ? "active" : ""}`}
            onClick={() => setPick(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {chosen && (
        <p className={`ext-feedback ${chosen.correct ? "ok" : "warn"}`}>{chosen.feedback}</p>
      )}
    </div>
  );
}
