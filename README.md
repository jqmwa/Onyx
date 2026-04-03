# Onyx

Agent builder with a grey-palette design system. Build and configure autonomous agents through a multi-step wizard interface.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Geist + Departure Mono fonts
- SVG icon system (64x64 viewBox)

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design System

Warm grey palette extracted from reference UI:

| Token | Hex | Usage |
|-------|-----|-------|
| `onyx-bg` | `#F5F3EE` | Page background |
| `onyx-surface` | `#FFFFFF` | Cards, panels |
| `onyx-surface-dark` | `#2A2926` | Stepper bar, dark UI |
| `onyx-border` | `#E5E2DB` | Default borders |
| `onyx-text-primary` | `#1A1917` | Primary text |
| `onyx-text-secondary` | `#6B6966` | Secondary text |
| `onyx-text-muted` | `#9C9990` | Labels, hints |
| `onyx-complete` | `#4A7A50` | Success/complete state |

Fonts: Geist Sans (body) + Departure Mono (labels, code, monospace elements).

## Icon System

Inline SVG React components with consistent 64x64 viewBox. Supports `size` presets (sm/md/lg/xl/2xl), `variant` (filled/outline), and custom sizing.

```tsx
import { Bot, Check, ArrowRight } from "@/components/icons";

<Bot size="lg" />
<Check size="sm" className="text-onyx-complete" />
```
