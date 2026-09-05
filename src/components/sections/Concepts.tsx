import { Section } from "../ui/Section.tsx";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { CONCEPTS } from "../../data/content.ts";
import styles from "./Concepts.module.css";

/**
 * Product thinking, kept visibly separate from the specification.
 *
 * Nothing in this section is a claim about the current hardware, and each card
 * says so on its face.
 */
export function Concepts() {
  return (
    <Section id="concepts" labelledBy="concepts-title">
      <SectionHeader
        eyebrow="Designed to evolve"
        title="Ideas we're still thinking about."
        titleId="concepts-title"
        lede="These are directions, not features. Nothing below ships on the current display — it is where the product could go next."
      />

      <ul className={styles.grid}>
        {CONCEPTS.map(({ icon: Icon, title, description }) => (
          <li key={title} className={styles.item}>
            <div className={styles.head}>
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              <span className={styles.badge}>Concept</span>
            </div>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
