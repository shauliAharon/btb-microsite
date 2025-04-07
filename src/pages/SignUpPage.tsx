import { useEffect, useState } from "react";
import AuthModal from "../components/AuthModal";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";
// Lazy load components that aren't immediately needed

export default function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  useEffect(() => {
    if (location.state?.openAuthModal) {
      setIsAuthModalOpen(true);
    }
  }, [location.state]);

  const handleSignupClick = () => {
    navigate("/signup", { state: { openAuthModal: true } });
  };
  return (
    <div className="signup-page">
      {/* Founder's Circle Section */}
      <section className="founders-circle">
        <AnimateOnScroll>
          <h1 className="founders-title">
            <div className="founders-title-container">
              <span className="founders-title-text">
                Be The Boss Founders Circle
              </span>
            </div>
          </h1>

          {/* START: wrapper with relative */}
          <div className="founders-content">
            <div className="founders-text">
              <p className="founders-paragraph">
                This isn't a sales page. <br />
                <span className="highlight"> It's a warning. </span> <br />
                We're not opening the doors—we're cracking them. <br />
                And only the fast, the real, and the ready are getting in.{" "}
                <br />
                <span className="highlight">
                  Welcome to the BTB Founders Circle
                </span>
                — the no-fluff, skin-in-the-game launch program for bold players{" "}
                <br />
                ready to stake their claim in the <br />
                $180B+ social gaming industry.
              </p>
              <p className="founders-paragraph">
                You don't need to know crypto.
              </p>
              <p className="founders-paragraph">You don't need to know code.</p>
              <p className="founders-paragraph-bold">You just need to move.</p>
            </div>

            {/* הקובייה שיוצאת למטה */}
            <div className="founders-image">Pic</div>
          </div>
          {/* END wrapper */}
        </AnimateOnScroll>
      </section>

      {/* What's Included Section */}
      <section className="whats-included">
        <AnimateOnScroll>
          <div className="graphic-banner">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="graphic-banner-image"
            />
          </div>

          <div className="whats-included-content">
            <div className="whats-included-box">
              <div className="whats-included-flex-row">
                <div className="whats-included-title-left">
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
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Features Section - Lazy Loaded */}
      <section className="features-section">
        <AnimateOnScroll>
          <div className="graphic-banner">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="graphic-banner-image"
            />
          </div>

          <div className="features-content">
            <div className="features-box">
              <div className="features-flex">
                <div className="features-left">
                  <h2 className="features-title-text">Who This Is For:</h2>
                  <div className="features-image">Pic</div>
                </div>

                <div className="features-text">
                  <p>
                    🔥 Hustlers with an audience <br />
                    🔥 Creators, influencers, and affiliate killers <br />
                    🔥 Operators who want to skip building and just own
                  </p>

                  <p>
                    <strong>
                      If you're ready to build a real income engine <br />
                      in a zero-BS, high-reward space — <br />
                      this is your shot.
                    </strong>
                  </p>

                  <h2 className="highlight">Why This Deal Is Crazy:</h2>
                  <p>
                    Building this yourself? Costs $1M+ <br />
                    Licensing a white-label? $25K minimum <br />
                    Joining BTB? A fraction — if you act now.
                  </p>
                  <p>
                    <strong>There's no catch.</strong>
                    <br />
                    <span className="highlight">Just commitment.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="ready-to-move">
        <AnimateOnScroll>
          <h1 className="ready-to-move-title">Ready to Move?</h1>

          {/* START: wrapper with relative */}
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
                <button className="signup-button" onClick={handleSignupClick}>
                  <span className="signup-button-text">
                    Take Me to My Spot!{" "}
                  </span>
                </button>
              </div>
            </div>

            {/* הקובייה שיוצאת למטה */}
            <div className="ready-to-move-image">Pic</div>
          </div>
          {/* END wrapper */}
        </AnimateOnScroll>
      </section>

      <section className="additional-info">
        <AnimateOnScroll>
          <div className="graphic-banner">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="graphic-banner-image"
            />
          </div>

          <div className="additional-info-content">
            <div className="additional-info-box">
              <div className="additional-info-flex">
                <div
                  className="additional-info-title"
                  style={{ flex: "0 0 30%" }}
                >
                  <h2 className="additional-info-title-text">
                    Here's What You're Actually Getting:
                  </h2>
                </div>
                <div className="additional-info-text" style={{ flex: "1" }}>
                  <p>
                    No fluff. Just your empire, ready to launch.
                    <br />
                    🔹 <span className="bold">Your Own Gaming Portal</span> —
                    Fully branded, fully yours.
                    <br />
                    🔹{" "}
                    <span className="highlight bold">
                      50% Rev Share on Token Sales
                    </span>
                    — During presale, you get half of every G Coin purchase.
                    <br />
                    🔹 <span className="bold">50% Rev Share on Game Fees</span>
                    — Ongoing revenue every time your players play.
                    <br />
                    🔹{" "}
                    <span className="highlight bold">
                      No Tech Headaches — No devs.
                    </span>
                    <br />
                    🔹 <span className="bold">No integrations.</span> Just plug
                    & profit.
                    <br />
                    🔹 <span className="highlight bold">Instant Setup</span> —
                    Your portal goes live in minutes. Literally.
                    <br />
                    🔹 <span className="bold">Automated Daily Payouts</span> —
                    Earnings drop into your wallet every day at 12PM GMT.
                  </p>
                </div>
              </div>
              <div className="additional-info-example">
                <p>
                  <span className="highlight bold">Real Example</span>: Player
                  buys <span className="highlight">$500</span> of tokens → You
                  earn <span className="highlight">$250</span> Instantly. <br />
                  They keep playing → You keep earning.
                  <br />
                  Some buy more. Some buy less. But you get 50% of every
                  purchase — no cap.
                </p>
              </div>
              <p className="highlight">
                Now, imagine if you had just 1,000 players in a year . . .
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="how-it-works">
        <AnimateOnScroll>
          <div className="how-it-works-content">
            <h2 className="how-it-works-title">
              How It Works (Step-by-Step):{" "}
            </h2>
            <div className="how-it-works-box">
              <div className="how-it-works-flex">
                {/* ריבוע התמונה */}
                <div className="how-it-works-image">
                  <div className="how-it-works-image-box">Pic</div>
                </div>

                {/* טקסט התוכן */}
                <div className="how-it-works-text">
                  <p className="how-it-works-steps">
                    1. Connect Wallet — Takes 2 minutes. No KYC, no nonsense.
                    <br />
                    2. Pay One-Time $1,000 Setup — No subscriptions. No upsells.
                    <br />
                    3. Pick Your Portal Name — YourBrand.pvxpx.com style.
                    <br />
                    4. Go Live Instantly — Everything's done-for-you.
                    <br />
                    5. Drive Players — Use your audience, ads, or affiliates.
                    <br />
                    6. Get Paid — Daily. Automatically. Forever.
                  </p>

                  <p className="how-it-works-footer bold">
                    You're not promoting a brand.
                    <br />
                    <strong>You're building your own.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section id="last-step" className="last-step">
        <AnimateOnScroll>
          <p className="last-step-title">
            What You're Paying For (No Surprises): <br />
          </p>
          <p className="last-step-text">
            ✅ One-time $1,000 setup <br />
            ✅ Lifetime access to the platform <br />
            ✅ No hidden fees. No monthly anything. <br />
            ✅ You get a full business in a box. <br />
          </p>

          <p className="last-step-highlight">
            This is a founders-level asset, not a toy.
            <br />
            Let's F*ing Go!
          </p>
          <div className="last-step-button">
            <button className="signup-button" onClick={handleSignupClick}>
              <span className="signup-button-text">Take Me to My Spot! </span>
            </button>
          </div>
        </AnimateOnScroll>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
