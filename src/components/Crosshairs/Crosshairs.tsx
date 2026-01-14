import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './Crosshairs.css';

export type CrosshairStyle = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

export interface CrosshairsProps extends HTMLAttributes<HTMLDivElement> {
  /** Crosshair visual style */
  variant?: CrosshairStyle;
  /** Custom color */
  color?: string;
  /** Size in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Crosshairs Component
 * 
 * Aiming crosshairs for games.
 * 5 different styles available.
 */
export const Crosshairs = forwardRef<HTMLDivElement, CrosshairsProps>(
  ({ variant = 'style1', color, size = 100, className, ...props }, ref) => {
    const style = color ? { '--crosshair-color': color } as React.CSSProperties : undefined;

    return (
      <div
        ref={ref}
        className={cn('onyx-crosshairs', `onyx-crosshairs--${variant}`, className)}
        style={{ ...style, width: size, height: size }}
        {...props}
      >
        <CrosshairSVG variant={variant} />
      </div>
    );
  }
);

Crosshairs.displayName = 'Crosshairs';

// SVG variants
const CrosshairSVG = ({ variant }: { variant: CrosshairStyle }) => {
  switch (variant) {
    case 'style1':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <line x1="50" y1="10" x2="50" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="60" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'style2':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'style3':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <line x1="15" y1="15" x2="35" y2="35" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="15" x2="65" y2="35" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="85" x2="35" y2="65" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="85" x2="65" y2="65" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      );
    case 'style4':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="46" y="10" width="8" height="30" fill="currentColor" />
          <rect x="46" y="60" width="8" height="30" fill="currentColor" />
          <rect x="10" y="46" width="30" height="8" fill="currentColor" />
          <rect x="60" y="46" width="30" height="8" fill="currentColor" />
        </svg>
      );
    case 'style5':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="2" />
          <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default Crosshairs;
