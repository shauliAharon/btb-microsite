import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/FoundersCircle.css";

const FoundersCircle: React.FC = () => {
  return (
    <section className="founders-circle">
      <AnimateOnScroll>
        <h1 className="founders-title">
          <div className="founders-title-container">
            <span className="founders-title-text">
              Be The Boss Founders Circle
            </span>
          </div>
        </h1>

        <div className="founders-content">
          <div className="founders-text">
            <p className="founders-paragraph">
              This isn't a sales page. <br />
              <span className="highlight"> It's a warning. </span> <br />
              We're not opening the doors—we're cracking them. <br />
              And only the fast, the real, and the ready are getting in. <br />
              <span className="highlight">
                Welcome to the BTB Founders Circle
              </span>
              — the no-fluff, skin-in-the-game launch program for bold players{" "}
              <br />
              ready to stake their claim in the <br />
              $180B+ social gaming industry.
            </p>
            <p className="founders-paragraph">You don't need to know crypto.</p>
            <p className="founders-paragraph">You don't need to know code.</p>
            <p className="founders-paragraph-bold">You just need to move.</p>
          </div>

          <div className="founders-image">Pic</div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default FoundersCircle;
