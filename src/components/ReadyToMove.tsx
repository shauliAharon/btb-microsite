import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Button from "./Button";
import "../styles/ReadyToMove.css";

interface ReadyToMoveProps {
  onSignupClick: () => void;
}

const ReadyToMove: React.FC<ReadyToMoveProps> = ({ onSignupClick }) => {
  return (
    <section className="ready-to-move">
      <AnimateOnScroll>
        <h1 className="ready-to-move-title">Ready to Move?</h1>

        <div className="ready-to-move-content">
          <div className="ready-to-move-text">
            <p className="ready-to-move-paragraph">
              You've seen the numbers. <br />
              You've seen the value.
            </p>
            <p className="ready-to-move-paragraph">
              Launch Your Web3 Gaming Portal Now <br />
              Take control. <br />
              <span className="highlight">Be the boss.</span>
              <br />
              <span className="bold">Start earning daily.</span>
            </p>
            <div className="ready-to-move-button">
              <Button variant="primary" size="lg" onClick={onSignupClick}>
                Take Me to My Spot!
              </Button>
            </div>
          </div>

          <div className="ready-to-move-image">Pic</div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ReadyToMove;
