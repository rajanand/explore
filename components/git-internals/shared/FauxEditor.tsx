"use client";

import React from "react";

type FauxEditorProps = {
  filename: string;
  value: string;
  onChange: (v: string) => void;
  readOnly?: boolean;
  label?: string;
};

export default function FauxEditor({
  filename,
  value,
  onChange,
  readOnly = false,
  label,
}: FauxEditorProps) {
  return (
    <div className="git-faux-editor">
      {label && <p className="git-field-label">{label}</p>}
      <div className="git-faux-editor-bar mono">
        <span className="git-faux-tab active">{filename}</span>
      </div>
      <textarea
        className="git-faux-editor-body mono"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        aria-label={`Edit ${filename}`}
        rows={4}
      />
    </div>
  );
}
