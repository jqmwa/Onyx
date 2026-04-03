"use client";

import { ArrowRight } from "../icons";

interface WizardNavigationProps {
  previousLabel?: string;
  nextLabel?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

export function WizardNavigation({
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
}: WizardNavigationProps) {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-t border-onyx-border-subtle bg-onyx-surface">
      <div>
        {showPrevious && onPrevious && (
          <button
            onClick={onPrevious}
            className="group flex flex-col items-start"
          >
            <span className="font-mono text-2xs uppercase tracking-[0.12em] text-onyx-text-muted">
              Previous
            </span>
            <span className="text-sm font-medium text-onyx-text-primary group-hover:text-onyx-text-secondary transition-colors">
              {previousLabel}
            </span>
          </button>
        )}
      </div>
      <div>
        {showNext && onNext && (
          <button
            onClick={onNext}
            className="group flex items-center gap-4"
          >
            <div className="flex flex-col items-end">
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-onyx-text-muted">
                Next
              </span>
              <span className="text-sm font-medium text-onyx-text-primary group-hover:text-onyx-text-secondary transition-colors">
                {nextLabel}
              </span>
            </div>
            <ArrowRight
              size="sm"
              className="text-onyx-text-primary group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        )}
      </div>
    </div>
  );
}
