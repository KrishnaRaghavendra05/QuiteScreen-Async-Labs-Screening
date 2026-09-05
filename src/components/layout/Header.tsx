import { useRef, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";

import { Button } from "../ui/Button.tsx";
import { Container } from "../ui/Container.tsx";
import { MobileMenu } from "./MobileMenu.tsx";
import { CTA_HREF, NAV_LINKS } from "../../data/navigation.ts";
import { useScrolled } from "../../hooks/useScrolled.ts";
import { useTheme } from "../../hooks/useTheme.ts";
import styles from "./Header.module.css";

const MENU_ID = "mobile-menu";

/**
 * Sticky site header.
 *
 * It sits transparent over the hero and takes on a surface and a hairline once
 * the page moves, which is the only reason it needs the scroll listener. The
 * navigation collapses at 1024px rather than 768px: a wordmark, four links and
 * a call to action run out of room well before tablet width.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();

  /** Closing returns focus to the control that opened the menu. */
  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <Container className={styles.bar}>
        <a className={styles.brand} href="#top">
          <span className={styles.wordmark}>QuietScreen</span>
          <span className={styles.byline}>Made by Krishna Raghavendra</span>
        </a>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            aria-label="Switch colour theme"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun size={20} aria-hidden="true" />
            ) : (
              <Moon size={20} aria-hidden="true" />
            )}
          </button>

          <Button href={CTA_HREF} className={styles.cta}>
            Get started
          </Button>

          <button
            ref={toggleRef}
            type="button"
            className={`${styles.iconButton} ${styles.menuToggle}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </Container>

      <div id={MENU_ID}>
        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
