import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './PlayerList.css';

export type PlayerState = 'idle' | 'muted' | 'speaking';

export interface PlayerItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Player name */
  name: string;
  /** Player state */
  state?: PlayerState;
  /** RTL direction */
  rtl?: boolean;
  /** Avatar URL */
  avatar?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * PlayerItem Component
 * 
 * A single player entry in a player list.
 * States: Idle, Muted, Speaking
 * Supports RTL
 */
export const PlayerItem = forwardRef<HTMLDivElement, PlayerItemProps>(
  ({ name, state = 'idle', rtl = false, avatar, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'onyx-player-item',
          `onyx-player-item--${state}`,
          rtl && 'onyx-player-item--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <div className="onyx-player-item__avatar">
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <svg viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="6" fill="currentColor" />
              <path d="M6 28C6 22 10 18 16 18C22 18 26 22 26 28" fill="currentColor" />
            </svg>
          )}
        </div>
        
        <span className="onyx-player-item__name">{name}</span>
        
        <div className="onyx-player-item__status">
          {state === 'muted' && (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 9H7L12 4V20L7 15H3V9Z" stroke="currentColor" strokeWidth="2" />
              <path d="M17 9L23 15M23 9L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
          {state === 'speaking' && (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 9H7L12 4V20L7 15H3V9Z" fill="currentColor" />
              <path d="M16 9C18 11 18 13 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M19 6C23 10 23 14 19 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </div>
    );
  }
);

PlayerItem.displayName = 'PlayerItem';

// Player List Container
export interface PlayerListProps extends HTMLAttributes<HTMLDivElement> {
  /** RTL direction */
  rtl?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const PlayerList = forwardRef<HTMLDivElement, PlayerListProps>(
  ({ rtl = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('onyx-player-list', rtl && 'onyx-player-list--rtl', className)}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PlayerList.displayName = 'PlayerList';

export default PlayerList;
