import { Container } from "../ui/Container.tsx";
import { SPECS } from "../../data/content.ts";
import styles from "./SpecStrip.module.css";

/** The four facts the brief states outright, and nothing beyond them. */
export function SpecStrip() {
  return (
    <section className={styles.strip} aria-label="Display details">
      <Container>
        <dl className={styles.list}>
          {SPECS.map((spec) => (
            <div key={spec.label} className={styles.item}>
              <dt className={styles.value}>{spec.value}</dt>
              <dd className={styles.label}>{spec.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
