import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-btb-gold to-btb-neon text-transparent bg-clip-text">
            Be The Boss
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Own Your Gaming Empire
          </p>
          <a
            href="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-btb-neon transition-colors"
          >
            Let Me In
          </a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownIcon className="w-8 h-8 text-btb-gold" />
        </motion.div>
      </section>

      {/* Mission Block */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">You're Here to Win</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the elite circle of gaming entrepreneurs who are building the
            future of Web3 gaming.
          </p>
        </motion.div>
      </section>

      {/* Benefits Overview */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "True Ownership",
              description:
                "Full control over your gaming assets and revenue streams",
            },
            {
              title: "No-Code Platform",
              description:
                "Launch your gaming business without technical expertise",
            },
            {
              title: "Tokenized Economy",
              description: "Leverage blockchain technology for maximum growth",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Potential */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">The Future is Web3 Gaming</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                $200B+ Market
              </h3>
              <p className="text-gray-300">
                Projected gaming industry value by 2025
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                2.7B+ Gamers
              </h3>
              <p className="text-gray-300">Active gaming community worldwide</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scarcity Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Not for Everyone</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Limited spots available for true visionaries who want to shape the
            future of gaming.
          </p>
          <a
            href="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold mt-8 hover:bg-btb-neon transition-colors"
          >
            Join the Elite
          </a>
        </motion.div>
      </section>
    </div>
  );
}
