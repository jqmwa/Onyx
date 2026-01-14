import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './Tag.css';

export type TagStyle = 'square' | 'squareWithX' | 'rounded' | 'outlined';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tag text */
  children: ReactNode;
  /** Visual style */
  variant?: TagStyle;
  /** RTL direction */
  rtl?: boolean;
  /** Close/remove handler (for squareWithX) */
  onRemove?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Tag Component
 * 
 * A label/tag for categorization or filtering.
 * Styles: Square, SquareWithX, Rounded, Outlined
 * Supports RTL
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ children, variant = 'square', rtl = false, onRemove, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'onyx-tag',
          `onyx-tag--${variant}`,
          rtl && 'onyx-tag--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <span className="onyx-tag__text">{children}</span>
        {variant === 'squareWithX' && onRemove && (
          <button
            type="button"
            className="onyx-tag__remove"
            onClick={onRemove}
            aria-label="Remove"
          >
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
