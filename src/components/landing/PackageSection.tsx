import AnimateOnScroll from "../AnimateOnScroll";

export default function PackageSection() {
  return (
    <section id="package" className="container mx-auto px-4 md:px-6">
      <div className="relative flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="w-full md:w-[300px]">
          <AnimateOnScroll delay={0.2}>
            <div className="rounded-lg w-full h-[300px] md:w-[230px] md:h-[850px] bg-gray-500 flex items-center justify-center">
              <span className="text-white text-6xl">Pic</span>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="flex-1">
          <AnimateOnScroll>
            <p className="text-left italic">
              Most people will scroll.
              <br /> Few will apply.
              <br /> Fewer will get in.
              <br />
              That's the point. This could be your moment.
            </p>
            <p className="text-left text-btb-gold md:text-2xl font-bold italic">
              Miss it — and... well, you've been there before.
            </p>
            <div
              className="space-y-6 p-6"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <div>
                <p className="md:text-2xl text-btb-gold mb-4 text-left">
                  The Package (If You Qualify in time)
                </p>
                <p className="md:text-2xl text-white font-bold mb-4 text-left">
                  What you get:
                </p>
                <ul className="text-left list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
                  <li>Multiple verticals (casino-style, sports, financial)</li>
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
                <p className="text-white text-left font-bold">
                  This isn't a playground.
                </p>
                <p className="text-btb-gold text-left font-bold">
                  It's a launchpad for digital ownership.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-white text-left font-bold">
                  And this opportunity? It's not for sale.
                </p>
                <p className="text-btb-gold text-left font-bold">
                  It's for the ones bold enough to take it.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
