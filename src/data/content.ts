import {
  CalendarClock,
  LayoutGrid,
  LayoutTemplate,
  Link2,
  PanelTop,
  PenLine,
  Smartphone,
  SunMedium,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
 * Page content.
 *
 * Every claim below traces to the supplied product brief: a 7.5-inch display,
 * desk or wall placement, a companion mobile and desktop app, custom layouts
 * and templates, Google Calendar / Outlook Calendar / Slack and Teams status,
 * scheduling and automatic updates, black-and-white or tri-colour panels, and
 * roughly 30 days of battery life. Nothing here adds a price, a statistic, a
 * customer, a review or a hardware specification the brief does not state.
 */

export interface ValueProp {
  title: string;
  description: string;
}

export const VALUE_PROPS: readonly ValueProp[] = [
  {
    title: "Always visible",
    description:
      "It sits on your desk or your wall and stays on what you put there. Nothing to unlock, nothing to open, nothing to find again.",
  },
  {
    title: "Glanceable",
    description:
      "One look tells you where the day is. The layout is built for reading in a second, not for holding your attention.",
  },
  {
    title: "Your main screen stays clear",
    description:
      "Your calendar, your tasks and your status move off the screen you work on, so the window in front of you stays the one you chose.",
  },
  {
    title: "Built around your workflow",
    description:
      "Arrange what appears and rearrange it whenever the work changes. The display follows how you already work.",
  },
];

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CAPABILITIES: readonly Capability[] = [
  {
    icon: LayoutGrid,
    title: "Custom layouts",
    description:
      "Compose what appears and how it is arranged, then reconfigure it as often as you like.",
  },
  {
    icon: LayoutTemplate,
    title: "Ready-made templates",
    description:
      "Start from a prebuilt layout instead of designing a screen from scratch.",
  },
  {
    icon: Smartphone,
    title: "App control",
    description:
      "Manage everything from the companion app, on mobile and on desktop.",
  },
  {
    icon: Link2,
    title: "Integrations",
    description:
      "Sync with Google Calendar, Outlook Calendar and your Slack or Teams status.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & automation",
    description:
      "Schedule what shows when, and let content refresh itself through cloud APIs or local services.",
  },
  {
    icon: PanelTop,
    title: "Desk or wall",
    description:
      "Stand it on a desk or mount it on a wall — the same display suits both.",
  },
];

/*
 * Ideas, not specifications.
 *
 * Everything above this point is a capability the product brief states. Nothing
 * below it is: these are directions the product could take, and the section
 * that renders them labels every one of them as a concept so the two can never
 * be read as the same kind of claim.
 */
export interface Concept {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CONCEPTS: readonly Concept[] = [
  {
    icon: SunMedium,
    title: "Adaptive brightness",
    description:
      "Adaptive brightness could make the display easier to read across bright desks and dim evening workspaces, without anyone reaching for a setting.",
  },
  {
    icon: PenLine,
    title: "Optional stylus",
    description:
      "A stylus-oriented workflow could open the same surface up to sketches, quick notes, annotations and small pieces of artwork — the display as somewhere to think, not only somewhere to read.",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Choose what matters",
    description:
      "Pick the handful of things worth keeping in sight — a schedule, a task list, a status, a dashboard.",
  },
  {
    number: "02",
    title: "Configure your layout",
    description:
      "Start from a template or build your own in the app, then connect the calendars and services it should follow.",
  },
  {
    number: "03",
    title: "Keep it visible",
    description:
      "Set it on your desk or mount it on a wall. It updates on schedule and runs about a month between charges.",
  },
];

export interface Spec {
  value: string;
  label: string;
}

export const SPECS: readonly Spec[] = [
  { value: '7.5"', label: "Display size" },
  { value: "~30 days", label: "Battery life" },
  { value: "B&W / Tri-colour", label: "Display variants" },
  { value: "Desk / Wall", label: "Placement" },
];
