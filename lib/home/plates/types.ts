export type PlateColors = {
  node: string;
  line: string;
  pulse: string;
  ink: string;
  grid: string;
};

export type PlateContext = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  time: number;
  colors: PlateColors;
  reducedMotion: boolean;
};

export type Plate = {
  id: string;
  label: string;
  figLabel: string;
  init: (ctx: PlateContext) => void;
  draw: (ctx: PlateContext) => void;
};

export function readPlateColors(): PlateColors {
  const style = getComputedStyle(document.documentElement);
  return {
    node: style.getPropertyValue("--walk-ink-dim").trim(),
    line: style.getPropertyValue("--walk-line-soft").trim(),
    pulse: style.getPropertyValue("--walk-amber").trim(),
    ink: style.getPropertyValue("--walk-ink").trim(),
    grid: style.getPropertyValue("--walk-line").trim(),
  };
}

export function drawDotGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  color: string,
  spacing = 18
) {
  const step = Math.max(14, Math.min(spacing, Math.min(width, height) / 10));
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.35;
  for (let x = step; x < width; x += step) {
    for (let y = step; y < height; y += step) {
      ctx.beginPath();
      ctx.arc(x, y, 0.75, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

export function strokePath(
  ctx: CanvasRenderingContext2D,
  color: string,
  alpha = 0.35,
  width = 1,
  dash?: number[]
) {
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = width;
  if (dash) ctx.setLineDash(dash);
  else ctx.setLineDash([]);
  ctx.stroke();
  ctx.setLineDash([]);
}

export function drawHollowNode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  colors: PlateColors,
  ringR = 7,
  dotR = 2.5
) {
  ctx.globalAlpha = 0.45;
  ctx.strokeStyle = colors.line;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, ringR, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = 0.7;
  ctx.fillStyle = colors.node;
  ctx.beginPath();
  ctx.arc(x, y, dotR, 0, Math.PI * 2);
  ctx.fill();
}

export function drawSolidSignal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  radius = 4
) {
  ctx.globalAlpha = 1;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

export function drawOrbitParticle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  colors: PlateColors,
  isSignal = false
) {
  if (isSignal) {
    drawSolidSignal(ctx, x, y, colors.pulse, 4);
  } else {
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = colors.node;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function pointOnLine(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  t: number
) {
  return {
    x: ax + (bx - ax) * t,
    y: ay + (by - ay) * t,
  };
}

export function ellipsePoint(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotation: number,
  angle: number
) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const ex = rx * cos;
  const ey = ry * sin;
  const cr = Math.cos(rotation);
  const sr = Math.sin(rotation);
  return {
    x: cx + ex * cr - ey * sr,
    y: cy + ex * sr + ey * cr,
  };
}

export function drawEllipseOrbit(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotation: number,
  color: string,
  alpha = 0.4
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.scale(rx, ry);
  ctx.beginPath();
  ctx.arc(0, 0, 1, 0, Math.PI * 2);
  strokePath(ctx, color, alpha, 1);
  ctx.restore();
}
