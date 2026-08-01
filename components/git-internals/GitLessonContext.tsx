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
  STAGE_COUNT,
  type SimState,
} from "@/lib/git-internals/simulation";

type GitLessonContextValue = {
  stage: number;
  sim: SimState;
  setStage: (s: number) => void;
  updateSim: (patch: Partial<SimState>) => void;
  resetLesson: () => void;
  stageComplete: (s: number) => boolean;
  canAccessStage: (s: number) => boolean;
  goNext: () => void;
  goPrev: () => void;
};

const GitLessonContext = createContext<GitLessonContextValue | null>(null);

export function GitLessonProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState(0);
  const [sim, setSim] = useState<SimState>(INITIAL_SIM);

  const updateSim = useCallback((patch: Partial<SimState>) => {
    setSim((prev) => ({ ...prev, ...patch }));
  }, []);

  const resetLesson = useCallback(() => {
    setSim(INITIAL_SIM);
    setStage(0);
  }, []);

  const stageComplete = useCallback(
    (s: number) => isStageComplete(s, sim),
    [sim]
  );

  const unlocked = useMemo(() => maxUnlockedStage(sim), [sim]);

  const canAccessStage = useCallback(
    (s: number) => s <= unlocked || stageComplete(s),
    [unlocked, stageComplete]
  );

  const goNext = useCallback(() => {
    if (!isStageComplete(stage, sim)) return;
    setStage((s) => Math.min(STAGE_COUNT - 1, s + 1));
  }, [stage, sim]);

  const goPrev = useCallback(() => {
    setStage((s) => Math.max(0, s - 1));
  }, []);

  return (
    <GitLessonContext.Provider
      value={{
        stage,
        sim,
        setStage,
        updateSim,
        resetLesson,
        stageComplete,
        canAccessStage,
        goNext,
        goPrev,
      }}
    >
      {children}
    </GitLessonContext.Provider>
  );
}

export function useGitLesson() {
  const ctx = useContext(GitLessonContext);
  if (!ctx) throw new Error("useGitLesson must be used within GitLessonProvider");
  return ctx;
}
