"use client";

import { useState } from "react";
import { Close, Bot, Sparkle, Send } from "../icons";

interface AgentPreviewProps {
  agentName: string;
  onClose: () => void;
}

export function AgentPreview({ agentName, onClose }: AgentPreviewProps) {
  const [input, setInput] = useState("");

  return (
    <div className="w-80 flex-shrink-0 border-l border-onyx-border-subtle bg-onyx-surface flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-onyx-border-subtle">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-onyx bg-onyx-tag flex items-center justify-center">
            <Bot size="sm" className="text-onyx-text-secondary" />
          </div>
          <div>
            <div className="text-sm font-medium text-onyx-text-primary">
              {agentName || "Agent"} (Preview)
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-onyx-text-muted hover:text-onyx-text-primary transition-colors"
        >
          <Close size="sm" />
        </button>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-6 mt-auto flex flex-col justify-end h-full">
          {/* Empty state */}
          <div className="flex-1" />

          {/* Sample actions */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 p-2.5 rounded-onyx border border-onyx-border-subtle bg-onyx-surface-raised hover:bg-onyx-hover transition-colors text-left">
              <Sparkle size="sm" className="text-onyx-text-muted flex-shrink-0" />
              <span className="font-mono text-xs uppercase tracking-[0.06em] text-onyx-text-secondary">
                How do I upgrade my plan?
              </span>
            </button>
            <button className="w-full flex items-center gap-2 p-2.5 rounded-onyx border border-onyx-border-subtle bg-onyx-surface-raised hover:bg-onyx-hover transition-colors text-left">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-onyx-text-muted flex-shrink-0"
              >
                <path
                  d="M2 4H12M2 7H8M2 10H10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.06em] text-onyx-text-secondary">
                Summarize
              </span>
            </button>
          </div>

          {/* Sample response */}
          <div className="bg-onyx-tag rounded-onyx-lg p-3">
            <p className="text-sm text-onyx-text-primary">
              Try: &ldquo;I was double-charged this month.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-onyx-border-subtle">
        <div className="flex items-center gap-2">
          <button className="text-onyx-text-muted hover:text-onyx-text-primary transition-colors flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3V15M3 9H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Test your agent..."
            className="flex-1 bg-transparent text-sm text-onyx-text-primary placeholder:text-onyx-text-muted outline-none"
          />
          <button
            className={`flex-shrink-0 transition-colors ${
              input
                ? "text-onyx-text-primary"
                : "text-onyx-text-muted"
            }`}
          >
            <Send size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
