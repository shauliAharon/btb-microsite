import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // נבדוק אם המשתמש לחץ על הרקע ולא על המודל
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign In
    console.log("Google Sign In");
  };

  const handleAppleSignIn = () => {
    // TODO: Implement Apple Sign In
    console.log("Apple Sign In");
  };

  const handleMetaMaskConnect = () => {
    // TODO: Implement MetaMask connection
    console.log("MetaMask Connect");
  };

  const handleCoinbaseConnect = () => {
    // TODO: Implement Coinbase connection
    console.log("Coinbase Connect");
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    // TODO: Implement email sign in
    console.log("Email Sign In:", email);
  };

  return (
    <motion.div
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#1a1b1f] rounded-xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Connect with
        </h2>

        <div className="space-y-4">
          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-[#2a2b2f] hover:bg-[#3a3b3f] text-white p-3 rounded-lg flex items-center justify-center space-x-3 transition-colors"
          >
            <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
            <span>Google</span>
          </button>

          {/* Apple Sign In */}
          <button
            onClick={handleAppleSignIn}
            className="w-full bg-[#2a2b2f] hover:bg-[#3a3b3f] text-white p-3 rounded-lg flex items-center justify-center space-x-3 transition-colors"
          >
            <img src="/apple-icon.svg" alt="Apple" className="w-6 h-6" />
            <span>Apple</span>
          </button>

          {/* Email Input */}
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#2a2b2f] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-btb-gold"
              required
            />
            <button
              type="submit"
              className="bg-[#2a2b2f] hover:bg-[#3a3b3f] text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-[#1a1b1f]">
                or continue with wallet
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* MetaMask */}
            <button
              onClick={handleMetaMaskConnect}
              className="bg-[#2a2b2f] hover:bg-[#3a3b3f] text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <img
                src="/metamask-icon.svg"
                alt="MetaMask"
                className="w-6 h-6"
              />
              <span>MetaMask</span>
            </button>

            {/* Coinbase */}
            <button
              onClick={handleCoinbaseConnect}
              className="bg-[#2a2b2f] hover:bg-[#3a3b3f] text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <img
                src="/coinbase-icon.svg"
                alt="Coinbase"
                className="w-6 h-6"
              />
              <span>Coinbase</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
