"use client";

import PlateCanvas from "@/components/home/PlateCanvas";
import { PLATES } from "@/lib/home/plates";

const PLATE_SLOTS = [
  { plate: PLATES[0], side: "right" as const, slot: "slot-hero" },
  { plate: PLATES[1], side: "left" as const, slot: "slot-path" },
  { plate: PLATES[2], side: "right" as const, slot: "slot-modules" },
  { plate: PLATES[3], side: "left" as const, slot: "slot-bottom" },
];

export default function HomePagePlates() {
  return (
    <div className="home-plates-layer" aria-hidden="true">
      {PLATE_SLOTS.map(({ plate, side, slot }) => (
        <div
          key={plate.id}
          className={`home-plate-slot home-plate-slot--${side} home-plate-slot--${slot}`}
        >
          <PlateCanvas plate={plate} />
        </div>
      ))}
    </div>
  );
}
