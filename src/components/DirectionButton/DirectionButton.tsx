import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from '../../icons/generic/UIIcons';
import './DirectionButton.css';

export type DirectionButtonDirection = 'up' | 'down' | 'left' | 'right';
export type DirectionButtonState = 'default' | 'hovered' | 'disabled';

export interface DirectionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Direction of the arrow */
  direction?: DirectionButtonDirection;
  /** Visual state of the button */
  state?: DirectionButtonState;
  /** Additional CSS class */
  className?: string;
}

/**
 * DirectionButton Component
 * 
 * A square button with directional arrow icons for navigation controls.
 * 
 * Directions: Up, Down, Left, Right
 * States: Default, Hovered, Disabled
 * 
 * Based on Game UI Wireframe Kit design system
 */
export const DirectionButton = forwardRef<HTMLButtonElement, DirectionButtonProps>(
  ({ direction = 'down', state = 'default', className, disabled, ...props }, ref) => {
    const isDisabled = disabled || state === 'disabled';
    
    // Determine which icon to render based on direction
    const renderIcon = () => {
      const iconProps = {
        size: 'md' as const,
        className: 'onyx-direction-button__icon',
      };

      switch (direction) {
        case 'up':
          return <ChevronUp {...iconProps} />;
        case 'down':
          return <ChevronDown {...iconProps} />;
        case 'left':
          return <ChevronLeft {...iconProps} />;
        case 'right':
          return <ChevronRight {...iconProps} />;
        default:
          return <ChevronDown {...iconProps} />;
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          'onyx-direction-button',
          `onyx-direction-button--${direction}`,
          state === 'hovered' && 'onyx-direction-button--hovered',
          (isDisabled || state === 'disabled') && 'onyx-direction-button--disabled',
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {renderIcon()}
      </button>
    );
  }
);

DirectionButton.displayName = 'DirectionButton';

export default DirectionButton;
