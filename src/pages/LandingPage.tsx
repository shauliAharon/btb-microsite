import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
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
          <RouterLink
            to="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-btb-neon transition-colors"
          >
            Let Me In
          </RouterLink>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink
            to="mission"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <ArrowDownIcon className="w-8 h-8 text-btb-gold" />
          </ScrollLink>
        </motion.div>
      </section>

      {/* Mission Block */}
      <section id="mission" className="container mx-auto px-4">
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

      {/* BTB Intro Block */}
      <section id="intro" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">What is Be The Boss?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your gateway to Web3 entrepreneurship. Be The Boss is more than just
            a platform - it's a movement that empowers gaming entrepreneurs to
            build, own, and scale their gaming empires in the Web3 era.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                Built for Founders
              </h3>
              <p className="text-gray-300">
                A comprehensive ecosystem designed specifically for gaming
                entrepreneurs who want to take control of their destiny in the
                Web3 space.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-btb-gold">
                Powered by Innovation
              </h3>
              <p className="text-gray-300">
                Leveraging cutting-edge blockchain technology to create
                unprecedented opportunities in the gaming industry.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Overview */}
      <section id="benefits" className="container mx-auto px-4">
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
      <section id="market" className="container mx-auto px-4">
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
      <section id="signup" className="container mx-auto px-4">
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
          <RouterLink
            to="/signup"
            className="inline-block bg-btb-gold text-black px-8 py-4 rounded-lg text-lg font-bold mt-8 hover:bg-btb-neon transition-colors"
          >
            Join the Elite
          </RouterLink>
        </motion.div>
      </section>
    </div>
  );
}
