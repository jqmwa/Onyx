import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

/** Base keyboard key shape component */
const KeyBase = ({ children, variant = 'filled' }: { children?: React.ReactNode; variant?: 'filled' | 'outline' }) => (
  <>
    {variant === 'filled' ? (
      <rect x="4" y="4" width="56" height="56" rx="8" fill="currentColor" />
    ) : (
      <rect x="5" y="5" width="54" height="54" rx="7" stroke="currentColor" strokeWidth="2" fill="none" />
    )}
    {children}
  </>
);

// Function Key Icons (F1-F12)
export const KeyF1 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F1</text>
    </KeyBase>
  </Icon>
));
KeyF1.displayName = 'KeyF1';

export const KeyF2 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F2</text>
    </KeyBase>
  </Icon>
));
KeyF2.displayName = 'KeyF2';

export const KeyF3 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F3</text>
    </KeyBase>
  </Icon>
));
KeyF3.displayName = 'KeyF3';

export const KeyF4 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F4</text>
    </KeyBase>
  </Icon>
));
KeyF4.displayName = 'KeyF4';

export const KeyF5 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F5</text>
    </KeyBase>
  </Icon>
));
KeyF5.displayName = 'KeyF5';

export const KeyF6 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F6</text>
    </KeyBase>
  </Icon>
));
KeyF6.displayName = 'KeyF6';

export const KeyF7 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F7</text>
    </KeyBase>
  </Icon>
));
KeyF7.displayName = 'KeyF7';

export const KeyF8 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F8</text>
    </KeyBase>
  </Icon>
));
KeyF8.displayName = 'KeyF8';

export const KeyF9 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F9</text>
    </KeyBase>
  </Icon>
));
KeyF9.displayName = 'KeyF9';

export const KeyF10 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="16" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F10</text>
    </KeyBase>
  </Icon>
));
KeyF10.displayName = 'KeyF10';

export const KeyF11 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="16" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F11</text>
    </KeyBase>
  </Icon>
));
KeyF11.displayName = 'KeyF11';

export const KeyF12 = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="16" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>F12</text>
    </KeyBase>
  </Icon>
));
KeyF12.displayName = 'KeyF12';

// Letter Key Generator
const createLetterKey = (letter: string) => {
  const Component = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon ref={ref} {...props}>
      <KeyBase variant={props.variant}>
        <text x="32" y="42" textAnchor="middle" fontSize="24" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>{letter}</text>
      </KeyBase>
    </Icon>
  ));
  Component.displayName = `Key${letter}`;
  return Component;
};

// Letter Keys (A-Z)
export const KeyA = createLetterKey('A');
export const KeyB = createLetterKey('B');
export const KeyC = createLetterKey('C');
export const KeyD = createLetterKey('D');
export const KeyE = createLetterKey('E');
export const KeyF = createLetterKey('F');
export const KeyG = createLetterKey('G');
export const KeyH = createLetterKey('H');
export const KeyI = createLetterKey('I');
export const KeyJ = createLetterKey('J');
export const KeyK = createLetterKey('K');
export const KeyL = createLetterKey('L');
export const KeyM = createLetterKey('M');
export const KeyN = createLetterKey('N');
export const KeyO = createLetterKey('O');
export const KeyP = createLetterKey('P');
export const KeyQ = createLetterKey('Q');
export const KeyR = createLetterKey('R');
export const KeyS = createLetterKey('S');
export const KeyT = createLetterKey('T');
export const KeyU = createLetterKey('U');
export const KeyV = createLetterKey('V');
export const KeyW = createLetterKey('W');
export const KeyX = createLetterKey('X');
export const KeyY = createLetterKey('Y');
export const KeyZ = createLetterKey('Z');

// Number Keys (0-9)
export const Key0 = createLetterKey('0');
export const Key1 = createLetterKey('1');
export const Key2 = createLetterKey('2');
export const Key3 = createLetterKey('3');
export const Key4 = createLetterKey('4');
export const Key5 = createLetterKey('5');
export const Key6 = createLetterKey('6');
export const Key7 = createLetterKey('7');
export const Key8 = createLetterKey('8');
export const Key9 = createLetterKey('9');

// Special Keys
export const KeyEscape = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>ESC</text>
    </KeyBase>
  </Icon>
));
KeyEscape.displayName = 'KeyEscape';

export const KeyTab = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>TAB</text>
    </KeyBase>
  </Icon>
));
KeyTab.displayName = 'KeyTab';

export const KeyCapsLock = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>CAPS</text>
    </KeyBase>
  </Icon>
));
KeyCapsLock.displayName = 'KeyCapsLock';

export const KeyShift = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M32 18L44 34H38V46H26V34H20L32 18Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'} 
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyShift.displayName = 'KeyShift';

export const KeyCtrl = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="12" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>CTRL</text>
    </KeyBase>
  </Icon>
));
KeyCtrl.displayName = 'KeyCtrl';

export const KeyAlt = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>ALT</text>
    </KeyBase>
  </Icon>
));
KeyAlt.displayName = 'KeyAlt';

export const KeySpace = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <rect x="16" y="30" width="32" height="4" rx="2" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} />
    </KeyBase>
  </Icon>
));
KeySpace.displayName = 'KeySpace';

export const KeyEnter = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M44 22V32H24L30 26M24 32L30 38" 
        stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </KeyBase>
  </Icon>
));
KeyEnter.displayName = 'KeyEnter';

export const KeyBackspace = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M44 32H24M24 32L32 24M24 32L32 40" 
        stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </KeyBase>
  </Icon>
));
KeyBackspace.displayName = 'KeyBackspace';

export const KeyDelete = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <text x="32" y="40" textAnchor="middle" fontSize="12" fontWeight="600" fill={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'}>DEL</text>
    </KeyBase>
  </Icon>
));
KeyDelete.displayName = 'KeyDelete';

// Arrow Keys
export const KeyArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M32 20L44 40H20L32 20Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyArrowUp.displayName = 'KeyArrowUp';

export const KeyArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M32 44L20 24H44L32 44Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyArrowDown.displayName = 'KeyArrowDown';

export const KeyArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M20 32L40 20V44L20 32Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyArrowLeft.displayName = 'KeyArrowLeft';

export const KeyArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M44 32L24 44V20L44 32Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyArrowRight.displayName = 'KeyArrowRight';

// Modifier Keys
export const KeyCommand = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M24 28H28V24C28 21.8 26.2 20 24 20C21.8 20 20 21.8 20 24C20 26.2 21.8 28 24 28ZM40 28C42.2 28 44 26.2 44 24C44 21.8 42.2 20 40 20C37.8 20 36 21.8 36 24V28H40ZM24 44C21.8 44 20 42.2 20 40C20 37.8 21.8 36 24 36H28V40C28 42.2 26.2 44 24 44ZM36 36V40C36 42.2 37.8 44 40 44C42.2 44 44 42.2 44 40C44 37.8 42.2 36 40 36H36ZM28 28H36V36H28V28Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="2"
      />
    </KeyBase>
  </Icon>
));
KeyCommand.displayName = 'KeyCommand';

export const KeyOption = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M20 26H28L36 38H44M36 26H44" 
        stroke={props.variant === 'outline' ? 'currentColor' : '#1a1a1a'} 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
    </KeyBase>
  </Icon>
));
KeyOption.displayName = 'KeyOption';

export const KeyWin = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    <KeyBase variant={props.variant}>
      <path 
        d="M18 22L30 20V30H18V22ZM32 20L46 18V30H32V20ZM18 32H30V42L18 44V32ZM32 32H46V46L32 44V32Z" 
        fill={props.variant === 'outline' ? 'none' : '#1a1a1a'}
        stroke={props.variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth="1.5"
      />
    </KeyBase>
  </Icon>
));
KeyWin.displayName = 'KeyWin';
