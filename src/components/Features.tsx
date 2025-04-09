import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Features.css";

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <AnimateOnScroll>
        <div className="graphic-banner">
          <img
            src="/your-image-path.png"
            alt="Graphic banner"
            className="graphic-banner-image"
          />
        </div>

        <div className="features-content">
          <div className="features-box">
            <div className="features-flex">
              <div className="features-left">
                <h2 className="features-title-text">Who This Is For:</h2>
                <div className="features-image">Pic</div>
              </div>

              <div className="features-text">
                <p>
                  🔥 Hustlers with an audience <br />
                  🔥 Creators, influencers, and affiliate killers <br />
                  🔥 Operators who want to skip building and just own
                </p>

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
