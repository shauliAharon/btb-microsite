import AnimateOnScroll from "../AnimateOnScroll";
import "./VisionSection.css";

export default function VisionSection() {
  return (
    <section id="vision" className="vision-container">
      <div className="vision-flex-wrapper">
        <div className="vision-text-box">
          <AnimateOnScroll>
            <h2 className="vision-title">The Vision</h2>
            <div className="vision-content">
              <div>
                <p className="vision-paragraph">
                  We're building the{" "}
                  <span className="vision-highlight">
                    next-generation economy
                  </span>{" "}
                  of social gaming + digital prestige:
                </p>
                <div className="vision-list">
                  <ul className="styled-list">
                    <li>Social games</li>
                    <li>PvP sports picks</li>
                    <li>Market trading sims</li>
                    <li>Built-in token mechanics</li>
                    <li>Quick, Automatic Payouts without delays.</li>
                    <li>
                      Prestige Economy System (status-based progression rolling
                      out soon)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="vision-gold-text font-bold" style={{ lineHeight: "1" }}>
                  This isn't a launch. It's a movement.
                </p>
                <p className="vision-paragraph" style={{ lineHeight: "1" }}>
                  If this feels too big, too early, or too unreal —
                </p>
                <p className="vision-gold-text font-bold" style={{ lineHeight: "1" }}>
                  that's exactly how Bitcoin felt to the first 100 who heard
                  about it.
                </p>
              </div>

              <div>
                <p className="vision-paragraph font-bold" style={{ lineHeight: "1" }}>
                  Built by a proven team. Running live on its own blockchain.
                  Millions already invested.
                </p>
                <p className="vision-gold-text font-bold" style={{ lineHeight: "1" }}>
                  This is already happening — with or without you.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="vision-image-box">
          <AnimateOnScroll delay={0.2}>
            <div className="vision-image-placeholder">
              <span className="vision-image-text">Pic</span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
