import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FeaturesSection() {
  const features = [
    {
      title: "Your Own Gaming Portal",
      description: "Fully branded, fully yours",
    },
    {
      title: "50% Rev Share on Token Sales",
      description: "During presale, you get half of every G Coin purchase",
    },
    {
      title: "50% Rev Share on Game Fees",
      description: "Ongoing revenue every time your players play",
    },
    {
      title: "No Tech Headaches",
      description: "No devs. No integrations. Just plug & profit",
    },
    {
      title: "Instant Setup",
      description: "Your portal goes live in minutes. Literally",
    },
    {
      title: "Automated Daily Payouts",
      description: "Earnings drop into your wallet every day at 12PM GMT",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center mb-12">
          You're In — Here's What You're Actually Getting:
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-6 p-8 rounded-lg">
        {features.map((item, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="flex items-start space-x-4 bg-black/50 p-4 sm:p-6 rounded-lg">
              <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-btb-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll delay={0.6}>
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-xl text-gray-300">
            Real Example: Player buys $10,000 of tokens → You earn $5,000
            immediately. They keep playing → You keep earning.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
