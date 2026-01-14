import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './TextInput.css';

export type TextInputState = 'default' | 'error' | 'disabled';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visual state */
  state?: TextInputState;
  /** Error state */
  error?: boolean;
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * TextInput Component
 * 
 * A text input field for user input.
 * States: Default, Error, Disabled
 * Supports RTL
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ state, error = false, rtl = false, disabled = false, className, placeholder = 'Input Text', ...props }, ref) => {
    const resolvedState = state ?? (error ? 'error' : disabled ? 'disabled' : 'default');

    return (
      <input
        ref={ref}
        type="text"
        className={cn(
          'onyx-text-input',
          `onyx-text-input--${resolvedState}`,
          rtl && 'onyx-text-input--rtl',
          className
        )}
        disabled={disabled || resolvedState === 'disabled'}
        dir={rtl ? 'rtl' : 'ltr'}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
