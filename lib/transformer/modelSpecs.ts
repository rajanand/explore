export type ModelSpec = {
  model: string;
  value: string;
};

export const TOKENIZER_SPECS: ModelSpec[] = [
  { model: "GPT-2", value: "~50k vocab · BPE" },
  { model: "BERT", value: "word-piece splits" },
  { model: "LLaMA 2", value: "32k vocab" },
  { model: "GPT-4 class", value: "100k+ vocab" },
];

export const EMBEDDING_DIM_SPECS: ModelSpec[] = [
  { model: "BERT-base", value: "768 dims" },
  { model: "GPT-2", value: "768 dims" },
  { model: "LLaMA-7B", value: "4,096 dims" },
  { model: "GPT-3 (175B)", value: "12,288 dims" },
];

export const CONTEXT_LENGTH_SPECS: ModelSpec[] = [
  { model: "BERT", value: "512 tokens max" },
  { model: "GPT-3", value: "2,048–4,096" },
  { model: "GPT-4", value: "128k+ tokens" },
];

export const LAYER_COUNT_SPECS: ModelSpec[] = [
  { model: "BERT-base", value: "12 layers" },
  { model: "GPT-2 XL", value: "48 layers" },
  { model: "LLaMA-7B", value: "32 layers" },
  { model: "GPT-3 (175B)", value: "96 layers" },
];

export const FFN_SPECS: ModelSpec[] = [
  { model: "BERT-base", value: "768 → 3,072 → 768" },
  { model: "GPT-2", value: "4× expansion typical" },
  { model: "LLaMA-7B", value: "4,096 → 11,008" },
];

export const VOCAB_SPECS: ModelSpec[] = [
  { model: "GPT-2", value: "50,257 outputs" },
  { model: "LLaMA 2", value: "32,000 outputs" },
  { model: "GPT-4 class", value: "100k+ outputs" },
];

export const HEAD_COUNT_SPECS: ModelSpec[] = [
  { model: "BERT-base", value: "12 heads" },
  { model: "GPT-2", value: "12 heads" },
  { model: "LLaMA-7B", value: "32 heads" },
  { model: "GPT-3 (175B)", value: "96 heads" },
];
