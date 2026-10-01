export type WorkshopLink = { href: string; label: string };

export type LabQuiz = {
  kind: "quiz";
  prompt: string;
  cases?: { id: string; label: string }[];
  options: { id: string; label: string }[];
  correctId: string;
  ok: string;
  bad: string;
};

export type LabProfiles = {
  kind: "profiles";
  prompt?: string;
  profiles: { id: string; label: string; meta?: string; body: string; verdict: string }[];
};

export type LabChecklist = {
  kind: "checklist";
  intro: string;
  items: { id: string; label: string }[];
  goodScore: number;
  goodMsg: string;
  badMsg: string;
};

export type LabSlider = {
  kind: "slider";
  label: string;
  min: number;
  max: number;
  step: number;
  thresholds: { max: number; msg: string; warn?: boolean }[];
};

export type LabSteps = {
  kind: "steps";
  steps: { id: string; label: string; body: string }[];
};

export type LabCompare = {
  kind: "compare";
  question: string;
  left: { title: string; body: string };
  right: { title: string; body: string };
  pick: { id: string; label: string }[];
  correctId: string;
  ok: string;
  bad: string;
};

export type LabConfig = LabQuiz | LabProfiles | LabChecklist | LabSlider | LabSteps | LabCompare;

export type WorkshopSection = {
  id: string;
  num: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  prose?: string;
  lab?: LabConfig;
};

export type WorkshopDefinition = {
  slug: string;
  brand: string;
  eyebrow: string;
  titleLine1: string;
  titleEm: string;
  lede: string;
  outcome: string;
  cssPrefix: string;
  accent: string;
  sections: WorkshopSection[];
  related: WorkshopLink[];
};
