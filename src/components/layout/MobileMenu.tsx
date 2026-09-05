import { X } from "lucide-react";

import { Button } from "../ui/Button.tsx";
import { CTA_HREF, NAV_LINKS } from "../../data/navigation.ts";
import { useDialogElement } from "../../hooks/useDialogElement.ts";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * The small-screen navigation panel.
 *
 * Built on a native `<dialog>` opened with `showModal()`, which gives focus
 * containment, Escape-to-close, background inertness and a backdrop from the
 * platform — all the things a hand-rolled overlay has to reimplement and
 * usually gets subtly wrong.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const dialogRef = useDialogElement(open);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label="Main navigation"
      // Fires for Escape and for close(), so state stays in step either way.
      onClose={onClose}
    >
      <div className={styles.panel}>
        <div className={styles.top}>
          <span className={styles.wordmark}>QuietScreen</span>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.action}>
          <Button href={CTA_HREF} size="lg" className={styles.cta}>
            Get started
          </Button>
        </div>
      </div>
    </dialog>
  );
}
