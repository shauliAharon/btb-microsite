import { useNavigate } from "react-router-dom";
import HeroSection from "../components/landing/HeroSection";
import MissionSection from "../components/landing/MissionSection";
import IntroSection from "../components/landing/IntroSection";
import VisionSection from "../components/landing/VisionSection";
import MarketSection from "../components/landing/MarketSection";
import PackageSection from "../components/landing/PackageSection";
import NotForEveryoneSection from "../components/landing/NotForEveryoneSection";
import LookingSection from "../components/landing/LookingSection";
import LastStepSection from "../components/landing/LastStepSection";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup", { state: { openAuthModal: true } });
  };

  return (
    <div
      className="space-y-16 0md:space-y-32"
      style={{
        width: "80vw",
        margin: "auto",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <HeroSection />
      <MissionSection onSignupClick={handleSignupClick} />
      <IntroSection />
      <VisionSection />
      <MarketSection onSignupClick={handleSignupClick} />
      <PackageSection />
      <NotForEveryoneSection />
      <LookingSection />
      <LastStepSection onSignupClick={handleSignupClick} />
      {/* Rest of the sections will be moved to separate components */}
    </div>
  );
}
