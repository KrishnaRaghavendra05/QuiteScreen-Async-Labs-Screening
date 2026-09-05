/*
 * The e-ink display's content model.
 *
 * The product's core capability is that users compose their own layouts from
 * pieces of information, so a screen is described as data rather than built as
 * markup. `EInkScreen` renders any `ScreenLayout` without knowing what is in
 * it, which is what lets one component serve the hero, the use-case switcher
 * and every future placement.
 *
 * Everything modelled here is supported by the supplied product brief:
 * calendars, task lists, focus/status indicators, room availability, office
 * notices, weather and custom text.
 */

/**
 * The two panels the product ships with. The physical frame is identical for
 * both — only which colours the panel can render changes.
 */
export type DisplayVariant = "bw" | "tri-color";

/**
 * Line icons the panel can draw. Closed, so every layout stays renderable, and
 * limited to what the layouts use — see `einkIcons.tsx` to extend it.
 */
export type EInkIconName = "cloud-sun" | "cloud-rain" | "alarm-clock" | "megaphone";

/* ------------------------------------------------------------------ *
 * Widgets
 * ------------------------------------------------------------------ */

/** Date, and optionally the time of day. */
export interface DateWidgetData {
  kind: "date";
  weekday: string;
  day: string;
  month: string;
  time?: string;
}

export interface AgendaEntry {
  time: string;
  label: string;
  /** Marks the entry happening now — the only entry drawn at full weight. */
  current?: boolean;
}

/** A short schedule under a solid header bar. */
export interface AgendaWidgetData {
  kind: "agenda";
  title: string;
  entries: AgendaEntry[];
}

export interface TaskItem {
  label: string;
  done: boolean;
}

/** A checklist. */
export interface TaskWidgetData {
  kind: "tasks";
  title: string;
  items: TaskItem[];
}

/** Current conditions. */
export interface WeatherWidgetData {
  kind: "weather";
  temperature: string;
  condition: string;
  icon: EInkIconName;
}

/** A state someone else needs to read at a glance: availability, presence, a room. */
export interface StatusWidgetData {
  kind: "status";
  title: string;
  state: string;
  detail?: string;
  /** Where the state came from, e.g. a connected calendar or chat integration. */
  source?: string;
}

/** A short standing message: a focus window, an office announcement. */
export interface NoticeWidgetData {
  kind: "notice";
  title: string;
  lines: string[];
  icon?: EInkIconName;
  /** Draw the title and icon in the accent colour. */
  accent?: boolean;
}

/** Custom text content. */
export interface QuoteWidgetData {
  kind: "quote";
  text: string;
  attribution?: string;
}

export type Widget =
  | DateWidgetData
  | AgendaWidgetData
  | TaskWidgetData
  | WeatherWidgetData
  | StatusWidgetData
  | NoticeWidgetData
  | QuoteWidgetData;

/* ------------------------------------------------------------------ *
 * Layout
 * ------------------------------------------------------------------ */

/** Columns a slot occupies on the screen's twelve-column grid. */
export type GridSpan = 4 | 5 | 6 | 7 | 8 | 12;

export interface ScreenSlot {
  widget: Widget;
  span: GridSpan;
  /** Enclose the widget in a hairline box, as the reference screen does. */
  framed?: boolean;
}

export interface ScreenRow {
  slots: ScreenSlot[];
  /** Separate this row from the one above with a hairline rule. */
  divider?: boolean;
}

export interface ScreenLayout {
  id: string;
  /** Human-facing name, used by the use-case switcher. */
  label: string;
  /**
   * A one-sentence summary of what the screen currently shows. The rendered
   * screen is exposed to assistive technology as a single image described by
   * this string, rather than as a stream of decontextualised fragments.
   */
  description: string;
  rows: ScreenRow[];
  /** Last refresh, shown as a footer line. Omit to hide the footer. */
  updatedAt?: string;
}
