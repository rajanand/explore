import {
  type Plate,
  type PlateContext,
  drawDotGrid,
  drawHollowNode,
  drawSolidSignal,
  pointOnLine,
  strokePath,
} from "./types";

type Node = { x: number; y: number };
type Edge = { from: number; to: number };

type State = {
  baseNodes: Node[];
  center: Node;
  edges: Edge[];
  signalEdge: number;
  signalProgress: number;
  signalSpeed: number;
};

let state: State | null = null;

function rotatePoint(cx: number, cy: number, x: number, y: number, angle: number) {
  const dx = x - cx;
  const dy = y - cy;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: cx + dx * cos - dy * sin,
    y: cy + dy * cos + dx * sin,
  };
}

function buildPentagonNetwork(width: number, height: number): State {
  const cx = width * 0.52;
  const cy = height * 0.5;
  const r = Math.min(width, height) * 0.34;

  const outer: Node[] = [];
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    outer.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }

  const center: Node = { x: cx, y: cy };
  const edges: Edge[] = [];
  for (let i = 0; i < 5; i++) {
    edges.push({ from: i, to: (i + 1) % 5 });
    edges.push({ from: 5, to: i });
  }

  return {
    baseNodes: outer,
    center,
    edges,
    signalEdge: 3 + Math.floor(Math.random() * 4),
    signalProgress: 0.35,
    signalSpeed: 0.0011,
  };
}

export const nodeNetworkPlate: Plate = {
  id: "node-network",
  label: "node network",
  figLabel: "Fig. B",

  init(ctx: PlateContext) {
    state = buildPentagonNetwork(ctx.width, ctx.height);
  },

  draw(ctx: PlateContext) {
    if (!state) return;
    const { ctx: c, colors, width, height, time, reducedMotion } = ctx;

    drawDotGrid(c, width, height, colors.grid);

    const rot = reducedMotion ? 0 : time * 0.00025;
    const wobble = reducedMotion ? 0 : Math.sin(time * 0.0008) * 3;

    const nodes: Node[] = state.baseNodes.map((n) =>
      rotatePoint(state!.center.x, state!.center.y, n.x, n.y, rot)
    );
    const center: Node = {
      x: state.center.x + wobble * 0.3,
      y: state.center.y + wobble * 0.2,
    };
    const allNodes = [...nodes, center];

    state.edges.forEach((edge) => {
      const a = allNodes[edge.from];
      const b = allNodes[edge.to];
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
      strokePath(c, colors.line, 0.42, 1);
    });

    if (!reducedMotion) {
      state.signalProgress += state.signalSpeed;
      if (state.signalProgress > 1) state.signalProgress = 0;
    }

    const sigEdge = state.edges[state.signalEdge];
    const sa = allNodes[sigEdge.from];
    const sb = allNodes[sigEdge.to];
    const pt = pointOnLine(sa.x, sa.y, sb.x, sb.y, state.signalProgress);
    drawSolidSignal(c, pt.x, pt.y, colors.pulse, 3.5);

    allNodes.forEach((n) => {
      drawHollowNode(c, n.x, n.y, colors, 5, 2);
    });

    c.globalAlpha = 1;
  },
};
