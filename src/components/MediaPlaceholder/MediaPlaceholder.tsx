import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import './MediaPlaceholder.css';

export type MediaPlaceholderType = 'image' | 'video' | 'audio' | 'document';

export interface MediaPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  /** Media type */
  type?: MediaPlaceholderType;
  /** Aspect ratio (width/height) */
  aspectRatio?: number;
  /** Show icon */
  showIcon?: boolean;
  /** Placeholder text */
  label?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * MediaPlaceholder Component
 * 
 * A placeholder for media content (images, videos, etc.).
 * Types: Image, Video, Audio, Document
 */
export const MediaPlaceholder = forwardRef<HTMLDivElement, MediaPlaceholderProps>(
  ({ type = 'image', aspectRatio = 16 / 9, showIcon = true, label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'onyx-media-placeholder',
          `onyx-media-placeholder--${type}`,
          className
        )}
        style={{ aspectRatio: `${aspectRatio}` }}
        {...props}
      >
        {showIcon && (
          <div className="onyx-media-placeholder__icon">
            <MediaIcon type={type} />
          </div>
        )}
        {label && (
          <span className="onyx-media-placeholder__label">{label}</span>
        )}
      </div>
    );
  }
);

MediaPlaceholder.displayName = 'MediaPlaceholder';

const MediaIcon = ({ type }: { type: MediaPlaceholderType }) => {
  switch (type) {
    case 'image':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 28C22 26 26 26 28 28L36 36C38 38 42 38 44 36L52 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="44" cy="20" r="4" fill="currentColor" />
          <path d="M12 48L20 40L28 48L36 40L44 48L52 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'video':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M24 28L40 36L24 44V28Z" fill="currentColor" />
        </svg>
      );
    case 'audio':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="12" y="20" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 20V44M28 16V48M36 20V44M44 24V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'document':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M16 8H40L52 20V56H16V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M40 8V20H52" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="48" x2="36" y2="48" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default MediaPlaceholder;
