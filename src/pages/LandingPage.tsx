import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link as RouterLink } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { scrollToSection } from "../components/StickyHeader";

export default function LandingPage() {
  return (
    <div className="space-y-16 md:space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-x-hidden mb-48"
      >
        <div className="text-center px-4 max-w-[90vw] mx-auto">
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-12 text-white text-center">
              The doors are opening for a select few...
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className=" md:text-[28px] mb-12 text-btb-gold mx-auto text-center italic font-bold text-gradient">
              Are you one of them?
            </p>
          </AnimateOnScroll>
          <div className="flex flex-col items-center space-y-2 mb-16">
            <AnimateOnScroll delay={0.4}>
              <p className="  md:text-[28px]  text-btb-gold mx-auto text-center">
                We're not opening the doors.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="  md:text-[28px]  text-btb-gold mx-auto text-center">
                We're cracking them — just enough
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <p className="  md:text-[28px]  text-btb-gold mx-auto text-center">
                for the next generation of digital owners.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[28px] font-bold mb-6 text-white text-center">
              You're not here to play. You're here to win.
            </h1>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 ">
          <button
            onClick={() => scrollToSection("mission")}
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
          <div className="relative flex flex-col-reverse md:flex-row items-start justify-between gap-12">
            {/* Left side: Text */}
            <div className="flex-1">
              <p className=" md:text-3xl text-gray-300 mb-6 md:mb-8 text-left">
                Because deep down, you know you were built for more than
                <br className="hidden md:block" /> permission, and playing
                small.
              </p>

              <div className="space-y-6">
                <AnimateOnScroll delay={0.1}>
                  <p className=" md:text-3xl text-left text-btb-gold font-bold">
                    What if you could lock in a business that:
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                  <div className=" md:text-2xl space-y-3 md:space-y-4 text-left">
                    <p className="text-gray-300">Runs 24/7</p>
                    <p className="text-gray-300">
                      Rides the biggest digital wave of the decade
                    </p>
                    <p className="text-gray-300">
                      Requires no code, no product, and no begging for clients
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <p className=" md:text-3xl text-left text-btb-gold font-bold">
                    What if you didn't just play the game — you OWNED the arena?
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.4}>
                  <div className=" md:text-2xl text-gray-300 text-left space-y-1">
                    <p>This is no fluff.</p>
                    <p>No "guru" fantasy.</p>
                    <p>No recycled affiliate garbage.</p>
                    <p>This is infrastructure — and it's real.</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.5}>
                  <div className="text-btb-gold text-left  md:text-2xl space-y-1">
                    <p>Bitcoin had 2010...</p>
                    <p>Ethereum had 2015...</p>
                    <p className="font-bold">You can have 2025!</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.6}>
                  <div className="flex justify-start mt-8">
                    <RouterLink
                      to="/signup"
                      className="relative overflow-hidden group inline-block text-black px-8 py-4 rounded-lg  font-bold transition-all duration-500 hover:scale-105 bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg hover:shadow-xl animate-bounce-subtle border-2 border-btb-gold/50"
                    >
                      <span className="text-[20px]">
                        Got it. Let me In Now!
                      </span>
                    </RouterLink>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-[450px]">
              <AnimateOnScroll delay={0.7}>
                <img
                  src="/your-image-path.png"
                  alt="Hero character"
                  className="rounded-lg w-full h-auto md:w-[550px] md:h-[550px] bg-gray-500"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* BTB Intro Block */}
      <section id="intro" className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img
            src="/your-image-path.png"
            alt="Graphic banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-6 text-white text-center">
              Introducing: BTB — Be The Boss by Playbita
            </h1>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll delay={0.1}>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  This is not some affiliate gimmick.
                </p>
                <p className=" md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  This is a full-scale Web3-powered social gaming empire —
                </p>
                <p className=" md:text-2xl text-white mb-14 text-left">
                  and you can own your slice.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  We've already built the engine.
                </p>
                <p className=" md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  Your job?
                </p>
                <p className=" md:text-2xl text-btb-gold mb-4 text-left">
                  Drive it. Grow it. Dominate your territory.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  You're not buying a license.
                </p>
                <p className=" md:text-2xl text-white font-bold text-left">
                  You're claiming digital turf.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="w-full md:w-[450px]">
              <AnimateOnScroll delay={0.3}>
                <div className="rounded-lg w-full h-[300px] md:w-[450px] md:h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section id="vision" className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div
            className="w-full md:w-[70%] p-6"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <AnimateOnScroll>
              <h2 className="text-[28px] md:text-[40px] font-bold mb-6 text-white text-left">
                The Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <p className=" md:text-2xl text-white mb-4">
                    We're building the{" "}
                    <span className="text-white font-bold">
                      next-generation economy{" "}
                    </span>{" "}
                    of social gaming + digital prestige:{" "}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
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
                  <p className=" text-white text-left">
                    If this feels too big, too early, or too unreal —
                  </p>
                  <p className=" text-btb-gold text-left">
                    that's exactly how Bitcoin felt to the first 100 who heard
                    about it.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" text-white text-left">
                    Built by a proven team. Running live on its own blockchain.
                    Millions already invested.
                  </p>
                  <p className=" text-btb-gold text-left">
                    This is already happening — with or without you.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="w-full md:w-[30%] flex justify-end">
            <AnimateOnScroll delay={0.2}>
              <div className="rounded-lg w-[250px] h-[300px] md:h-[600px] bg-gray-500 flex items-center justify-center">
                <span className="text-white text-6xl">Pic</span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* The Market */}
      <section id="market" className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img
            src="/your-image-path.png"
            alt="Graphic banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full p-6" style={{ backgroundColor: "#1A1A1A" }}>
          <AnimateOnScroll>
            <h1 className="text-[28px] md:text-[40px] font-bold mb-6 text-white text-left">
              The Market
            </h1>
          </AnimateOnScroll>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                  <li>$19.7B Social Gaming market (2023)</li>
                  <li>Projected $39.5B+ by 2028</li>
                  <li>
                    Billions in revenue from platforms you've never heard of
                  </li>
                </ul>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  Governments can't stop Web3.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  Legacy finance can't play in this sandbox.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  This is for the ones ready to rewrite the rules.
                </p>
                <p className=" md:text-2xl text-btb-gold font-bold mb-4 text-left">
                  This isn't something you just click to buy.
                </p>

                <p className=" md:text-2xl text-white mb-4 text-left">
                  No checkout.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  No shortcut.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  You don't need to be the smartest or the richest.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  But you need <span className="text-btb-gold">iron will</span>.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  The kind that builds, not begs.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  That executes, not complains.
                </p>
                <p className=" md:text-2xl text-white mb-4 text-left">
                  If that's you?{" "}
                  <span className="text-btb-gold">Apply now</span>.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>{" "}
        <AnimateOnScroll delay={0.8}>
          <div className="flex justify-start mt-8">
            <RouterLink
              to="/signup"
              className="relative overflow-hidden group inline-block text-black px-8 py-4 rounded-lg  font-bold transition-all duration-500 hover:scale-105 bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg hover:shadow-xl animate-bounce-subtle border-2 border-btb-gold/50"
            >
              <span className="text-black font-bold  relative z-10 animate-pulse text-[20px]">
                I Don't need a Pitch. I Need In!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
              <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
            </RouterLink>
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Package */}
      <section id="package" className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-[300px]">
            <AnimateOnScroll delay={0.2}>
              <div className="rounded-lg w-full h-[300px] md:w-[230px] md:h-[850px] bg-gray-500 flex items-center justify-center">
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
                That's the point. This could be your moment.
              </p>
              <p className="text-left text-btb-gold  md:text-2xl font-bold italic">
                Miss it — and... well, you've been there before.
              </p>
              <div
                className="space-y-6 p-6"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <div>
                  <p className=" md:text-2xl text-btb-gold mb-4 text-left">
                    The Package (If You Qualify in time)
                  </p>
                  <p className=" md:text-2xl text-white font-bold mb-4 text-left">
                    What you get:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
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
                  <p className="md:text-1xl text-left">
                    No coding.
                    <br /> No crypto knowledge required.
                    <br /> Just guts, hustle, and hunger.
                  </p>
                  <p className=" text-white text-left font-bold">
                    This isn't a playground.
                  </p>
                  <p className=" text-btb-gold text-left font-bold">
                    It's a launchpad for digital ownership.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" text-white text-left font-bold">
                    And this opportunity? It's not for sale.
                  </p>
                  <p className=" text-btb-gold text-left font-bold">
                    It's for the ones bold enough to take it.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section id="not-for-everyone" className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <p className=" md:text-2xl font-bold mb-4 text-left text-btb-gold">
                  This Is Not For Everyone{" "}
                </p>
                <p className=" md:text-2xl text-white text-left">
                  We're not going wide. <br />
                  We're going tight.
                  <br />
                  Invitation-only Founders Circle.
                  <br />
                  Limited seats. <br />
                  Only the right profiles.
                  <br />
                  If you've read this far, maybe you feel it. <br />
                  That edge. <br />
                  That hunger. <br />
                  That refusal to die average.{" "}
                </p>
                <p className=" md:text-2xl font-bold text-left ">
                  You want in?
                </p>
                <p className=" md:text-2xl font-bold text-left mb-9 text-btb-gold">
                  Then prove it.{" "}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className=" md:text-2xl text-red-500 font-bold mb-4 text-left">
                  Read This Before Applying!
                </p>

                <p className=" md:text-2xl mb-4 text-left">
                  This isn't cheap. <br />
                  This isn't easy. <br />
                  This isn't a side hustle for the lazy. <br />
                  We've spent millions building this platform. <br />
                  We're building infrastructure for a new empire layer in the
                  Web3 economy.{" "}
                </p>
              </AnimateOnScroll>
            </div>

            <div className="w-full md:w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <div className="rounded-lg w-full h-[300px] md:w-[450px] md:h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* {looking} */}
      <section id="looking" className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll delay={0.2}>
          <div className="space-y-6 p-6" style={{ backgroundColor: "#1A1A1A" }}>
            <div>
              <p className=" md:text-2xl text-white mb-4 text-left">
                We're looking for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                <li>Builders</li>
                <li>Operators</li>
                <li>Owners</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className=" md:text-1xl text-left">
                There is a cost.
                <br />
                We'll talk price{" "}
                <span className="font-bold">if you pass the first gate.</span>
              </p>
              <p className=" text-white text-left font-bold">
                But, just so you get a taste of the best part
              </p>
              <p className=" text-left ">
                Building this yourself? Costs $1M+. <br />
                Licensing from someone else? $25K minimum. <br />
                Joining{" "}
                <span className="font-bold text-btb-gold">
                  Be The Boss
                </span>{" "}
                Founders Circle? A fraction—if you qualify.
                <br />
                If you flinch before qualifying? You already told us you don't
                belong.
              </p>
            </div>

            <div className="space-y-4">
              <p className=" text-white text-left font-bold">
                And this opportunity? It's not for sale.
              </p>
              <p className=" text-btb-gold text-left font-bold">
                It's for the ones bold enough to take it.
              </p>
            </div>
          </div>{" "}
        </AnimateOnScroll>
      </section>

      <section id="last-step" className="container mx-auto px-4">
        <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
          <img
            src="/your-image-path.png"
            alt="Graphic banner"
            className="w-full h-full object-cover"
          />
        </div>
        <AnimateOnScroll>
          <p className="text-lg sm: md:text-2xl font-bold mb-4 text-left">
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
          <p className="text-lg sm: md:text-2xl text-white text-left font-bold">
            Hundreds have already applied.
            <br />
            We're only letting in the right few.
          </p>

          <p className="text-lg sm: md:text-2xl font-bold text-left mb-9 text-btb-gold">
            What Comes Next?{" "}
          </p>
          <p className="text-lg sm: md:text-2xl text-white text-left">
            Step 1: Apply below.
            <br />
            Step 2: We review. We respond.
            <br />
            Step 3: If accepted, you receive the Founder's Package. One shot.
          </p>
        </AnimateOnScroll>
        <div className="space-y-8">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 sm:gap-12 pt-12">
            <div className="flex-1">
              <AnimateOnScroll>
                <p className=" sm:text-2xl text-white mb-4 text-left font-bold">
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
                    className="relative overflow-hidden group inline-block text-black px-8 py-4 rounded-lg  font-bold transition-all duration-500 hover:scale-105 bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg hover:shadow-xl animate-bounce-subtle border-2 border-btb-gold/50"
                  >
                    <span className="text-[20px]">
                      Hell Yes, I'm Claiming to My Spot!
                    </span>
                  </RouterLink>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="w-full md:w-[450px]">
              <AnimateOnScroll delay={0.2}>
                <div className="rounded-lg w-full h-[300px] md:w-[450px] md:h-[450px] bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-4xl sm:text-6xl">Pic</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
