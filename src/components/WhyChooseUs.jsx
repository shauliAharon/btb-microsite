import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="why-choose-us-title">Why Choose Us</h2>
      <div className="why-choose-us-content">
        <div className="why-choose-us-text">
          <p className="why-choose-us-paragraph">
            At <span className="highlight">BTB</span>, we understand that every
            business is unique. That's why we offer{" "}
            <span className="bold">tailored solutions</span> designed to meet
            your specific needs and goals.
          </p>
          <p className="why-choose-us-paragraph">
            Our team of{" "}
            <span className="highlight">experienced professionals</span> brings
            years of industry knowledge and expertise to help your business
            thrive in today's competitive market.
          </p>
          <p className="why-choose-us-paragraph">
            We pride ourselves on delivering{" "}
            <span className="bold">exceptional results</span> and maintaining
            the highest standards of quality in everything we do.
          </p>
        </div>
        <div className="why-choose-us-image">
          <img src="/images/why-choose-us.jpg" alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
