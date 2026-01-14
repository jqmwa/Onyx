import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './LabelControl.css';

export type LabelControlState = 'focused' | 'unfocused' | 'disabled';

// Base Label Control Container
export interface LabelControlProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string;
  /** Visual state */
  state?: LabelControlState;
  /** RTL direction */
  rtl?: boolean;
  /** Control content */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
}

/**
 * LabelControl Component
 * 
 * A labeled control container.
 * States: Focused, Unfocused, Disabled
 * Supports RTL
 */
export const LabelControl = forwardRef<HTMLDivElement, LabelControlProps>(
  ({ label, state = 'unfocused', rtl = false, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'onyx-label-control',
          `onyx-label-control--${state}`,
          rtl && 'onyx-label-control--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <span className="onyx-label-control__label">{label}</span>
        <div className="onyx-label-control__content">{children}</div>
      </div>
    );
  }
);

LabelControl.displayName = 'LabelControl';

// Label Control with Progress
export interface LabelControlProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string;
  /** Progress value (0-100) */
  value?: number;
  /** Visual state */
  state?: LabelControlState;
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const LabelControlProgress = forwardRef<HTMLDivElement, LabelControlProgressProps>(
  ({ label, value = 50, state = 'unfocused', rtl = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'onyx-label-control-progress',
          `onyx-label-control-progress--${state}`,
          rtl && 'onyx-label-control-progress--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <span className="onyx-label-control-progress__label">{label}</span>
        <div className="onyx-label-control-progress__bar">
          <div className="onyx-label-control-progress__track">
            <div
              className="onyx-label-control-progress__fill"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      </div>
    );
  }
);

LabelControlProgress.displayName = 'LabelControlProgress';

// Label Control with Toggle
export interface LabelControlToggleProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label: string;
  /** Toggle state */
  checked?: boolean;
  /** Visual state */
  state?: LabelControlState;
  /** RTL direction */
  rtl?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
}

export const LabelControlToggle = forwardRef<HTMLDivElement, LabelControlToggleProps>(
  ({ label, checked = false, state = 'unfocused', rtl = false, onCheckedChange, className, ...props }, ref) => {
    const isDisabled = state === 'disabled';

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-label-control-toggle',
          `onyx-label-control-toggle--${state}`,
          checked && 'onyx-label-control-toggle--checked',
          rtl && 'onyx-label-control-toggle--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <span className="onyx-label-control-toggle__label">{label}</span>
        <button
          type="button"
          className="onyx-label-control-toggle__switch"
          onClick={() => !isDisabled && onCheckedChange?.(!checked)}
          disabled={isDisabled}
          role="switch"
          aria-checked={checked}
        >
          <span className="onyx-label-control-toggle__track">
            <span className="onyx-label-control-toggle__thumb" />
          </span>
        </button>
      </div>
    );
  }
);

LabelControlToggle.displayName = 'LabelControlToggle';

export default LabelControl;
