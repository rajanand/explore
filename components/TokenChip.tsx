"use client";

import React from "react";

export type TokenChipState = "focus" | "target" | "dim" | "default";

type TokenChipProps = {
  token: string;
  sublabel?: string;
  state?: TokenChipState;
  size?: "default" | "small";
  chipRef?: (el: HTMLDivElement | null) => void;
  onClick?: () => void;
  ariaPressed?: boolean;
};

export default function TokenChip({
  token,
  sublabel,
  state = "default",
  size = "default",
  chipRef,
  onClick,
  ariaPressed,
}: TokenChipProps) {
  const classNames = [
    "tok",
    state !== "default" ? state : "",
    size === "small" ? "small" : "",
    onClick ? "interactive" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const chip = (
    <div ref={chipRef} className={classNames}>
      {token}
    </div>
  );

  const wrapped =
    onClick ? (
      <button
        type="button"
        className="tok-btn"
        onClick={onClick}
        aria-pressed={ariaPressed ?? false}
      >
        {chip}
      </button>
    ) : (
      chip
    );

  if (sublabel) {
    return (
      <div className="tok-wrap">
        {wrapped}
        <div className="vec">{sublabel}</div>
      </div>
    );
  }

  return wrapped;
}
