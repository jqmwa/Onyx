import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Cursor.css';

export type CursorType = 'pointer' | 'handOpen' | 'handClosed' | 'handPointing' | 'text';

export interface CursorProps extends HTMLAttributes<HTMLDivElement> {
  /** Cursor type */
  type?: CursorType;
  /** Size in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Cursor Component
 * 
 * Custom cursor icons.
 * Types: Pointer, HandOpen, HandClosed, HandPointing, Text
 */
export const Cursor = forwardRef<HTMLDivElement, CursorProps>(
  ({ type = 'pointer', size = 32, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('onyx-cursor', `onyx-cursor--${type}`, className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <CursorSVG type={type} />
      </div>
    );
  }
);

Cursor.displayName = 'Cursor';

const CursorSVG = ({ type }: { type: CursorType }) => {
  switch (type) {
    case 'pointer':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M8 4L8 26L13 21L17 28L21 26L17 19L24 19L8 4Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 'handOpen':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M16 6V16M12 8V16M20 8V16M8 12V20C8 24 11 28 16 28C21 28 24 24 24 20V12M8 12V10M24 12V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'handClosed':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M8 14V20C8 24 11 28 16 28C21 28 24 24 24 20V14M8 14C8 12 10 10 12 10H20C22 10 24 12 24 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'handPointing':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M12 20V12C12 10 14 8 16 8C18 8 20 10 20 12V14M8 18V22C8 26 12 28 16 28C20 28 24 26 24 22V18M8 18C8 16 10 14 12 14M24 18C24 16 22 14 20 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'text':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="4" x2="22" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default Cursor;
