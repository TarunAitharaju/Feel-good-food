# Annam

> Home food, made simple.

A hyperlocal home-cook meal subscription marketplace for DFW, Texas. Customers subscribe to a **network** of home cooks and get daily variety — not a single-cook dependency.

## Quick Start

```bash
npm install
npm run dev
```

## Tech Stack

- **Build:** Vite
- **Framework:** React 18
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Routing:** react-router-dom
- **Icons:** lucide-react

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Nav.tsx             # Frosted glass navigation
│   ├── Hero.tsx            # Landing hero with glass panel
│   ├── HowItWorks.tsx      # 3-step explainer
│   ├── MealCard.tsx        # Individual meal card
│   ├── WeeklyMenu.tsx      # Mon-Fri menu grid
│   ├── PricingSection.tsx  # Tier cards
│   ├── WaitlistSignup.tsx  # Email + zip capture
│   ├── CustomerDashboard.tsx
│   ├── PickupScreen.tsx    # 4-digit code display
│   └── Footer.tsx
├── pages/          # Route-level page compositions
├── data/           # Mock data (menu, pricing)
├── lib/            # Utilities
└── index.css       # Design tokens, glass utilities, ambient backgrounds
```

## Design System

- **Palette:** Verdant green primary (#346739), cream backgrounds, gold accents
- **Surfaces:** Frosted glass with backdrop-blur, translucent cards
- **Typography:** Fraunces (display) + DM Sans (body) + Tiro Telugu (dish names)
- **Texture:** Film grain noise overlay, radial ambient gradients
- **Shapes:** Pill buttons, 20px card radii, 28px large cards

## Anti-Leakage by Design

- No cook contact info exposed in any UI
- Network subscriptions only (no single-cook booking)
- In-app messaging only (no direct contact)
- Pickup via 4-digit code (no address exchange)
- Cook names are attribution-only, never selectable entities

## Phase 0

Current goal: 30 email signups from Richardson 75080/75081 before building backend.
