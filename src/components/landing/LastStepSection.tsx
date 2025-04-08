import AnimateOnScroll from "../AnimateOnScroll";

interface LastStepSectionProps {
  onSignupClick: () => void;
}

export default function LastStepSection({
  onSignupClick,
}: LastStepSectionProps) {
  return (
    <section id="last-step" className="container mx-auto px-4">
      <div className="w-full h-[100px] bg-gray-500 mb-9 flex justify-center items-center">
        <img
          src="/your-image-path.png"
          alt="Graphic banner"
          className="w-full h-full object-cover"
        />
      </div>
      <AnimateOnScroll>
        <p className="text-lg sm:md:text-2xl font-bold mb-4 text-left">
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
        <p className="text-lg sm:md:text-2xl text-white text-left font-bold">
          Hundreds have already applied.
          <br />
          We're only letting in the right few.
        </p>

        <p className="text-lg sm:md:text-2xl font-bold text-left mb-9 text-btb-gold">
          What Comes Next?{" "}
        </p>
        <p className="text-lg sm:md:text-2xl text-white text-left">
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
              <p className="sm:text-2xl text-white mb-4 text-left font-bold">
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
                <button className="cta-button" onClick={onSignupClick}>
                  <span>Hell Yes, I'm Claiming to My Spot!</span>
                </button>
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
  );
}
