import { scrollToSection } from "../../utils/scrollUtils";
import AnimateOnScroll from "../AnimateOnScroll";
import Button from "../Button";
import styles from "./MarketSection.module.css";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
interface MarketSectionProps {
  onSignupClick: () => void;
}

export default function MarketSection({ onSignupClick }: MarketSectionProps) {
  return (
    <section id="market" className={styles.marketSection}>
      <div className={styles.contentContainer}>
        <AnimateOnScroll>
          <h1 className={styles.title}>The Market</h1>
        </AnimateOnScroll>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className={styles.bulletItem}>
                  <span style={{ color: "#d4af37" }}>◆</span> $19.7B Social
                  Gaming market (2023)
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.4}>
                <p className={styles.bulletItem}>
                  <span style={{ color: "#d4af37" }}>◆</span> Projected $39.5B+
                  by 2028
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.6}>
                <p className={styles.bulletItem}>
                  <span style={{ color: "#d4af37" }}>◆</span> Billions in
                  revenue from platforms you've never heard of
                </p>
              </AnimateOnScroll>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className={styles.section_text}>
                <p className={styles.text_bold}>Governments can't stop Web3.</p>
                <p className={styles.text_bold}>
                  Legacy finance can't play in this sandbox.
                </p>
                <p className={styles.text_bold}>
                  This is for the ones ready to rewrite the rules.
                </p>
              </div>

              <p
                className={`${styles.text} ${styles.goldText} ${styles.boldText}`}
              >
                This isn't something you just click to buy.
              </p>

              <p className={styles.text}>No checkout.</p>
              <p className={styles.text}>No shortcut.</p>
              <p className={styles.text}>
                You don't need to be the smartest or the richest.
              </p>
              <p className={styles.text}>
                But you need{" "}
                <span className={`${styles.goldText} ${styles.boldText}`}>
                  iron will
                </span>
                .
              </p>
              <p className={styles.text}>The kind that builds, not begs.</p>
              <p className={styles.text}>That executes, not complains.</p>
              <p className={styles.text}>
                If that's you?{" "}
                <span className={`${styles.goldText} ${styles.boldText}`}>
                  Apply now
                </span>
                .
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      <AnimateOnScroll delay={0.8}>
        <div className={styles.buttonContainer}>
          <Button variant="primary" size="lg" onClick={onSignupClick}>
            I Don't need a Pitch. I Need In!
          </Button>
        </div>
        <button
          onClick={() =>
            scrollToSection("package", window.innerWidth <= 768 ? 50 : 100)
          }
          className="scroll-button1"
        >
          <div className="hero-icon1">
            <AnimateOnScroll delay={1.6}>
              <ArrowDownIcon className="scroll-icon1" />
              <div className="scroll-shimmer1" />
            </AnimateOnScroll>
          </div>
        </button>
      </AnimateOnScroll>
    </section>
  );
}
