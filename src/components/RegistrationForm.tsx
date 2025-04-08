import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

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
    window.open("https://playbita.com/partners#your-portal", "_blank");
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

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Button
          type="button"
          variant="primary"
          fullWidth
          onClick={handlePayment}
        >
          Pay with GCoin
        </Button>
      </div>
    </motion.form>
  );
}
