import { Container } from "../ui/Container.tsx";
import { NAV_LINKS } from "../../data/navigation.ts";
import styles from "./Footer.module.css";

/**
 * Deliberately short. Every link here goes somewhere real on this page — there
 * are no invented company, pricing or support pages behind placeholder labels.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            <p className={styles.wordmark}>QuietScreen</p>
            <p className={styles.tagline}>
              A 7.5-inch workspace display for the things worth keeping in sight.
            </p>
          </div>

          <nav aria-label="Footer">
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
        </div>

        <p className={styles.legal}>
          &copy; {new Date().getFullYear()} QuietScreen. Made by Krishna
          Raghavendra. Black-and-white and tri-colour variants.
        </p>
      </Container>
    </footer>
  );
}
