import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { scrollToSection } from "../utils/scrollUtils";

export default function StickyHeader() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/signup";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
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
            <div className="hidden md:flex items-center space-x-2">
              {isSignupPage ? (
                <div className="flex items-center space-x-4">
                  <RouterLink
                    to="/"
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    Back
                  </RouterLink>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="relative overflow-hidden group px-4 py-2 rounded-lg bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-subtle border-2 border-btb-gold/50 text-black font-bold text-sm sm:text-base"
                  >
                    <span className="text-black font-bold text-sm sm:text-base relative z-10 animate-pulse">
                      Sign Up
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
                    <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    start
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    why
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("intro")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    btb
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("vision")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    future
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("market")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    stats
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("package")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    deal
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("not-for-everyone")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    elite
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("looking")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    team
                  </button>
                  <span className="text-gray-600 mx-2">|</span>
                  <button
                    onClick={() => scrollToSection("last-step")}
                    className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                  >
                    join
                  </button>
                  <span className="text-gray-600 mx-2">|</span>

                  <span className="text-gray-600 mx-4"></span>
                  <RouterLink
                    to="/signup"
                    className="relative overflow-hidden group px-4 py-2 rounded-lg bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-subtle border-2 border-btb-gold/50 text-black font-bold text-sm sm:text-base"
                  >
                    <span className="text-black font-bold text-sm sm:text-base relative z-10 animate-pulse ">
                      Join Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
                    <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
                  </RouterLink>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-lg z-40 shadow-2xl border-t border-btb-gold/20">
              <div className="container mx-auto px-4 py-8">
                {isSignupPage ? (
                  <div className="flex flex-row items-center justify-center space-x-4 relative z-50">
                    <RouterLink
                      to="/"
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Back
                    </RouterLink>
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className="relative overflow-hidden group px-4 py-2 rounded-lg bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-subtle border-2 border-btb-gold/50 text-black font-bold text-center text-sm sm:text-base"
                    >
                      <span className="text-black font-bold text-sm sm:text-base relative z-10 animate-pulse">
                        Sign Up
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
                      <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center flex-wrap gap-2">
                    <button
                      onClick={() => {
                        scrollToSection("hero");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      start
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("mission");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      why
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("intro");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      btb
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("vision");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      future
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("market");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      stats
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("package");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      deal
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("not-for-everyone");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      elite
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("looking");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      team
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("last-step");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap"
                    >
                      join
                    </button>
                    <span className="text-gray-600">|</span>
                    <div className="w-full flex justify-center mt-4">
                      <RouterLink
                        to="/signup"
                        className="relative overflow-hidden group px-4 py-2 rounded-lg bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-subtle border-2 border-btb-gold/50 text-black font-bold text-center text-sm sm:text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-black font-bold text-sm sm:text-base relative z-10 animate-pulse">
                          Join Now
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />
                        <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
                      </RouterLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
