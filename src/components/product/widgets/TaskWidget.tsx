import type { TaskWidgetData } from "../../../types/eink.ts";
import styles from "./widgets.module.css";

/**
 * A checklist. The boxes are drawn shapes, not form controls — this is a
 * picture of a panel, and nothing here is operable.
 */
export function TaskWidget({ data }: { data: TaskWidgetData }) {
  return (
    <div className={styles.widget}>
      <p className={styles.caption}>{data.title}</p>
      <ul className={styles.list}>
        {data.items.map((item) => (
          <li key={item.label} className={styles.taskRow}>
            <span
              className={
                item.done ? `${styles.taskBox} ${styles.taskBoxDone}` : styles.taskBox
              }
            >
              {item.done ? (
                <svg className={styles.taskCheck} viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    d="M2.5 6.4 4.8 8.7 9.5 3.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
            <span className={item.done ? styles.taskLabelDone : undefined}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
