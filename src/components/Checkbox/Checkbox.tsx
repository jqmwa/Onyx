import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Current state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Checkbox Component
 * 
 * A checkbox control for boolean selections.
 * States: Checked, Unchecked, Disabled
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked = false, disabled = false, onCheckedChange, className, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label
        className={cn(
          'onyx-checkbox',
          checked && 'onyx-checkbox--checked',
          disabled && 'onyx-checkbox--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="onyx-checkbox__input"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <span className="onyx-checkbox__box">
          <svg className="onyx-checkbox__icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12L10 17L19 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
