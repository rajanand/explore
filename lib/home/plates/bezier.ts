import {
  type Plate,
  type PlateContext,
  drawDotGrid,
  drawHollowNode,
  drawSolidSignal,
  strokePath,
} from "./types";

type Point = { x: number; y: number };

type State = {
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  baseP1: Point;
  baseP2: Point;
  t: number;
  speed: number;
};

let state: State | null = null;

function cubicAt(p0: Point, p1: Point, p2: Point, p3: Point, t: number) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return {
    x:
      uuu * p0.x +
      3 * uu * t * p1.x +
      3 * u * tt * p2.x +
      ttt * p3.x,
    y:
      uuu * p0.y +
      3 * uu * t * p1.y +
      3 * u * tt * p2.y +
      ttt * p3.y,
  };
}

function lerp(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export const bezierPlate: Plate = {
  id: "bezier",
  label: "bézier · de casteljau",
  figLabel: "Fig. D",

  init(ctx: PlateContext) {
    const { width, height } = ctx;
    const p1 = { x: width * 0.38, y: height * 0.22 };
    const p2 = { x: width * 0.62, y: height * 0.78 };
    state = {
      p0: { x: width * 0.18, y: height * 0.62 },
      p1: { ...p1 },
      p2: { ...p2 },
      p3: { x: width * 0.82, y: height * 0.38 },
      baseP1: p1,
      baseP2: p2,
      t: 0.42,
      speed: 0.0011,
    };
  },

  draw(ctx: PlateContext) {
    if (!state) return;
    const { ctx: c, colors, width, height, time, reducedMotion } = ctx;
    const { p0, p3 } = state;

    drawDotGrid(c, width, height, colors.grid);

    if (!reducedMotion) {
      state.t += state.speed;
      if (state.t > 1) state.t = 0;
      state.p1.x =
        state.baseP1.x + Math.sin(time * 0.0009) * width * 0.04;
      state.p1.y =
        state.baseP1.y + Math.cos(time * 0.0007) * height * 0.05;
      state.p2.x =
        state.baseP2.x + Math.cos(time * 0.0008) * width * 0.035;
      state.p2.y =
        state.baseP2.y + Math.sin(time * 0.001) * height * 0.04;
    }

    const { p1, p2 } = state;
    const t = state.t;

    c.beginPath();
    c.moveTo(p0.x, p0.y);
    c.lineTo(p1.x, p1.y);
    c.lineTo(p2.x, p2.y);
    c.lineTo(p3.x, p3.y);
    strokePath(c, colors.line, 0.35, 1, [4, 5]);

    c.beginPath();
    for (let s = 0; s <= 1; s += 0.02) {
      const pt = cubicAt(p0, p1, p2, p3, s);
      if (s === 0) c.moveTo(pt.x, pt.y);
      else c.lineTo(pt.x, pt.y);
    }
    strokePath(c, colors.ink, 0.55, 1.15);

    const q0 = lerp(p0, p1, t);
    const q1 = lerp(p1, p2, t);
    const q2 = lerp(p2, p3, t);
    const r0 = lerp(q0, q1, t);
    const r1 = lerp(q1, q2, t);

    c.beginPath();
    c.moveTo(q0.x, q0.y);
    c.lineTo(q1.x, q1.y);
    c.lineTo(q2.x, q2.y);
    strokePath(c, colors.line, 0.3, 1);

    c.beginPath();
    c.moveTo(r0.x, r0.y);
    c.lineTo(r1.x, r1.y);
    strokePath(c, colors.line, 0.35, 1);

    [p0, p1, p2, p3].forEach((pt) => {
      drawHollowNode(c, pt.x, pt.y, colors, 5, 2);
    });

    const curvePt = cubicAt(p0, p1, p2, p3, t);
    drawSolidSignal(c, curvePt.x, curvePt.y, colors.pulse, 3.5);

    c.globalAlpha = 1;
  },
};
