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
              <p className="last-step-title-text">
                What You're Paying For (No Surprises):
              </p>
            </div>
          </div>
          <div className="last-step-right">
            <p className="last-step-text">
              ✅ One-time $1,000 setup <br />
              ✅ Lifetime access to the platform <br />
              ✅ No hidden fees. No monthly anything. <br />
              ✅ You get a full business in a box. <br />
            </p>

            <p className="last-step-highlight">
              This is a founders-level asset, not a toy.
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
