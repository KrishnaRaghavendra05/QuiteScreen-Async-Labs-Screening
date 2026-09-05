import { Section } from "../ui/Section.tsx";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { CAPABILITIES } from "../../data/content.ts";
import styles from "./Capabilities.module.css";

/** What the display and its companion app can do. */
export function Capabilities() {
  return (
    <Section id="capabilities" tone="surface" labelledBy="capabilities-title">
      <SectionHeader
        eyebrow="Capabilities"
        title="Yours to arrange."
        titleId="capabilities-title"
        lede="Everything on the display is something you chose to put there, managed from an app on your phone or your desktop. Important things, minus the important-looking notification."
      />

      <ul className={styles.grid}>
        {CAPABILITIES.map(({ icon: Icon, title, description }) => (
          <li key={title} className={styles.item}>
            <Icon className={styles.icon} size={22} strokeWidth={1.6} aria-hidden="true" />
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
