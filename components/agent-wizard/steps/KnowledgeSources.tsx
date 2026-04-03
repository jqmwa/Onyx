"use client";

import { Plus } from "../../icons";

interface KnowledgeSourcesProps {
  sources: string[];
  onAddSource: (source: string) => void;
  onRemoveSource: (index: number) => void;
}

export function KnowledgeSources({
  sources,
  onAddSource,
  onRemoveSource,
}: KnowledgeSourcesProps) {
  return (
    <div className="space-y-8">
      <div className="card-section">
        <label className="label-mono">Connected Sources</label>
        <div className="mt-4 space-y-2">
          {sources.map((source, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-onyx border border-onyx-border-subtle bg-onyx-surface-raised"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-onyx bg-onyx-tag flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-onyx-text-muted">
                    <rect x="1" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M4 5H10M4 7.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm text-onyx-text-primary">{source}</span>
              </div>
              <button
                onClick={() => onRemoveSource(i)}
                className="text-onyx-text-muted hover:text-onyx-text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 4L10 10M10 4L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => onAddSource("New Document")}
          className="mt-3 flex items-center gap-2 text-sm text-onyx-text-secondary hover:text-onyx-text-primary transition-colors"
        >
          <Plus size="sm" customSize={14} />
          <span>Add knowledge source</span>
        </button>
      </div>

      <div className="card-section">
        <label className="label-mono">Upload Files</label>
        <div className="mt-4 border-2 border-dashed border-onyx-border rounded-onyx-lg p-8 text-center">
          <div className="text-onyx-text-muted mb-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto">
              <path d="M16 4V20M16 4L10 10M16 4L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 20V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm text-onyx-text-secondary">
            Drop files here or click to upload
          </p>
          <p className="text-xs text-onyx-text-muted mt-1">
            PDF, TXT, MD, CSV up to 10MB each
          </p>
        </div>
      </div>
    </div>
  );
}
