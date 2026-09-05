import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  /** Small uppercase label above the heading. */
  eyebrow: string;
  title: string;
  /** id for the heading, so the parent Section can point `aria-labelledby` at it. */
  titleId: string;
  lede?: string;
}

/**
 * The eyebrow / heading / lede block that opens every section. It renders the
 * `<h2>` and owns its id, so the section's accessible name cannot drift.
 */
export function SectionHeader({ eyebrow, title, titleId, lede }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </header>
  );
}
