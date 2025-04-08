import AnimateOnScroll from "../AnimateOnScroll";

export default function NotForEveryoneSection() {
  return (
    <section id="not-for-everyone" className="container mx-auto px-4 md:px-6">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex-1">
            <AnimateOnScroll>
              <p className="md:text-2xl font-bold mb-4 text-left text-btb-gold">
                This Is Not For Everyone{" "}
              </p>
              <p className="md:text-2xl text-white text-left">
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
              <p className="md:text-2xl font-bold text-left">You want in?</p>
              <p className="md:text-2xl font-bold text-left mb-9 text-btb-gold">
                Then prove it.{" "}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="md:text-2xl text-red-500 font-bold mb-4 text-left">
                Read This Before Applying!
              </p>

              <p className="md:text-2xl mb-4 text-left">
                This isn't cheap. <br />
                This isn't easy. <br />
                This isn't a side hustle for the lazy. <br />
                We've spent millions building this platform. <br />
                We're building infrastructure for a new empire layer in the Web3
                economy.{" "}
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
  );
}
