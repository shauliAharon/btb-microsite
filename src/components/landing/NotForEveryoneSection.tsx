import AnimateOnScroll from "../AnimateOnScroll";
import "./NotForEveryoneSection.css";

export default function NotForEveryoneSection() {
  return (
    <section id="not-for-everyone" className="not-for-everyone-section">
      <div className="section-content">
        <div className="text-content">
          <AnimateOnScroll>
            <p className="gold-text">This Is Not For Everyone </p>
            <p className="white-text">
              We're not going wide. <br />
              We're going tight.
              <br />
              Invitation-only Founders Circle.
              <br />
              Limited seats. <br />
              Only the right profiles.
              <br />
              If you've read this far, maybe you feel it. <br />
              That edge. <br />
              That hunger. <br />
              That refusal to die average.{" "}
            </p>
            <p className="white-text-bold">You want in?</p>
            <p className="gold-text">Then prove it. </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="red-text">Read This Before Applying!</p>

            <p className="white-text">
              This isn't cheap. <br />
              This isn't easy. <br />
              This isn't a side hustle for the lazy. <br />
              We've spent millions building this platform. <br />
              We're building infrastructure for a new empire layer in the Web3
              economy.{" "}
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
