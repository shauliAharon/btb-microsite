import AnimateOnScroll from "../AnimateOnScroll";
import "./LookingSection.css";

export default function LookingSection() {
  return (
    <section id="looking" className="container mx-auto px-4 md:px-6">
      <AnimateOnScroll delay={0.2}>
        <div className="looking-section">
          <div>
            <p className="looking-section-title">We're looking for:</p>
            <ul className="looking-section-list">
              <li>Builders</li>
              <li>Operators</li>
              <li>Owners</li>
            </ul>
          </div>

          <div>
            <p className="looking-section-text">
              There is a cost.
              <br />
              We'll talk price{" "}
              <span className="looking-section-text-bold">
                if you pass the first gate.
              </span>
            </p>
            <p className="looking-section-text looking-section-text-bold" style={{ marginTop: "1rem" }}>
              But, just so you get a taste of the best part
            </p>
            <p className="looking-section-text">
              Building this yourself? Costs $1M+. <br />
              Licensing from someone else? $25K minimum. <br />
              Joining{" "}
              <span className="looking-section-text-gold">
                Be The Boss
              </span>{" "}
              Founders Circle? A fraction—if you qualify.
              <br />
              If you flinch before qualifying? You already told us you don't
              belong.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
