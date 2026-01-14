import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './MenuItem.css';

export type MenuItemState = 'focus' | 'unfocused' | 'disabled';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Menu item label */
  children: ReactNode;
  /** Visual state */
  state?: MenuItemState;
  /** RTL direction */
  rtl?: boolean;
  /** Active/focused state */
  active?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * MenuItem Component
 * 
 * A navigation menu item.
 * States: Focus, Unfocused, Disabled
 * Supports RTL
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ children, state, active = false, disabled = false, rtl = false, className, ...props }, ref) => {
    const resolvedState = state ?? (disabled ? 'disabled' : active ? 'focus' : 'unfocused');

    return (
      <button
        ref={ref}
        className={cn(
          'onyx-menu-item',
          `onyx-menu-item--${resolvedState}`,
          rtl && 'onyx-menu-item--rtl',
          className
        )}
        disabled={disabled}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
