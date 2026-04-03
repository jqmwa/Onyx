import { forwardRef } from "react";
import { Icon, IconProps } from "./Icon";

export const Telegram = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path d="M32 6C17.6 6 6 17.6 6 32C6 46.4 17.6 58 32 58C46.4 58 58 46.4 58 32C58 17.6 46.4 6 32 6ZM45.5 22.5L41 45C40.7 46.5 39.8 46.9 38.5 46.2L31 40.8L27.4 44.3C27 44.7 26.7 45 26 45L26.5 37.3L40.2 24.9C40.8 24.4 40.1 24.1 39.3 24.6L22.3 35.2L14.9 32.9C13.4 32.4 13.4 31.4 15.2 30.6L43.6 20.3C44.9 19.8 46 20.5 45.5 22.5Z" fill="currentColor" />
  </Icon>
));
Telegram.displayName = "Telegram";

export const Discord = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path d="M52.1 14.4C48.4 12.7 44.5 11.4 40.4 10.6C39.9 11.5 39.3 12.7 38.9 13.7C34.5 13 30.2 13 25.9 13.7C25.5 12.7 24.9 11.5 24.4 10.6C20.3 11.4 16.4 12.7 12.7 14.4C5.6 25.3 3.8 35.9 4.7 46.4C9.6 50 14.3 52 18.9 53.3C20 51.8 21 50.2 21.8 48.4C20.1 47.8 18.5 47 17 46.1C17.4 45.8 17.8 45.5 18.2 45.2C27.2 49.4 37 49.4 45.9 45.2C46.3 45.5 46.7 45.8 47.1 46.1C45.6 47 44 47.8 42.3 48.4C43.1 50.2 44.1 51.8 45.2 53.3C49.8 52 54.5 50 59.4 46.4C60.5 34.2 57.5 23.7 52.1 14.4ZM23.2 39.8C20.5 39.8 18.3 37.3 18.3 34.3C18.3 31.3 20.4 28.8 23.2 28.8C26 28.8 28.2 31.3 28.1 34.3C28.1 37.3 26 39.8 23.2 39.8ZM40.9 39.8C38.2 39.8 36 37.3 36 34.3C36 31.3 38.1 28.8 40.9 28.8C43.7 28.8 45.9 31.3 45.8 34.3C45.8 37.3 43.7 39.8 40.9 39.8Z" fill="currentColor" />
  </Icon>
));
Discord.displayName = "Discord";

export const Twitter = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path d="M47.1 10H54.6L38 29.8L57.5 54H42.2L30.3 38.6L16.7 54H9.2L27 32.9L8.4 10H24.2L34.9 23.9L47.1 10ZM44.5 49.5H48.7L21.7 14.3H17.2L44.5 49.5Z" fill="currentColor" />
  </Icon>
));
Twitter.displayName = "Twitter";

export const GitHub = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path d="M32 6C17.6 6 6 17.6 6 32C6 43.5 13.4 53.3 23.6 56.8C24.9 57 25.4 56.2 25.4 55.5C25.4 54.9 25.4 53 25.4 50.5C18.2 52.1 16.7 47.3 16.7 47.3C15.5 44.3 13.8 43.5 13.8 43.5C11.4 41.9 14 41.9 14 41.9C16.7 42.1 18.1 44.7 18.1 44.7C20.5 48.9 24.4 47.7 25.5 47C25.7 45.2 26.4 44 27.2 43.5C21.6 43 15.7 40.9 15.7 30.6C15.7 27.7 16.7 25.3 18.2 23.5C17.9 22.9 17 20.2 18.4 16.5C18.4 16.5 20.7 15.9 25.4 19.3C27.5 18.8 29.8 18.5 32 18.5C34.2 18.5 36.5 18.8 38.6 19.3C43.3 15.8 45.6 16.5 45.6 16.5C47 20.2 46.1 22.9 45.8 23.5C47.3 25.4 48.3 27.8 48.3 30.6C48.3 41 42.4 43 36.7 43.5C37.7 44.3 38.6 45.9 38.6 48.4C38.6 52 38.5 54.9 38.5 55.5C38.5 56.2 39 57.1 40.4 56.8C50.6 53.3 58 43.5 58 32C58 17.6 46.4 6 32 6Z" fill="currentColor" />
  </Icon>
));
GitHub.displayName = "GitHub";

export const Email = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <rect x="6" y="14" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M6 18L32 36L58 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Icon>
));
Email.displayName = "Email";

export const Link = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path d="M26 38L38 26M20 32L16 36C12 40 12 47 16 51C20 55 27 55 31 51L35 47M29 17L33 13C37 9 44 9 48 13C52 17 52 24 48 28L44 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
  </Icon>
));
Link.displayName = "Link";
