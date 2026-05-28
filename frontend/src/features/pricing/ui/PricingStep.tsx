import { useState } from "react";
import { Button } from "@/shared/components/Button";
import { ProgressTracker } from "@/shared/components/ProgressTracker";
import { useOnboardingStore } from "@/features/onboarding/store/useOnboardingStore";
import { InlineLinkButton } from "@/shared/components/InlineLinkButton";

interface PricingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function PricingStep({ onNext, onBack }: PricingStepProps) {
  const {
    price,
    location,
    phoneNumber,
    setTransactionData,
    categoryId,
    promptHint,
    listingTitle,
    listingDescription,
    tags,
    setListingData,
  } = useOnboardingStore();

  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = () => {
    setIsOptimizing(true);

    // Simulate sending data to AI for optimization
    // NOTE: location and phoneNumber are intentionally EXCLUDED here per privacy rules
    const payloadToAi = {
      category: categoryId,
      hint: promptHint,
      title: listingTitle,
      description: listingDescription,
      tags: tags,
      price: price,
    };

    console.log("Sending to AI:", payloadToAi);

    setTimeout(() => {
      // AI returns an enhanced listing based on the price and previous context
      setListingData({
        title: `${listingTitle} - Great Deal!`,
        description: `${listingDescription}\n\nPrice updated to ${price || "negotiable"}. Grab it while it lasts!`,
        tags: [...tags, "#HotDeal", "#Optimized"],
      });
      setIsOptimizing(false);
      onNext();
    }, 2500);
  };

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col animate-[fadeIn_0.5s_ease_forwards]">
      <ProgressTracker step={4} total={5} title="Transaction Details" />

      <div className="flex flex-col flex-1 max-w-2xl mx-auto w-full relative">
        {/* Loading Overlay */}
        {isOptimizing && (
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl">
            <span className="w-10 h-10 border-4 border-zinc-700 border-t-violet-500 rounded-full animate-spin mb-6"></span>
            <p className="text-violet-400 font-medium text-lg animate-pulse tracking-wide">
              Optimizing your marketplace listing...
            </p>
            <p className="text-zinc-500 text-xs mt-2 font-mono">
              Ensuring privacy rules. Encrypting local data.
            </p>
          </div>
        )}

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white mb-3">
            Add transaction details
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            These fields are optional. Location and phone number remain
            completely private and are strictly attached to your local
            device—they are never sent to the AI.
          </p>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6">
          <div className="group">
            <label className="block text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-violet-400 transition-colors">
              Price (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium"></span>
              <input
                type="text"
                placeholder="0.00$"
                value={price}
                onChange={(e) => setTransactionData({ price: e.target.value })}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                disabled={isOptimizing}
              />
            </div>
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-emerald-400 transition-colors">
              Location (Optional)
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-zinc-800 text-zinc-400 border border-zinc-700">
                PRIVATE
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g. New York, NY"
              value={location}
              onChange={(e) => setTransactionData({ location: e.target.value })}
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              disabled={isOptimizing}
            />
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-emerald-400 transition-colors">
              Phone Number (Optional)
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-zinc-800 text-zinc-400 border border-zinc-700">
                PRIVATE
              </span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phoneNumber}
              onChange={(e) =>
                setTransactionData({ phoneNumber: e.target.value })
              }
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              disabled={isOptimizing}
            />
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <InlineLinkButton
            onClick={onBack}
            disabled={!listingTitle}
            className="disabled:opacity-50"
          >
            ← Back to AI Review
          </InlineLinkButton>

          <Button
            onClick={handleOptimize}
            isLoading={isOptimizing}
            disabled={!listingTitle}
          >
            Finish Listing <span className="text-xl leading-none">✨</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
