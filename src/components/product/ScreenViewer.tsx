import { X } from "lucide-react";

import { DeviceFrame } from "./DeviceFrame.tsx";
import { EInkScreen } from "./EInkScreen.tsx";
import { useDialogElement } from "../../hooks/useDialogElement.ts";
import type { ScreenLayout } from "../../types/eink.ts";
import styles from "./ScreenViewer.module.css";

interface ScreenViewerProps {
  layout: ScreenLayout;
  stand: boolean;
  open: boolean;
  onClose: () => void;
}

/**
 * The display at reading size.
 *
 * This is not a second rendering of the product — it is the same
 * `DeviceFrame` and `EInkScreen`, given the `xl` size and a modal container.
 * The panel keeps its 5:3 aperture and scales proportionally, so a larger box
 * simply means larger type.
 */
export function ScreenViewer({ layout, stand, open, onClose }: ScreenViewerProps) {
  const dialogRef = useDialogElement(open);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={`${layout.label} — display at full size`}
      onClose={onClose}
    >
      <div className={styles.body}>
        <div className={styles.bar}>
          <p className={styles.caption}>{layout.label}</p>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close full screen view"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <DeviceFrame size="xl" stand={stand}>
          <EInkScreen layout={layout} variant="tri-color" />
        </DeviceFrame>
      </div>
    </dialog>
  );
}
