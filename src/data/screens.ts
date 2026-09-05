import type { ScreenLayout } from "../types/eink.ts";

/*
 * Screen layouts.
 *
 * Every widget here corresponds to something the product brief actually
 * supports: calendars and schedules, task lists, focus modes and status
 * indicators, meeting-room availability, office announcements, weather, and
 * custom text. No integration or capability is implied that the brief does not
 * describe.
 *
 * `description` is what assistive technology hears in place of the panel, so
 * each one summarises the screen in a sentence.
 */

/**
 * The primary layout, and the one that carries the product's argument: a day
 * legible in a single glance, so nothing here needs checking on a laptop.
 */
export const FOCUS_SCREEN: ScreenLayout = {
  id: "focus",
  label: "Focus & schedule",
  description:
    "The display showing Tuesday 27 May at 9:41, today's schedule of five meetings with the 9:30 standup in progress, a do-not-disturb window until 3:00 PM, four open tasks, and a status of 'In a meeting' from a connected chat app.",
  updatedAt: "Updated 9:41 AM",
  rows: [
    {
      slots: [
        {
          span: 4,
          widget: {
            kind: "date",
            weekday: "Tue",
            day: "27",
            month: "May",
            time: "9:41 AM",
          },
        },
        {
          span: 8,
          widget: {
            kind: "agenda",
            title: "Today's schedule",
            entries: [
              { time: "9:30", label: "Team standup", current: true },
              { time: "11:00", label: "Design review" },
              { time: "13:30", label: "Client call" },
              { time: "15:00", label: "Focus time" },
              { time: "17:00", label: "Wrap up" },
            ],
          },
        },
      ],
    },
    {
      slots: [
        {
          span: 5,
          framed: true,
          widget: {
            kind: "notice",
            title: "Focus time",
            icon: "alarm-clock",
            accent: true,
            lines: ["Do not disturb", "Until 3:00 PM"],
          },
        },
        {
          span: 7,
          framed: true,
          widget: {
            kind: "tasks",
            title: "Tasks",
            items: [
              { label: "Design review", done: true },
              { label: "API integration", done: false },
              { label: "Documentation", done: false },
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 6,
          widget: {
            kind: "weather",
            temperature: "28°C",
            condition: "Partly cloudy",
            icon: "cloud-sun",
          },
        },
        {
          span: 6,
          widget: {
            kind: "status",
            title: "Status",
            state: "In a meeting",
            detail: "Back at 3:00 PM · via Slack",
          },
        },
      ],
    },
  ],
};

/** A shared space: what the room is doing, what is booked, what people need to know. */
export const TEAM_SCREEN: ScreenLayout = {
  id: "team",
  label: "Shared workspace",
  description:
    "The display mounted in a shared workspace, showing Tuesday 27 May, a meeting room currently available until 11:00 AM, four bookings for the day, and an office notice about building access and a Thursday all-hands.",
  updatedAt: "Updated 9:40 AM",
  rows: [
    {
      slots: [
        {
          span: 4,
          widget: { kind: "date", weekday: "Tue", day: "27", month: "May" },
        },
        {
          span: 8,
          widget: {
            kind: "status",
            title: "Room 2 — Northside",
            state: "Available",
            detail: "Next booking 11:00 AM · Design review",
            source: "Outlook Calendar",
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          widget: {
            kind: "agenda",
            title: "Booked today",
            entries: [
              { time: "11:00", label: "Design review · 6 people" },
              { time: "13:30", label: "Client call · Northside" },
              { time: "15:00", label: "Sprint planning · 9 people" },
              { time: "16:30", label: "1:1 · held" },
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          framed: true,
          widget: {
            kind: "notice",
            title: "Office notice",
            icon: "megaphone",
            lines: [
              "Building access closes at 7:00 PM this week.",
              "All-hands Thursday, 4:00 PM, main floor.",
            ],
          },
        },
      ],
    },
  ],
};

/** A personal desk at home: quieter, fewer obligations, more room to breathe. */
export const HOME_SCREEN: ScreenLayout = {
  id: "home",
  label: "Home desk",
  description:
    "The display on a home desk, showing Saturday 31 May, 19°C and light rain, two things on today, three personal tasks, and a short saved note reading 'Slow is smooth. Smooth is fast.'",
  updatedAt: "Updated 8:05 AM",
  rows: [
    {
      slots: [
        {
          span: 5,
          widget: { kind: "date", weekday: "Sat", day: "31", month: "May" },
        },
        {
          span: 7,
          widget: {
            kind: "weather",
            temperature: "19°C",
            condition: "Light rain",
            icon: "cloud-rain",
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 6,
          widget: {
            kind: "agenda",
            title: "Today",
            entries: [
              { time: "10:00", label: "Farmers market" },
              { time: "19:30", label: "Dinner · Priya" },
            ],
          },
        },
        {
          span: 6,
          framed: true,
          widget: {
            kind: "tasks",
            title: "This weekend",
            items: [
              { label: "Repot the fig", done: true },
              { label: "Call home", done: false },
              { label: "Finish chapter 4", done: false },
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          widget: {
            kind: "quote",
            text: "Slow is smooth. Smooth is fast.",
            attribution: "Saved note",
          },
        },
      ],
    },
  ],
};

/**
 * A customer-facing display in a restaurant: what is on today, what is special
 * and whether the kitchen is still open. Sample content.
 */
export const MENU_SCREEN: ScreenLayout = {
  id: "menu",
  label: "Restaurant menu",
  description:
    "The display used as a customer-facing menu board, showing Friday 12 September, a kitchen open until 10:30 PM, four dishes on today's menu with prices, and a chef's special. Sample content.",
  updatedAt: "Updated 11:00 AM",
  rows: [
    {
      slots: [
        {
          span: 5,
          widget: { kind: "date", weekday: "Fri", day: "12", month: "Sep" },
        },
        {
          span: 7,
          widget: {
            kind: "status",
            title: "Kitchen",
            state: "Open",
            detail: "Last orders 10:30 PM",
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          widget: {
            kind: "notice",
            title: "Today's menu",
            lines: [
              "Paneer tikka  ·  180",
              "Wood-fired margherita  ·  260",
              "Malabar fish curry  ·  340",
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          framed: true,
          widget: {
            kind: "notice",
            title: "Today's special",
            accent: true,
            lines: ["Slow-roast lamb with burnt garlic rice  ·  420"],
          },
        },
      ],
    },
  ],
};

/**
 * A student's week: the next class, what is due, and what is coming. All of the
 * dates and course names below are sample content, not real deadlines.
 */
export const COLLEGE_SCREEN: ScreenLayout = {
  id: "college",
  label: "College manager",
  description:
    "The display used as a college dashboard, showing Wednesday 17 September, a timetable of four classes with data analytics in progress, machine learning next at 10:00 AM, an assignment due Friday, a test on Monday, an exam on 18 September, and a reminder about a project review tomorrow. Sample content.",
  updatedAt: "Updated 9:15 AM",
  rows: [
    {
      slots: [
        {
          span: 4,
          widget: {
            kind: "date",
            weekday: "Wed",
            day: "17",
            month: "Sep",
            time: "9:15 AM",
          },
        },
        {
          span: 8,
          widget: {
            kind: "agenda",
            title: "Today's timetable",
            entries: [
              { time: "9:00", label: "Data analytics", current: true },
              { time: "10:00", label: "Machine learning" },
              { time: "11:30", label: "Elective · HCI" },
              { time: "14:00", label: "ML lab" },
            ],
          },
        },
      ],
    },
    {
      slots: [
        {
          span: 5,
          framed: true,
          widget: {
            kind: "status",
            title: "Next class",
            state: "Machine learning",
            detail: "10:00 AM · Block C",
          },
        },
        {
          span: 7,
          framed: true,
          widget: {
            kind: "notice",
            title: "Upcoming",
            lines: [
              "ML assignment · due Friday",
              "Data analytics test · Monday",
              "ML exam · 18 Sep",
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          widget: {
            kind: "notice",
            title: "Important",
            icon: "megaphone",
            accent: true,
            lines: ["Project review tomorrow, 4:00 PM."],
          },
        },
      ],
    },
  ],
};

/**
 * A glanceable training board: what today is, what is next, and the numbers
 * worth seeing between sets. Every figure below is sample content — nothing
 * here is connected to a tracker, a watch or an account.
 */
export const GYM_SCREEN: ScreenLayout = {
  id: "gym",
  label: "Gym tracker",
  description:
    "The display used as a training board, showing Wednesday 17 September, a push day with a 420 kcal target, incline bench press next at three sets of eight, personal records of 80kg bench, 100kg squat and 120kg deadlift, and two of four workouts done this week. Sample content.",
  updatedAt: "Updated 6:40 AM",
  rows: [
    {
      slots: [
        {
          span: 4,
          widget: { kind: "date", weekday: "Wed", day: "17", month: "Sep" },
        },
        {
          span: 8,
          widget: {
            kind: "status",
            title: "Today",
            state: "Push day",
            detail: "420 kcal target · 55 min",
          },
        },
      ],
    },
    {
      slots: [
        {
          span: 5,
          framed: true,
          widget: {
            kind: "notice",
            title: "Next up",
            accent: true,
            lines: ["Incline bench press", "3 × 8 · 60 kg"],
          },
        },
        {
          span: 7,
          framed: true,
          widget: {
            kind: "notice",
            title: "Personal records",
            lines: [
              "Bench press · 80 kg",
              "Squat · 100 kg",
              "Deadlift · 120 kg",
            ],
          },
        },
      ],
    },
    {
      divider: true,
      slots: [
        {
          span: 12,
          widget: {
            kind: "notice",
            title: "This week",
            lines: ["2 of 4 workouts done · bench press up 5 kg this month"],
          },
        },
      ],
    },
  ],
};

/** Ordered for display in the use-case switcher. */
export const SCREEN_LAYOUTS: readonly ScreenLayout[] = [
  FOCUS_SCREEN,
  TEAM_SCREEN,
  HOME_SCREEN,
  MENU_SCREEN,
  COLLEGE_SCREEN,
  GYM_SCREEN,
];
