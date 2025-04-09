import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { scrollToSection } from "../utils/scrollUtils";
import Button from "./Button";

export default function StickyHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignupPage = location.pathname === "/signup";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-lg z-50 border-b border-btb-gold/20">
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
              className="md:hidden text-btb-gold p-2 hover:bg-black/20 rounded-lg transition-colors"
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
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    Back
                  </RouterLink>
                  <Button
                    variant="primary"
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="flex items-center">
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    start
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    why
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("intro")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    btb
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("vision")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    future
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("market")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    stats
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("package")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    deal
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("not-for-everyone")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    elite
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("looking")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    team
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>
                  <button
                    onClick={() => scrollToSection("last-step")}
                    className="text-white hover:text-btb-gold cursor-pointer transition-colors font-semibold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                  >
                    join
                  </button>
                  <span className="text-btb-gold/60 mx-2 font-light">|</span>

                  <span className="text-btb-gold/60 mx-4 font-light"></span>
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate("/signup", { state: { openAuthModal: true } });
                    }}
                  >
                    Join Now
                  </Button>
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
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Back
                    </RouterLink>
                    <Button
                      variant="primary"
                      onClick={() => setIsAuthModalOpen(true)}
                    >
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center flex-wrap gap-3">
                    <button
                      onClick={() => {
                        scrollToSection("hero");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      start
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("mission");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      why
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("intro");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      btb
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("vision");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      future
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("market");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      stats
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("package");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      deal
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("not-for-everyone");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      elite
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("looking");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      team
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <button
                      onClick={() => {
                        scrollToSection("last-step");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-btb-gold cursor-pointer transition-colors whitespace-nowrap text-xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      join
                    </button>
                    <span className="text-btb-gold/60 font-light">|</span>
                    <div className="w-full flex justify-center mt-4">
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate("/signup", {
                            state: { openAuthModal: true },
                          });
                        }}
                      >
                        Join Now
                      </Button>
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
