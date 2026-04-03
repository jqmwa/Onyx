"use client";

import { Check } from "../icons";

export interface WizardStep {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  status: "complete" | "current" | "pending";
}

interface WizardStepperProps {
  steps: WizardStep[];
  onClose: () => void;
}

export function WizardStepper({ steps, onClose }: WizardStepperProps) {
  return (
    <div className="flex items-stretch bg-onyx-surface-dark">
      <button
        onClick={onClose}
        className="flex items-center justify-center w-14 border-r border-white/10 text-onyx-text-on-dark/70 hover:text-white transition-colors"
        aria-label="Close wizard"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 4L12 12M12 4L4 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="flex flex-1">
        {steps.map((step, i) => (
          <div
            key={step.id}
            className={`flex-1 flex items-center justify-between px-5 py-3.5 border-r border-white/8 last:border-r-0 ${
              step.status === "current" ? "bg-onyx-surface-darker" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <div
                className={`font-mono text-2xs uppercase tracking-[0.12em] mb-0.5 ${
                  step.status === "complete"
                    ? "text-onyx-complete"
                    : "text-onyx-text-on-dark-muted"
                }`}
              >
                {step.status === "complete"
                  ? "Complete"
                  : step.status === "current"
                    ? "Current"
                    : `Step ${step.number}`}
              </div>
              <div className="text-sm font-medium text-onyx-text-on-dark truncate">
                {step.number}.{step.title}
              </div>
              <div className="text-xs text-onyx-text-on-dark-muted truncate">
                {step.subtitle}
              </div>
            </div>
            {step.status === "complete" && (
              <Check
                size="sm"
                className="ml-3 text-onyx-text-on-dark-muted flex-shrink-0"
              />
            )}
            {step.status === "current" && (
              <div className="ml-4 flex gap-1.5 flex-shrink-0">
                {steps.map((_, j) => (
                  <div
                    key={j}
                    className={`w-[5px] h-[5px] rounded-[1px] ${
                      j <= i ? "bg-white" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
