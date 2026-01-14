import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './AudioPlayer.css';

export type AudioPlayerState = 'play' | 'pause';
export type AudioPlayerVolume = 'silent' | 'loud';

export interface AudioPlayerProps extends HTMLAttributes<HTMLDivElement> {
  /** Playback state */
  state?: AudioPlayerState;
  /** Volume level */
  volume?: AudioPlayerVolume;
  /** Progress value (0-100) */
  progress?: number;
  /** RTL direction */
  rtl?: boolean;
  /** Play/Pause handler */
  onPlayPause?: () => void;
  /** Volume toggle handler */
  onVolumeToggle?: () => void;
  /** Seek handler */
  onSeek?: (progress: number) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * AudioPlayer Component
 * 
 * An audio player with play/pause and volume controls.
 * States: Play, Pause
 * Volume: Silent, Loud
 * Supports RTL
 */
export const AudioPlayer = forwardRef<HTMLDivElement, AudioPlayerProps>(
  ({ 
    state = 'pause', 
    volume = 'loud', 
    progress = 0, 
    rtl = false, 
    onPlayPause, 
    onVolumeToggle, 
    onSeek, 
    className, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'onyx-audio-player',
          `onyx-audio-player--${state}`,
          rtl && 'onyx-audio-player--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        <button
          type="button"
          className="onyx-audio-player__play-btn"
          onClick={onPlayPause}
          aria-label={state === 'play' ? 'Pause' : 'Play'}
        >
          {state === 'play' ? (
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="4" height="16" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
            </svg>
          )}
        </button>

        <div className="onyx-audio-player__progress">
          <div className="onyx-audio-player__track">
            <div
              className="onyx-audio-player__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          className="onyx-audio-player__volume-btn"
          onClick={onVolumeToggle}
          aria-label={volume === 'loud' ? 'Mute' : 'Unmute'}
        >
          {volume === 'loud' ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 9H7L12 4V20L7 15H3V9Z" fill="currentColor" />
              <path d="M16.5 8C18 10 18 14 16.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M19.5 5C22.5 9 22.5 15 19.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 9H7L12 4V20L7 15H3V9Z" fill="currentColor" />
              <path d="M16 10L22 16M22 10L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    );
  }
);

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
