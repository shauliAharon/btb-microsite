import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Button from "./Button";
import "../styles/LastStep.css";
import MattA2 from "../assets/MattA2.png";

interface LastStepProps {
  onSignupClick: () => void;
}

const LastStep: React.FC<LastStepProps> = ({ onSignupClick }) => {
  return (
    <section id="last-step" className="last-step">
      <AnimateOnScroll>
        <div className="last-step-container">
          <div className="last-step-left">
            <div className="last-step-title">
              <p className="last-step-title-pic">
                <img src={MattA2} alt="MattA2" />
              </p>
            </div>
          </div>
          <div className="last-step-right">
            <p className="last-step-title-text last-step-title">
              What You're Paying For (No Surprises):
            </p>
            <div className="last-step-text">
              <AnimateOnScroll delay={0.2}>
                <div className="price-line">
                  <span className="check-icon">✅</span>
                  <span>One-time $1,000 setup</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.4}>
                <div className="price-line">
                  <span className="check-icon">✅</span>
                  <span>Lifetime access to the platform</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.6}>
                <div className="price-line">
                  <span className="check-icon">✅</span>
                  <span>No hidden fees. No monthly anything.</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.8}>
                <div className="price-line">
                  <span className="check-icon">✅</span>
                  <span>You get a full business in a box.</span>
                </div>
              </AnimateOnScroll>
            </div>

            <p className="last-step-highlight">
              This is a founders-level <br />
              asset, not a toy.
              <br />
              Let's F*ing Go!
            </p>
            <div className="last-step-button">
              <Button variant="primary" size="lg" onClick={onSignupClick}>
                Take Me to My Spot!
              </Button>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default LastStep;
