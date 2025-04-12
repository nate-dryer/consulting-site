import AiAutomationSection from "./components/sections/AiAutomationSection";
import CtaSection from "./components/sections/CtaSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import HeroSection from "./components/sections/HeroSection";
import ProcessStepsSection from "./components/sections/ProcessStepsSection/index";
import WhyChooseSection from "./components/sections/WhyChooseSection";

/**
 * Home Page Component
 *
 * The main landing page of the website, composed of multiple section components.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AiAutomationSection />
      <ProcessStepsSection />
      <CtaSection />
      <WhyChooseSection />
      <FinalCtaSection />
    </>
  );
}
