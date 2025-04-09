import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/HowItWorks.css";
import MattA2x2 from "../assets/MattA2x2.png";
const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <AnimateOnScroll>
        <div className="how-it-works-content">
          <h2 className="how-it-works-title">How It Works (Step-by-Step): </h2>
          <div className="how-it-works-box">
            <div className="how-it-works-flex">
              <div className="how-it-works-text">
                <p className="how-it-works-steps">
                  1. Connect Wallet — Takes 2 minutes. No KYC, no nonsense.
                  <br />
                  2. Pay One-Time $1,000 Setup — No subscriptions. No upsells.
                  <br />
                  3. Pick Your Portal Name — YourBrand.pvxpx.com style.
                  <br />
                  4. Go Live Instantly — Everything's done-for-you.
                  <br />
                  5. Drive Players — Use your audience, ads, or affiliates.
                  <br />
                  6. Get Paid — Daily. Automatically. Forever.
                </p>

                <p className="how-it-works-footer bold" style={{textAlign:"center"}}>
                  You're not promoting a brand.
                  <br />
                  <strong>You're building your own.</strong>
                </p>
              </div>

              <div className="how-it-works-image">
                <div className="how-it-works-image-box">
                  <img src={MattA2x2} alt="MattA2x2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default HowItWorks;
