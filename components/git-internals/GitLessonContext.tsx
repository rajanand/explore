"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  INITIAL_SIM,
  isStageComplete,
  maxUnlockedStage,
  type LessonStage,
  type SimState,
} from "@/lib/git-internals/simulation";

type GitLessonContextValue = {
  stage: LessonStage;
  sim: SimState;
  setStage: (s: LessonStage) => void;
  updateSim: (patch: Partial<SimState>) => void;
  resetLesson: () => void;
  stageComplete: (s: LessonStage) => boolean;
  canAccessStage: (s: LessonStage) => boolean;
  goNext: () => void;
  goPrev: () => void;
};

const GitLessonContext = createContext<GitLessonContextValue | null>(null);

export function GitLessonProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<LessonStage>(0);
  const [sim, setSim] = useState<SimState>(INITIAL_SIM);

  const updateSim = useCallback((patch: Partial<SimState>) => {
    setSim((prev) => ({ ...prev, ...patch }));
  }, []);

  const resetLesson = useCallback(() => {
    setSim(INITIAL_SIM);
    setStage(0);
  }, []);

  const stageComplete = useCallback(
    (s: LessonStage) => isStageComplete(s, sim),
    [sim]
  );

  const unlocked = useMemo(() => maxUnlockedStage(sim), [sim]);

  const canAccessStage = useCallback(
    (s: LessonStage) => s <= unlocked || stageComplete(s),
    [unlocked, stageComplete]
  );

  const goNext = useCallback(() => {
    if (!isStageComplete(stage, sim)) return;
    setStage((s) => Math.min(6, s + 1) as LessonStage);
  }, [stage, sim]);

  const goPrev = useCallback(() => {
    setStage((s) => Math.max(0, s - 1) as LessonStage);
  }, []);

  const value: GitLessonContextValue = {
    stage,
    sim,
    setStage,
    updateSim,
    resetLesson,
    stageComplete,
    canAccessStage,
    goNext,
    goPrev,
  };

  return (
    <GitLessonContext.Provider value={value}>{children}</GitLessonContext.Provider>
  );
}

export function useGitLesson() {
  const ctx = useContext(GitLessonContext);
  if (!ctx) throw new Error("useGitLesson must be used within GitLessonProvider");
  return ctx;
}
