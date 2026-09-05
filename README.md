# QuietScreen — Information Without the Noise

A responsive frontend built for the Async Labs T5 screening task.

QuietScreen is a concept for a 7.5-inch e-ink workspace display that keeps useful information visible without becoming another distracting screen.

## Features

- Responsive design for desktop, tablet and mobile
- Light and dark mode
- Interactive e-ink display
- Focus, Shared Space and Home screens
- Restaurant Menu use case
- College Manager — featured personal use case
- Gym Tracker — sample personal use case
- Full-screen product view
- B&W and tri-colour display variants
- Responsive mobile navigation
- Keyboard-accessible interactions

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── ui/        Reusable UI components
│   ├── layout/    Header, navigation and footer
│   ├── sections/  Landing page sections
│   └── product/   Device and e-ink display components
├── data/          Product and screen data
├── hooks/         Reusable React hooks
├── styles/        Global styles and design tokens
└── types/         TypeScript types

The product display uses reusable DeviceFrame and EInkScreen components. Different use cases are represented as data and rendered using the same components.

My Use Cases
College Manager

This is the use case I would personally use the display for.

It could show my timetable, next class, upcoming submissions, tests, exams and important reminders without constantly checking my phone or laptop.

Gym Tracker

A sample fitness dashboard showing workouts, calories, upcoming exercises and personal records.

Both are demonstration screens using sample data and are not connected to external accounts or APIs.

Design Approach

I wanted the website to feel calm and product-focused rather than like a typical SaaS landing page.

The design uses:

Warm off-white and charcoal tones
A restrained red accent
Minimal borders and shadows
Large typography and generous spacing
Responsive layouts

The website also supports dark mode while keeping the e-ink display visually consistent with the physical product.

Run Locally
npm install
npm run dev

For a production build:

npm run build
npm run lint
Live Demo

[Add Vercel URL here]

Screening Task

Async Labs — T5 Website Frontend Development


### One thing I would add

Since this is a **screening submission**, after deployment put both links near the top:

```markdown
**Live Demo:** https://your-vercel-url.vercel.app  
**GitHub:** https://github.com/KrishnaRaghavendra05/QuiteScreen-Async-Labs-Screening

That makes it extremely easy for the evaluator to find the two things they actually care about.
