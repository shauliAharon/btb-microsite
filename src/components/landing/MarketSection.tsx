import AnimateOnScroll from "../AnimateOnScroll";

interface MarketSectionProps {
  onSignupClick: () => void;
}

export default function MarketSection({ onSignupClick }: MarketSectionProps) {
  return (
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
              <ul className="text-left list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                <li>$19.7B Social Gaming market (2023)</li>
                <li>Projected $39.5B+ by 2028</li>
                <li>
                  Billions in revenue from platforms you've never heard of
                </li>
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="md:text-2xl text-white mb-4 text-left">
                Governments can't stop Web3.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                Legacy finance can't play in this sandbox.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                This is for the ones ready to rewrite the rules.
              </p>
              <p className="md:text-2xl text-btb-gold font-bold mb-4 text-left">
                This isn't something you just click to buy.
              </p>

              <p className="md:text-2xl text-white mb-4 text-left">
                No checkout.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                No shortcut.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                You don't need to be the smartest or the richest.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                But you need <span className="text-btb-gold">iron will</span>.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                The kind that builds, not begs.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                That executes, not complains.
              </p>
              <p className="md:text-2xl text-white mb-4 text-left">
                If that's you? <span className="text-btb-gold">Apply now</span>.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      <AnimateOnScroll delay={0.8}>
        <div className="flex justify-start mt-8">
          <button className="cta-button" onClick={onSignupClick}>
            <span>I Don't need a Pitch. I Need In!</span>
          </button>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
