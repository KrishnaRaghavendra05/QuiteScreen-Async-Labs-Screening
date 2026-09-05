import type { NoticeWidgetData } from "../../../types/eink.ts";
import { EInkIcon } from "../einkIcons.tsx";
import styles from "./widgets.module.css";

/** A short standing message: a focus window, an office announcement. */
export function NoticeWidget({ data }: { data: NoticeWidgetData }) {
  const headClass = data.accent
    ? `${styles.noticeHead} ${styles.noticeAccent}`
    : styles.noticeHead;

  return (
    <div className={styles.widget}>
      <div className={headClass}>
        {data.icon ? <EInkIcon name={data.icon} className={styles.noticeIcon} /> : null}
        <span className={styles.caption}>{data.title}</span>
      </div>
      <div className={styles.list}>
        {data.lines.map((line) => (
          <p key={line} className={styles.noticeLine}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
