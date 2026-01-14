import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './ProgressBar.css';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number;
  /** Maximum value */
  max?: number;
  /** RTL direction */
  rtl?: boolean;
  /** Show percentage label */
  showLabel?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * ProgressBar Component
 * 
 * A linear progress indicator.
 * Supports values 0-100%
 * Supports RTL
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value = 0, max = 100, rtl = false, showLabel = false, className, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-progress-bar',
          rtl && 'onyx-progress-bar--rtl',
          className
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <div className="onyx-progress-bar__track">
          <div
            className="onyx-progress-bar__fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="onyx-progress-bar__label">{Math.round(percentage)}%</span>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
