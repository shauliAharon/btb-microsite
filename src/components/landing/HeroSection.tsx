import { ArrowDownIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "../AnimateOnScroll";
import { scrollToSection } from "../../utils/scrollUtils";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <AnimateOnScroll>
          <h1 className="hero-title">
            The doors are opening for a select few...
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="hero-subtitle">Are you one of them?</p>
        </AnimateOnScroll>
        <div className="hero-text-group">
          <AnimateOnScroll delay={0.3}>
            <p className="hero-text">We're not opening the doors.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <p className="hero-text">We're cracking them — just enough</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <p className="hero-text">
              for the next generation of digital owners.
            </p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll delay={0.4}>
          <h1 className="hero-cta">
            You're not here to play. You're here to win.
          </h1>
        </AnimateOnScroll>
      </div>
      <button
        onClick={() => scrollToSection("mission")}
        className="scroll-button"
      >
        <div className="hero-icon">
          <ArrowDownIcon className="scroll-icon" />
          <div className="scroll-shimmer" />
        </div>
      </button>
    </section>
  );
}
