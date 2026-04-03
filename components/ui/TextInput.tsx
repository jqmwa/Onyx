"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="label-mono">{label}</label>}
        <input
          ref={ref}
          className={`input-field ${className ?? ""}`}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
