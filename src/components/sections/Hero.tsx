import { Button } from "../ui/Button.tsx";
import { Container } from "../ui/Container.tsx";
import { DeviceFrame } from "../product/DeviceFrame.tsx";
import { EInkScreen } from "../product/EInkScreen.tsx";
import { FOCUS_SCREEN } from "../../data/screens.ts";
import styles from "./Hero.module.css";

/** Three things worth knowing before scrolling. Local to the hero, so local data. */
const PROOF = ["7.5-inch display", "About 30 days per charge", "Desk or wall"];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>7.5-inch workspace display</p>

          <h1 id="hero-title">The screen that doesn&rsquo;t want your attention.</h1>

          <p className={styles.lede}>
            Your computer demands attention. This one keeps what matters visible in
            your workspace &mdash; a calm surface for the things you need to see, not
            another screen competing for the focus you were trying to protect.
          </p>

          <div className={styles.actions}>
            <Button href="#product" size="lg">
              Explore the display
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          <ul className={styles.proof}>
            {PROOF.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.stage}>
          <DeviceFrame size="lg">
            <EInkScreen layout={FOCUS_SCREEN} variant="tri-color" />
          </DeviceFrame>
        </div>
      </Container>
    </section>
  );
}
