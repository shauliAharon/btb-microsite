import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
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
            <div className="sm:flex sm:flex-row sm:justify-start sm:items-center sm:space-x-2">
              <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">
                Be The Boss Founders
              </span>
              <span className="block text-center sm:inline whitespace-normal">
                Circle
              </span>
            </div>
          </h1>
          <div className="w-full">
            <AnimateOnScroll delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                This isn't a sales page. It's a warning. We're not opening the
                doors—we're cracking them. And only the fast, the real, and the
                ready are getting in.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                Welcome to the BTB Founders Circle — the no-fluff,
                skin-in-the-game launch program for bold players ready to stake
                their claim in the $180B+ social gaming industry. You don't need
                to know crypto. You don't need to know code. You just need to
                move.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.6}>
              <div className="p-6 md:p-8 rounded-lg bg-black/50">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
                  $1,000 One-Time Investment
                </h2>
                <p className="text-lg md:text-xl text-gray-300 text-center">
                  Building this yourself? Costs $1M+. Licensing from someone
                  else? $25K minimum. Joining BTB Founders Circle? A fraction—if
                  you qualify.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </section>

      {/* BTB Intro Block */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll delay={0.5}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 text-left">
              Introducing: BTB — Be The Boss by Playbita
            </h2>
            <div className="bg-black/50 p-6 md:p-8 rounded-lg">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
                This is not some affiliate gimmick. This is a full-scale
                Web3-powered social gaming empire — and you can own your slice.
                We've already built the engine. Your job? Drive it. Grow it.
                Dominate your territory. You're not buying a license. You're
                claiming digital turf.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
            What Is This?
          </h2>
        </AnimateOnScroll>
        <div className="max-w-4xl mx-auto mb-8 md:mb-12 p-6 md:p-8 rounded-lg bg-black/50">
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              The Be The Boss (BTB) program gives you a fully branded,
              Web3-powered social gaming platform — in your name, with your
              identity, earning YOU revenue. No tech. No staff. No devs. No
              slow.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              We're giving 250 founding partners the keys to launch their own
              money machine — a social gaming portal with multiple games,
              automated payments, and daily rev share. This isn't affiliate
              marketing. This is ownership.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-lg bg-black/50 mb-8 md:mb-10">
          <AnimateOnScroll delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
              Who This Is For:
            </h3>
            <ul className="text-xl md:text-2xl text-gray-300 list-disc pl-6 md:pl-8 space-y-3 md:space-y-4 mb-6 md:mb-8 text-left">
              <li>Hustlers with an audience</li>
              <li>Creators, influencers, and affiliate killers</li>
              <li>Operators who want to skip building and just own</li>
            </ul>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              If you're ready to build a real income engine in a zero-BS,
              high-reward space — this is your shot.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="max-w-4xl mx-auto mb-8 md:mb-12 p-6 md:p-8 rounded-lg bg-black/50">
          <AnimateOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
              Why This Deal Is Crazy:
            </h3>
            <ul className="text-xl md:text-2xl text-gray-300 list-disc pl-6 md:pl-8 space-y-3 md:space-y-4 mb-6 md:mb-8 text-left">
              <li>Building this yourself? Costs $1M+</li>
              <li>Licensing a white-label? $25K minimum</li>
              <li>Joining BTB? A fraction — if you qualify.</li>
            </ul>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              There's no catch. Just commitment.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="max-w-4xl mx-auto mb-8 md:mb-12 p-6 md:p-8 rounded-lg bg-black/50">
          <AnimateOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
              Ready to Move?
            </h3>
                      </AnimateOnScroll>

            <p className="text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 text-left">
              You've seen the numbers.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 text-left">
              You've seen the value.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              You're either in — or you're not.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
              Launch Your Web3 Gaming Portal Now
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
              Take control. Be the boss. Start earning daily.
            </p>
        </div>
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
            You're In — Here's What You're Actually Getting:
          </h2>
        </AnimateOnScroll>
        <div className="flex justify-start">
          <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-left">
            No fluff. Just your empire, ready to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto p-4 md:p-8 rounded-lg">
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-start space-x-3 md:space-x-4 bg-black/50 p-4 md:p-6 rounded-lg"
            >
              <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-btb-gold flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-6 md:mt-8">
          <p className="text-xl md:text-2xl text-gray-300 text-left">
            Real Example: Player buys $10,000 of tokens → You earn $5,000
            immediately. They keep playing → You keep earning.
          </p>
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
