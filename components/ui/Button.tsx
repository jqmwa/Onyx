"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-onyx-active text-onyx-text-on-dark hover:bg-onyx-surface-darker shadow-onyx-sm",
  secondary:
    "bg-onyx-surface text-onyx-text-primary border border-onyx-border hover:bg-onyx-hover shadow-onyx-sm",
  ghost:
    "bg-transparent text-onyx-text-secondary hover:text-onyx-text-primary hover:bg-onyx-hover",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-medium rounded-onyx transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
