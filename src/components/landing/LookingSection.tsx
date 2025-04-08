import AnimateOnScroll from "../AnimateOnScroll";

export default function LookingSection() {
  return (
    <section id="looking" className="container mx-auto px-4 md:px-6">
      <AnimateOnScroll delay={0.2}>
        <div className="space-y-6 p-6" style={{ backgroundColor: "#1A1A1A" }}>
          <div>
            <p className="md:text-2xl text-white mb-4 text-left">
              We're looking for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
              <li>Builders</li>
              <li>Operators</li>
              <li>Owners</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="md:text-1xl text-left">
              There is a cost.
              <br />
              We'll talk price{" "}
              <span className="font-bold">if you pass the first gate.</span>
            </p>
            <p className="text-white text-left font-bold">
              But, just so you get a taste of the best part
            </p>
            <p className="text-left">
              Building this yourself? Costs $1M+. <br />
              Licensing from someone else? $25K minimum. <br />
              Joining{" "}
              <span className="font-bold text-btb-gold">Be The Boss</span>{" "}
              Founders Circle? A fraction—if you qualify.
              <br />
              If you flinch before qualifying? You already told us you don't
              belong.
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
    </section>
  );
}
