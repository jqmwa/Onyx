"use client";

import { Check } from "../icons";

export interface SidebarStep {
  id: string;
  number: number;
  label: string;
  status: "complete" | "active" | "pending";
}

interface WizardSidebarProps {
  title: string;
  description: string;
  steps: SidebarStep[];
  activeStep: string;
  onStepClick: (id: string) => void;
  progress: number;
}

export function WizardSidebar({
  title,
  description,
  steps,
  activeStep,
  onStepClick,
  progress,
}: WizardSidebarProps) {
  return (
    <div className="w-64 flex-shrink-0 flex flex-col border-r border-onyx-border-subtle bg-onyx-surface-raised">
      <div className="p-6 pb-4">
        <h2 className="text-xl font-medium text-onyx-text-primary">{title}</h2>
        <p className="text-sm text-onyx-text-secondary mt-1.5">{description}</p>
      </div>

      <nav className="flex-1 px-4">
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-onyx-border" />

          <div className="space-y-0.5 relative">
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              const isComplete = step.status === "complete";

              return (
                <button
                  key={step.id}
                  onClick={() => onStepClick(step.id)}
                  className={`w-full flex items-center gap-3 px-2 py-3 rounded-onyx transition-colors text-left ${
                    isActive
                      ? "bg-onyx-hover"
                      : "hover:bg-onyx-hover/50"
                  }`}
                >
                  <div
                    className={`step-circle ${
                      isActive
                        ? "step-circle-active"
                        : isComplete
                          ? "step-circle-complete"
                          : "step-circle-pending"
                    }`}
                  >
                    {isComplete ? (
                      <Check size="sm" customSize={14} />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.08em] ${
                      isActive
                        ? "text-onyx-text-primary font-medium"
                        : isComplete
                          ? "text-onyx-text-secondary"
                          : "text-onyx-text-muted"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="p-6 pt-4">
        <div className="h-2 bg-onyx-progress-track rounded-full overflow-hidden">
          <div
            className="h-full bg-onyx-progress rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-mono text-2xs uppercase tracking-[0.12em] text-onyx-text-muted mt-2">
          {progress}% Completed
        </div>
      </div>
    </div>
  );
}
