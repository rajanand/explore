"use client";

import React from "react";
import { GitLessonProvider, useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitSidebar from "@/components/git-internals/GitSidebar";
import GitLessonNav, { GitProgressBar } from "@/components/git-internals/GitLessonNav";
import { STAGE_LABELS } from "@/lib/git-internals/simulation";
import Stage01Tracker from "@/components/git-internals/stages/Stage01Tracker";
import Stage02Hash from "@/components/git-internals/stages/Stage02Hash";
import Stage03Init from "@/components/git-internals/stages/Stage03Init";
import Stage04Workflow from "@/components/git-internals/stages/Stage04Workflow";
import Stage05ThreeObjects from "@/components/git-internals/stages/Stage05ThreeObjects";
import Stage06Commit from "@/components/git-internals/stages/Stage06Commit";
import Stage07Tree from "@/components/git-internals/stages/Stage07Tree";
import Stage08Blob from "@/components/git-internals/stages/Stage08Blob";
import Stage09SecondCommit from "@/components/git-internals/stages/Stage09SecondCommit";
import Stage10Dedup from "@/components/git-internals/stages/Stage10Dedup";
import Stage11Branches from "@/components/git-internals/stages/Stage11Branches";
import Stage12Tags from "@/components/git-internals/stages/Stage12Tags";
import Stage13Recap from "@/components/git-internals/stages/Stage13Recap";

function GitLessonMain() {
  const { stage } = useGitLesson();

  const stages = [
    Stage01Tracker,
    Stage02Hash,
    Stage03Init,
    Stage04Workflow,
    Stage05ThreeObjects,
    Stage06Commit,
    Stage07Tree,
    Stage08Blob,
    Stage09SecondCommit,
    Stage10Dedup,
    Stage11Branches,
    Stage12Tags,
    Stage13Recap,
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
            Follow the Octobot walkthrough: content hashes, objects in{" "}
            <span className="mono">.git/objects</span>, then branches and tags as
            simple pointers — one step at a time.
          </p>
        </section>

        <section className="step git-lesson-step">
          <p className="eyebrow">
            Step {stage + 1} of {STAGE_LABELS.length}
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
