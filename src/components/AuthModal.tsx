import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./AuthModal.css";

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
      className="auth-modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="auth-modal"
      >
        <button onClick={onClose} className="auth-modal-close">
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="auth-modal-title">Connect with</h2>

        <div className="space-y-4">
          {/* Google Sign In */}
          <button onClick={handleGoogleSignIn} className="auth-modal-button">
            <img src="/google-icon.svg" alt="Google" />
            <span>Google</span>
          </button>

          {/* Apple Sign In */}
          <button onClick={handleAppleSignIn} className="auth-modal-button">
            <img src="/apple-icon.svg" alt="Apple" />
            <span>Apple</span>
          </button>

          {/* Email Input */}
          <form onSubmit={handleEmailSubmit} className="auth-modal-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="auth-modal-input"
              required
            />
            <button type="submit" className="auth-modal-button">
              Send
            </button>
          </form>

          <div className="auth-modal-divider">
            <div className="auth-modal-divider-text">
              or continue with wallet
            </div>
          </div>

          <div className="auth-modal-grid">
            {/* MetaMask */}
            <button
              onClick={handleMetaMaskConnect}
              className="auth-modal-button"
            >
              <img src="/metamask-icon.svg" alt="MetaMask" />
              <span>MetaMask</span>
            </button>

            {/* Coinbase */}
            <button
              onClick={handleCoinbaseConnect}
              className="auth-modal-button"
            >
              <img src="/coinbase-icon.svg" alt="Coinbase" />
              <span>Coinbase</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
