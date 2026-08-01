export type PredictionExample = {
  id: string;
  prompt: string;
  preds: { label: string; pct: number }[];
  note: string;
};

export const PREDICTION_EXAMPLES: PredictionExample[] = [
  {
    id: "cat",
    prompt: "The cat sat on the",
    preds: [
      { label: "mat", pct: 47 },
      { label: "floor", pct: 18 },
      { label: "chair", pct: 11 },
      { label: "table", pct: 7 },
      { label: "sofa", pct: 4 },
    ],
    note: "Classic filler example — model predicts a surface noun after “on the”.",
  },
  {
    id: "trophy-big",
    prompt: "The trophy didn't fit in the suitcase because it was too",
    preds: [
      { label: "big", pct: 62 },
      { label: "small", pct: 14 },
      { label: "large", pct: 9 },
      { label: "heavy", pct: 6 },
      { label: "full", pct: 4 },
    ],
    note: "Our walkthrough sentence — coreference resolved, so “big” fits the trophy context.",
  },
  {
    id: "trophy-small",
    prompt: "The trophy didn't fit in the suitcase because it was too",
    preds: [
      { label: "small", pct: 58 },
      { label: "big", pct: 16 },
      { label: "tiny", pct: 10 },
      { label: "large", pct: 5 },
      { label: "empty", pct: 4 },
    ],
    note: "Flip “big” → “small” in Step 04 and the predicted adjective shifts to match suitcase context.",
  },
];

export type LayerStage = {
  num: number;
  label: string;
  detail: string;
  highlights: string[];
};

export const LAYER_STAGES: LayerStage[] = [
  {
    num: 1,
    label: "local structure",
    detail: "Articles, neighbors, short syntax — “The” + “trophy”, “in” + “suitcase”.",
    highlights: ["The", "trophy", "in", "suitcase"],
  },
  {
    num: 2,
    label: "combining patterns",
    detail: "Phrases and early coreference hints — “didn't” scopes to “fit”.",
    highlights: ["didn't", "fit", "because"],
  },
  {
    num: 3,
    label: "abstract links",
    detail: "Long-range dependencies — “it” linked to trophy or suitcase.",
    highlights: ["it", "trophy", "suitcase"],
  },
];

export const LAYER_DEPTH_PRESETS = [
  { label: "Demo", layers: 3 },
  { label: "BERT-base", layers: 12 },
  { label: "LLaMA-7B", layers: 32 },
  { label: "GPT-3", layers: 96 },
] as const;
