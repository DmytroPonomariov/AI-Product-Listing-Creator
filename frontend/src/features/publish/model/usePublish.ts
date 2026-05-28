import { useState } from "react";
import { useOnboardingStore } from "@/features/onboarding/store/useOnboardingStore";

export function usePublish() {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const { reset } = useOnboardingStore();

  const publishListing = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
    }, 2000);
  };

  const createAnother = () => {
    reset();
  };

  return {
    isPublishing,
    isPublished,
    publishListing,
    createAnother,
  };
}
