import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/WhatsIncluded.css";
import GnightStreet from "../assets/GnightStreet.png";

const WhatsIncluded: React.FC = () => {
  return (
    <section className="whats-included">
      <AnimateOnScroll>
        <div className="whats-included-content">
          <div className="whats-included-box">
            <div className="whats-included-flex-row">
              <div className="whats-included-title-left">
                <img
                  src={GnightStreet}
                  alt="GnightStreet"
                  className="whats-included-image desktop-only"
                />
                <h2 className="whats-included-title-text">What Is This?</h2>
              </div>

              <div className="whats-included-text-right">
                <p>
                  <span className="whats-included-text">
                    The Be The Boss (BTB) program gives you a fully branded,
                  </span>
                  <br />
                  Web3-powered social gaming platform — <br />
                  in your name, with your identity, <br />
                  earning YOU revenue.
                </p>

                <p>
                  No tech. <br />
                  No staff. <br />
                  No devs. <br />
                  <span className="highlight">No slow.</span>
                </p>

                <p>
                  We're giving 250 founding partners <br />
                  the keys to launch their own money machine — <br />
                  a social gaming portal with multiple games, <br />
                  automated payments, <br />
                  and daily rev share. <br />
                  This isn't affiliate marketing. <br />
                  <span className="highlight">This is ownership.</span>
                </p>
              </div>
            </div>
            <div className="mobile-image-container">
              <img
                src={GnightStreet}
                alt="GnightStreet"
                className="whats-included-image mobile-only"
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhatsIncluded;
