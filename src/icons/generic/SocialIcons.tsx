import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

// Telegram Icon
export const Telegram = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 6C17.6 6 6 17.6 6 32C6 46.4 17.6 58 32 58C46.4 58 58 46.4 58 32C58 17.6 46.4 6 32 6ZM45.5 22.5L41 45C40.7 46.5 39.8 46.9 38.5 46.2L31 40.8L27.4 44.3C27 44.7 26.7 45 26 45L26.5 37.3L40.2 24.9C40.8 24.4 40.1 24.1 39.3 24.6L22.3 35.2L14.9 32.9C13.4 32.4 13.4 31.4 15.2 30.6L43.6 20.3C44.9 19.8 46 20.5 45.5 22.5Z" 
      fill="currentColor"
    />
  </Icon>
));
Telegram.displayName = 'Telegram';

// Discord Icon
export const Discord = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M52.1 14.4C48.4 12.7 44.5 11.4 40.4 10.6C39.9 11.5 39.3 12.7 38.9 13.7C34.5 13 30.2 13 25.9 13.7C25.5 12.7 24.9 11.5 24.4 10.6C20.3 11.4 16.4 12.7 12.7 14.4C5.6 25.3 3.8 35.9 4.7 46.4C9.6 50 14.3 52 18.9 53.3C20 51.8 21 50.2 21.8 48.4C20.1 47.8 18.5 47 17 46.1C17.4 45.8 17.8 45.5 18.2 45.2C27.2 49.4 37 49.4 45.9 45.2C46.3 45.5 46.7 45.8 47.1 46.1C45.6 47 44 47.8 42.3 48.4C43.1 50.2 44.1 51.8 45.2 53.3C49.8 52 54.5 50 59.4 46.4C60.5 34.2 57.5 23.7 52.1 14.4ZM23.2 39.8C20.5 39.8 18.3 37.3 18.3 34.3C18.3 31.3 20.4 28.8 23.2 28.8C26 28.8 28.2 31.3 28.1 34.3C28.1 37.3 26 39.8 23.2 39.8ZM40.9 39.8C38.2 39.8 36 37.3 36 34.3C36 31.3 38.1 28.8 40.9 28.8C43.7 28.8 45.9 31.3 45.8 34.3C45.8 37.3 43.7 39.8 40.9 39.8Z" 
      fill="currentColor"
    />
  </Icon>
));
Discord.displayName = 'Discord';

// Twitter / X Icon
export const Twitter = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M47.1 10H54.6L38 29.8L57.5 54H42.2L30.3 38.6L16.7 54H9.2L27 32.9L8.4 10H24.2L34.9 23.9L47.1 10ZM44.5 49.5H48.7L21.7 14.3H17.2L44.5 49.5Z" 
      fill="currentColor"
    />
  </Icon>
));
Twitter.displayName = 'Twitter';

// YouTube Icon
export const YouTube = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M56.3 18.7C55.6 16 53.4 13.9 50.7 13.2C46 12 32 12 32 12C32 12 18 12 13.3 13.2C10.6 13.9 8.4 16 7.7 18.7C6.5 23.4 6.5 33 6.5 33C6.5 33 6.5 42.6 7.7 47.3C8.4 50 10.6 52.1 13.3 52.8C18 54 32 54 32 54C32 54 46 54 50.7 52.8C53.4 52.1 55.6 50 56.3 47.3C57.5 42.6 57.5 33 57.5 33C57.5 33 57.5 23.4 56.3 18.7Z" 
      fill="currentColor"
    />
    <path d="M26.5 42L41.5 33L26.5 24V42Z" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} />
  </Icon>
));
YouTube.displayName = 'YouTube';

// Twitch Icon
export const Twitch = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M11 6L6 16V52H18V58H24L30 52H40L54 38V6H11ZM50 36L42 44H30L24 50V44H14V10H50V36Z" 
      fill="currentColor"
    />
    <rect x="26" y="18" width="6" height="16" fill={props.variant === 'outline' ? 'none' : '#1a1a1a'} stroke={props.variant === 'outline' ? 'currentColor' : 'none'} strokeWidth="2" />
    <rect x="38" y="18" width="6" height="16" fill={props.variant === 'outline' ? 'none' : '#1a1a1a'} stroke={props.variant === 'outline' ? 'currentColor' : 'none'} strokeWidth="2" />
  </Icon>
));
Twitch.displayName = 'Twitch';

// Steam Icon
export const Steam = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 6C17.6 6 6 17.1 6 31C6 34.8 6.8 38.4 8.3 41.6L20.5 36.4C21.1 34 22.8 32 25.1 31L31 20.3C31 13.5 36.5 8 43.3 8C50.1 8 55.6 13.5 55.6 20.3C55.6 27.1 50.1 32.6 43.3 32.6H42.4L33.5 41.9V42.5C33.5 47.5 29.5 51.5 24.5 51.5C20.2 51.5 16.7 48.6 15.7 44.6L7.7 48C11.6 53.7 21.3 58 32 58C46.4 58 58 46.4 58 32C58 17.6 46.4 6 32 6Z" 
      fill="currentColor"
    />
    <circle cx="43" cy="20" r="7" fill="none" stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="3" />
    <circle cx="24" cy="42" r="5" fill="none" stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="2" />
  </Icon>
));
Steam.displayName = 'Steam';

// GitHub Icon
export const GitHub = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M32 6C17.6 6 6 17.6 6 32C6 43.5 13.4 53.3 23.6 56.8C24.9 57 25.4 56.2 25.4 55.5C25.4 54.9 25.4 53 25.4 50.5C18.2 52.1 16.7 47.3 16.7 47.3C15.5 44.3 13.8 43.5 13.8 43.5C11.4 41.9 14 41.9 14 41.9C16.7 42.1 18.1 44.7 18.1 44.7C20.5 48.9 24.4 47.7 25.5 47C25.7 45.2 26.4 44 27.2 43.5C21.6 43 15.7 40.9 15.7 30.6C15.7 27.7 16.7 25.3 18.2 23.5C17.9 22.9 17 20.2 18.4 16.5C18.4 16.5 20.7 15.9 25.4 19.3C27.5 18.8 29.8 18.5 32 18.5C34.2 18.5 36.5 18.8 38.6 19.3C43.3 15.8 45.6 16.5 45.6 16.5C47 20.2 46.1 22.9 45.8 23.5C47.3 25.4 48.3 27.8 48.3 30.6C48.3 41 42.4 43 36.7 43.5C37.7 44.3 38.6 45.9 38.6 48.4C38.6 52 38.5 54.9 38.5 55.5C38.5 56.2 39 57.1 40.4 56.8C50.6 53.3 58 43.5 58 32C58 17.6 46.4 6 32 6Z" 
      fill="currentColor"
    />
  </Icon>
));
GitHub.displayName = 'GitHub';

// Reddit Icon
export const Reddit = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="32" cy="36" r="22" fill="currentColor" />
    <circle cx="22" cy="32" r="4" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} />
    <circle cx="42" cy="32" r="4" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} />
    <path d="M24 42C28 46 36 46 40 42" stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="48" cy="18" r="6" fill="currentColor" />
    <path d="M36 14L48 14" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="36" cy="14" r="2" fill="currentColor" />
  </Icon>
));
Reddit.displayName = 'Reddit';

// Instagram Icon
export const Instagram = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="14" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="48" cy="16" r="4" fill="currentColor" />
  </Icon>
));
Instagram.displayName = 'Instagram';

// Facebook Icon
export const Facebook = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M58 32C58 17.6 46.4 6 32 6C17.6 6 6 17.6 6 32C6 44.9 15.1 55.7 27 57.6V40H20V32H27V26C27 19.4 31.1 15.5 37.1 15.5C40 15.5 43 16 43 16V22.5H39.7C36.4 22.5 35.4 24.5 35.4 26.6V32H42.7L41.5 40H35.4V57.6C47.3 55.7 58 44.9 58 32Z" 
      fill="currentColor"
    />
  </Icon>
));
Facebook.displayName = 'Facebook';

// LinkedIn Icon
export const LinkedIn = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <rect x="16" y="28" width="8" height="24" fill="currentColor" />
    <path d="M30 28V52H38V40C38 36 40 34 44 34C48 34 48 38 48 40V52H56V38C56 30 52 28 46 28C42 28 40 30 38 32V28H30Z" fill="currentColor" />
  </Icon>
));
LinkedIn.displayName = 'LinkedIn';

// TikTok Icon
export const TikTok = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M42 6V38C42 44.6 36.6 50 30 50C23.4 50 18 44.6 18 38C18 31.4 23.4 26 30 26V18C19 18 10 27 10 38C10 49 19 58 30 58C41 58 50 49 50 38V22C53 24 57 26 62 26V18C52 18 46 12 42 6Z" 
      fill="currentColor"
    />
  </Icon>
));
TikTok.displayName = 'TikTok';

// Email / Mail Icon
export const Email = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="6" y="14" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M6 18L32 36L58 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Icon>
));
Email.displayName = 'Email';

// Share Icon
export const Share = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <circle cx="48" cy="16" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="16" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M23 28L41 20M23 36L41 44" stroke="currentColor" strokeWidth="3" fill="none" />
  </Icon>
));
Share.displayName = 'Share';

// Link Icon
export const Link = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path 
      d="M26 38L38 26M20 32L16 36C12 40 12 47 16 51C20 55 27 55 31 51L35 47M29 17L33 13C37 9 44 9 48 13C52 17 52 24 48 28L44 32" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));
Link.displayName = 'Link';
