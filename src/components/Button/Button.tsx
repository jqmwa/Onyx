import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './Button.css';

export type ButtonStyle = 'primary' | 'outline' | 'prompt';
export type ButtonState = 'default' | 'hover' | 'disabled';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Visual style variant */
  variant?: ButtonStyle;
  /** Button text content */
  children?: ReactNode;
  /** Icon to display (for prompt style) */
  icon?: ReactNode;
  /** RTL text direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Button Component
 * 
 * Styles: Primary (filled), Outline (bordered), Prompt (with icon)
 * States: Default, Hover, Disabled
 * Supports RTL text direction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children = 'Label', icon, rtl = false, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'onyx-button',
          `onyx-button--${variant}`,
          rtl && 'onyx-button--rtl',
          disabled && 'onyx-button--disabled',
          className
        )}
        disabled={disabled}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        {variant === 'prompt' && icon && (
          <span className="onyx-button__icon">{icon}</span>
        )}
        <span className="onyx-button__label">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
