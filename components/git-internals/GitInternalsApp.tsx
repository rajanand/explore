"use client";

import React from "react";
import { GitLessonProvider, useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitSidebar from "@/components/git-internals/GitSidebar";
import GitLessonNav, { GitProgressBar } from "@/components/git-internals/GitLessonNav";
import { STAGE_LABELS } from "@/lib/git-internals/simulation";
import Stage1ContentTracker from "@/components/git-internals/stages/Stage1ContentTracker";
import Stage2ThreePlaces from "@/components/git-internals/stages/Stage2ThreePlaces";
import Stage3Objects from "@/components/git-internals/stages/Stage3Objects";
import Stage4SecondCommit from "@/components/git-internals/stages/Stage4SecondCommit";
import Stage5History from "@/components/git-internals/stages/Stage5History";
import Stage6Refs from "@/components/git-internals/stages/Stage6Refs";
import StageRecap from "@/components/git-internals/stages/StageRecap";

function GitLessonMain() {
  const { stage } = useGitLesson();

  const stages = [
    Stage1ContentTracker,
    Stage2ThreePlaces,
    Stage3Objects,
    Stage4SecondCommit,
    Stage5History,
    Stage6Refs,
    StageRecap,
  ];

  const StageComponent = stages[stage];

  return (
    <div className="app git-app">
      <GitSidebar />
      <main className="git-main">
        <section className="hero git-hero-intro" aria-live="polite">
          <p className="eyebrow">Interactive lesson</p>
          <h1>
            Git,
            <br />
            <em>seen from the inside</em>
          </h1>
          <p className="lede">
            You know <span className="mono">add</span>,{" "}
            <span className="mono">commit</span>, and{" "}
            <span className="mono">push</span>. This lesson opens the filing
            cabinet — one small idea at a time.
          </p>
        </section>

        <section className="step git-lesson-step">
          <p className="eyebrow">
            Stage {stage + 1} of {STAGE_LABELS.length}
          </p>
          <h2 className="title">{STAGE_LABELS[stage]}</h2>
          <StageComponent />
          <GitProgressBar />
          <GitLessonNav />
        </section>
      </main>
    </div>
  );
}

export default function GitInternalsApp() {
  return (
    <GitLessonProvider>
      <GitLessonMain />
    </GitLessonProvider>
  );
}
