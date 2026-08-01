export const CONTENT_RODRIGO = "Rodrigo";

export const IDS = {
  blob1: "b1eae4",
  tree1: "t1a2f3",
  tree2: "t2b8c1",
  tree3: "t3d4e5",
  commit1: "c1f7a2",
  commit2: "c2e9b3",
  commit3: "c3a1d8",
} as const;

export type ObjectKind = "blob" | "tree" | "commit" | "ref";

export type GitBlob = {
  kind: "blob";
  id: string;
  shortId: string;
  content: string;
};

export type GitTreeEntry = {
  name: string;
  mode: string;
  targetId: string;
  targetKind: "blob" | "tree";
  targetShort: string;
};

export type GitTree = {
  kind: "tree";
  id: string;
  shortId: string;
  label: string;
  entries: GitTreeEntry[];
};

export type GitCommit = {
  kind: "commit";
  id: string;
  shortId: string;
  message: string;
  parentIds: string[];
  parentShorts: string[];
  treeId: string;
  treeShort: string;
  author: string;
  timestamp: string;
};

export type GitRef = {
  kind: "ref";
  name: string;
  targetShort: string;
  refType: "branch" | "head" | "tag";
  movable: boolean;
};

export type LessonStage = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type SimState = {
  membersContent: string;
  tracked: boolean;
  dedupCorrect: boolean;

  workingContent: string;
  staged: boolean;
  committedStage2: boolean;
  stagingQuizCorrect: boolean;

  blobRevealed: boolean;
  treeRevealed: boolean;
  commitRevealed: boolean;

  tasksContent: string;
  c2Created: boolean;
  compareSnapshots: boolean;

  historyView: "c1" | "c2" | null;
  parentQuizCorrect: boolean;

  experimentCreated: boolean;
  headOnExperiment: boolean;
  c3Created: boolean;
  tagAdded: boolean;
};

export const INITIAL_SIM: SimState = {
  membersContent: CONTENT_RODRIGO,
  tracked: false,
  dedupCorrect: false,

  workingContent: CONTENT_RODRIGO,
  staged: false,
  committedStage2: false,
  stagingQuizCorrect: false,

  blobRevealed: false,
  treeRevealed: false,
  commitRevealed: false,

  tasksContent: CONTENT_RODRIGO,
  c2Created: false,
  compareSnapshots: false,

  historyView: null,
  parentQuizCorrect: false,

  experimentCreated: false,
  headOnExperiment: false,
  c3Created: false,
  tagAdded: false,
};

export const STAGE_LABELS = [
  "Git tracks content",
  "Three places for changes",
  "Objects: blob, tree, commit",
  "Second commit & reuse",
  "Connected history",
  "Branches, HEAD, tags",
  "Recap & try it",
] as const;

export function blobForContent(content: string): GitBlob {
  return {
    kind: "blob",
    id: `blob ${IDS.blob1}…`,
    shortId: IDS.blob1,
    content,
  };
}

export function tree1(): GitTree {
  return {
    kind: "tree",
    id: `tree ${IDS.tree1}…`,
    shortId: IDS.tree1,
    label: "root",
    entries: [
      {
        name: "members.txt",
        mode: "100644",
        targetId: IDS.blob1,
        targetKind: "blob",
        targetShort: IDS.blob1,
      },
    ],
  };
}

export function tree2(): GitTree {
  return {
    kind: "tree",
    id: `tree ${IDS.tree2}…`,
    shortId: IDS.tree2,
    label: "tasks/",
    entries: [
      {
        name: "wash-dishes.txt",
        mode: "100644",
        targetId: IDS.blob1,
        targetKind: "blob",
        targetShort: IDS.blob1,
      },
    ],
  };
}

export function tree3(): GitTree {
  return {
    kind: "tree",
    id: `tree ${IDS.tree3}…`,
    shortId: IDS.tree3,
    label: "root",
    entries: [
      {
        name: "members.txt",
        mode: "100644",
        targetId: IDS.blob1,
        targetKind: "blob",
        targetShort: IDS.blob1,
      },
      {
        name: "tasks",
        mode: "040000",
        targetId: IDS.tree2,
        targetKind: "tree",
        targetShort: IDS.tree2,
      },
    ],
  };
}

export function commit1(): GitCommit {
  return {
    kind: "commit",
    id: `commit ${IDS.commit1}…`,
    shortId: IDS.commit1,
    message: "Add members.txt",
    parentIds: [],
    parentShorts: [],
    treeId: IDS.tree1,
    treeShort: IDS.tree1,
    author: "you",
    timestamp: "2026-03-01 10:00",
  };
}

export function commit2(): GitCommit {
  return {
    kind: "commit",
    id: `commit ${IDS.commit2}…`,
    shortId: IDS.commit2,
    message: "Add tasks folder",
    parentIds: [IDS.commit1],
    parentShorts: [IDS.commit1],
    treeId: IDS.tree3,
    treeShort: IDS.tree3,
    author: "you",
    timestamp: "2026-03-01 11:30",
  };
}

export function commit3(): GitCommit {
  return {
    kind: "commit",
    id: `commit ${IDS.commit3}…`,
    shortId: IDS.commit3,
    message: "Experiment tweak",
    parentIds: [IDS.commit2],
    parentShorts: [IDS.commit2],
    treeId: IDS.tree3,
    treeShort: IDS.tree3,
    author: "you",
    timestamp: "2026-03-01 14:00",
  };
}

export function isStageComplete(stage: LessonStage, sim: SimState): boolean {
  switch (stage) {
    case 0:
      return sim.tracked && sim.dedupCorrect;
    case 1:
      return sim.committedStage2 && sim.stagingQuizCorrect;
    case 2:
      return sim.blobRevealed && sim.treeRevealed && sim.commitRevealed;
    case 3:
      return sim.c2Created && sim.compareSnapshots;
    case 4:
      return sim.historyView !== null && sim.parentQuizCorrect;
    case 5:
      return (
        sim.experimentCreated &&
        sim.headOnExperiment &&
        sim.c3Created &&
        sim.tagAdded
      );
    case 6:
      return true;
    default:
      return false;
  }
}

export function maxUnlockedStage(sim: SimState): LessonStage {
  for (let i = 0; i < STAGE_LABELS.length; i++) {
    if (!isStageComplete(i as LessonStage, sim)) return i as LessonStage;
  }
  return 6;
}
