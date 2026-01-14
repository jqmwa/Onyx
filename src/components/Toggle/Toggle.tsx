import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Current state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** RTL direction */
  rtl?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Toggle Component
 * 
 * A switch control for toggling between on/off states.
 * States: On, Off, Disabled
 * Supports RTL
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked = false, disabled = false, rtl = false, onCheckedChange, className, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label
        className={cn(
          'onyx-toggle',
          checked && 'onyx-toggle--checked',
          disabled && 'onyx-toggle--disabled',
          rtl && 'onyx-toggle--rtl',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="onyx-toggle__input"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <span className="onyx-toggle__track">
          <span className="onyx-toggle__thumb" />
        </span>
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
