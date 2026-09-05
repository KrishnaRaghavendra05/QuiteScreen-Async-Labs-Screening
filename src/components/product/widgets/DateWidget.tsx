import type { DateWidgetData } from "../../../types/eink.ts";
import styles from "./widgets.module.css";

/** The panel's anchor: weekday, a large day numeral, month, optional time. */
export function DateWidget({ data }: { data: DateWidgetData }) {
  return (
    <div className={styles.widget}>
      <p className={styles.dateWeekday}>{data.weekday}</p>
      <p className={styles.dateDay}>{data.day}</p>
      <p className={styles.dateMonth}>{data.month}</p>
      {data.time ? <p className={styles.dateTime}>{data.time}</p> : null}
    </div>
  );
}
