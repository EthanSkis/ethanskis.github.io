# FlowState AI — Marketing Website

A high-conversion marketing site for an AI automation agency targeting coaches and consultants. Built with React + TypeScript + Tailwind CSS v4. Designed with an Apple-inspired minimal aesthetic.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (Vite plugin) |
| Build tool | Vite 8 |
| Icons | Lucide React |
| Scheduling | Calendly inline widget |
| Notifications | Telegram Bot API |
| Deployment | GitHub Pages via GitHub Actions |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

See [Telegram Setup](#telegram-setup) for how to get these values.

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## Project Structure

```
src/
├── App.tsx                        # Root component — section order lives here
├── index.css                      # Global styles and fade-in-up animation
├── main.tsx                       # React entry point
│
├── components/
│   ├── layout/
│   │   ├── Container.tsx          # Responsive max-width wrapper
│   │   ├── Header.tsx             # Sticky nav with blur-on-scroll
│   │   └── Footer.tsx             # Minimal footer with link groups
│   │
│   ├── sections/                  # One file per page section (top → bottom)
│   │   ├── Hero.tsx               # Above-the-fold: headline, CTAs, dashboard mockup
│   │   ├── Problem.tsx            # Pain point stats (20hrs, 48hr delay, $120K)
│   │   ├── Solution.tsx           # Three core service offerings
│   │   ├── HowItWorks.tsx         # 4-step process with timelines
│   │   ├── Pricing.tsx            # Three pricing tiers with ROI notes
│   │   ├── Testimonials.tsx       # Client results with metrics
│   │   ├── Demo.tsx               # Video placeholder with highlights
│   │   ├── FAQ.tsx                # Accordion FAQ
│   │   ├── Booking.tsx            # Calendly inline embed + scarcity signal
│   │   ├── CTA.tsx                # Full-width dark CTA with scarcity
│   │   └── Contact.tsx            # Contact form → Telegram notification
│   │
│   └── ui/
│       ├── Button.tsx             # Primary / secondary / ghost variants
│       ├── Card.tsx               # Minimal bordered card primitives
│       ├── Accordion.tsx          # Accessible expand/collapse
│       ├── Input.tsx              # Input, Textarea, Select components
│       └── CalendlyEmbed.tsx      # Calendly inline widget wrapper
│
├── hooks/
│   └── useScrollAnimation.ts      # IntersectionObserver for fade-in-up
│
└── lib/
    ├── telegram.ts                # Sends Telegram notification on form submit
    └── utils.ts                   # cn() class merge helper
```

---

## Page Sections

Sections render in this order (controlled in `src/App.tsx`):

| Order | Section | ID | Purpose |
|-------|---------|-----|---------|
| 1 | Hero | — | Headline, CTAs, live dashboard mockup |
| 2 | Problem | `#problem` | Quantified pain points to build urgency |
| 3 | Solution | `#services` | Three core automation services |
| 4 | How It Works | `#how-it-works` | 4-step process from call to launch |
| 5 | Pricing | `#pricing` | Three tiers with ROI notes + guarantee |
| 6 | Testimonials | `#testimonials` | Client results with metrics |
| 7 | Demo | `#demo` | Video walkthrough placeholder |
| 8 | FAQ | `#faq` | Accordion answers to common objections |
| 9 | Booking | `#booking` | Calendly inline embed |
| 10 | CTA | `#cta` | Dark section with scarcity signal |
| 11 | Contact | `#contact` | Form with Telegram notification |

---

## Calendly Integration

The booking widget lives in `src/components/ui/CalendlyEmbed.tsx`.

**Current link:** `https://calendly.com/ethangardner298/30min`

To change the scheduling link, update the `url` constant in that file.

**Widget colors** are passed as props and default to match the Apple-minimal design:

```tsx
<CalendlyEmbed
  bgColor="ffffff"       // widget background (hex, no #)
  textColor="1d1d1f"    // body text
  primaryColor="1d1d1f" // buttons and links
/>
```

Colors are hex values **without** the `#` prefix (Calendly URL param format).

---

## Telegram Setup

When a visitor submits the contact form, a formatted message is sent to your Telegram via a bot.

### Creating a bot
1. Open Telegram → search **@BotFather**
2. Send `/newbot` and follow the prompts
3. Copy the **bot token** you receive

### Getting your chat ID
1. Open your bot on Telegram and press **Start**
2. Send any message to the bot
3. Visit `https://api.telegram.org/bot{YOUR_TOKEN}/getUpdates`
4. Your numeric `chat.id` is in the response JSON

### Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `VITE_TELEGRAM_CHAT_ID` | Your numeric Telegram user ID |

Set these in `.env.local` for local development. This file is gitignored and should **never be committed**.

### GitHub Actions deployment

For CI/CD builds that deploy to GitHub Pages, add both variables as repository secrets:

1. Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
2. Add `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID`
3. Reference them in your workflow file:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_TELEGRAM_BOT_TOKEN: ${{ secrets.VITE_TELEGRAM_BOT_TOKEN }}
    VITE_TELEGRAM_CHAT_ID: ${{ secrets.VITE_TELEGRAM_CHAT_ID }}
```

### Notification format

Each form submission sends a message like:

```
New contact form submission

Name: Sarah Kim
Email: sarah@example.com
Business type: Business Coach
Message: I spend most of my time on follow-up emails...
```

The notification logic is in `src/lib/telegram.ts`.

---

## Design System

The design follows Apple's minimal aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| Primary text | `#1d1d1f` | Headlines, body |
| Secondary text | `#6e6e73` | Subheadings, descriptions |
| Tertiary text | `#86868b` | Captions, metadata |
| Light bg | `#f5f5f7` | Alternate section backgrounds |
| White | `#ffffff` | Cards, primary sections |
| Border | `#d2d2d7` | Card borders, dividers |
| Dark section | `#1d1d1f` | CTA section background |
| Success | `#34c759` | Live/active indicators |

**Font stack:** `-apple-system, 'SF Pro Display', 'Inter', system-ui, sans-serif`

**Button variants** (all `rounded-full`):
- `primary` — black fill, white text
- `secondary` — `#f5f5f7` fill, dark text
- `ghost` — transparent, `#f5f5f7` on hover

---

## Scroll Animations

All `fade-in-up` elements animate via `useScrollAnimation` (IntersectionObserver). Add the class to any element and it will slide up + fade in when scrolled into view. Stagger with `delay-100` through `delay-400`.

```tsx
<div className="fade-in-up delay-200">...</div>
```

The hook attaches to a section `ref` and triggers `.visible` on all `fade-in-up` children when the section enters the viewport.

---

## CRO Features

| Feature | Location |
|---------|----------|
| Scarcity signal ("5 spots, 3 taken") | `Booking.tsx`, `CTA.tsx` |
| Inline Calendly (no redirect) | `Booking.tsx` |
| ROI hint on each pricing tier | `Pricing.tsx` |
| Section-to-section micro-CTAs | `Problem.tsx`, `Solution.tsx`, `HowItWorks.tsx` |
| Quantified testimonials (full names, metrics) | `Testimonials.tsx` |
| 30-day money-back guarantee | `Pricing.tsx`, `CTA.tsx` |
| Telegram lead notification | `Contact.tsx` → `lib/telegram.ts` |
| Contact success state links to booking | `Contact.tsx` |
