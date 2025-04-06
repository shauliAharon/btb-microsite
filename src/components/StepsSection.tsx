import AnimateOnScroll from "./AnimateOnScroll";

export default function StepsSection() {
  const steps = [
    {
      step: "1",
      title: "Connect Wallet",
      description: "Takes 2 minutes. No KYC, no nonsense",
    },
    {
      step: "2",
      title: "Pay One-Time $1,000 Setup",
      description: "No subscriptions. No upsells",
    },
    {
      step: "3",
      title: "Pick Your Portal Name",
      description: "YourBrand.pvxpx.com style",
    },
    {
      step: "4",
      title: "Go Live Instantly",
      description: "Everything's done-for-you",
    },
    {
      step: "5",
      title: "Drive Players",
      description: "Use your audience, ads, or affiliates",
    },
    {
      step: "6",
      title: "Get Paid",
      description: "Daily. Automatically. Forever",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works (Step-by-Step):
        </h2>
      </AnimateOnScroll>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg">
                <div className="w-12 h-12 bg-btb-gold text-black rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll delay={0.6}>
          <p className="text-xl text-gray-300 mt-8 text-center">
            You're not promoting a brand. You're building your own.
          </p>
        </AnimateOnScroll>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-12 p-8 rounded-lg">
        <AnimateOnScroll delay={0.7}>
          <h3 className="text-2xl font-bold mb-6 text-btb-gold">
            Why Join Now?
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.8}>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
            <li>
              This is the ground floor. You're not buying access, you're
              claiming territory.
            </li>
            <li>Only 250 spots available — and it closes when they're gone.</li>
            <li>
              Web3 gaming isn't coming — it's here. And you can own a piece of
              it.
            </li>
          </ul>
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll delay={0.9}>
        <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-btb-gold">
            What You're Paying For (No Surprises):
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-white [&>li::before]:content-['•'] [&>li::before]:text-btb-gold [&>li::before]:text-2xl [&>li::before]:bg-none [&>li::before]:w-auto [&>li::before]:h-auto [&>li::before]:mt-0 [&>li::before]:mr-2">
            <li>One-time $1,000 setup</li>
            <li>Lifetime access to the platform</li>
            <li>No hidden fees. No monthly anything.</li>
            <li>You get a full business in a box.</li>
          </ul>
          <p className="text-xl text-gray-300">
            This is a founders-level asset, not a toy.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
