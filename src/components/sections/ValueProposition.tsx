import { Section } from "../ui/Section.tsx";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { VALUE_PROPS } from "../../data/content.ts";
import styles from "./ValueProposition.module.css";

/** The central argument, and the four reasons it holds. */
export function ValueProposition() {
  return (
    <Section id="product" labelledBy="product-title">
      <SectionHeader
        eyebrow="The idea"
        title="Important information, one glance away."
        titleId="product-title"
        lede="Most of what you check repeatedly is not worth the interruption of checking it. Give those few things a surface of their own and the interruption disappears. Your computer can keep being dramatic — this one stays calm."
      />

      <ul className={styles.grid}>
        {VALUE_PROPS.map((prop) => (
          <li key={prop.title} className={styles.item}>
            <h3>{prop.title}</h3>
            <p className={styles.description}>{prop.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
