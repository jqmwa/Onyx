"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "../icons";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="label-mono">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            className={`input-field appearance-none pr-10 cursor-pointer ${className ?? ""}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-onyx-text-muted">
            <ChevronDown size="sm" />
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
