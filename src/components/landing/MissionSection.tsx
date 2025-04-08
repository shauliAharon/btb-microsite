import AnimateOnScroll from "../AnimateOnScroll";
import Button from "../Button";
import pic1 from "../../assets/pic1.jpeg";
import "./MissionSection.css";

interface MissionSectionProps {
  onSignupClick: () => void;
}

export default function MissionSection({ onSignupClick }: MissionSectionProps) {
  return (
    <section id="mission" className="mission-section">
      <AnimateOnScroll>
        <div className="mission-content">
          {/* Left side: Text */}
          <div className="mission-text">
            <p className="intro-text">
              Because deep down, you know you were built for more than
              <br className="desktop-only" />
              permission, and playing small.
            </p>

            <div className="mission-points">
              <AnimateOnScroll delay={0.1}>
                <p className="highlighted-title">
                  What if you could lock in a business that:
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="points-list">
                  <p>Runs 24/7</p>
                  <p>Rides the biggest digital wave of the decade</p>
                  <p>
                    Requires no code, no product, and no begging for clients
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <p className="highlighted-title">
                  What if you didn't just play the game — you OWNED the arena?
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.4}>
                <div className="details-text">
                  <p>This is no fluff.</p>
                  <p>No "guru" fantasy.</p>
                  <p>No recycled affiliate garbage.</p>
                  <p>This is infrastructure — and it's real.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.5}>
                <div className="gold-list">
                  <p>Bitcoin had 2010...</p>
                  <p>Ethereum had 2015...</p>
                  <p className="bold-gold">You can have 2025!</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.6}>
                <div className="cta-container">
                  <Button variant="primary" size="lg" onClick={onSignupClick}>
                  Got it. Let me In Now!                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="mission-image">
            <AnimateOnScroll delay={0.7}>
              <img src={pic1} alt="Hero character" />
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
