import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './AmmoCounter.css';

export interface AmmoCounterProps extends HTMLAttributes<HTMLDivElement> {
  /** Current ammo count */
  current: number;
  /** Maximum/reserve ammo */
  max: number;
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * AmmoCounter Component
 * 
 * Displays ammunition count (current / max).
 * Supports RTL
 */
export const AmmoCounter = forwardRef<HTMLDivElement, AmmoCounterProps>(
  ({ current, max, rtl = false, className, ...props }, ref) => {
    const isLow = current <= max * 0.25;
    const isEmpty = current === 0;

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-ammo-counter',
          isLow && 'onyx-ammo-counter--low',
          isEmpty && 'onyx-ammo-counter--empty',
          rtl && 'onyx-ammo-counter--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <span className="onyx-ammo-counter__current">{current}</span>
        <span className="onyx-ammo-counter__separator">/</span>
        <span className="onyx-ammo-counter__max">{max}</span>
      </div>
    );
  }
);

AmmoCounter.displayName = 'AmmoCounter';

// Grenades Counter
export interface GrenadesProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of grenades (1-5) */
  count: number;
  /** Maximum grenades */
  max?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Grenades Component
 * 
 * Visual grenade count indicator.
 */
export const Grenades = forwardRef<HTMLDivElement, GrenadesProps>(
  ({ count, max = 5, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('onyx-grenades', className)}
        {...props}
      >
        {[...Array(max)].map((_, index) => (
          <div
            key={index}
            className={cn(
              'onyx-grenades__item',
              index < count && 'onyx-grenades__item--active'
            )}
          >
            <svg viewBox="0 0 20 23" fill="none">
              <rect x="7" y="0" width="6" height="4" fill="currentColor" />
              <ellipse cx="10" cy="14" rx="10" ry="9" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    );
  }
);

Grenades.displayName = 'Grenades';

export default AmmoCounter;
