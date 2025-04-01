import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function StickyHeader() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <RouterLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-btb-gold to-btb-neon text-transparent bg-clip-text cursor-pointer"
            >
              BTB
            </RouterLink>
            <div className="hidden md:flex space-x-8">
              {isSignupPage ? (
                <>
                  <RouterLink
                    to="/"
                    className="text-gray-300 hover:text-btb-gold cursor-pointer"
                  >
                    Back to Home
                  </RouterLink>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <ScrollLink
                    to="mission"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer"
                  >
                    Mission
                  </ScrollLink>
                  <ScrollLink
                    to="intro"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer"
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="benefits"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer"
                  >
                    Benefits
                  </ScrollLink>
                  <ScrollLink
                    to="market"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer"
                  >
                    Market
                  </ScrollLink>
                  <RouterLink
                    to="/signup"
                    className="bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors"
                  >
                    Join Now
                  </RouterLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </motion.header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
