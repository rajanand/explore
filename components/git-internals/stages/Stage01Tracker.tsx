"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";

export default function Stage01Tracker() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Most developers learn Git as a collaboration tool: <span className="mono">pull</span>,
        <span className="mono"> push</span>, <span className="mono">merge</span>. Under the hood,
        Git is simpler: <strong>a content tracker</strong>. It maps byte sequences to IDs and
        stores snapshots — for code, docs, or a family task list.
      </p>

      <div className="panel git-challenge">
        <p>Which statement is closest to Git&apos;s core job?</p>
        <div className="controls">
          <button
            type="button"
            className="btn"
            onClick={() => updateSim({ trackerQuizCorrect: false })}
          >
            Sync files to the cloud
          </button>
          <button
            type="button"
            className={`btn ${sim.trackerQuizCorrect ? "active" : ""}`}
            onClick={() => updateSim({ trackerQuizCorrect: true })}
          >
            Track and store content with stable IDs
          </button>
        </div>
        {sim.trackerQuizCorrect && (
          <p className="git-callout">
            That&apos;s the foundation. Commands like <span className="mono">push</span> are
            built on top of local object storage — not the core idea.
          </p>
        )}
      </div>
    </div>
  );
}
