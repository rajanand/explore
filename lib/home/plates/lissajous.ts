import {
  type Plate,
  type PlateContext,
  drawDotGrid,
  drawSolidSignal,
  strokePath,
} from "./types";

type State = {
  cx: number;
  cy: number;
  ax: number;
  ay: number;
  dotT: number;
  dotSpeed: number;
  phase: number;
};

let state: State | null = null;

function lissajousPoint(
  cx: number,
  cy: number,
  ax: number,
  ay: number,
  t: number,
  phase: number
) {
  return {
    x: cx + ax * Math.sin(3 * t + phase),
    y: cy + ay * Math.sin(2 * t),
  };
}

export const lissajousPlate: Plate = {
  id: "lissajous",
  label: "lissajous 3:2",
  figLabel: "Fig. C",

  init(ctx: PlateContext) {
    const { width, height } = ctx;
    state = {
      cx: width * 0.52,
      cy: height * 0.5,
      ax: width * 0.32,
      ay: height * 0.26,
      dotT: 1.8,
      dotSpeed: 0.0012,
      phase: 0,
    };
  },

  draw(ctx: PlateContext) {
    if (!state) return;
    const { ctx: c, colors, width, height, time, reducedMotion } = ctx;

    drawDotGrid(c, width, height, colors.grid);

    const { cx, cy, ax, ay } = state;
    const axisLen = Math.min(width, height) * 0.36;

    if (!reducedMotion) {
      state.phase = time * 0.00035;
    }

    const phase = state.phase;

    c.beginPath();
    c.moveTo(cx - axisLen, cy);
    c.lineTo(cx + axisLen, cy);
    strokePath(c, colors.line, 0.3, 1, [4, 5]);

    c.beginPath();
    c.moveTo(cx, cy - axisLen * 0.85);
    c.lineTo(cx, cy + axisLen * 0.85);
    strokePath(c, colors.line, 0.3, 1, [4, 5]);

    c.beginPath();
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const pt = lissajousPoint(cx, cy, ax, ay, t, phase);
      if (i === 0) c.moveTo(pt.x, pt.y);
      else c.lineTo(pt.x, pt.y);
    }
    strokePath(c, colors.ink, 0.5, 1.1);

    if (!reducedMotion) {
      state.dotT += state.dotSpeed;
      if (state.dotT > Math.PI * 2) state.dotT = 0;
    }

    const dot = lissajousPoint(cx, cy, ax, ay, state.dotT, phase);
    drawSolidSignal(c, dot.x, dot.y, colors.pulse, 3.5);

    c.globalAlpha = 1;
  },
};
