import {
  type Plate,
  type PlateContext,
  drawDotGrid,
  drawEllipseOrbit,
  drawOrbitParticle,
  drawSolidSignal,
  ellipsePoint,
  strokePath,
} from "./types";

type Orbit = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  baseRotation: number;
  angle: number;
  speed: number;
  isSignal: boolean;
};

type State = {
  orbits: Orbit[];
  nucleusX: number;
  nucleusY: number;
};

let state: State | null = null;

export const orbitalPlate: Plate = {
  id: "orbital",
  label: "orbital model",
  figLabel: "Fig. A",

  init(ctx: PlateContext) {
    const { width, height } = ctx;
    const cx = width * 0.52;
    const cy = height * 0.5;
    const base = Math.min(width, height) * 0.38;

    state = {
      nucleusX: cx,
      nucleusY: cy,
      orbits: [
        {
          cx,
          cy,
          rx: base * 0.95,
          ry: base * 0.32,
          rotation: 0,
          baseRotation: 0,
          angle: 3.5,
          speed: 0.0012,
          isSignal: false,
        },
        {
          cx,
          cy,
          rx: base * 0.88,
          ry: base * 0.38,
          rotation: Math.PI / 3,
          baseRotation: Math.PI / 3,
          angle: 1.2,
          speed: 0.00095,
          isSignal: false,
        },
        {
          cx,
          cy,
          rx: base * 0.88,
          ry: base * 0.38,
          rotation: -Math.PI / 3,
          baseRotation: -Math.PI / 3,
          angle: 4.8,
          speed: 0.0014,
          isSignal: true,
        },
      ],
    };
  },

  draw(ctx: PlateContext) {
    if (!state) return;
    const { ctx: c, colors, width, height, time, reducedMotion } = ctx;

    drawDotGrid(c, width, height, colors.grid);

    const ringDrift = reducedMotion ? 0 : time * 0.00012;

    state.orbits.forEach((orbit) => {
      const rot = orbit.baseRotation + ringDrift * (orbit.isSignal ? 1.2 : 0.8);
      orbit.rotation = rot;

      drawEllipseOrbit(
        c,
        orbit.cx,
        orbit.cy,
        orbit.rx,
        orbit.ry,
        rot,
        colors.line,
        0.45
      );
    });

    c.globalAlpha = 0.5;
    c.strokeStyle = colors.line;
    c.lineWidth = 1;
    c.beginPath();
    c.arc(state.nucleusX, state.nucleusY, 8, 0, Math.PI * 2);
    c.stroke();
    c.globalAlpha = 0.75;
    c.fillStyle = colors.node;
    c.beginPath();
    c.arc(state.nucleusX, state.nucleusY, 2.5, 0, Math.PI * 2);
    c.fill();

    state.orbits.forEach((orbit) => {
      if (!reducedMotion) orbit.angle += orbit.speed;

      const p = ellipsePoint(
        orbit.cx,
        orbit.cy,
        orbit.rx,
        orbit.ry,
        orbit.rotation,
        orbit.angle
      );

      if (orbit.isSignal) {
        drawSolidSignal(c, p.x, p.y, colors.pulse, 3.5);
      } else {
        drawOrbitParticle(c, p.x, p.y, colors, false);
      }
    });

    c.globalAlpha = 1;
  },
};
