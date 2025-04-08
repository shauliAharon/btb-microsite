import AnimateOnScroll from "../AnimateOnScroll";
import pic2 from "../../assets/pic2.jpeg";
import "./IntroSection.css";

export default function IntroSection() {
  return (
    <section id="intro">
      <AnimateOnScroll>
        <div className="banner">
          <img src="/your-image-path.png" alt="Graphic banner" />
        </div>

        <h1>Introducing: BTB — Be The Boss by Playbita</h1>
        <div className="content">
          <div className="left">
            <p>This is not some affiliate gimmick.</p>
            <p className="gold bold">
              <span className="normal">This is a</span> full-scale Web3-powered
              social gaming empire —
            </p>
            <p style={{ paddingBottom: "30px" }}>and you can own your slice.</p>

            <p>We've already built the engine.</p>
            <p className="gold bold">Your job?</p>
            <p className="gold">Drive it. Grow it. Dominate your territory.</p>
            <p>You're not buying a license.</p>
            <p className="bold">You're claiming digital turf.</p>
          </div>

          <div className="right">
            <div className="image-wrapper">
              <img src={pic2} alt="Hero" />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
