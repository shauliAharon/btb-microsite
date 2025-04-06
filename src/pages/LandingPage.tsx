import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link as RouterLink } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function LandingPage() {
  return (
    <div className="space-y-16 md:space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-x-hidden"
      >
        <div className="text-center px-4 max-w-[90vw] mx-auto">
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[60px] font-bold mb-12 text-white text-center whitespace-nowrap">
              The doors are opening for a select few...
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl md:text-3xl mb-12 text-btb-gold mx-auto text-center italic font-bold text-gradient">
              Are you one of them?
            </p>
          </AnimateOnScroll>
          <div className="flex flex-col items-center space-y-2 mb-16">
            <AnimateOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-btb-gold mx-auto text-center">
                We're not opening the doors.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-btb-gold mx-auto text-center">
                We're cracking them — just enough
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="text-xl md:text-2xl text-btb-gold mx-auto text-center">
                for the next generation of digital owners.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-6 text-white text-center whitespace-nowrap">
              You're not here to play. You're here to win.
            </h1>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              document
                .getElementById("mission")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer group"
          >
            <div className="relative">
              <ArrowDownIcon className="w-8 h-8 text-btb-gold animate-float" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shimmer" />
            </div>
          </button>
        </div>
      </section>

      {/* Mission Block */}
      <section id="mission" className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side: Text */}
            <div className="flex-1">
              <p className="text-xl md:text-3xl text-gray-300 mb-6 md:mb-8 text-left whitespace-nowrap">
                Because deep down, you know you were built for more than
                paychecks,
                <br /> permission, and playing small.
              </p>

              <div className="space-y-6">
                <AnimateOnScroll delay={0.3}>
                  <p className="text-xl md:text-3xl text-left text-btb-gold font-bold whitespace-nowrap">
                    What if you could lock in a business that:
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.4}>
                  <div className="text-xl md:text-2xl space-y-3 md:space-y-4 text-left">
                    <p className="text-gray-300 md:text-2xl">Runs 24/7</p>
                    <p className="text-gray-300 md:text-2xl">
                      Rides the biggest digital wave of the decade
                    </p>
                    <p className="text-gray-300 whitespace-nowrap md:text-2xl">
                      Requires no code, no product, and no begging for clients
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.5}>
                  <p className="text-xl md:text-3xl text-left text-btb-gold font-bold whitespace-nowrap md:text-2xl">
                    What if you didn't just play the game — you OWNED the arena?
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.6}>
                  <div className="text-xl md:text-2xl text-gray-300 text-left space-y-1">
                    <p className="md:text-2xl">This is no fluff.</p>
                    <p className="md:text-2xl">No "guru" fantasy.</p>
                    <p className="md:text-2xl">
                      No recycled affiliate garbage.
                    </p>
                    <p className="whitespace-nowrap md:text-2xl">
                      This is infrastructure — and it's real.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.7}>
                  <div className="text-btb-gold text-left text-xl md:text-2xl space-y-1">
                    <p className="md:text-2xl">Bitcoin had 2010...</p>
                    <p className="md:text-2xl">Ethereum had 2015...</p>
                    <p className="font-bold md:text-2xl">You can have 2025!</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.8}>
                  <div className="flex justify-start mt-8">
                    <RouterLink
                      to="/signup"
                      className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
                    >
                      <span>Got it. Let me In Now!</span>
                    </RouterLink>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="flex-shrink-0 w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <img
                  src="/your-image-path.png" // ← תחליף כאן את הנתיב שלך
                  alt="Hero character"
                  className="rounded-lg w-[550px] h-[550px]  bg-gray-500"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* BTB Intro Block */}
      <section id="intro" className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img src="/your-image-path.png" alt="Graphic banner" />
        </div>

        <div className="space-y-8">
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-6 text-white text-center whitespace-nowrap">
              Introducing: BTB — Be The Boss by Playbita
            </h1>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  This is not some affiliate gimmick.
                </p>
                <p className="text-xl md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  This is a full-scale Web3-powered social gaming empire —
                </p>
                <p className="text-xl md:text-2xl text-white mb-14 text-left">
                  and you can own your slice.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  We've already built the engine.
                </p>
                <p className="text-xl md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  Your job?
                </p>
                <p className="text-xl md:text-2xl text-btb-gold mb-4 text-left">
                  Drive it. Grow it. Dominate your territory.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  You're not buying a license.
                </p>
                <p className="text-xl md:text-2xl text-white font-bold text-left">
                  You're claiming digital turf.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="flex-shrink-0 w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <div className="rounded-lg w-[450px] h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col md:flex-row items-start gap-12">
          <div
            className=" w-[1100px] p-6"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <AnimateOnScroll>
              <h2 className="text-[40px] font-bold mb-6 text-white text-left">
                The Vision
              </h2>
              <div className="space-y-6 w-[1200px] ">
                <div>
                  <p className="text-xl md:text-2xl text-white mb-4">
                    We're building the{" "}
                    <span className="text-white font-bold">
                      next-generation economy{" "}
                    </span>{" "}
                    of social gaming + digital prestige:{" "}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xl text-white [&>li::before]:content-['•'] [&>li::before]:text-white [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                    <li>Social games</li>
                    <li>PvP sports picks</li>
                    <li>Market trading sims</li>
                    <li>Built-in token mechanics</li>
                    <li>Quick, Automatic Payouts without delays.</li>
                    <li>
                      Prestige Economy System (status-based progression rolling
                      out soon)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-btb-gold font-bold text-left">
                    This isn't a launch. It's a movement.
                  </p>
                  <p className="text-xl text-white text-left">
                    If this feels too big, too early, or too unreal —
                  </p>
                  <p className="text-xl text-btb-gold text-left">
                    that's exactly how Bitcoin felt to the first 100 who heard
                    about it.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-xl text-white text-left">
                    Built by a proven team. Running live on its own blockchain.
                    Millions already invested.
                  </p>
                  <p className="text-xl text-btb-gold text-left">
                    This is already happening — with or without you.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="md:absolute md:right-0 md:top-0 flex-shrink-0 w-[550px]">
            <AnimateOnScroll delay={0.2}>
              <div className="rounded-lg w-[230px] h-[650px] bg-gray-500 flex items-center justify-center ml-auto">
                <span className="text-white text-6xl">Pic</span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/*The Market */}
      <section id="intro" className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img src="/your-image-path.png" alt="Graphic banner" />
        </div>

        <div className=" w-[1100px] p-6" style={{ backgroundColor: "#1A1A1A" }}>
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-6 text-white whitespace-nowrap text-left">
              The Market
            </h1>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <ul className="list-disc pl-6 space-y-2 text-xl text-white [&>li::before]:content-['•'] [&>li::before]:text-white [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                  <li>$19.7B Social Gaming market (2023)</li>
                  <li>Projected $39.5B+ by 2028</li>
                  <li>
                    Billions in revenue from platforms you've never heard of
                  </li>
                </ul>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  Governments can't stop Web3.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  Legacy finance can't play in this sandbox.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  This is for the ones ready to rewrite the rules.
                </p>
                <p className="text-xl md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  This isn't something you just click to buy.
                </p>

                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  No checkout.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  No shortcut.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  You don't need to be the smartest or the richest.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  But you need <span className="text-btb-gold">iron will</span>.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  The kind that builds, not begs.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  That executes, not complains.
                </p>
                <p className="text-xl md:text-2xl text-white mb-4 text-left">
                  If that's you?{" "}
                  <span className="text-btb-gold">Apply now</span>.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        <AnimateOnScroll delay={0.8}>
          <div className="flex justify-start mt-8">
            <RouterLink
              to="/signup"
              className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
            >
              <span>Got it. Let me In Now!</span>
            </RouterLink>
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Package */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex-shrink-0 w-[300px]">
            <AnimateOnScroll delay={0.2}>
              <div className="rounded-lg w-[230px] h-[850px] bg-gray-500 flex items-center justify-center">
                <span className="text-white text-6xl">Pic</span>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="flex-1 p-6">
            <AnimateOnScroll>
              <p className="text-left italic">
                Most people will scroll.
                <br /> Few will apply.
                <br /> Fewer will get in.
                <br />
                That’s the point. This could be your moment.
              </p>
              <p className="text-left text-btb-gold text-xl md:text-2xl font-bold italic">
                Miss it — and... well, you've been there before.
              </p>
              <div
                className="space-y-6 p-6"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <div>
                  <p className="text-xl md:text-2xl text-btb-gold mb-4 text-left">
                    The Package (If You Qualify in time)
                  </p>
                  <p className="text-xl md:text-2xl text-white font-bold mb-4 text-left">
                    What you get:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xl text-white [&>li::before]:content-['•'] [&>li::before]:text-white [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                    <li>
                      Multiple verticals (casino-style, sports, financial)
                    </li>
                    <li>Full backend, wallet system, player engine</li>
                    <li>Funnels, creatives, brand assets</li>
                    <li>Direct earning from every player you bring in</li>
                    <li>Founder-only access, bonuses, and tiered status</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-xl md:text-1xl text-left">
                    No coding.
                    <br /> No crypto knowledge required.
                    <br /> Just guts, hustle, and hunger.
                  </p>
                  <p className="text-xl text-white text-left font-bold">
                    This isn’t a playground.
                  </p>
                  <p className="text-xl text-btb-gold text-left font-bold">
                    It’s a launchpad for digital ownership.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-xl text-white text-left font-bold">
                    And this opportunity? It’s not for sale.
                  </p>
                  <p className="text-xl text-btb-gold text-left font-bold">
                    It’s for the ones bold enough to take it.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section id="intro" className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <p className="text-xl md:text-2xl font-bold mb-4 text-left text-btb-gold">
                  This Is Not For Everyone{" "}
                </p>
                <p className="text-xl md:text-2xl text-white text-left">
                  We’re not going wide. <br />
                  We’re going tight.
                  <br />
                  Invitation-only Founders Circle.
                  <br />
                  Limited seats. <br />
                  Only the right profiles.
                  <br />
                  If you’ve read this far, maybe you feel it. <br />
                  That edge. <br />
                  That hunger. <br />
                  That refusal to die average.{" "}
                </p>
                <p className="text-xl md:text-2xl font-bold text-left ">
                  You want in?
                </p>
                <p className="text-xl md:text-2xl font-bold text-left mb-9 text-btb-gold">
                  Then prove it.{" "}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-xl md:text-2xl text-red-500 font-bold mb-4 text-left">
                  Read This Before Applying!
                </p>

                <p className="text-xl md:text-2xl mb-4 text-left">
                  This isn’t cheap. <br />
                  This isn’t easy. <br />
                  This isn’t a side hustle for the lazy. <br />
                  We’ve spent millions building this platform. <br />
                  We’re building infrastructure for a new empire layer in the
                  Web3 economy.{" "}
                </p>
              </AnimateOnScroll>
            </div>

            <div className="flex-shrink-0 w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <div className="rounded-lg w-[450px] h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* {looking} */}
      <section id="intro" className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll delay={0.2}>
          <div className="space-y-6 p-6" style={{ backgroundColor: "#1A1A1A" }}>
            <div>
              <p className="text-xl md:text-2xl text-white mb-4 text-left">
                We’re looking for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xl text-white [&>li::before]:content-['•'] [&>li::before]:text-white [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                <li>Builders</li>
                <li>Operators</li>
                <li>Owners</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-1xl text-left">
                There is a cost.
                <br />
                We’ll talk price{" "}
                <span className="font-bold">if you pass the first gate.</span>
              </p>
              <p className="text-xl text-white text-left font-bold">
                But, just so you get a taste of the best part
              </p>
              <p className="text-xl text-left ">
                Building this yourself? Costs $1M+. <br />
                Licensing from someone else? $25K minimum. <br />
                Joining{" "}
                <span className="font-bold text-btb-gold">
                  Be The Boss
                </span>{" "}
                Founders Circle? A fraction—if you qualify.
                <br />
                If you flinch before qualifying? You already told us you don’t
                belong.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-white text-left font-bold">
                And this opportunity? It’s not for sale.
              </p>
              <p className="text-xl text-btb-gold text-left font-bold">
                It’s for the ones bold enough to take it.
              </p>
            </div>
          </div>{" "}
        </AnimateOnScroll>
      </section>

      <section id="intro" className="container mx-auto px-4">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img
            src="/your-image-path.png"
            alt="Graphic banner"
            className="w-full h-full object-cover"
          />
        </div>
        <AnimateOnScroll>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-left">
            We get applications daily.
            <br />
            We reject most.
            <br />
            <span className="text-btb-gold">
              Only a few earn a shot at the next level.
              <br />
              Will you make the cut?
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-left">
            Hundreds have already applied.
            <br />
            We're only letting in the right few.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-left mb-9 text-btb-gold">
            What Comes Next?{" "}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-left">
            Step 1: Apply below.
            <br />
            Step 2: We review. We respond.
            <br />
            Step 3: If accepted, you receive the Founder's Package. One shot.
          </p>
        </AnimateOnScroll>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-12 pt-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <p className="text-xl sm:text-2xl text-white mb-4 text-left font-bold">
                  This page will disappear.
                  <br />
                  The Founders will still be eating.
                  <br />
                  You'll be watching.
                  <br />
                  You bring the fire.
                  <br />
                  We bring the machine.
                  <br />
                  Let's F*ing Do It.** <br />
                  <span className="text-btb-gold">Let'em talk.</span>
                  <br />
                  You click.{" "}
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.8}>
                <div className="flex justify-start mt-8">
                  <RouterLink
                    to="/signup"
                    className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
                  >
                    <span>Hell Yes, I’m Claiming to My Spot!</span>
                  </RouterLink>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="flex-shrink-0 w-full md:w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <div className="rounded-lg w-full md:w-[450px] h-[300px] md:h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-4xl sm:text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      {/* <section id="benefits" className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
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
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="bg-black/50 p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
                  {benefit.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 text-left">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section> */}

      {/* Market Potential */}
      {/* <section id="market" className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
              The Market Potential
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll delay={0.2}>
              <div className="bg-black/50 p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
                  $19.7B Market
                </h3>
                <p className="text-lg md:text-xl text-gray-300 text-canter">
                  Social Gaming market (2023)
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="bg-black/50 p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
                  $39.5B+ Projected
                </h3>
                <p className="text-lg md:text-xl text-gray-300 text-canter">
                  By 2028
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section> */}

      {/* Package Section */}
      {/* <section id="signup" className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-12 text-center leading-normal py-2">
              The Package (If You Qualify)
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 text-canter">
              What you get:
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
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
              <AnimateOnScroll key={index} delay={0.3 + index * 0.1}>
                <div className="bg-black/50 p-6 md:p-8 rounded-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-btb-gold text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 text-left">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="flex justify-start w-full">
            <AnimateOnScroll delay={0.7}>
              <p className="text-xl md:text-2xl text-gray-300 mt-8 text-left max-w-4xl mx-auto">
                No coding. No crypto knowledge required. Just guts, hustle, and
                hunger. This isn't a playground. It's a launchpad for digital
                ownership. And this opportunity? It's not for sale. It's for the
                ones bold enough to take it.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      {/* <section id="final-cta" className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 text-center">
              This Is Not For Everyone
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 md:mb-8 text-left">
              We're not going wide. We're going tight. Invitation-only Founders
              Circle. Limited seats. Only the right profiles. If you've read
              this far, maybe you feel it. That edge. That hunger. That refusal
              to die average. You want in? Then prove it.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <RouterLink
              to="/signup"
              className="inline-block text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shimmer-button"
            >
              <span>I Don't Need a Pitch. I Need In</span>
            </RouterLink>
          </AnimateOnScroll>
        </div>
      </section> */}
    </div>
  );
}
