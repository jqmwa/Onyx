import { forwardRef, HTMLAttributes, useCallback, useRef, useState } from 'react';
import { cn } from '../../utils/classnames';
import './Scrollbar.css';

export type ScrollbarOrientation = 'horizontal' | 'vertical';
export type ScrollbarState = 'default' | 'hover' | 'dragged';

export interface ScrollbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Scrollbar orientation */
  orientation?: ScrollbarOrientation;
  /** Current scroll position (0-100) */
  value?: number;
  /** Thumb size as percentage (0-100) */
  thumbSize?: number;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Scrollbar Component
 * 
 * A custom scrollbar for scrollable containers.
 * Orientations: Horizontal, Vertical
 * States: Default, Hover, Dragged
 */
export const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ orientation = 'vertical', value = 0, thumbSize = 30, onChange, className, ...props }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!trackRef.current) return;

        const rect = trackRef.current.getBoundingClientRect();
        let percentage: number;

        if (orientation === 'horizontal') {
          percentage = ((moveEvent.clientX - rect.left) / rect.width) * 100;
        } else {
          percentage = ((moveEvent.clientY - rect.top) / rect.height) * 100;
        }

        onChange?.(Math.max(0, Math.min(100 - thumbSize, percentage)));
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [orientation, thumbSize, onChange]);

    const state: ScrollbarState = isDragging ? 'dragged' : isHovered ? 'hover' : 'default';

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-scrollbar',
          `onyx-scrollbar--${orientation}`,
          `onyx-scrollbar--${state}`,
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div
          ref={trackRef}
          className="onyx-scrollbar__track"
          onMouseDown={handleMouseDown}
        >
          <div
            className="onyx-scrollbar__thumb"
            style={{
              [orientation === 'horizontal' ? 'left' : 'top']: `${value}%`,
              [orientation === 'horizontal' ? 'width' : 'height']: `${thumbSize}%`,
            }}
          />
        </div>
      </div>
    );
  }
);

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;
