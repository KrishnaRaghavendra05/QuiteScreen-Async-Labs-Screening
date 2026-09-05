import { useEffect, useRef } from "react";

/**
 * Drives a native `<dialog>` from React state.
 *
 * `showModal()` is what gives focus containment, Escape-to-close, background
 * inertness and a backdrop for free. Only the open/closed sync is imperative,
 * and both modal surfaces on this page need exactly this, so it lives here
 * rather than being written twice.
 */
export function useDialogElement(open: boolean) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return ref;
}
