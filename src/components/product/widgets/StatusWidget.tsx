import type { StatusWidgetData } from "../../../types/eink.ts";
import styles from "./widgets.module.css";

/**
 * A state other people read at a glance — presence, or whether a room is free.
 * The state itself is the one thing drawn in the accent colour.
 */
export function StatusWidget({ data }: { data: StatusWidgetData }) {
  return (
    <div className={styles.widget}>
      <p className={styles.caption}>{data.title}</p>
      <p className={styles.statusState}>{data.state}</p>
      {data.detail ? <p className={styles.statusDetail}>{data.detail}</p> : null}
      {data.source ? <p className={styles.statusSource}>via {data.source}</p> : null}
    </div>
  );
}
