import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 gradient-shimmer elegant-underline">
            Be The Boss
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-gray-300 max-w-4xl mx-auto">
            The doors are opening for a select few... Are you one of them?
          </p>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-4xl mx-auto">
            We're not opening the doors. We're cracking them — just enough for
            the next generation of digital owners.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              document
                .getElementById("mission")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            <ArrowDownIcon className="w-10 h-10 text-btb-gold" />
          </button>
        </div>
      </section>

      {/* Mission Block */}
      <section
        id="mission"
        className="container mx-auto px-6 p-12 rounded-lg max-w-6xl"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            You're Here to Win
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            You're not here to play. You're here to win. Because deep down, you
            know you were built for more than paychecks, permission, and playing
            small.
          </p>
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <p className="text-2xl text-gray-300">
              What if you could lock in a business that:
            </p>
            <ul className="text-2xl text-gray-300 list-disc pl-8 space-y-4">
              <li>Runs 24/7</li>
              <li>Rides the biggest digital wave of the decade</li>
              <li>Requires no code, no product, and no begging for clients</li>
            </ul>
            <p className="text-2xl text-gray-300 text-left">
              What if you didn't just play the game — you OWNED the arena?
            </p>
            <p className="text-2xl text-gray-300 text-left">
              This is no fluff. No "guru" fantasy. No recycled affiliate
              garbage. This is infrastructure — and it's real.
            </p>
            <p className="text-2xl text-gray-300 text-left">
              Bitcoin had 2010. Ethereum had 2015. You can have 2025.
            </p>
          </div>
          <RouterLink
            to="/signup"
            className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
          >
            <span>I Know What This Is. Let Me In</span>
          </RouterLink>
        </div>
      </section>

      {/* BTB Intro Block */}
      <section
        id="intro"
        className="container mx-auto px-6 p-12 rounded-lg max-w-6xl"
      >
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Introducing: BTB — Be The Boss by Playbita
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            This is not some affiliate gimmick. This is a full-scale
            Web3-powered social gaming empire — and you can own your slice.
            We've already built the engine. Your job? Drive it. Grow it.
            Dominate your territory. You're not buying a license. You're
            claiming digital turf.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
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
            <div key={index} className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 text-btb-gold">
                {benefit.title}
              </h3>
              <p className="text-xl text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Potential */}
      <section
        id="market"
        className="container mx-auto px-6 p-12 rounded-lg max-w-6xl"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            The Market Potential
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 text-btb-gold">
                $19.7B Market
              </h3>
              <p className="text-xl text-gray-300">
                Social Gaming market (2023)
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 text-btb-gold">
                $39.5B+ Projected
              </h3>
              <p className="text-xl text-gray-300">By 2028</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section
        id="signup"
        className="container mx-auto px-6 p-12 rounded-lg max-w-6xl"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            The Package (If You Qualify)
          </h2>
          <p className="text-2xl text-gray-300 mb-12">What you get:</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
              <div key={index} className="bg-black/50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-btb-gold">
                  {benefit.title}
                </h3>
                <p className="text-xl text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <p className="text-2xl text-gray-300 mt-12 text-center max-w-5xl">
              No coding. No crypto knowledge required. Just guts, hustle, and
              hunger. This isn't a playground. It's a launchpad for digital
              ownership. And this opportunity? It's not for sale. It's for the
              ones bold enough to take it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            This Is Not For Everyone
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            We're not going wide. We're going tight. Invitation-only Founders
            Circle. Limited seats. Only the right profiles. If you've read this
            far, maybe you feel it. That edge. That hunger. That refusal to die
            average. You want in? Then prove it.
          </p>
          <RouterLink
            to="/signup"
            className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
          >
            <span>I Don't Need a Pitch. I Need In</span>
          </RouterLink>
        </div>
      </section>
    </div>
  );
}
