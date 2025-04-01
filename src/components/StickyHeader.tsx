import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function StickyHeader() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <RouterLink to="/" className="cursor-pointer">
              <img
                src="/logo.png"
                alt="BTB Logo"
                className="hidden md:block h-14"
              />
              <img
                src="/logo_Mobile.png"
                alt="BTB Mobile Logo"
                className="md:hidden h-14"
              />
            </RouterLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-black/20 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {isSignupPage ? (
                <>
                  <RouterLink
                    to="/"
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    Back
                  </RouterLink>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors text-sm sm:text-base"
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
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    Mission
                  </ScrollLink>
                  <ScrollLink
                    to="intro"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="benefits"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    Benefits
                  </ScrollLink>
                  <ScrollLink
                    to="market"
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    Market
                  </ScrollLink>
                  <RouterLink
                    to="/signup"
                    className="bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors text-sm sm:text-base"
                  >
                    Join Now
                  </RouterLink>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-3 bg-black/90 p-4 rounded-lg">
              {isSignupPage ? (
                <>
                  <RouterLink
                    to="/"
                    className="block text-gray-300 hover:text-btb-gold cursor-pointer py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Back
                  </RouterLink>
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors text-sm sm:text-base"
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
                    className="block text-gray-300 hover:text-btb-gold cursor-pointer py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mission
                  </ScrollLink>
                  <ScrollLink
                    to="intro"
                    smooth={true}
                    duration={800}
                    className="block text-gray-300 hover:text-btb-gold cursor-pointer py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="benefits"
                    smooth={true}
                    duration={800}
                    className="block text-gray-300 hover:text-btb-gold cursor-pointer py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Benefits
                  </ScrollLink>
                  <ScrollLink
                    to="market"
                    smooth={true}
                    duration={800}
                    className="block text-gray-300 hover:text-btb-gold cursor-pointer py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Market
                  </ScrollLink>
                  <RouterLink
                    to="/signup"
                    className="block w-full bg-btb-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-btb-neon transition-colors text-center text-sm sm:text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join Now
                  </RouterLink>
                </>
              )}
            </div>
          )}
        </nav>
      </motion.header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
