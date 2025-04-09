import { useEffect, useState } from "react";
import AuthModal from "../components/AuthModal";
import { useLocation, useNavigate } from "react-router-dom";
import FoundersCircle from "../components/FoundersCircle";
import WhatsIncluded from "../components/WhatsIncluded";
import Features from "../components/Features";
import ReadyToMove from "../components/ReadyToMove";
import AdditionalInfo from "../components/AdditionalInfo";
import HowItWorks from "../components/HowItWorks";
import LastStep from "../components/LastStep";

export default function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  useEffect(() => {
    if (location.state?.openAuthModal) {
      setIsAuthModalOpen(true);
    }
  }, [location.state]);

  const handleSignupClick = () => {
    navigate("/signup", { state: { openAuthModal: true } });
  };

  return (
    <div className="signup-page" style={{ width: "80vw", margin: "auto" }}>
      <FoundersCircle />
      <WhatsIncluded />
      <Features />
      <ReadyToMove onSignupClick={handleSignupClick} />
      <AdditionalInfo />
      <HowItWorks />
      <LastStep onSignupClick={handleSignupClick} />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
