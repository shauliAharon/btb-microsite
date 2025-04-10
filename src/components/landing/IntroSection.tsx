import AnimateOnScroll from "../AnimateOnScroll";
import "./IntroSection.css";
import LP2 from "../../assets/LP2.jpg";

export default function IntroSection() {
  return (
    <section id="intro">
      <AnimateOnScroll>
        <h1>Introducing: BTB — Be The Boss by Playbita</h1>
        <div className="content">
          <div className="left">
            <p>This is not some affiliate gimmick.</p>
            <p className="gold bold">
              <span className="normal">This is a</span> full-scale Web3-powered
              social gaming empire <span className="normal">—</span>
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
              <img src={LP2} alt="Hero" />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
