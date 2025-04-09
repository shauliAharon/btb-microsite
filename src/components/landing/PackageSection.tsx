import AnimateOnScroll from "../AnimateOnScroll";
import styles from "./PackageSection.module.css";
import UpvsDown from "../../assets/UpvsDpwn.png";
import UpvsDown1 from "../../assets/UpvsDpwn1.png";
export default function PackageSection() {
  return (
    <section id="package" className={styles.container}>
      <div className={styles.sectionWrapper}>
        <div className={styles.imageContainer}>
          <AnimateOnScroll delay={0.2}>
            <div className={styles.imageWrapper}>
              <img src={UpvsDown} alt="UpvsDown" className={styles.imageText} />
            </div>
            <div className={styles.imageWrapper1}>
              <img
                src={UpvsDown1}
                alt="UpvsDown1"
                className={styles.imageText}
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.contentWrapper}>
          <AnimateOnScroll>
            <p className={styles.italicText}>
              Most people will scroll.
              <br /> Few will apply.
              <br /> Fewer will get in.
              <br />
              That's the point. This could be your moment.
            </p>
            <p className={styles.goldText}>
              Miss it — and... well, you've been there before.
            </p>
            <div className={styles.packageContent}>
              <div>
                <p className={styles.packageTitle}>
                  The Package (If You Qualify in time)
                </p>
                <p className={styles.whatYouGet}>What you get:</p>
                <div className={styles.bulletList}>
                  <p className={styles.bulletItem}>
                    🔹 Multiple verticals (casino-style, sports, financial)
                  </p>
                  <p className={styles.bulletItem}>
                    🔹 Full backend, wallet system, player engine
                  </p>
                  <p className={styles.bulletItem}>
                    🔹 Funnels, creatives, brand assets
                  </p>
                  <p className={styles.bulletItem}>
                    🔹 Direct earning from every player you bring in
                  </p>
                  <p className={styles.bulletItem}>
                    🔹 Founder-only access, bonuses, and tiered status
                  </p>
                </div>
              </div>

              <div className={styles.descriptionText}>
                <p>
                  No coding.
                  <br /> No crypto knowledge required.
                  <br /> Just guts, hustle, and hunger.
                </p>
                <p className={styles.whiteText}>This isn't a playground.</p>
                <p className={styles.goldBoldText}>
                  It's a launchpad for digital ownership.
                </p>
              </div>

              <div>
                <p className={styles.whiteText}>
                  And this opportunity? It's not for sale.
                </p>
                <p className={styles.goldBoldText}>
                  It's for the ones bold enough to take it.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
