import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import './Minimap.css';

export type MinimapTheme = 'light' | 'dark';
export type CompassPosition = 'inside' | 'outside';

export interface MinimapProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual theme */
  theme?: MinimapTheme;
  /** Compass indicator position */
  compassPosition?: CompassPosition;
  /** Map content (children) */
  children?: ReactNode;
  /** Size in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Minimap Component
 * 
 * A game minimap with compass indicators.
 * Themes: Light, Dark
 * Compass: Inside, Outside
 */
export const Minimap = forwardRef<HTMLDivElement, MinimapProps>(
  ({ theme = 'dark', compassPosition = 'outside', children, size = 200, className, ...props }, ref) => {
    const compassMarkers = ['N', 'E', 'S', 'W'];

    return (
      <div
        ref={ref}
        className={cn(
          'onyx-minimap',
          `onyx-minimap--${theme}`,
          `onyx-minimap--compass-${compassPosition}`,
          className
        )}
        style={{ '--minimap-size': `${size}px` } as React.CSSProperties}
        {...props}
      >
        {compassPosition === 'outside' && (
          <div className="onyx-minimap__compass onyx-minimap__compass--outside">
            {compassMarkers.map((marker) => (
              <span
                key={marker}
                className={`onyx-minimap__compass-marker onyx-minimap__compass-marker--${marker.toLowerCase()}`}
              >
                {marker}
              </span>
            ))}
          </div>
        )}
        
        <div className="onyx-minimap__container">
          <div className="onyx-minimap__content">
            {children}
          </div>
          
          {compassPosition === 'inside' && (
            <div className="onyx-minimap__compass onyx-minimap__compass--inside">
              {compassMarkers.map((marker) => (
                <span
                  key={marker}
                  className={`onyx-minimap__compass-marker onyx-minimap__compass-marker--${marker.toLowerCase()}`}
                >
                  {marker}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Minimap.displayName = 'Minimap';

export default Minimap;
