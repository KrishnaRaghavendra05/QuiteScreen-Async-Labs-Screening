import type { DisplayVariant, ScreenLayout } from "../../types/eink.ts";
import { WidgetRenderer } from "./WidgetRenderer.tsx";
import styles from "./EInkScreen.module.css";

interface EInkScreenProps {
  layout: ScreenLayout;
  /** Defaults to the black-and-white panel. */
  variant?: DisplayVariant;
}

/**
 * The display surface. Renders any `ScreenLayout` without knowing what is in
 * it, so the hero, the use-case switcher and the variant comparison all use
 * this same component with different data.
 *
 * Accessibility: the panel is a picture of a product showing information, not
 * a document. Exposing every fragment would read as a stream of stray times
 * and words, so it is announced as one image described by `layout.description`
 * — the text still renders as real DOM, so it stays crisp and selectable.
 */
export function EInkScreen({ layout, variant = "bw" }: EInkScreenProps) {
  return (
    <div
      className={styles.screen}
      data-variant={variant}
      role="img"
      aria-label={layout.description}
    >
      {layout.rows.map((row, rowIndex) => (
        <div
          // Rows are positional and have no identity of their own; the layout
          // id keeps keys unique across a variant or layout swap.
          key={`${layout.id}-row-${rowIndex}`}
          className={row.divider ? `${styles.row} ${styles.rowDivided}` : styles.row}
        >
          {row.slots.map((slot) => (
            <div
              key={`${slot.widget.kind}-${slot.span}`}
              className={slot.framed ? `${styles.slot} ${styles.slotFramed}` : styles.slot}
              data-span={slot.span}
            >
              <WidgetRenderer widget={slot.widget} />
            </div>
          ))}
        </div>
      ))}

      {layout.updatedAt ? <p className={styles.footer}>{layout.updatedAt}</p> : null}
    </div>
  );
}
