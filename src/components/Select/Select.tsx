import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Select.css';

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
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
 * Select (Radio) Component
 * 
 * A radio button control for single selections.
 * States: On, Off, Disabled
 */
export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ checked = false, disabled = false, onCheckedChange, className, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label
        className={cn(
          'onyx-select',
          checked && 'onyx-select--checked',
          disabled && 'onyx-select--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          className="onyx-select__input"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <span className="onyx-select__circle">
          <span className="onyx-select__dot" />
        </span>
      </label>
    );
  }
);

Select.displayName = 'Select';

export default Select;
