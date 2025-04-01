import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import RegistrationForm from "../components/RegistrationForm";

export default function SignUpPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleRegistrationSubmit = (formData: {
    name: string;
    email: string;
    walletAddress: string;
  }) => {
    // Handle the form submission here
    console.log("Form submitted:", formData);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="space-y-32 py-20">
      {/* Founder's Circle Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-8">Founder's Circle</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              Join an exclusive group of gaming entrepreneurs and receive
              premium benefits that will accelerate your success in the Web3
              gaming space.
            </p>
            <div className="bg-btb-gold/10 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-btb-gold">
                $1,000 One-Time Investment
              </h2>
              <p className="text-xl text-gray-300">
                Limited time offer - Join now and secure your spot in the future
                of gaming
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What's Included
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Premium Platform Access",
              description: "Full access to all BTB platform features and tools",
            },
            {
              title: "Revenue Share",
              description: "Earn from platform-wide revenue sharing",
            },
            {
              title: "Exclusive Community",
              description: "Access to private founder's network and events",
            },
            {
              title: "Priority Support",
              description: "24/7 dedicated support for all your needs",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-black/50 p-6 rounded-lg"
            >
              <CheckCircleIcon className="w-6 h-6 text-btb-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Connect with your preferred account",
              },
              {
                step: "2",
                title: "Investment",
                description: "Make your $1,000 one-time investment",
              },
              {
                step: "3",
                title: "Access Granted",
                description:
                  "Get immediate access to all Founder's Circle benefits",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-btb-gold text-black rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section id="signup-form" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto bg-black/50 p-12 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Founder's Circle today and secure your spot in the future
            of Web3 gaming. Limited spots available at the special price of
            $1,000.
          </p>
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </motion.div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
