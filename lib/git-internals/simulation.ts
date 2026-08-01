export const CONTENT_RODRIGO = "Rodrigo";

/** Abbreviated IDs — full hashes shown on demand in UI */
export const IDS = {
  blob1: "76871a",
  tree1: "490296",
  tree2: "a3f812",
  tree3: "c8e441",
  commit1: "54725f",
  commit2: "8b2d91",
  commit3: "f1ac03",
} as const;

export type GitBlob = {
  kind: "blob";
  shortId: string;
  fullId: string;
  content: string;
};

export type GitTreeEntry = {
  name: string;
  mode: string;
  targetShort: string;
  targetKind: "blob" | "tree";
};

export type GitTree = {
  kind: "tree";
  shortId: string;
  fullId: string;
  label: string;
  entries: GitTreeEntry[];
};

export type GitCommit = {
  kind: "commit";
  shortId: string;
  fullId: string;
  message: string;
  parentShorts: string[];
  treeShort: string;
  author: string;
  date: string;
};

export type LessonStage = number;

export type SimState = {
  // Stage 0 — content tracker
  trackerQuizCorrect: boolean;

  // Stage 1 — hash keys
  hashDemoRun: boolean;
  hashSameTwiceSeen: boolean;

  // Stage 2 — git init
  repoInitialized: boolean;

  // Stage 3 — workflow
  workingContent: string;
  staged: boolean;
  firstCommitDone: boolean;
  stagingQuizCorrect: boolean;

  // Stage 4 — objects folder after first commit
  objectsFolderOpened: boolean;

  // Stage 5–7 — object types inspected
  commitInspected: boolean;
  treeInspected: boolean;
  blobInspected: boolean;
  blobNameNoteRead: boolean;

  // Stage 8 — second commit
  secondCommitDone: boolean;
  secondCommitInspected: boolean;

  // Stage 9 — dedup
  dedupQuizCorrect: boolean;

  // Stage 10 — branches
  branchACreated: boolean;
  headOnBranchA: boolean;
  branchACommitDone: boolean;

  // Stage 11 — tags
  tagCreated: boolean;
};

export const INITIAL_SIM: SimState = {
  trackerQuizCorrect: false,
  hashDemoRun: false,
  hashSameTwiceSeen: false,
  repoInitialized: false,
  workingContent: CONTENT_RODRIGO,
  staged: false,
  firstCommitDone: false,
  stagingQuizCorrect: false,
  objectsFolderOpened: false,
  commitInspected: false,
  treeInspected: false,
  blobInspected: false,
  blobNameNoteRead: false,
  secondCommitDone: false,
  secondCommitInspected: false,
  dedupQuizCorrect: false,
  branchACreated: false,
  headOnBranchA: false,
  branchACommitDone: false,
  tagCreated: false,
};

export const STAGE_LABELS = [
  "Git tracks content",
  "Content → hash key",
  "git init & .git/objects",
  "Working, staging, commit",
  "Three objects appear",
  "The commit object",
  "The tree object",
  "The blob object",
  "Second commit & parent",
  "Reuse the same blob",
  "Branches & HEAD",
  "Tags",
  "Recap",
] as const;

export const STAGE_COUNT = STAGE_LABELS.length;

export function blob(): GitBlob {
  return {
    kind: "blob",
    shortId: IDS.blob1,
    fullId: `${IDS.blob1}05855a2389ddac28d1b167dd48b2226141`,
    content: CONTENT_RODRIGO,
  };
}

export function treeMembers(): GitTree {
  return {
    kind: "tree",
    shortId: IDS.tree1,
    fullId: `${IDS.tree1}214553ccc9a66cd62ad8b05d56775bf465`,
    label: "root tree",
    entries: [
      {
        name: "Members.txt",
        mode: "100644",
        targetShort: IDS.blob1,
        targetKind: "blob",
      },
    ],
  };
}

export function treeTasks(): GitTree {
  return {
    kind: "tree",
    shortId: IDS.tree2,
    fullId: `${IDS.tree2}9c4e21a88b05d56775bf465a3f812`,
    label: "Tasks/",
    entries: [
      {
        name: "Wash the dishes.txt",
        mode: "100644",
        targetShort: IDS.blob1,
        targetKind: "blob",
      },
    ],
  };
}

export function treeRootC2(): GitTree {
  return {
    kind: "tree",
    shortId: IDS.tree3,
    fullId: `${IDS.tree3}7d2a91c8e441553ccc9a66cd62ad8b05`,
    label: "root tree",
    entries: [
      {
        name: "Members.txt",
        mode: "100644",
        targetShort: IDS.blob1,
        targetKind: "blob",
      },
      {
        name: "Tasks",
        mode: "040000",
        targetShort: IDS.tree2,
        targetKind: "tree",
      },
    ],
  };
}

export function commit1(): GitCommit {
  return {
    kind: "commit",
    shortId: IDS.commit1,
    fullId: `${IDS.commit1}c233a67fa1ba4807271b840532e136f624`,
    message: "Add Members.txt",
    parentShorts: [],
    treeShort: IDS.tree1,
    author: "you",
    date: "2026-03-01",
  };
}

export function commit2(): GitCommit {
  return {
    kind: "commit",
    shortId: IDS.commit2,
    fullId: `${IDS.commit2}d91e4f2a8b2d9134c567890abcdef123456`,
    message: "Add Tasks folder",
    parentShorts: [IDS.commit1],
    treeShort: IDS.tree3,
    author: "you",
    date: "2026-03-02",
  };
}

export function commit3(): GitCommit {
  return {
    kind: "commit",
    shortId: IDS.commit3,
    fullId: `${IDS.commit3}ac03b7f1ac031234567890abcdef123456`,
    message: "Tweak on branchA",
    parentShorts: [IDS.commit2],
    treeShort: IDS.tree3,
    author: "you",
    date: "2026-03-03",
  };
}

export function isStageComplete(stage: number, sim: SimState): boolean {
  switch (stage) {
    case 0:
      return sim.trackerQuizCorrect;
    case 1:
      return sim.hashDemoRun && sim.hashSameTwiceSeen;
    case 2:
      return sim.repoInitialized;
    case 3:
      return sim.firstCommitDone && sim.stagingQuizCorrect;
    case 4:
      return sim.objectsFolderOpened;
    case 5:
      return sim.commitInspected;
    case 6:
      return sim.treeInspected;
    case 7:
      return sim.blobInspected && sim.blobNameNoteRead;
    case 8:
      return sim.secondCommitDone && sim.secondCommitInspected;
    case 9:
      return sim.dedupQuizCorrect;
    case 10:
      return sim.branchACreated && sim.branchACommitDone;
    case 11:
      return sim.tagCreated;
    case 12:
      return true;
    default:
      return false;
  }
}

export function maxUnlockedStage(sim: SimState): number {
  for (let i = 0; i < STAGE_COUNT; i++) {
    if (!isStageComplete(i, sim)) return i;
  }
  return STAGE_COUNT - 1;
}

export const COMMIT1_CAT = `tree ${IDS.tree1}214553ccc9a66cd62ad8b05d56775bf465
author you <you@example.com>
date 2026-03-01

Add Members.txt`;

export const TREE1_CAT = `100644 blob ${IDS.blob1}05855a2389ddac28d1b167dd48b2226141\tMembers.txt`;

export const BLOB1_CAT = CONTENT_RODRIGO;

export const COMMIT2_CAT = `tree ${IDS.tree3}7d2a91c8e441553ccc9a66cd62ad8b05
parent ${IDS.commit1}c233a67fa1ba4807271b840532e136f624
author you <you@example.com>
date 2026-03-02

Add Tasks folder`;
