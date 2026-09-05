import { Button } from "../ui/Button.tsx";
import { Section } from "../ui/Section.tsx";
import { CTA_HREF } from "../../data/navigation.ts";
import styles from "./FinalCta.module.css";

/**
 * The page's one inverted band, and its one photograph — the supplied product
 * shot, whose low, warm lighting only works against a dark ground.
 */
export function FinalCta() {
  return (
    <Section id="get-started" tone="inverse" labelledBy="get-started-title">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="get-started-title">Keep what matters in sight.</h2>
          <p className={styles.lede}>
            Give important information a place in your workspace &mdash; without
            putting another demanding screen in front of you.
          </p>
          <div className={styles.action}>
            <Button href={CTA_HREF} size="lg">
              Get started
            </Button>
          </div>
        </div>

        <picture className={styles.figure}>
          <source srcSet="/product-desk.webp" type="image/webp" />
          <img
            src="/product-desk.png"
            alt="The QuietScreen display standing on a desk beside a lamp and a notebook."
            width={1000}
            height={835}
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
        </picture>
      </div>
    </Section>
  );
}
