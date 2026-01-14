import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Healthbar.css';

export interface HealthbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Current health value (0-100) */
  value?: number;
  /** Maximum health */
  max?: number;
  /** RTL direction */
  rtl?: boolean;
  /** Show health value */
  showValue?: boolean;
  /** Low health threshold (for color change) */
  lowThreshold?: number;
  /** Critical health threshold */
  criticalThreshold?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Healthbar Component
 * 
 * A health/HP indicator commonly used in games.
 * Changes color based on health level
 * Supports RTL
 */
export const Healthbar = forwardRef<HTMLDivElement, HealthbarProps>(
  ({ 
    value = 100, 
    max = 100, 
    rtl = false, 
    showValue = false, 
    lowThreshold = 50, 
    criticalThreshold = 20, 
    className, 
    ...props 
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    
    let healthState = 'high';
    if (percentage <= criticalThreshold) {
      healthState = 'critical';
    } else if (percentage <= lowThreshold) {
      healthState = 'low';
    }

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-healthbar',
          `onyx-healthbar--${healthState}`,
          rtl && 'onyx-healthbar--rtl',
          className
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label="Health"
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <div className="onyx-healthbar__container">
          <div className="onyx-healthbar__track">
            <div
              className="onyx-healthbar__fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="onyx-healthbar__segments">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="onyx-healthbar__segment" />
            ))}
          </div>
        </div>
        {showValue && (
          <span className="onyx-healthbar__value">
            {Math.round(value)}/{max}
          </span>
        )}
      </div>
    );
  }
);

Healthbar.displayName = 'Healthbar';

export default Healthbar;
