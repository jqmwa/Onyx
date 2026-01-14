import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';
import './LoadingIcons.css';

// Spinner - Circular loading indicator
export const Spinner = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-spin' : ''}`} {...rest}>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" strokeOpacity="0.25" />
      <path 
        d="M32 8A24 24 0 0 1 56 32" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round"
        fill="none"
      />
    </Icon>
  );
});
Spinner.displayName = 'Spinner';

// Dots Loading - Three dots animation
export const DotsLoader = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-dots' : ''}`} {...rest}>
      <circle className="onyx-dot-1" cx="12" cy="32" r="6" fill="currentColor" />
      <circle className="onyx-dot-2" cx="32" cy="32" r="6" fill="currentColor" />
      <circle className="onyx-dot-3" cx="52" cy="32" r="6" fill="currentColor" />
    </Icon>
  );
});
DotsLoader.displayName = 'DotsLoader';

// Pulse Loading - Pulsing circle
export const PulseLoader = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-pulse' : ''}`} {...rest}>
      <circle className="onyx-pulse-ring" cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" />
      <circle cx="32" cy="32" r="12" fill="currentColor" />
    </Icon>
  );
});
PulseLoader.displayName = 'PulseLoader';

// Progress Ring - Determinate loading
export interface ProgressRingProps extends IconProps {
  progress?: number; // 0-100
}

export const ProgressRing = forwardRef<SVGSVGElement, ProgressRingProps>((props, ref) => {
  const { progress = 0, ...rest } = props;
  const circumference = 2 * Math.PI * 24;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <Icon ref={ref} {...rest}>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" strokeOpacity="0.25" />
      <circle 
        cx="32" 
        cy="32" 
        r="24" 
        stroke="currentColor" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 32 32)"
        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
      />
    </Icon>
  );
});
ProgressRing.displayName = 'ProgressRing';

// Bars Loading - Three bars animation
export const BarsLoader = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-bars' : ''}`} {...rest}>
      <rect className="onyx-bar-1" x="10" y="20" width="8" height="24" rx="2" fill="currentColor" />
      <rect className="onyx-bar-2" x="28" y="12" width="8" height="40" rx="2" fill="currentColor" />
      <rect className="onyx-bar-3" x="46" y="20" width="8" height="24" rx="2" fill="currentColor" />
    </Icon>
  );
});
BarsLoader.displayName = 'BarsLoader';

// Circular Dots - Rotating dots
export const CircularDotsLoader = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-spin' : ''}`} {...rest}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const x = 32 + 20 * Math.cos((angle * Math.PI) / 180);
        const y = 32 + 20 * Math.sin((angle * Math.PI) / 180);
        const opacity = 0.25 + (i * 0.75) / 8;
        return <circle key={angle} cx={x} cy={y} r="4" fill="currentColor" fillOpacity={opacity} />;
      })}
    </Icon>
  );
});
CircularDotsLoader.displayName = 'CircularDotsLoader';

// Hourglass - Classic loading indicator
export const Hourglass = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-flip' : ''}`} {...rest}>
      <path 
        d="M16 8H48V16L32 32L16 16V8ZM16 56H48V48L32 32L16 48V56Z" 
        stroke="currentColor" 
        strokeWidth="3"
        fill="none"
      />
      <rect x="16" y="8" width="32" height="4" fill="currentColor" />
      <rect x="16" y="52" width="32" height="4" fill="currentColor" />
    </Icon>
  );
});
Hourglass.displayName = 'Hourglass';

// Loading Circle - Simple rotating circle
export const LoadingCircle = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-spin' : ''}`} {...rest}>
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="40 120" />
    </Icon>
  );
});
LoadingCircle.displayName = 'LoadingCircle';

// Loading Square - Rotating square
export const LoadingSquare = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-spin' : ''}`} {...rest}>
      <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    </Icon>
  );
});
LoadingSquare.displayName = 'LoadingSquare';

// Loading Wave - Wave animation
export const LoadingWave = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ''} ${animate ? 'onyx-icon-wave' : ''}`} {...rest}>
      <path 
        className="onyx-wave-path"
        d="M8 40 Q 16 20, 24 40 T 40 40 T 56 40" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
      />
    </Icon>
  );
});
LoadingWave.displayName = 'LoadingWave';
