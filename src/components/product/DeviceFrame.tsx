import type { ReactNode } from "react";

import styles from "./DeviceFrame.module.css";

/** Presets rather than free numbers, so callers cannot introduce odd sizes. */
export type DeviceSize = "sm" | "md" | "lg" | "xl";

interface DeviceFrameProps {
  /** The display surface — in practice an `EInkScreen`. */
  children: ReactNode;
  size?: DeviceSize;
  /** Show the fold-out desk stand. Turn off when the device is wall-mounted. */
  stand?: boolean;
  className?: string;
}

/**
 * The physical 7.5-inch display: bezel, embossed wordmark and desk stand.
 *
 * It owns the hardware's appearance and nothing else — what is on the screen
 * is entirely the caller's business:
 *
 *   <DeviceFrame size="lg">
 *     <EInkScreen layout={focusScreen} variant="tri-color" />
 *   </DeviceFrame>
 *
 * The frame is identical for both display variants; only the panel differs.
 */
export function DeviceFrame({
  children,
  size = "lg",
  stand = true,
  className,
}: DeviceFrameProps) {
  const classes = className ? `${styles.device} ${className}` : styles.device;

  return (
    <div className={classes} data-size={size}>
      <div className={styles.frame}>
        {children}
        {/* The hardware's own branding, as it appears on the supplied product
         * reference. The site's product name is separate from what is moulded
         * into the bezel. */}
        <p className={styles.wordmark} aria-hidden="true">
          Async Labs
        </p>
      </div>
      {stand ? <span className={styles.stand} aria-hidden="true" /> : null}
    </div>
  );
}
