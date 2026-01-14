import { forwardRef, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Table.css';

// Table Root
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ rtl = false, className, children, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cn('onyx-table', rtl && 'onyx-table--rtl', className)}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        {children}
      </table>
    );
  }
);
Table.displayName = 'Table';

// Table Header
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} className={cn('onyx-table__header', className)} {...props}>
        {children}
      </thead>
    );
  }
);
TableHeader.displayName = 'TableHeader';

// Table Body
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} className={cn('onyx-table__body', className)} {...props}>
        {children}
      </tbody>
    );
  }
);
TableBody.displayName = 'TableBody';

// Table Row
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr ref={ref} className={cn('onyx-table__row', className)} {...props}>
        {children}
      </tr>
    );
  }
);
TableRow.displayName = 'TableRow';

// Table Head Cell
export type SortDirection = 'asc' | 'desc' | 'none';

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Sort direction indicator */
  sortDirection?: SortDirection;
  /** Sortable column */
  sortable?: boolean;
  /** Sort handler */
  onSort?: () => void;
  className?: string;
}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ sortDirection = 'none', sortable = false, onSort, className, children, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={cn(
          'onyx-table__head',
          sortable && 'onyx-table__head--sortable',
          sortDirection !== 'none' && `onyx-table__head--${sortDirection}`,
          className
        )}
        onClick={sortable ? onSort : undefined}
        {...props}
      >
        <span className="onyx-table__head-content">
          {children}
          {sortable && (
            <span className="onyx-table__sort-icon">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M8 3L12 7H4L8 3Z" fill="currentColor" opacity={sortDirection === 'asc' ? 1 : 0.3} />
                <path d="M8 13L4 9H12L8 13Z" fill="currentColor" opacity={sortDirection === 'desc' ? 1 : 0.3} />
              </svg>
            </span>
          )}
        </span>
      </th>
    );
  }
);
TableHead.displayName = 'TableHead';

// Table Cell
export type TableCellState = 'default' | 'focused' | 'disabled';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Cell state */
  state?: TableCellState;
  className?: string;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ state = 'default', className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn('onyx-table__cell', `onyx-table__cell--${state}`, className)}
        {...props}
      >
        {children}
      </td>
    );
  }
);
TableCell.displayName = 'TableCell';

export default Table;
