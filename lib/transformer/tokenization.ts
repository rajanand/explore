import { DEFAULT_TOKENS } from "./constants";

export type TokenizerMode = "word" | "bpe" | "chars";

export const TOKENIZER_MODES: {
  id: TokenizerMode;
  label: string;
  description: string;
}[] = [
  {
    id: "word",
    label: "Word-level",
    description: "One token per word (simplified demo)",
  },
  {
    id: "bpe",
    label: "BPE / subword",
    description: "Rare pieces split — didn't → did + n't",
  },
  {
    id: "chars",
    label: "Character-level",
    description: "Every character is its own token",
  },
];

function withAdjective(tokens: string[], adjective: "big" | "small"): string[] {
  const result = [...tokens];
  const adjIdx = result.findIndex(
    (t, i) =>
      i > 0 && (t.toLowerCase() === "big" || t.toLowerCase() === "small")
  );
  if (adjIdx >= 0) result[adjIdx] = adjective;
  return result;
}

const BPE_BASE = [
  "The",
  "trophy",
  "did",
  "n't",
  "fit",
  "in",
  "the",
  "suit",
  "case",
  "because",
  "it",
  "was",
  "too",
  "big",
  ".",
];

export function getTokenizedSequence(
  mode: TokenizerMode,
  adjective: "big" | "small"
): string[] {
  if (mode === "word") {
    return withAdjective([...DEFAULT_TOKENS], adjective);
  }

  if (mode === "bpe") {
    const tokens = withAdjective(BPE_BASE, adjective);
    if (adjective === "small") {
      const bigIdx = tokens.indexOf("big");
      if (bigIdx >= 0) tokens[bigIdx] = "small";
    }
    return tokens;
  }

  const sentence = `The trophy didn't fit in the suitcase because it was too ${adjective}.`;
  return sentence.split("");
}

export function getTokenizerNote(
  mode: TokenizerMode,
  tokenCount: number
): string {
  if (mode === "word") {
    return `${tokenCount} tokens — whole words and punctuation kept together where possible.`;
  }
  if (mode === "bpe") {
    return `${tokenCount} tokens — contractions and compound words split into frequent subword pieces.`;
  }
  return `${tokenCount} tokens — character-level: longest sequences, but very inefficient for real models.`;
}
