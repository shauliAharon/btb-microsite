import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import RegistrationForm from "../components/RegistrationForm";

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-8">
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
            <div className="bg-btb-gold/10 p-8 rounded-lg">
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
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Who This Is For:
          </h3>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-8">
            <li> Hustlers with an audience</li>
            <li> Creators, influencers, and affiliate killers</li>
            <li> Operators who want to skip building and just own</li>
          </ul>
          <p className="text-xl text-gray-300 mb-8">
            If you're ready to build a real income engine in a zero-BS,
            high-reward space — this is your shot.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        <p className="text-xl text-gray-300 text-center mb-8">
          No fluff. Just your empire, ready to launch.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              className="flex items-start space-x-4 bg-black/50 p-6 rounded-lg"
            >
              <CheckCircleIcon className="w-6 h-6 text-btb-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-xl text-gray-300">
            Real Example: Player buys $10,000 of tokens → You earn $5,000
            immediately. They keep playing → You keep earning.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works (Step-by-Step):
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect Wallet",
                description: "Takes 2 minutes. No KYC, no nonsense",
              },
              {
                step: "2",
                title: "Pay One-Time $1,000 Setup",
                description: "No subscriptions. No upsells",
              },
              {
                step: "3",
                title: "Pick Your Portal Name",
                description: "YourBrand.pvxpx.com style",
              },
              {
                step: "4",
                title: "Go Live Instantly",
                description: "Everything's done-for-you",
              },
              {
                step: "5",
                title: "Drive Players",
                description: "Use your audience, ads, or affiliates",
              },
              {
                step: "6",
                title: "Get Paid",
                description: "Daily. Automatically. Forever",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-btb-gold text-black rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-gray-300 mt-8 text-center">
            You're not promoting a brand. You're building your own.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Why Join Now?
          </h3>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-8">
            <li>
              This is the ground floor. You're not buying access, you're
              claiming territory.
            </li>
            <li>Only 250 spots available — and it closes when they're gone.</li>
            <li>
              Web3 gaming isn't coming — it's here. And you can own a piece of
              it.
            </li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-btb-gold">
            What You're Paying For (No Surprises):
          </h3>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-4">
            <li> One-time $1,000 setup</li>
            <li> Lifetime access to the platform</li>
            <li> No hidden fees. No monthly anything.</li>
            <li> You get a full business in a box.</li>
          </ul>
          <p className="text-xl text-gray-300">
            This is a founders-level asset, not a toy.
          </p>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section id="signup-form" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
