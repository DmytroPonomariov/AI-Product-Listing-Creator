import { Button } from "@/shared/components/Button";
import { InlineLinkButton } from "@/shared/components/InlineLinkButton";
import { ProgressTracker } from "@/shared/components/ProgressTracker";
import { useOnboardingStore } from "../onboarding/store/useOnboardingStore";

interface AiListingStepProps {
  onNext: () => void;
  onBackToUpload: () => void;
}

export function AiListingStep({ onNext, onBackToUpload }: AiListingStepProps) {
  const { listingTitle, listingDescription, tags, setListingData, photoUrl } =
    useOnboardingStore();

  const handleRegenerate = () => {
    // We can handle the regeneration logic here or pass it back to the flow controller
    // For now, we'll clear the data and go back to the upload step to trigger it again,
    // or simulate it locally. Let's simulate it locally for a better UX.
    setListingData({ title: "", description: "", tags: [] }); // Clear to show loading

    // In a real app, you'd call the backend here. We'll simulate a fast regeneration.
    setTimeout(() => {
      setListingData({
        title: `(Regenerated) Premium Item - Excellent Condition`,
        description: `This is a fresh AI-generated description. The description is designed to be highly persuasive, SEO-optimized, and highlight key features that drive conversions.`,
        tags: ["#Fresh", "#Updated", "#Premium"],
      });
    }, 1500);
  };

  const handleReplacePhoto = () => {
    // Clear the current AI data and go back to step 2
    setListingData({ title: "", description: "", tags: [] });
    onBackToUpload();
  };

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col">
      <ProgressTracker step={3} total={5} title="Review AI Result" />

      <div className="flex flex-col flex-1">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 mb-4 font-medium tracking-wide">
            <span>✓</span>
            <span>AI Generation Complete</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">
            Review your optimized listing
          </h1>
          <p className="text-sm text-zinc-400 font-light">
            We've drafted a high-converting listing. Feel free to edit the text
            directly before continuing.
          </p>
        </div>

        {/* If regenerating, show a subtle loading state */}
        {!listingTitle ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20">
            <span className="w-8 h-8 border-4 border-zinc-700 border-t-violet-500 rounded-full animate-spin mb-4"></span>
            <p className="text-violet-400 font-medium animate-pulse">
              Regenerating listing with AI...
            </p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 mb-auto">
            {/* Right Col: Editable Form */}
            <div className="w-full flex flex-col gap-5">
              <div className="group">
                <label className="block text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-violet-400 transition-colors">
                  Optimized Title
                </label>
                <input
                  type="text"
                  value={listingTitle || ""}
                  onChange={(e) =>
                    setListingData({
                      title: e.target.value,
                      description: listingDescription || "",
                      tags,
                    })
                  }
                  className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all shadow-inner"
                />
              </div>

              <div className="group flex-1 flex flex-col">
                <label className="block text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-violet-400 transition-colors">
                  Sales Description
                </label>
                <textarea
                  value={listingDescription || ""}
                  onChange={(e) =>
                    setListingData({
                      title: listingTitle || "",
                      description: e.target.value,
                      tags,
                    })
                  }
                  className="w-full flex-1 min-h-[180px] bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 text-zinc-300 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-y shadow-inner"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-mono tracking-widest text-zinc-500 mb-2 uppercase group-focus-within:text-violet-400 transition-colors">
                  SEO Tags
                </label>
                <input
                  type="text"
                  value={tags.join(" ")}
                  onChange={(e) =>
                    setListingData({
                      title: listingTitle || "",
                      description: listingDescription || "",
                      tags: e.target.value.split(" "),
                    })
                  }
                  className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-xl px-4 py-3 text-violet-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all shadow-inner"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 border-t border-zinc-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <InlineLinkButton
            onClick={handleReplacePhoto}
            disabled={!listingTitle}
            className="disabled:opacity-50"
          >
            ← Replace Photo
          </InlineLinkButton>

          {/* <Button
            onClick={handleRegenerate}
            disabled={!listingTitle}
            className="w-full justify-self-center"
          >
            <span>🔄</span> Regenerate Result
          </Button> */}

          <Button
            onClick={onNext}
            disabled={!listingTitle}
            className="leading-none"
          >
            Confirm & Continue →
          </Button>
        </div>
      </div>
    </main>
  );
}
