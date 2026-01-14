import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './MenuBar.css';

export interface MenuBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Menu items */
  children: ReactNode;
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * MenuBar Component
 * 
 * A horizontal navigation menu container.
 * Supports RTL
 */
export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  ({ children, rtl = false, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'onyx-menu-bar',
          rtl && 'onyx-menu-bar--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        role="menubar"
        {...props}
      >
        {children}
      </nav>
    );
  }
);

MenuBar.displayName = 'MenuBar';

export default MenuBar;
