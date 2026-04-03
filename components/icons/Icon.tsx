import { CSSProperties, forwardRef, SVGAttributes } from "react";

export type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";
export type IconVariant = "filled" | "outline";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  variant?: IconVariant;
  color?: string;
  customSize?: number;
  className?: string;
}

const sizeMap: Record<IconSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  "2xl": 64,
};

export const Icon = forwardRef<
  SVGSVGElement,
  IconProps & { children: React.ReactNode }
>(
  (
    {
      size = "md",
      variant = "filled",
      color,
      customSize,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const pixelSize = customSize ?? sizeMap[size];

    const combinedStyle: CSSProperties = {
      ...style,
      color: color ?? "currentColor",
    };

    return (
      <svg
        ref={ref}
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${className ?? ""}`}
        style={combinedStyle}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";
export default Icon;
