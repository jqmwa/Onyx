"use client";

interface TagProps {
  label: string;
  onRemove?: () => void;
}

export function Tag({ label, onRemove }: TagProps) {
  return (
    <span className="tag-chip">
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-0.5 text-onyx-text-muted hover:text-onyx-text-primary"
          aria-label={`Remove ${label}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 3L9 9M9 3L3 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
