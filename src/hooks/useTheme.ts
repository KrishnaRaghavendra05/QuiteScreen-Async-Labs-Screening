import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "quietscreen-theme";

/** Storage is unavailable in some privacy modes; a failure there is not fatal. */
function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/**
 * The site theme.
 *
 * A saved choice always wins; `prefers-color-scheme` only decides when nothing
 * has been saved. The same rule runs in the inline script in index.html, which
 * stamps `data-theme` before first paint so the page never flashes the wrong
 * theme.
 *
 * Writing happens in the toggle, not in the effect: merely visiting the site
 * must not record a preference the visitor never expressed, or a later change
 * to their system setting would be silently ignored.
 *
 * The effect only mirrors state onto the document element, which is genuinely
 * outside React.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () =>
      readStoredTheme() ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // A saved preference is a convenience, not a requirement.
      }
      return next;
    });
  };

  return { theme, toggleTheme };
}
