"use client";

interface ProgressBarProps {
  progress: number;
  label?: string;
}

export function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="h-2 bg-onyx-progress-track rounded-full overflow-hidden">
        <div
          className="h-full bg-onyx-progress rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      {label && (
        <div className="font-mono text-2xs uppercase tracking-[0.12em] text-onyx-text-muted">
          {label}
        </div>
      )}
    </div>
  );
}
