import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Slider.css';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Current value */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** RTL direction */
  rtl?: boolean;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Slider Component
 * 
 * A range slider for selecting values.
 * Supports min/max/step values
 * Supports RTL
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ value = 50, min = 0, max = 100, step = 1, rtl = false, onChange, className, ...props }, ref) => {
    const percentage = ((value - min) / (max - min)) * 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(Number(e.target.value));
    };

    return (
      <div
        className={cn(
          'onyx-slider',
          rtl && 'onyx-slider--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
      >
        <div className="onyx-slider__track">
          <div
            className="onyx-slider__fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          ref={ref}
          type="range"
          className="onyx-slider__input"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          {...props}
        />
        <div
          className="onyx-slider__thumb"
          style={{ left: `${percentage}%` }}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
