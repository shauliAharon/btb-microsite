import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-btb-gold to-white text-transparent bg-clip-text">
            Be The Boss
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            The doors are opening for a select few... Are you one of them?
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We're not opening the doors. We're cracking them — just enough for
            the next generation of digital owners.
          </p>
          <RouterLink
            to="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-btb-neon transition-colors"
          >
            I Know What This Is. Let Me In
          </RouterLink>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink
            to="mission"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <ArrowDownIcon className="w-8 h-8 text-btb-gold" />
          </ScrollLink>
        </motion.div>
      </section>

      {/* Mission Block */}
      <section id="mission" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">You're Here to Win</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            You're not here to play. You're here to win. Because deep down, you
            know you were built for more than paychecks, permission, and playing
            small.
          </p>
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <p className="text-xl text-gray-300">
              What if you could lock in a business that:
            </p>
            <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2">
              <li>Runs 24/7</li>
              <li>Rides the biggest digital wave of the decade</li>
              <li>Requires no code, no product, and no begging for clients</li>
            </ul>
            <p className="text-xl text-gray-300">
              What if you didn't just play the game — you OWNED the arena?
            </p>
            <p className="text-xl text-gray-300">
              This is no fluff. No "guru" fantasy. No recycled affiliate
              garbage. This is infrastructure — and it's real.
            </p>
            <p className="text-xl text-gray-300">
              Bitcoin had 2010. Ethereum had 2015. You can have 2025.
            </p>
          </div>
        </motion.div>
      </section>

      {/* BTB Intro Block */}
      <section id="intro" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Introducing: BTB — Be The Boss by Playbita
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This is not some affiliate gimmick. This is a full-scale
            Web3-powered social gaming empire — and you can own your slice.
            We've already built the engine. Your job? Drive it. Grow it.
            Dominate your territory. You're not buying a license. You're
            claiming digital turf.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                The Vision
              </h3>
              <p className="text-gray-300 mb-4">
                We're building the next-generation economy of social gaming +
                digital prestige:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Social games</li>
                <li>PvP sports picks</li>
                <li>Market trading sims</li>
                <li>Built-in token mechanics</li>
                <li>Quick, Automatic Payouts without delays</li>
                <li>
                  Prestige Economy System (status-based progression rolling out
                  soon)
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                This isn't a launch. It's a movement.
              </p>
              <p className="text-gray-300">
                If this feels too big, too early, or too unreal — that's exactly
                how Bitcoin felt to the first 100 who heard about it.
              </p>
              <p className="text-gray-300">
                Built by a proven team. Running live on its own blockchain.
                Millions already invested.
              </p>
              <p className="text-gray-300">
                This is already happening — with or without you.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                The Market
              </h3>
              <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
                <li>$19.7B Social Gaming market (2023)</li>
                <li>Projected $39.5B+ by 2028</li>
                <li>
                  Billions in revenue from platforms you've never heard of
                </li>
              </ul>
              <p className="text-gray-300">Governments can't stop Web3.</p>
              <p className="text-gray-300">
                Legacy finance can't play in this sandbox.
              </p>
              <p className="text-gray-300">
                This is for the ones ready to rewrite the rules.
              </p>
              <p className="text-gray-300">
                This isn't something you just click to buy.
              </p>
              <p className="text-gray-300">No checkout. No shortcut.</p>
              <p className="text-gray-300">
                You don't need to be the smartest or the richest.
              </p>
              <p className="text-gray-300">But you need iron will.</p>
              <p className="text-gray-300">
                The kind that builds, not begs. That executes, not complains.
              </p>
              <p className="text-gray-300">If that's you? Apply now.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Overview */}
      <section id="benefits" className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Runs 24/7",
              description: "Automated platform that never sleeps",
            },
            {
              title: "No Code Required",
              description: "No tech headaches, no devs needed",
            },
            {
              title: "Tokenized Economy",
              description: "Built-in token mechanics and automatic payouts",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Potential */}
      <section id="market" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">The Market Potential</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                $19.7B Market
              </h3>
              <p className="text-gray-300">Social Gaming market (2023)</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                $39.5B+ Projected
              </h3>
              <p className="text-gray-300">By 2028</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scarcity Section */}
      <section id="signup" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            The Package (If You Qualify)
          </h2>
          <p className="text-xl text-gray-300 mb-8">What you get:</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Multiple Verticals",
                description: "Casino-style, sports, financial games",
              },
              {
                title: "Full Backend System",
                description:
                  "Wallet system, player engine, funnels, creatives, brand assets",
              },
              {
                title: "Direct Earnings",
                description: "From every player you bring in",
              },
              {
                title: "Founder Benefits",
                description: "Founder-only access, bonuses, and tiered status",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/50 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <p className="text-xl text-gray-300 mt-8 text-center max-w-4xl">
              No coding. No crypto knowledge required. Just guts, hustle, and
              hunger. This isn't a playground. It's a launchpad for digital
              ownership. And this opportunity? It's not for sale. It's for the
              ones bold enough to take it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Scarcity Section */}
      <section id="signup" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">This Is Not For Everyone</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're not going wide. We're going tight. Invitation-only Founders
            Circle. Limited seats. Only the right profiles. If you've read this
            far, maybe you feel it. That edge. That hunger. That refusal to die
            average. You want in? Then prove it.
          </p>
          <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-btb-gold">
              Read This Before Applying
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              This isn't cheap. This isn't easy. This isn't a side hustle for
              the lazy. We've spent millions building this platform. We're
              building infrastructure for a new empire layer in the Web3
              economy.
            </p>
            <p className="text-xl text-gray-300 mb-4">We're looking for:</p>
            <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 mb-4">
              <li>Builders</li>
              <li>Operators</li>
              <li>Owners</li>
            </ul>
            <p className="text-xl text-gray-300">
              There is a cost. We'll talk price if you pass the first gate. But,
              just so you get a taste of the best part: Building this yourself?
              Costs $1M+. Licensing from someone else? $25K minimum. Joining BTB
              Founders Circle? A fraction—if you qualify. If you flinch before
              qualifying? You already told us you don't belong.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-xl text-gray-300">Most people will scroll.</p>
            <p className="text-xl text-gray-300">Few will apply.</p>
            <p className="text-xl text-gray-300">Fewer will get in.</p>
            <p className="text-xl text-gray-300">That's the point.</p>
            <p className="text-xl text-gray-300">This could be your moment.</p>
            <p className="text-xl text-gray-300">
              Miss it — and... well, you've been there before.
            </p>
          </div>
          <RouterLink
            to="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold mt-8 hover:bg-btb-neon transition-colors"
          >
            I Don't Need a Pitch. I Need In
          </RouterLink>
        </motion.div>
      </section>
    </div>
  );
}
