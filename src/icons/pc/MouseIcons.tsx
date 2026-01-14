import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

// Mouse Base Shape
const MouseShape = ({ variant = 'filled', highlight }: { variant?: 'filled' | 'outline'; highlight?: 'left' | 'right' | 'scroll' }) => (
  <>
    {/* Mouse body */}
    <path 
      d="M20 24C20 17.4 25.4 12 32 12C38.6 12 44 17.4 44 24V40C44 46.6 38.6 52 32 52C25.4 52 20 46.6 20 40V24Z" 
      fill={variant === 'outline' ? 'none' : 'currentColor'}
      stroke={variant === 'outline' ? 'currentColor' : 'none'}
      strokeWidth="2"
    />
    {/* Divider line */}
    <line x1="32" y1="12" x2="32" y2="28" stroke={variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="2" />
    {/* Left button highlight */}
    {highlight === 'left' && (
      <path d="M20 24C20 17.4 25.4 12 32 12V28H20V24Z" fill={variant === 'outline' ? 'currentColor' : '#1a1a1a'} fillOpacity="0.3" />
    )}
    {/* Right button highlight */}
    {highlight === 'right' && (
      <path d="M44 24C44 17.4 38.6 12 32 12V28H44V24Z" fill={variant === 'outline' ? 'currentColor' : '#1a1a1a'} fillOpacity="0.3" />
    )}
    {/* Scroll wheel */}
    <rect x="29" y="18" width="6" height="10" rx="3" fill={highlight === 'scroll' ? (variant === 'outline' ? 'currentColor' : '#1a1a1a') : 'none'} stroke={variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="1.5" />
  </>
);

export const Mouse = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} />
  </Icon>
));
Mouse.displayName = 'Mouse';

export const MouseLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} highlight="left" />
  </Icon>
));
MouseLeft.displayName = 'MouseLeft';

export const MouseRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} highlight="right" />
  </Icon>
));
MouseRight.displayName = 'MouseRight';

export const MouseScroll = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} highlight="scroll" />
  </Icon>
));
MouseScroll.displayName = 'MouseScroll';

export const MouseScrollUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} highlight="scroll" />
    <path d="M32 6L38 14H26L32 6Z" fill="currentColor" />
  </Icon>
));
MouseScrollUp.displayName = 'MouseScrollUp';

export const MouseScrollDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} highlight="scroll" />
    <path d="M32 58L26 50H38L32 58Z" fill="currentColor" />
  </Icon>
));
MouseScrollDown.displayName = 'MouseScrollDown';

export const MouseMove = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} />
    {/* Movement arrows */}
    <path d="M32 2L36 8H28L32 2Z" fill="currentColor" />
    <path d="M32 62L28 56H36L32 62Z" fill="currentColor" />
    <path d="M2 32L8 28V36L2 32Z" fill="currentColor" />
    <path d="M62 32L56 36V28L62 32Z" fill="currentColor" />
  </Icon>
));
MouseMove.displayName = 'MouseMove';

export const MouseHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} />
    <path d="M6 32L12 28V36L6 32Z" fill="currentColor" />
    <path d="M58 32L52 36V28L58 32Z" fill="currentColor" />
  </Icon>
));
MouseHorizontal.displayName = 'MouseHorizontal';

export const MouseVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <MouseShape variant={props.variant} />
    <path d="M32 2L36 8H28L32 2Z" fill="currentColor" />
    <path d="M32 62L28 56H36L32 62Z" fill="currentColor" />
  </Icon>
));
MouseVertical.displayName = 'MouseVertical';

export const MouseSmall = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M24 26C24 21.6 27.6 18 32 18C36.4 18 40 21.6 40 26V38C40 42.4 36.4 46 32 46C27.6 46 24 42.4 24 38V26Z" 
      fill={props.variant === 'outline' ? 'none' : 'currentColor'}
      stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
      strokeWidth="2"
    />
    <line x1="32" y1="18" x2="32" y2="28" stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="2" />
    <rect x="30" y="22" width="4" height="6" rx="2" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} />
  </Icon>
));
MouseSmall.displayName = 'MouseSmall';
