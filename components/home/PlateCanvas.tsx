"use client";

import { useEffect, useRef } from "react";
import type { Plate } from "@/lib/home/plates";
import { readPlateColors } from "@/lib/home/plates";

type PlateCanvasProps = {
  plate: Plate;
};

export default function PlateCanvas({ plate }: PlateCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    const startTime = performance.now();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? 200;
      height = parent?.clientHeight ?? 180;
      canvas.width = width;
      canvas.height = height;

      plate.init({
        ctx,
        width,
        height,
        time: performance.now() - startTime,
        colors: readPlateColors(),
        reducedMotion,
      });
    };

    const drawFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      plate.draw({
        ctx,
        width,
        height,
        time,
        colors: readPlateColors(),
        reducedMotion,
      });
    };

    resize();

    if (reducedMotion) {
      drawFrame(0);
      return;
    }

    const loop = (now: number) => {
      drawFrame(now - startTime);
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [plate]);

  return (
    <canvas
      ref={canvasRef}
      className="home-plate-canvas"
      aria-hidden="true"
    />
  );
}
