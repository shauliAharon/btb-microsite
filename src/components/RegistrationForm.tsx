import { useState } from "react";
import { motion } from "framer-motion";

interface RegistrationFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    walletAddress: string;
  }) => void;
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    window.location.href = "https://playbita.com/gcoin";
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md mx-auto"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-btb-gold focus:border-transparent text-white placeholder-gray-400"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-btb-gold focus:border-transparent text-white placeholder-gray-400"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          htmlFor="walletAddress"
          className="block text-sm sm:text-base font-medium text-gray-300 mb-2"
        >
          Wallet Address
        </label>
        <input
          type="text"
          id="walletAddress"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-btb-gold focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
          placeholder="Enter your wallet address"
        />
      </div>

      <div className="space-y-3 sm:space-y-4">
        <button
          type="submit"
          className="w-full text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 shimmer-button"
        >
          <span>Submit Registration</span>
        </button>

        <button
          type="button"
          onClick={handlePayment}
          className="w-full text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 shimmer-button"
        >
          <span>Pay with GCoin</span>
        </button>
      </div>
    </motion.form>
  );
}
