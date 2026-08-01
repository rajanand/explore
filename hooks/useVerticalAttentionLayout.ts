import { useLayoutEffect, useState, type RefObject } from "react";
import type { AttentionConfig } from "@/lib/transformer/attentionConfigs";

export type LinePath = {
  d: string;
  arrow: string;
  strokeWidth: number;
  opacity: number;
  isTarget: boolean;
  key: string;
};

export type RowStateMap = Record<number, "focus" | "target" | "dim" | "default">;

const LINE_WEIGHT_THRESHOLD = 0.08;

function arrowGeometry(
  cx: number,
  cy: number,
  tx: number,
  ty: number,
  strokeWidth: number
) {
  let dx = tx - cx;
  let dy = ty - cy;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  const arrowLength = Math.max(9, strokeWidth * 1.4);
  const arrowWidth = Math.max(7, strokeWidth * 1.6);
  const trim = strokeWidth / 2 + arrowLength * 0.85;

  const endX = tx - ux * trim;
  const endY = ty - uy * trim;
  const baseX = tx - ux * arrowLength;
  const baseY = ty - uy * arrowLength;
  const perpX = -uy * (arrowWidth / 2);
  const perpY = ux * (arrowWidth / 2);

  const arrow = [
    `${tx},${ty}`,
    `${baseX + perpX},${baseY + perpY}`,
    `${baseX - perpX},${baseY - perpY}`,
  ].join(" ");

  return { endX, endY, arrow };
}

export function useVerticalAttentionLayout(
  matrixRef: RefObject<HTMLElement | null>,
  queryRefs: RefObject<(HTMLDivElement | null)[]>,
  keyRefs: RefObject<(HTMLDivElement | null)[]>,
  config: AttentionConfig | null,
  tokenCount: number,
  deps: unknown[] = []
) {
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<LinePath[]>([]);
  const [queryStates, setQueryStates] = useState<RowStateMap>({});
  const [keyStates, setKeyStates] = useState<RowStateMap>({});
  const [keyWeights, setKeyWeights] = useState<Record<number, number>>({});

  useLayoutEffect(() => {
    if (!config || !matrixRef.current) {
      setPaths([]);
      setQueryStates({});
      setKeyStates({});
      setKeyWeights({});
      return;
    }

    const update = () => {
      const matrix = matrixRef.current;
      if (!matrix) return;

      const run = () => {
        const matrixRect = matrix.getBoundingClientRect();
        setSvgSize({ width: matrixRect.width, height: matrixRect.height });

        const qStates: RowStateMap = {};
        const kStates: RowStateMap = {};
        const weights: Record<number, number> = {};

        for (let i = 0; i < tokenCount; i++) {
          qStates[i] = "default";
          kStates[i] = "default";
        }

        qStates[config.focusIdx] = "focus";

        const queryEl = queryRefs.current?.[config.focusIdx];
        if (!queryEl) return;

        const queryRect = queryEl.getBoundingClientRect();
        const fx = queryRect.right - matrixRect.left;
        const fy = queryRect.top + queryRect.height / 2 - matrixRect.top;

        const newPaths: LinePath[] = [];

        for (let i = 0; i < tokenCount; i++) {
          const w = config.weights[i] ?? (i === config.focusIdx ? 0.35 : 0.04);
          weights[i] = w;

          if (i === config.focusIdx) continue;

          if (w < LINE_WEIGHT_THRESHOLD) {
            kStates[i] = "dim";
          }
          if (i === config.target) {
            kStates[i] = "target";
          }

          const keyEl = keyRefs.current?.[i];
          if (!keyEl || w < LINE_WEIGHT_THRESHOLD) continue;

          const keyRect = keyEl.getBoundingClientRect();
          const tx = keyRect.left - matrixRect.left - 2;
          const ty = keyRect.top + keyRect.height / 2 - matrixRect.top;
          const ctrlX = (fx + tx) / 2 + (ty - fy) * 0.12;
          const ctrlY = (fy + ty) / 2;
          const strokeWidth = Math.max(1.5, w * 8);
          const { endX, endY, arrow } = arrowGeometry(
            ctrlX,
            ctrlY,
            tx,
            ty,
            strokeWidth
          );
          const d = `M ${fx} ${fy} Q ${ctrlX} ${ctrlY}, ${endX} ${endY}`;

          newPaths.push({
            d,
            arrow,
            strokeWidth,
            opacity: Math.max(0.25, w),
            isTarget: i === config.target,
            key: `${config.focusIdx}-${i}`,
          });
        }

        setPaths(newPaths);
        setQueryStates(qStates);
        setKeyStates(kStates);
        setKeyWeights(weights);
      };

      requestAnimationFrame(run);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(matrixRef.current);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [matrixRef, queryRefs, keyRefs, config, tokenCount, ...deps]);

  return { svgSize, paths, queryStates, keyStates, keyWeights };
}
