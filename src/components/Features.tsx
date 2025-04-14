import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Features.css";
import pack from "../assets/pack.png";
const Features: React.FC = () => {
  return (
    <section className="features-section">
      <AnimateOnScroll>
        <div className="features-content">
          <div className="features-box">
            <h2 className="features-title-text mobile-only">
              Who This Is For:
            </h2>
            <div className="features-flex">
              <div className="features-left">
                <h2 className="features-title-text desktop-only">
                  Who This Is For:
                </h2>
                <div className="features-image">
                  <img className="features-image-pic" src={pack} alt="pack" />
                </div>
              </div>

              <div className="features-text">
                <div className="feature-list">

                  <AnimateOnScroll delay={0.1}>
                  <div className="feature-item">
                    <span className="feature-icon">🔥</span>
                    <span className="feature-content">
                      Hustlers with an audience
                      </span>
                  </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                  <div className="feature-item">
                      <span className="feature-icon">🔥</span>
                    <span className="feature-content">
                        Creators, influencers, and affiliate killers
                      </span>
                  </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.3}>
                  <div className="feature-item">
                      <span className="feature-icon">🔥</span>
                    <span className="feature-content">
                        Operators who want to skip building and just own
                      </span>
                  </div>
                    </AnimateOnScroll>
                </div>

                <p>
                  <strong>
                    If you're ready to build a real income engine <br />
                    in a zero-BS, high-reward space — <br />
                    this is your shot.
                  </strong>
                </p>

                <h2 className="highlight">Why This Deal Is Crazy:</h2>
                <p>
                  Building this yourself? Costs $1M+ <br />
                  Licensing a white-label? $25K minimum <br />
                  Joining BTB? A fraction — if you act now.
                </p>
                <p>
                  <strong>There's no catch.</strong>
                  <br />
                  <span className="highlight">Just commitment.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Features;
