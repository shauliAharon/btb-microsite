import { ArrowDownIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "../AnimateOnScroll";
import { scrollToSection } from "../../utils/scrollUtils";

export default function HeroSection() {
  return (
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
          <p className="md:text-[28px] mb-12 text-btb-gold mx-auto text-center italic font-bold ">
            Are you one of them?
          </p>
        </AnimateOnScroll>
        <div className="flex flex-col items-center space-y-2 mb-16">
          <AnimateOnScroll delay={0.4}>
            <p className="md:text-[28px] text-btb-gold mx-auto text-center">
              We're not opening the doors.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <p className="md:text-[28px] text-btb-gold mx-auto text-center">
              We're cracking them — just enough
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <p className="md:text-[28px] text-btb-gold mx-auto text-center">
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
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
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
  );
}
