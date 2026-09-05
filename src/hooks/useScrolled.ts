import { useEffect, useState } from "react";

/**
 * True once the page has scrolled past `threshold`.
 *
 * The effect is here because the window's scroll position is genuinely an
 * external system. The listener is passive and only ever flips one boolean, so
 * it does not re-render on every frame.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
    };
  }, [threshold]);

  return scrolled;
}
