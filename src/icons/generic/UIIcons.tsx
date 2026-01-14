import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

// Chevron Icons
export const ChevronUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M16 40L32 24L48 40" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ChevronUp.displayName = 'ChevronUp';

export const ChevronDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M16 24L32 40L48 24" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ChevronDown.displayName = 'ChevronDown';

export const ChevronLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M40 16L24 32L40 48" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ChevronLeft.displayName = 'ChevronLeft';

export const ChevronRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M24 16L40 32L24 48" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ChevronRight.displayName = 'ChevronRight';

// Arrow Icons
export const ArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 52V12M32 12L16 28M32 12L48 28" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ArrowUp.displayName = 'ArrowUp';

export const ArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 12V52M32 52L16 36M32 52L48 36" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ArrowDown.displayName = 'ArrowDown';

export const ArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M52 32H12M12 32L28 16M12 32L28 48" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ArrowLeft.displayName = 'ArrowLeft';

export const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M12 32H52M52 32L36 16M52 32L36 48" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
ArrowRight.displayName = 'ArrowRight';

// Close / X Icon
export const Close = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M16 16L48 48M48 16L16 48" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Close.displayName = 'Close';

// Check / Checkmark Icon
export const Check = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M12 32L26 46L52 18" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));
Check.displayName = 'Check';

// Plus Icon
export const Plus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 12V52M12 32H52" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Plus.displayName = 'Plus';

// Minus Icon
export const Minus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M12 32H52" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Minus.displayName = 'Minus';

// Menu / Hamburger Icon
export const Menu = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M10 18H54M10 32H54M10 46H54" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Menu.displayName = 'Menu';

// More / Dots Icon
export const MoreHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="16" cy="32" r="4" fill="currentColor" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <circle cx="48" cy="32" r="4" fill="currentColor" />
  </Icon>
));
MoreHorizontal.displayName = 'MoreHorizontal';

export const MoreVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="16" r="4" fill="currentColor" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <circle cx="32" cy="48" r="4" fill="currentColor" />
  </Icon>
));
MoreVertical.displayName = 'MoreVertical';

// Search Icon
export const Search = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M38 38L52 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
  </Icon>
));
Search.displayName = 'Search';

// Settings / Gear Icon
export const Settings = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
    <path 
      d="M32 8V14M32 50V56M56 32H50M14 32H8M49 15L44.5 19.5M19.5 44.5L15 49M49 49L44.5 44.5M19.5 19.5L15 15" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Settings.displayName = 'Settings';

// User Icon
export const User = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
    <path 
      d="M12 56C12 45 21 36 32 36C43 36 52 45 52 56" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
User.displayName = 'User';

// Volume Icons
export const VolumeOff = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M12 24H20L32 12V52L20 40H12V24Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
      fill={props.variant === 'filled' ? 'currentColor' : 'none'}
    />
    <path d="M44 24L56 36M56 24L44 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </Icon>
));
VolumeOff.displayName = 'VolumeOff';

export const VolumeLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M12 24H20L32 12V52L20 40H12V24Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
      fill={props.variant === 'filled' ? 'currentColor' : 'none'}
    />
    <path d="M40 26C44 30 44 38 40 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </Icon>
));
VolumeLow.displayName = 'VolumeLow';

export const VolumeHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M8 24H16L28 12V52L16 40H8V24Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
      fill={props.variant === 'filled' ? 'currentColor' : 'none'}
    />
    <path d="M36 26C40 30 40 38 36 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M44 18C52 26 52 42 44 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </Icon>
));
VolumeHigh.displayName = 'VolumeHigh';

// Play / Pause Icons
export const Play = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M16 10V54L52 32L16 10Z" 
      fill={props.variant === 'filled' ? 'currentColor' : 'none'}
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
    />
  </Icon>
));
Play.displayName = 'Play';

export const Pause = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="14" y="10" width="12" height="44" rx="2" fill={props.variant === 'filled' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="3" />
    <rect x="38" y="10" width="12" height="44" rx="2" fill={props.variant === 'filled' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="3" />
  </Icon>
));
Pause.displayName = 'Pause';

// Info Icon
export const Info = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M32 44V28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="20" r="3" fill="currentColor" />
  </Icon>
));
Info.displayName = 'Info';

// Warning Icon
export const Warning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 8L4 56H60L32 8Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M32 24V38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="47" r="3" fill="currentColor" />
  </Icon>
));
Warning.displayName = 'Warning';

// Error Icon
export const Error = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M22 22L42 42M42 22L22 42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
  </Icon>
));
Error.displayName = 'Error';

// Success Icon
export const Success = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Icon>
));
Success.displayName = 'Success';

// Eye Icons (Show/Hide)
export const Eye = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M4 32C4 32 14 12 32 12C50 12 60 32 60 32C60 32 50 52 32 52C14 52 4 32 4 32Z" 
      stroke="currentColor" 
      strokeWidth="3"
      fill="none"
    />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
  </Icon>
));
Eye.displayName = 'Eye';

export const EyeOff = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M4 32C4 32 14 12 32 12C50 12 60 32 60 32C60 32 50 52 32 52C14 52 4 32 4 32Z" 
      stroke="currentColor" 
      strokeWidth="3"
      fill="none"
    />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M8 56L56 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </Icon>
));
EyeOff.displayName = 'EyeOff';

// Lock Icons
export const Lock = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="14" y="28" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    <path 
      d="M20 28V20C20 13.4 25.4 8 32 8C38.6 8 44 13.4 44 20V28" 
      stroke="currentColor" 
      strokeWidth="3"
      fill="none"
    />
    <circle cx="32" cy="42" r="4" fill="currentColor" />
  </Icon>
));
Lock.displayName = 'Lock';

export const Unlock = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="14" y="28" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    <path 
      d="M20 28V20C20 13.4 25.4 8 32 8C38.6 8 44 13.4 44 20" 
      stroke="currentColor" 
      strokeWidth="3"
      fill="none"
    />
    <circle cx="32" cy="42" r="4" fill="currentColor" />
  </Icon>
));
Unlock.displayName = 'Unlock';
