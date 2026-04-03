"use client";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="space-y-2">
      {label && <label className="label-mono">{label}</label>}
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-150 flex items-center justify-center ${
                  value === opt.value
                    ? "border-onyx-active bg-onyx-active"
                    : "border-onyx-border-strong group-hover:border-onyx-text-muted"
                }`}
              >
                {value === opt.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </div>
            <div>
              <div className="text-base text-onyx-text-primary font-medium">
                {opt.label}
              </div>
              {opt.description && (
                <div className="text-sm text-onyx-text-secondary mt-0.5">
                  {opt.description}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
