import { useState } from "react";
import AuthModal from "../components/AuthModal";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { Link as RouterLink } from "react-router-dom";
// Lazy load components that aren't immediately needed

export default function SignUpPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-32 py-12 md:py-20">
      {/* Founder's Circle Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 elegant-underline text-btb-gold">
            <div className="sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-2">
              <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">
                Be The Boss Founders Circle
              </span>
            </div>
          </h1>

          {/* START: wrapper with relative */}
          <div
            className="relative w-full p-5 flex flex-col md:flex-row items-start"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                This isn't a sales page. <br />
                <span className="text-btb-gold"> It's a warning. </span> <br />
                We're not opening the doors—we're cracking them. <br />
                And only the fast, the real, and the ready are getting in.{" "}
                <br />
                <span className="text-btb-gold">
                  Welcome to the BTB Founders Circle
                </span>
                — the no-fluff, skin-in-the-game launch program for bold players{" "}
                <br />
                ready to stake their claim in the <br />
                $180B+ social gaming industry.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                You don't need to know crypto.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                You don't need to know code.
              </p>
              <p className="text-xl md:text-2xl mb-6 md:mb-8 text-left text-btb-gold font-bold">
                You just need to move.
              </p>
            </div>

            {/* הקובייה שיוצאת למטה */}
            <div className="absolute right-[-20px] md:right-[-40px] -bottom-16 w-[496px] h-[366px] bg-[#726D6D] flex items-center justify-center text-white text-4xl font-bold">
              Pic
            </div>
          </div>
          {/* END wrapper */}
        </AnimateOnScroll>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-black/90 p-6 md:p-10 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* כותרת - מיושרת לשמאל ומרוכזת אנכית */}
                <div className="md:w-1/3 flex justify-start md:justify-center items-center">
                  <h2 className="text-[#D4AF37] font-bold text-2xl md:text-2xl whitespace-nowrap">
                    What Is This?
                  </h2>
                </div>

                {/* טקסט תוכן - מיושר לשמאל עם ירידות שורה מדויקות */}
                <div className="md:w-2/3 text-left text-white space-y-8 text-lg md:text-xl leading-relaxed">
                  <p className="whitespace-nowrap">
                    The Be The Boss (BTB) program gives you a fully branded,{" "}
                    <br />
                    Web3-powered social gaming platform — <br />
                    in your name, with your identity, <br />
                    earning YOU revenue.
                  </p>

                  <p>
                    No tech. <br />
                    No staff. <br />
                    No devs. <br />
                    <span className="text-[#D4AF37] font-bold">No slow.</span>
                  </p>

                  <p>
                    We're giving 250 founding partners <br />
                    the keys to launch their own money machine — <br />
                    a social gaming portal with multiple games, <br />
                    automated payments, <br />
                    and daily rev share. <br />
                    This isn't affiliate marketing. <br />
                    <span className="text-[#D4AF37] font-bold">
                      This is ownership.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Features Section - Lazy Loaded */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-black/90 p-6 md:p-10 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* כותרת - מיושרת לשמאל ומרוכזת אנכית */}
                <div className="md:w-1/3 flex flex-col items-center gap-6 justify-center">
                  <h2 className="text-[#D4AF37] font-bold text-2xl md:text-2xl whitespace-nowrap">
                    Who This Is For:
                  </h2>
                  <div className="w-[350px] h-[450px] bg-[#726D6D] flex items-center justify-center text-white text-4xl font-bold mr-8">
                    Pic
                  </div>
                </div>

                {/* טקסט תוכן - מיושר לשמאל עם ירידות שורה מדויקות */}
                <div className="md:w-2/3 text-left text-white space-y-8 text-lg md:text-xl leading-relaxed">
                  <p className="whitespace-nowrap">
                    🔥 Hustlers with an audience <br />
                    🔥 Creators, influencers, and affiliate killers <br />
                    🔥 Operators who want to skip building and just own
                  </p>

                  <p>
                    If you're ready to build a real income engine in a zero-BS,
                    high-reward space — this is your shot.
                  </p>

                  <h2 className="text-btb-gold text-2xl font-bold">
                    Why This Deal Is Crazy:
                  </h2>
                  <p>
                    Building this yourself? Costs $1M+ <br />
                    Licensing a white-label? $25K minimum <br />
                    Joining BTB? A fraction — if you act now.
                  </p>
                  <p>
                    There's no catch.
                    <br />
                    <span className="text-[#D4AF37] font-bold">
                      Just commitment.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <h1 className="sm:text-5xl md:text-3xl font-bold elegant-underline text-btb-gold text-left mb-0">
            Ready to Move?
          </h1>

          {/* START: wrapper with relative */}
          <div
            className="relative w-full p-5 flex flex-col md:flex-row items-start pb-9"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                You've seen the numbers. <br />
                You've seen the value.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                Launch Your Web3 Gaming Portal Now <br />
                Take control. <br />
                <span className="text-btb-gold font-bold">Be the boss.</span>
                <br />
                <span className=" font-bold">Start earning daily.</span>
              </p>
              <div className="flex justify-start mt-8">
                <RouterLink
                  to="/signup"
                  className="relative overflow-hidden group inline-block text-black px-8 py-4 rounded-lg  font-bold transition-all duration-500 hover:scale-105 bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg hover:shadow-xl animate-bounce-subtle border-2 border-btb-gold/50"
                >
                  <span className="text-[20px]">Take Me to My Spot! </span>
                </RouterLink>
              </div>
            </div>

            {/* הקובייה שיוצאת למטה */}
            <div className="absolute right-[-20px] md:right-[-130px] -bottom--10 w-[306px] h-[306px] bg-[#726D6D] flex items-center justify-center text-white text-4xl font-bold">
              Pic
            </div>
          </div>
          {/* END wrapper */}
        </AnimateOnScroll>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
            <img
              src="/your-image-path.png"
              alt="Graphic banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full max-w-9xl mx-auto">
            <div className="bg-black/90 p-6 md:p-10 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* כותרת */}
                <div className="flex-1 flex justify-start md:justify-center items-center">
                  <h2 className="text-[#D4AF37] font-bold text-2xl whitespace-nowrap">
                    Here's What You're Actually Getting:
                  </h2>
                </div>

                {/* טקסט תוכן */}
                <div className="flex-[2] text-left text-white space-y-8 text-lg md:text-xl">
                  <p>
                    No fluff. Just your empire, ready to launch.
                    <br />
                    🔹 <span className="font-bold">
                      Your Own Gaming Portal
                    </span>{" "}
                    — Fully branded, fully yours.
                    <br />
                    🔹{" "}
                    <span className="text-btb-gold font-bold">
                      50% Rev Share on Token Sales
                    </span>{" "}
                    — During presale, you get half of every G Coin purchase.
                    <br />
                    🔹{" "}
                    <span className="font-bold">
                      50% Rev Share on Game Fees
                    </span>{" "}
                    — Ongoing revenue every time your players play.
                    <br />
                    🔹{" "}
                    <span className="font-bold text-btb-gold">
                      No Tech Headaches — No devs.
                    </span>
                    <br />
                    🔹 <span className="font-bold">No integrations.</span> Just
                    plug & profit.
                    <br />
                    🔹{" "}
                    <span className="font-bold text-btb-gold">
                      Instant Setup
                    </span>{" "}
                    — Your portal goes live in minutes. Literally.
                    <br />
                    🔹{" "}
                    <span className="font-bold">Automated Daily Payouts</span> —
                    Earnings drop into your wallet every day at 12PM GMT.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-start ">
                <p>
                  <span className="font-bold text-btb-gold">Real Example</span>:
                  Player buys <span className="text-btb-gold">$500</span> of
                  tokens → You earn <span className="text-btb-gold">$250</span>{" "}
                  Instantly. <br />
                  They keep playing → You keep earning.
                  <br />
                  Some buy more. Some buy less. But you get 50% of every
                  purchase — no cap.
                </p>
              </div>
              <p className="text-btb-gold text-2xl">
                Now, imagine if you had just 1,000 players in a year . . .
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[#D4AF37] font-bold text-2xl md:text-2xl whitespace-nowrap text-left">
              How It Works (Step-by-Step):{" "}
            </h2>
            <div className="bg-black/90 p-6 md:p-10 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* כותרת - מיושרת לשמאל ומרוכזת אנכית */}
                <div className="md:w-1/3 flex flex-col items-center gap-6 justify-center">
                  <div className="w-[350px] h-[350px] bg-[#726D6D] flex items-center justify-center text-white text-4xl font-bold mr-8">
                    Pic
                  </div>
                </div>

                {/* טקסט תוכן - מיושר לשמאל עם ירידות שורה מדויקות */}
                <div className="md:w-2/3 text-left text-white space-y-8 text-lg md:text-xl leading-relaxed">
                  <p className="whitespace-nowrap">
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

                  <p className="font-bold text-center">
                    You're not promoting a brand.
                    <br /> You're building your own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section
        id="last-step"
        className="container mx-auto px-4 md:px-6 max-w-6xl"
      >
        <AnimateOnScroll>
          <p className="text-lg sm: md:text-2xl font-bold mb-4 text-left text-btb-gold">
            What You're Paying For (No Surprises): <br />
          </p>
          <p className="text-lg sm: md:text-2xl text-white text-left font-bold">
            ✅ One-time $1,000 setup <br />
            ✅ Lifetime access to the platform <br />
            ✅ No hidden fees. No monthly anything. <br />
            ✅ You get a full business in a box. <br />
          </p>

          <p className="text-lg sm: md:text-2xl font-bold text-left mb-9 text-btb-gold">
            This is a founders-level asset, not a toy.
            <br />
            Let's F*ing Go!
          </p>
          <div className="flex justify-start mt-8">
            <RouterLink
              to="/signup"
              className="relative overflow-hidden group inline-block text-black px-8 py-4 rounded-lg  font-bold transition-all duration-500 hover:scale-105 bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg hover:shadow-xl animate-bounce-subtle border-2 border-btb-gold/50"
            >
              <span className="text-[20px]">Take Me to My Spot! </span>
            </RouterLink>
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
