import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Pagination.css';

export type PageState = 'active' | 'inactive' | 'disabled';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  /** Total number of pages */
  totalPages: number;
  /** Current active page (1-indexed) */
  currentPage: number;
  /** RTL direction */
  rtl?: boolean;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Pagination Component
 * 
 * Page navigation indicators (dots or numbered).
 * States: Active, Inactive, Disabled
 * Supports RTL
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ totalPages, currentPage, rtl = false, onPageChange, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('onyx-pagination', rtl && 'onyx-pagination--rtl', className)}
        dir={rtl ? 'rtl' : 'ltr'}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          
          return (
            <button
              key={page}
              type="button"
              className={cn(
                'onyx-pagination__dot',
                isActive && 'onyx-pagination__dot--active'
              )}
              onClick={() => onPageChange?.(page)}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            />
          );
        })}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';

// Page indicator for single dots
export interface PageIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Indicator state */
  state?: PageState;
  className?: string;
}

export const PageIndicator = forwardRef<HTMLSpanElement, PageIndicatorProps>(
  ({ state = 'inactive', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('onyx-page-indicator', `onyx-page-indicator--${state}`, className)}
        {...props}
      />
    );
  }
);

PageIndicator.displayName = 'PageIndicator';

export default Pagination;
