import AnimateOnScroll from "../AnimateOnScroll";
import Button from "../Button";
import "./LastStepSection.css";
import faces2 from "../../assets/faces2.png";
interface LastStepSectionProps {
  onSignupClick: () => void;
}

export default function LastStepSection({
  onSignupClick,
}: LastStepSectionProps) {
  return (
    <section id="last-step" className="last-step-section">
      <AnimateOnScroll>
        <p className="main-text-bold">
          We get applications daily.
          <br />
          We reject most.
          <br />
          <span className="gold-text">
            Only a few earn a shot at the next level.
            <br />
            Will you make the cut?
          </span>
        </p>
        <p className="main-text-bold white-text">
          Hundreds have already applied.
          <br />
          We're only letting in the right few.
        </p>

        <p className="main-text-bold gold-text" style={{ fontSize: "26px" }}>
          What Comes Next?{" "}
        </p>
        <p className="main-text white-text">
          Step 1: Apply below.
          <br />
          Step 2: We review. We respond.
          <br />
          Step 3: If accepted, you receive the Founder's Package. One shot.
        </p>
      </AnimateOnScroll>
      <div className="steps-container">
        <div className="text-content">
          <AnimateOnScroll>
            <p className="main-text-bold white-text">
              This page will disappear.
              <br />
              The Founders will still be eating.
              <br />
              You'll be watching.
              <br />
              You bring the fire.
              <br />
              We bring the machine.
              <br />
              Let's F*ing Do It. <br />
              <span className="gold-text">Let'em talk.</span>
              <br />
              You click.{" "}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.8}>
            <div className="button-container">
              <Button variant="primary" size="lg" onClick={onSignupClick}>
                Hell Yes, I'm Claiming to My Spot!
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="imageContainer">
          <AnimateOnScroll delay={0.2}>
            <div className="imagePlaceholder">
              <img src={faces2} alt="faces1" className="imagePlaceholder" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
