import { useState, lazy, Suspense } from "react";
import AuthModal from "../components/AuthModal";
import RegistrationForm from "../components/RegistrationForm";
import AnimateOnScroll from "../components/AnimateOnScroll";

// Lazy load components that aren't immediately needed
const FeaturesSection = lazy(() => import("../components/FeaturesSection"));
const StepsSection = lazy(() => import("../components/StepsSection"));

interface RegistrationData {
  name: string;
  email: string;
  walletAddress: string;
}

export default function SignUpPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleRegistrationSubmit = (data: RegistrationData) => {
    console.log("Registration data:", data);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="space-y-16 md:space-y-32 py-12 md:py-20">
      {/* Founder's Circle Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 elegant-underline">
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
                  We’re giving 250 founding partners <br />
                  the keys to launch their own money machine — <br />
                  a social gaming portal with multiple games, <br />
                  automated payments, <br />
                  and daily rev share. <br />
                  This isn’t affiliate marketing. <br />
                  <span className="text-[#D4AF37] font-bold">
                    This is ownership.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Lazy Loaded */}
      <Suspense fallback={<div className="text-left">Loading features...</div>}>
        <FeaturesSection />
      </Suspense>

      {/* Steps Section - Lazy Loaded */}
      <Suspense fallback={<div className="text-left">Loading steps...</div>}>
        <StepsSection />
      </Suspense>

      {/* Sign Up Form Section */}
      <section
        id="signup-form"
        className="container mx-auto px-4 md:px-6 max-w-6xl"
      >
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto bg-black/50 p-6 md:p-12 rounded-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 text-center">
              Ready to Build Your Empire?
            </h2>
            <AnimateOnScroll delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                You've seen the numbers. You've seen the value. You're either in
                — or you're not. This page will disappear. The Founders will
                still be eating. You'll be watching. You bring the fire. We
                bring the machine. Let's F*ing Do It.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-center">
                Let 'em talk. You click.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.6}>
              <RegistrationForm onSubmit={handleRegistrationSubmit} />
            </AnimateOnScroll>
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
