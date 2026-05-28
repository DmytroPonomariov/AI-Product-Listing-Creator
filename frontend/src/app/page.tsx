"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/shared/components/AppHeader";
import { LandingPage } from "@/features/homepage";

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartCreating = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/create");
    }, 450); // Keep the slight delay for visual transition effect
  };

  return (
    <div className="bg-mesh-gradient min-h-screen w-full flex flex-col font-sans selection:bg-violet-500/20 antialiased text-zinc-100 bg-zinc-950">
      {/* We pass currentStep=0 so it knows it's the landing page */}
      <AppHeader currentStep={0} onNavigate={() => {}} onStartCreating={handleStartCreating} />
      <LandingPage onStartCreating={handleStartCreating} isTransitioning={isTransitioning} />
    </div>
  );
}
