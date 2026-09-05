import type { AgendaWidgetData } from "../../../types/eink.ts";
import styles from "./widgets.module.css";

/** A short schedule beneath a solid header bar. */
export function AgendaWidget({ data }: { data: AgendaWidgetData }) {
  return (
    <div className={styles.widget}>
      <p className={styles.agendaBar}>{data.title}</p>
      <ul className={styles.list}>
        {data.entries.map((entry) => (
          <li
            key={`${entry.time}-${entry.label}`}
            className={
              entry.current
                ? `${styles.agendaRow} ${styles.agendaRowCurrent}`
                : styles.agendaRow
            }
          >
            <span className={styles.agendaTime}>{entry.time}</span>
            {/* Rendered on every row so the labels stay on one vertical line. */}
            <span
              className={
                entry.current
                  ? `${styles.agendaMarker} ${styles.agendaMarkerOn}`
                  : styles.agendaMarker
              }
            />
            <span className={styles.agendaLabel}>{entry.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
