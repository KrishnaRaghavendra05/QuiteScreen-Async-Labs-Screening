import type { Widget } from "../../types/eink.ts";
import { AgendaWidget } from "./widgets/AgendaWidget.tsx";
import { DateWidget } from "./widgets/DateWidget.tsx";
import { NoticeWidget } from "./widgets/NoticeWidget.tsx";
import { QuoteWidget } from "./widgets/QuoteWidget.tsx";
import { StatusWidget } from "./widgets/StatusWidget.tsx";
import { TaskWidget } from "./widgets/TaskWidget.tsx";
import { WeatherWidget } from "./widgets/WeatherWidget.tsx";

/**
 * Resolves a widget to its component.
 *
 * The `unhandled: never` assignment in the default branch makes adding a member
 * to the `Widget` union without rendering it a compile error rather than a
 * blank space on the panel.
 */
export function WidgetRenderer({ widget }: { widget: Widget }) {
  switch (widget.kind) {
    case "date":
      return <DateWidget data={widget} />;
    case "agenda":
      return <AgendaWidget data={widget} />;
    case "tasks":
      return <TaskWidget data={widget} />;
    case "weather":
      return <WeatherWidget data={widget} />;
    case "status":
      return <StatusWidget data={widget} />;
    case "notice":
      return <NoticeWidget data={widget} />;
    case "quote":
      return <QuoteWidget data={widget} />;
    default: {
      const unhandled: never = widget;
      return unhandled;
    }
  }
}
