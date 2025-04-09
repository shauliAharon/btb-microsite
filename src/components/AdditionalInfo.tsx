import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/AdditionalInfo.css";
import BTBhub from "../assets/BTBhub.jpg";
const AdditionalInfo: React.FC = () => {
  return (
    <section className="additional-info">
      <AnimateOnScroll>
        <div className="graphic-banner">
          <img
            src={BTBhub}
            alt="Graphic banner"
            className="graphic-banner-image"
          />
        </div>

        <div className="additional-info-content">
          <div className="additional-info-box">
            <div className="additional-info-flex">
              <div className="additional-info-title">
                <h2
                  className="additional-info-title-text"
                  style={{ color: "#d4af37" }}
                >
                  Here's What You're Actually Getting:
                </h2>
              </div>
              <div className="additional-info-text">
                <p>
                  No fluff. Just your empire, ready to launch.
                  <br />
                  🔹 <span className="bold">Your Own Gaming Portal</span> —
                  Fully branded, fully yours.
                  <br />
                  🔹{" "}
                  <span className="highlight bold">
                    50% Rev Share on Token Sales
                  </span>
                  — During presale, you get half of every G Coin purchase.
                  <br />
                  🔹 <span className="bold">50% Rev Share on Game Fees</span>
                  — Ongoing revenue every time your players play.
                  <br />
                  🔹{" "}
                  <span className="highlight bold">
                    No Tech Headaches — No devs.
                  </span>
                  <br />
                  🔹 <span className="bold">No integrations.</span> Just plug &
                  profit.
                  <br />
                  🔹 <span className="highlight bold">Instant Setup</span> —
                  Your portal goes live in minutes. Literally.
                  <br />
                  🔹 <span className="bold">Automated Daily Payouts</span> —
                  Earnings drop into your wallet every day at 12PM GMT.
                </p>
              </div>
            </div>
            <div className="additional-info-example">
              <p>
                <span className="highlight bold">Real Example</span>: Player
                buys <span className="highlight">$500</span> of tokens → You
                earn <span className="highlight">$250</span> Instantly. <br />
                They keep playing → You keep earning.
                <br />
                Some buy more. Some buy less. But you get 50% of every purchase
                — no cap.
              </p>
            </div>
            <p style={{ color: "#d4af37" }}>
              Now, imagine if you had just 1,000 players in a year . . .
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default AdditionalInfo;
