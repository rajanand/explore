import { DEFAULT_TOKENS, IT_IDX, SUITCASE_IDX, TROPHY_IDX } from "./constants";

export type AttentionConfig = {
  focusIdx: number;
  target: number;
  weights: Record<number, number>;
};

export const weightsBig: AttentionConfig = {
  focusIdx: IT_IDX,
  target: TROPHY_IDX,
  weights: { [TROPHY_IDX]: 0.92, [SUITCASE_IDX]: 0.1 },
};

export const weightsSmall: AttentionConfig = {
  focusIdx: IT_IDX,
  target: SUITCASE_IDX,
  weights: { [TROPHY_IDX]: 0.12, [SUITCASE_IDX]: 0.9 },
};

export function isDefaultCoreferenceSentence(tokens: string[]): boolean {
  if (tokens.length !== DEFAULT_TOKENS.length) return false;
  return tokens.every((t, i) => {
    if (i === 11) {
      return t.toLowerCase() === "big" || t.toLowerCase() === "small";
    }
    return t.toLowerCase() === DEFAULT_TOKENS[i].toLowerCase();
  });
}

export function applyVariant(tokens: string[], variant: "big" | "small"): string[] {
  const result = [...tokens];
  const adjIdx = result.findIndex(
    (t, i) =>
      i > 0 &&
      (t.toLowerCase() === "big" || t.toLowerCase() === "small")
  );
  if (adjIdx >= 0) {
    result[adjIdx] = variant;
  }
  return result;
}

export function getDefaultAttentionConfig(variant: "big" | "small"): AttentionConfig {
  return variant === "big" ? weightsBig : weightsSmall;
}

export function getFullAttentionConfig(
  focusIdx: number,
  tokenCount: number,
  variant: "big" | "small"
): AttentionConfig {
  if (focusIdx === IT_IDX && tokenCount === DEFAULT_TOKENS.length) {
    const cfg = variant === "big" ? weightsBig : weightsSmall;
    const weights: Record<number, number> = {};
    for (let i = 0; i < tokenCount; i++) {
      if (i === focusIdx) {
        weights[i] = 0.35;
      } else {
        weights[i] = cfg.weights[i] ?? 0.04;
      }
    }
    return { focusIdx, target: cfg.target, weights };
  }
  return getClickAttentionConfig(focusIdx, tokenCount);
}

export function getClickAttentionConfig(
  focusIdx: number,
  tokenCount: number
): AttentionConfig {
  const weights: Record<number, number> = {};
  let target = focusIdx;
  let maxWeight = 0;

  for (let i = 0; i < tokenCount; i++) {
    if (i === focusIdx) {
      weights[i] = 0.35;
      continue;
    }
    const dist = Math.abs(i - focusIdx);
    const w = dist === 1 ? 0.25 : 0.04;
    weights[i] = w;
    if (w > maxWeight) {
      maxWeight = w;
      target = i;
    }
  }

  return { focusIdx, target, weights };
}
