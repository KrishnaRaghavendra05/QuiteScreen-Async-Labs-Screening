import type { ReactNode } from "react";

import { Container } from "./Container.tsx";
import styles from "./Section.module.css";

/** Background treatment. `inverse` is used once, for the closing call to action. */
export type SectionTone = "default" | "surface" | "inverse";

interface SectionProps {
  id: string;
  children: ReactNode;
  tone?: SectionTone;
  /** id of the heading that names this section, for `aria-labelledby`. */
  labelledBy?: string;
  className?: string;
}

/**
 * A page band: vertical rhythm, background tone and the content measure.
 * Owning this in one place is what keeps section spacing consistent.
 */
export function Section({
  id,
  children,
  tone = "default",
  labelledBy,
  className,
}: SectionProps) {
  return (
    <section id={id} className={styles.section} data-tone={tone} aria-labelledby={labelledBy}>
      <Container className={className}>{children}</Container>
    </section>
  );
}
