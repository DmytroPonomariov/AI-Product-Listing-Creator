import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { BenefitsSection } from "./BenefitsSection";
import { FlowPreviewSection } from "./FlowPreviewSection";
import { CtaSection } from "./CtaSection";
import { LandingFooter } from "./LandingFooter";

interface LandingPageProps {
  onStartCreating: () => void;
  isTransitioning: boolean;
}

export function LandingPage({
  onStartCreating,
  isTransitioning,
}: LandingPageProps) {
  return (
    <div className="flex-1 flex flex-col">
      <HeroSection
        onStartCreating={onStartCreating}
        isTransitioning={isTransitioning}
      />
      <HowItWorksSection />
      <BenefitsSection />
      <FlowPreviewSection />
      <CtaSection
        onStartCreating={onStartCreating}
        isTransitioning={isTransitioning}
      />
      {/* <LandingFooter /> */}
    </div>
  );
}
