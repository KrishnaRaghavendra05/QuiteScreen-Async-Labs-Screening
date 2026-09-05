import type { ScreenLayout } from "../types/eink.ts";
import {
  COLLEGE_SCREEN,
  FOCUS_SCREEN,
  GYM_SCREEN,
  HOME_SCREEN,
  MENU_SCREEN,
  TEAM_SCREEN,
} from "./screens.ts";

/**
 * The use-case switcher's content. Each entry pairs a short piece of copy with
 * one of the existing screen layouts, so the switcher renders through the same
 * `DeviceFrame` and `EInkScreen` rather than duplicating any device markup.
 */
export interface UseCase {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  screen: ScreenLayout;
  /** Wall-mounted contexts hide the desk stand. */
  stand: boolean;
  /** Marks the author's own use case, called out in the panel. */
  featured?: boolean;
}

/** Shown beside the featured use case. */
export const FEATURED_LABEL = "How I'd use it";

/** The tab shown on load. Named so nothing has to index into the array to find it. */
export const DEFAULT_USE_CASE: UseCase = {
  id: "focus",
  tabLabel: "Focus",
  title: "A day you can read in one look",
  description:
    "Your schedule, the block you have protected and the two or three things still open — beside your keyboard rather than behind a tab.",
  screen: FOCUS_SCREEN,
  stand: true,
};

export const USE_CASES: readonly UseCase[] = [
  DEFAULT_USE_CASE,
  {
    id: "shared",
    tabLabel: "Shared space",
    title: "Answers before anyone has to ask",
    description:
      "Mounted outside a room, it shows whether the room is free, what is booked next and whatever the team needs to know today.",
    screen: TEAM_SCREEN,
    stand: false,
  },
  {
    id: "home",
    tabLabel: "Home",
    title: "A quieter desk at home",
    description:
      "Two things on today, a short list, the weather and a line worth keeping up — without opening a laptop to check any of it.",
    screen: HOME_SCREEN,
    stand: true,
  },
  {
    id: "menu",
    tabLabel: "Restaurant",
    title: "A menu board that changes itself",
    description:
      "Daily menus, the specials, prices and whether the kitchen is still open — scheduled ahead so the front of house is never editing a chalkboard mid-service. Sample content.",
    screen: MENU_SCREEN,
    stand: false,
  },
  {
    id: "college",
    tabLabel: "College manager",
    title: "The semester, on the desk",
    description:
      "My own use for it: the next class, what is due, the test after that and the exam behind it — the things that go wrong when they live only in a group chat. All dates shown are sample content.",
    screen: COLLEGE_SCREEN,
    stand: true,
    featured: true,
  },
  {
    id: "gym",
    tabLabel: "Gym tracker",
    title: "Numbers worth seeing between sets",
    description:
      "Keep today's workout, calorie target and personal records visible without reaching for your phone between sets. Sample content — the display shows what you put on it, not a connected tracker or account.",
    screen: GYM_SCREEN,
    stand: true,
  },
];
