/**
 * Design Tokens - Colors
 * Extracted from Game UI Wireframe Kit
 */

export const colors = {
  // Primary colors
  primary: {
    white: '#ffffff',
    black: '#000000',
  },

  // Grey scale
  grey: {
    10: '#e8e8e8',
    20: '#d4d4d4',
    30: '#cbcbcb',
    40: '#a3a3a3',
    50: '#8b8b8b',
    60: '#6f6f6f',
    70: '#575757',
    80: '#434343',
    90: '#2b2b2b',
    100: '#1a1a1a',
  },

  // Semantic colors
  dark: {
    primary: '#1a1a1a',
    secondary: '#7b7b7b',
  },

  // State colors
  state: {
    error: '#e53935',
    success: '#43a047',
    warning: '#fb8c00',
    info: '#1e88e5',
  },

  // Transparent variants
  transparent: {
    white10: 'rgba(255, 255, 255, 0.1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    white50: 'rgba(255, 255, 255, 0.5)',
    black10: 'rgba(0, 0, 0, 0.1)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black50: 'rgba(0, 0, 0, 0.5)',
  },
} as const;

export type ColorToken = typeof colors;
