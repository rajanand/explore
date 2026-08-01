import { useLayoutEffect, useState, type RefObject } from "react";
import type { AttentionConfig } from "@/lib/transformer/attentionConfigs";

export type ArcPath = {
  d: string;
  stroke: string;
  strokeWidth: number;
  opacity: number;
  key: string;
};

export type ChipStateMap = Record<number, "focus" | "target" | "dim" | "default">;

const ARC_WEIGHT_THRESHOLD = 0.15;

export function useChipLayout(
  wrapRef: RefObject<HTMLElement | null>,
  chipRefs: RefObject<(HTMLDivElement | null)[]>,
  config: AttentionConfig | null,
  tokenCount: number,
  deps: unknown[] = []
) {
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<ArcPath[]>([]);
  const [chipStates, setChipStates] = useState<ChipStateMap>({});

  useLayoutEffect(() => {
    if (!config || !wrapRef.current) {
      setPaths([]);
      setChipStates({});
      return;
    }

    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const run = () => {
        const wrapRect = wrap.getBoundingClientRect();
        setSvgSize({ width: wrapRect.width, height: wrapRect.height });

        const states: ChipStateMap = {};
        for (let i = 0; i < tokenCount; i++) states[i] = "default";

        const focusChip = chipRefs.current?.[config.focusIdx];
        if (!focusChip) return;

        states[config.focusIdx] = "focus";

        for (let i = 0; i < tokenCount; i++) {
          if (i === config.focusIdx) continue;
          const w = config.weights[i] ?? 0.04;
          if (w < ARC_WEIGHT_THRESHOLD) states[i] = "dim";
        }
        states[config.target] = "target";

        const focusRect = focusChip.getBoundingClientRect();
        const fx = focusRect.left + focusRect.width / 2 - wrapRect.left;
        const fy = focusRect.top - wrapRect.top;

        const newPaths: ArcPath[] = [];

        Object.entries(config.weights).forEach(([key, w]) => {
          const idx = parseInt(key, 10);
          if (idx === config.focusIdx || w < ARC_WEIGHT_THRESHOLD) return;

          const chip = chipRefs.current?.[idx];
          if (!chip) return;

          const r = chip.getBoundingClientRect();
          const tx = r.left + r.width / 2 - wrapRect.left;
          const ty = r.top - wrapRect.top;
          const midY = Math.min(fy, ty) - 30 - w * 20;
          const midX = (fx + tx) / 2;
          const d = `M ${fx} ${fy} Q ${midX} ${midY}, ${tx} ${ty}`;
          const color =
            idx === config.target ? "var(--walk-teal)" : "var(--walk-line)";

          newPaths.push({
            d,
            stroke: color,
            strokeWidth: Math.max(1, w * 7),
            opacity: Math.max(0.25, w),
            key: `${config.focusIdx}-${idx}`,
          });
        });

        setPaths(newPaths);
        setChipStates(states);
      };

      requestAnimationFrame(run);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(wrapRef.current);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [wrapRef, chipRefs, config, tokenCount, ...deps]);

  return { svgSize, paths, chipStates };
}

export function useChipRefs(tokenCount: number) {
  const chipRefs = { current: [] as (HTMLDivElement | null)[] };
  chipRefs.current = Array(tokenCount).fill(null);
  return chipRefs;
}
