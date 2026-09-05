import type { QuoteWidgetData } from "../../../types/eink.ts";
import styles from "./widgets.module.css";

/** Custom text content — a message, a reminder, a line worth keeping up. */
export function QuoteWidget({ data }: { data: QuoteWidgetData }) {
  return (
    <figure className={styles.quote}>
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={styles.quoteText}>{data.text}</blockquote>
      {data.attribution ? (
        <figcaption className={styles.quoteAttribution}>{data.attribution}</figcaption>
      ) : null}
    </figure>
  );
}
