import { Section } from "../ui/Section.tsx";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { STEPS } from "../../data/content.ts";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="surface" labelledBy="how-it-works-title">
      <SectionHeader
        eyebrow="How it works"
        title="Three steps, then leave it alone."
        titleId="how-it-works-title"
        lede="Less screen time. More screen purpose."
      />

      <ol className={styles.steps}>
        {STEPS.map((step) => (
          <li key={step.number} className={styles.step}>
            <p className={styles.number} aria-hidden="true">
              {step.number}
            </p>
            <h3>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
