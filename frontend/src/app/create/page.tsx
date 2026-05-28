"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AppHeader } from "@/shared/components/AppHeader";
import { useOnboardingStore } from "@/features/onboarding/store/useOnboardingStore";
import { CategorySelection, CATEGORIES } from "@/features/category";
import { UploadStep } from "@/features/upload";
import { AiListingStep } from "@/features/ai-listing";
import { PricingStep } from "@/features/pricing";
import { PublishStep } from "@/features/publish";

export default function CreateListingFlow() {
  const router = useRouter();
  const { currentStep, categoryId, setCategory, nextStep, prevStep } =
    useOnboardingStore();

  const handleBackToLanding = () => {
    router.push("/");
  };

  const selectedCategoryObj = CATEGORIES.find((c) => c.id === categoryId);

  // Framer motion variants for smooth sliding transitions
  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex"
          >
            <CategorySelection
              categories={CATEGORIES}
              selectedCategory={categoryId}
              onSelect={setCategory}
              onContinue={nextStep}
              onBack={handleBackToLanding}
              isTransitioning={false} // Transition handled by framer-motion now
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex"
          >
            <UploadStep
              categoryId={categoryId ?? undefined}
              categoryName={selectedCategoryObj?.name}
              onNext={nextStep}
              onBack={prevStep}
            />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex"
          >
            <AiListingStep
              onNext={nextStep}
              onBackToUpload={() => useOnboardingStore.getState().setStep(2)}
            />
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex"
          >
            <PricingStep
              onNext={nextStep}
              onBack={() => useOnboardingStore.getState().setStep(3)}
            />
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex-1 flex"
          >
            <PublishStep />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-mesh-gradient min-h-screen w-full flex flex-col font-sans selection:bg-violet-500/20 antialiased text-zinc-100 bg-zinc-950 overflow-x-hidden">
      <AppHeader
        currentStep={currentStep}
        onNavigate={handleBackToLanding}
        onStartCreating={() => {}}
      />

      {/* AnimatePresence handles the unmounting animation of the previous step */}
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
}
