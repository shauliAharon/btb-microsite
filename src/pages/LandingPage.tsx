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
      style={{
        width: "80vw",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "9rem",
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
    </div>
  );
}
