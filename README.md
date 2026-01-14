# Autocrat Game UI

A comprehensive React component library for game interfaces, based on the Game UI Wireframe Kit from Figma.

## Features

- 🎮 **Game-specific components** - Crosshairs, Minimap, Healthbar, AmmoCounter, PlayerList
- 🧩 **Core UI components** - Buttons, Toggles, Inputs, Dropdowns, Tables, Calendars
- 🎨 **Design tokens** - Colors, Typography, Spacing all extracted from the design system
- 🌐 **RTL support** - Full right-to-left text direction support
- ⌨️ **Icon library** - PC keyboard, mouse, UI, loading, and social icons
- 📱 **Responsive** - Components adapt to different screen sizes

## Installation

```bash
npm install @autocrat/game-ui
```

## Quick Start

```tsx
import { Button, Toggle, Healthbar, Crosshairs } from '@autocrat/game-ui';
import '@autocrat/game-ui/dist/index.css';

function App() {
  return (
    <div>
      <Button variant="primary">Play Now</Button>
      <Toggle checked={true} />
      <Healthbar value={75} showValue />
      <Crosshairs variant="style1" />
    </div>
  );
}
```

## Components

### UI Components

| Component | Description | States/Variants |
|-----------|-------------|-----------------|
| `Button` | Action buttons | Primary, Outline, Prompt |
| `Toggle` | Switch control | On, Off, Disabled |
| `Checkbox` | Checkbox input | Checked, Unchecked, Disabled |
| `Select` | Radio button | On, Off, Disabled |
| `TextInput` | Text field | Default, Error, Disabled |
| `Dropdown` | Select dropdown | Closed, Open, Disabled |
| `Slider` | Range slider | 0-100% |
| `ProgressBar` | Progress indicator | 0-100% |
| `Scrollbar` | Custom scrollbar | Horizontal, Vertical |
| `MenuItem` | Menu item | Focus, Unfocused, Disabled |
| `MenuBar` | Menu container | - |
| `Table` | Data table | Sortable headers |
| `Tag` | Label/tag | Square, Rounded, Outlined |
| `Calendar` | Date picker | Light, Dark |
| `Pagination` | Page dots | Active, Inactive |
| `AudioPlayer` | Audio controls | Play, Pause |
| `Typography` | Text styles | H1-H4, Body, Caption |

### Game UI Components

| Component | Description |
|-----------|-------------|
| `Healthbar` | HP indicator with color states |
| `AmmoCounter` | Ammo display (current/max) |
| `Grenades` | Visual grenade count |
| `Minimap` | Game minimap with compass |
| `Crosshairs` | 5 aiming crosshair styles |
| `Cursor` | Custom cursor icons |
| `PlayerList` | Voice chat player list |

### Icons

```tsx
// PC Keyboard keys
import { KeyW, KeyA, KeyS, KeyD, KeySpace, KeyShift } from '@onyx/game-ui';

// Mouse icons
import { Mouse, MouseLeft, MouseRight, MouseScroll } from '@onyx/game-ui';

// UI icons
import { ChevronUp, Check, Close, Search, Settings } from '@onyx/game-ui';

// Loading icons
import { Spinner, DotsLoader, PulseLoader, ProgressRing } from '@onyx/game-ui';

// Social icons
import { Discord, Twitter, YouTube, GitHub, Steam } from '@onyx/game-ui';
```

## Design Tokens

Access design tokens for consistent styling:

```tsx
import { colors, typography, spacing } from '@onyx/game-ui';

// Colors
colors.grey[50]  // #8b8b8b
colors.primary.white  // #ffffff

// Typography
typography.h1.fontSize  // 36px
typography.body.lineHeight  // 1.5

// Spacing
spacing[4]  // 16px
```

## RTL Support

All components support RTL text direction:

```tsx
<Button rtl>تسمية</Button>
<TextInput rtl placeholder="أدخل النص" />
<Calendar rtl theme="dark" />
```

## Theming

Components use CSS custom properties for easy theming:

```css
:root {
  --color-grey-80: #434343;
  --color-primary-white: #ffffff;
  --font-family-primary: 'Inter', sans-serif;
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run typecheck

# Build library
npm run build
```

## License

MIT
