import { forwardRef } from "react";
import { Icon, IconProps } from "./Icon";

export const Spinner = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ""} ${animate ? "icon-spin" : ""}`} {...rest}>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" strokeOpacity="0.25" />
      <path d="M32 8A24 24 0 0 1 56 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    </Icon>
  );
});
Spinner.displayName = "Spinner";

export const DotsLoader = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={className} {...rest}>
      <circle className={animate ? "icon-dots-1" : ""} cx="12" cy="32" r="6" fill="currentColor" />
      <circle className={animate ? "icon-dots-2" : ""} cx="32" cy="32" r="6" fill="currentColor" />
      <circle className={animate ? "icon-dots-3" : ""} cx="52" cy="32" r="6" fill="currentColor" />
    </Icon>
  );
});
DotsLoader.displayName = "DotsLoader";

export interface ProgressRingProps extends IconProps {
  progress?: number;
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
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
    </Icon>
  );
});
ProgressRing.displayName = "ProgressRing";

export const Hourglass = forwardRef<SVGSVGElement, IconProps & { animate?: boolean }>((props, ref) => {
  const { animate = true, className, ...rest } = props;
  return (
    <Icon ref={ref} className={`${className ?? ""} ${animate ? "icon-flip" : ""}`} {...rest}>
      <path d="M16 8H48V16L32 32L16 16V8ZM16 56H48V48L32 32L16 48V56Z" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="16" y="8" width="32" height="4" fill="currentColor" />
      <rect x="16" y="52" width="32" height="4" fill="currentColor" />
    </Icon>
  );
});
Hourglass.displayName = "Hourglass";
