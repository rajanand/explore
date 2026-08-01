import { orbitalPlate } from "./orbital";
import { nodeNetworkPlate } from "./nodeNetwork";
import { bezierPlate } from "./bezier";
import { lissajousPlate } from "./lissajous";
import type { Plate } from "./types";

export const PLATES: Plate[] = [
  orbitalPlate,
  nodeNetworkPlate,
  bezierPlate,
  lissajousPlate,
];

export type { Plate, PlateContext, PlateColors } from "./types";
export { readPlateColors } from "./types";
