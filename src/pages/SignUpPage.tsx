import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState, lazy, Suspense } from "react";
import AuthModal from "../components/AuthModal";
import RegistrationForm from "../components/RegistrationForm";

// Lazy load components that aren't immediately needed
const FeaturesSection = lazy(() => import("../components/FeaturesSection"));
const StepsSection = lazy(() => import("../components/StepsSection"));

export default function SignUpPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleRegistrationSubmit = (formData: {
    name: string;
    email: string;
    walletAddress: string;
  }) => {
    // Handle the form submission here
    console.log("Form submitted:", formData);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="space-y-32 py-20">
      {/* Founder's Circle Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-8 text-btb-gold">
            Be The Boss Founders Circle
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              This isn't a sales page. It's a warning. We're not opening the
              doors—we're cracking them. And only the fast, the real, and the
              ready are getting in.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Welcome to the BTB Founders Circle — the no-fluff,
              skin-in-the-game launch program for bold players ready to stake
              their claim in the $180B+ social gaming industry. You don't need
              to know crypto. You don't need to know code. You just need to
              move.
            </p>
            <div className="p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-btb-gold">
                $1,000 One-Time Investment
              </h2>
              <p className="text-xl text-gray-300">
                Building this yourself? Costs $1M+. Licensing from someone else?
                $25K minimum. Joining BTB Founders Circle? A fraction—if you
                qualify.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Is This?</h2>
        <div className="max-w-3xl mx-auto text-center mb-12 p-8 rounded-lg">
          <p className="text-xl text-gray-300 mb-8">
            The Be The Boss (BTB) program gives you a fully branded,
            Web3-powered social gaming platform — in your name, with your
            identity, earning YOU revenue. No tech. No staff. No devs. No slow.
          </p>
          <p className="text-xl text-gray-300 mb-8">
            We're giving 250 founding partners the keys to launch their own
            money machine — a social gaming portal with multiple games,
            automated payments, and daily rev share. This isn't affiliate
            marketing. This is ownership.
          </p>
        </div>
        <div className="max-w-3xl mx-auto p-8 rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Who This Is For:
          </h3>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-8">
            <li>Hustlers with an audience</li>
            <li>Creators, influencers, and affiliate killers</li>
            <li>Operators who want to skip building and just own</li>
          </ul>
          <p className="text-xl text-gray-300 mb-8">
            If you're ready to build a real income engine in a zero-BS,
            high-reward space — this is your shot.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Why This Deal Is Crazy:
          </h3>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-8">
            <li>Building this yourself? Costs $1M+</li>
            <li>Licensing a white-label? $25K minimum</li>
            <li>Joining BTB? A fraction — if you qualify.</li>
          </ul>
          <p className="text-xl text-gray-300 mb-8">
            There's no catch. Just commitment.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Ready to Move?
          </h3>
          <p className="text-xl text-gray-300 mb-4">You've seen the numbers.</p>
          <p className="text-xl text-gray-300 mb-4">You've seen the value.</p>
          <p className="text-xl text-gray-300 mb-8">
            You're either in — or you're not.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Launch Your Web3 Gaming Portal Now
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Take control. Be the boss. Start earning daily.
          </p>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">
          You're In — Here's What You're Actually Getting:
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-xl text-gray-300 text-center mb-8">
            No fluff. Just your empire, ready to launch.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-6 p-8 rounded-lg">
          {[
            {
              title: "Your Own Gaming Portal",
              description: "Fully branded, fully yours",
            },
            {
              title: "50% Rev Share on Token Sales",
              description:
                "During presale, you get half of every G Coin purchase",
            },
            {
              title: "50% Rev Share on Game Fees",
              description: "Ongoing revenue every time your players play",
            },
            {
              title: "No Tech Headaches",
              description: "No devs. No integrations. Just plug & profit",
            },
            {
              title: "Instant Setup",
              description: "Your portal goes live in minutes. Literally",
            },
            {
              title: "Automated Daily Payouts",
              description:
                "Earnings drop into your wallet every day at 12PM GMT",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-black/50 p-4 sm:p-6 rounded-lg"
            >
              <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-btb-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8 text-center ">
          <p className="text-xl text-gray-300">
            Real Example: Player buys $10,000 of tokens → You earn $5,000
            immediately. They keep playing → You keep earning.
          </p>
        </div>
      </section>

      {/* Features Section - Lazy Loaded */}
      <Suspense
        fallback={<div className="text-center">Loading features...</div>}
      >
        <FeaturesSection />
      </Suspense>

      {/* Steps Section - Lazy Loaded */}
      <Suspense fallback={<div className="text-center">Loading steps...</div>}>
        <StepsSection />
      </Suspense>

      {/* Sign Up Form Section */}
      <section
        id="signup-form"
        className="container mx-auto px-4 p-8 rounded-lg"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto bg-black/50 p-12 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You've seen the numbers. You've seen the value. You're either in —
            or you're not. This page will disappear. The Founders will still be
            eating. You'll be watching. You bring the fire. We bring the
            machine. Let's F*ing Do It.
          </p>
          <p className="text-xl text-gray-300 mb-8">Let 'em talk. You click.</p>
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </motion.div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
