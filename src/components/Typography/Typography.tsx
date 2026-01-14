import { forwardRef, HTMLAttributes, ElementType } from 'react';
import { cn } from '../../utils/classnames';
import './Typography.css';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'bodyBlock' | 'caption' | 'list' | 'listItem';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: TypographyVariant;
  /** Custom element type */
  as?: ElementType;
  /** RTL direction */
  rtl?: boolean;
  /** For list variant: 'bulleted' | 'numbered' */
  listStyle?: 'bulleted' | 'numbered';
  /** Additional CSS class */
  className?: string;
}

const variantElementMap: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'p',
  bodyBlock: 'div',
  caption: 'span',
  list: 'ul',
  listItem: 'li',
};

/**
 * Typography Component
 * 
 * Text components with consistent styling.
 * Variants: H1, H2, H3, H4, Body, BodySmall, BodyBlock, Caption, List, ListItem
 * Supports RTL
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', as, rtl = false, listStyle, className, children, ...props }, ref) => {
    const Component = as ?? variantElementMap[variant];

    return (
      <Component
        ref={ref}
        className={cn(
          'onyx-typography',
          `onyx-typography--${variant}`,
          variant === 'list' && listStyle && `onyx-typography--list-${listStyle}`,
          rtl && 'onyx-typography--rtl',
          className
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

// Convenience exports
export const H1 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h1" {...props} />
));
H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h2" {...props} />
));
H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h3" {...props} />
));
H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h4" {...props} />
));
H4.displayName = 'H4';

export const Body = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body" {...props} />
));
Body.displayName = 'Body';

export const BodySmall = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="bodySmall" {...props} />
));
BodySmall.displayName = 'BodySmall';

export const Caption = forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="caption" {...props} />
));
Caption.displayName = 'Caption';

export const BodyBlock = forwardRef<HTMLDivElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="bodyBlock" {...props} />
));
BodyBlock.displayName = 'BodyBlock';

export const List = forwardRef<HTMLUListElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="list" {...props} />
));
List.displayName = 'List';

export const ListItem = forwardRef<HTMLLIElement, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="listItem" {...props} />
));
ListItem.displayName = 'ListItem';

export default Typography;
