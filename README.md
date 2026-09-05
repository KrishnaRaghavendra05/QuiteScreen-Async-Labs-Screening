# QuietScreen — Information Without the Noise

A responsive frontend implementation of the supplied **Async Labs T5** product brief: a
marketing site for a smart 7.5-inch e-ink workspace display that keeps chosen information
visible on a desk or wall, managed from a companion app.

The site is built around one idea — *the screen that doesn't want your attention* — and every
claim on the page traces back to the brief. No pricing, statistics, testimonials or hardware
specifications have been invented.

**Live demo:** ADD_AFTER_DEPLOYMENT

## Features

- Responsive marketing landing page (phone, tablet, desktop)
- React + TypeScript, strict mode, no `any`
- Reusable component architecture — sections compose shared primitives
- Data-driven e-ink product renderer: screens are typed data, not markup
- Focus, Shared Space and Home use cases
- Restaurant Menu use case
- **College Manager** — featured personal use case
- **Gym Tracker** — sample personal use case
- Light / dark website theme, persisted, with system default
- Full-screen product viewer
- Responsive mobile navigation
- Black-and-white / tri-colour display variants
- Accessible keyboard interactions throughout
- Reduced-motion support

## Tech stack

- React
- TypeScript
- Vite
- CSS Modules
- Lucide React

No UI kit, no state library, no animation library.

## Architecture

```
src/
├── components/
│   ├── ui/        Reusable UI primitives (Container, Section, SectionHeader, Button)
│   ├── layout/    Header, mobile navigation and footer
│   ├── sections/  Landing-page sections
│   └── product/   Reusable physical product / e-ink rendering
├── data/          Data-driven screen layouts and page content
├── hooks/         Small reusable hooks for genuine external behaviour
├── styles/        Global styles and design tokens
└── types/         Domain TypeScript types
```

**The product display is implemented once through reusable `DeviceFrame` / `EInkScreen`
components and reused across the hero, use cases and full-screen viewer.**

`EInkScreen` renders any `ScreenLayout` without knowing what is in it. A screen is described as
data — rows of widgets on a twelve-column grid — and widgets are a discriminated union, so
adding a widget kind without rendering it is a compile error rather than a blank panel. Six use
cases therefore share a single renderer with no duplicated device markup.

Design values live only in `styles/tokens.css`; no component contains a raw colour, size or
spacing value. Dark mode re-points those same tokens rather than introducing a second system.
The device and its panel are deliberately excluded from that re-pointing: the hardware does not
change colour because the website did.

## Run locally

```bash
npm install
npm run dev
```

Production build and lint:

```bash
npm run build
npm run lint
```

## Design approach

- A calm, editorial hardware aesthetic rather than a generic SaaS landing page
- Warm off-white ground with charcoal ink, taken from the supplied product reference
- One restrained brick-red accent, used to mark live state rather than for decoration
- Separation by hairline rules and surface contrast — no gradients, one shadow, used only to
  lift the product render off the page
- Responsive-first: phone, tablet and desktop are composed intentionally, not scaled
- Semantic HTML, one `<h1>`, labelled landmarks and sections
- Keyboard-operable tabs and dialogs, focus never suppressed, focus returned on close
- `prefers-reduced-motion` honoured globally
- Repeated content is data-driven; abstractions exist only where there is real repetition

## Product thinking

The featured use case is **College Manager**: the display sitting on a student's desk showing
the day's timetable, the next class, an upcoming submission, a test and an exam, plus one
important reminder — the things that go wrong when they live only in a group chat. **Gym
Tracker** shows the same hardware as a training board: today's session, what is next, and
personal records worth seeing between sets.

Both are demonstration use cases built from sample content. They are not connected to any
account, tracker, timetable system or API — they illustrate what a person could choose to put
on the display.

The site also separates what the brief supports from what it does not. Capabilities such as
custom layouts, templates, the companion app, calendar and status integrations, scheduling and
desk-or-wall placement are stated confidently. Ideas beyond the brief — adaptive brightness, an
optional stylus — appear in a clearly marked *Designed to evolve* section as concepts, never as
specifications.

## Screening task

Async Labs — T5 Website Frontend Development.
