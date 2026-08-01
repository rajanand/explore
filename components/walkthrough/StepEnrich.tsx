import React from "react";

type StepMechanicsProps = {
  children: React.ReactNode;
  formula?: React.ReactNode;
};

export function StepMechanics({ children, formula }: StepMechanicsProps) {
  return (
    <div className="step-mechanics panel">
      <p className="step-mechanics-lead">{children}</p>
      {formula ? <div className="step-formula mono">{formula}</div> : null}
    </div>
  );
}

type StepModelListProps = {
  items: { model: string; value: string }[];
};

export function StepModelList({ items }: StepModelListProps) {
  return (
    <ul className="step-model-list">
      {items.map(({ model, value }) => (
        <li key={model}>
          <span className="mono">{model}</span>
          <span className="step-model-badge">{value}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepFootnote({ children }: { children: React.ReactNode }) {
  return <p className="step-footnote">{children}</p>;
}

export function StepDetailNote({ children }: { children: React.ReactNode }) {
  return <p className="step-detail-note">{children}</p>;
}
