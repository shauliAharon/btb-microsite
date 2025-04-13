import AnimateOnScroll from "../AnimateOnScroll";
import "./VisionSection.css";
import MattA from "../../assets/MattA.png";

export default function VisionSection() {
  return (
    <>
      <section id="vision" className="vision-container">
        <div className="banner_vision">
          <AnimateOnScroll>
            <img src={MattA} alt="Graphic banner" />
          </AnimateOnScroll>
        </div>
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
                    <AnimateOnScroll delay={0.2}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> Social games
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.4}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> PvP sports
                        picks
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.6}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> Market
                        trading sims
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.8}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> Built-in
                        token mechanics
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={1.0}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> Quick,
                        Automatic Payouts without delays.
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={1.2}>
                      <p className="listItem">
                        <span style={{ color: "#d4af37" }}>◆</span> Prestige
                        Economy System (status-based progression rolling out
                        soon)
                      </p>
                    </AnimateOnScroll>
                  </div>
                </div>

                <div>
                  <p
                    className="vision-gold-text font-bold"
                    style={{ lineHeight: "1" }}
                  >
                    This isn't a launch. It's a movement.
                  </p>
                  <p className="vision-paragraph" style={{ lineHeight: "1" }}>
                    If this feels too big, too early, or too unreal —
                  </p>
                  <p
                    className="vision-gold-text font-bold"
                    style={{ lineHeight: "1" }}
                  >
                    that's exactly how Bitcoin felt to the first 100 who heard
                    about it.
                  </p>
                </div>

                <div>
                  <p
                    className="vision-paragraph font-bold"
                    style={{ lineHeight: "1" }}
                  >
                    Built by a proven team. Running live on its own blockchain.
                    Millions already invested.
                  </p>
                  <p
                    className="vision-gold-text font-bold"
                    style={{ lineHeight: "1" }}
                  >
                    This is already happening — with or without you.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
