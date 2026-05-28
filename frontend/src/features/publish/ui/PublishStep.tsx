import { useOnboardingStore } from "@/features/onboarding/store/useOnboardingStore";
import { usePublish } from "../model/usePublish";
import { Button } from "@/shared/components/Button";
import { ProgressTracker } from "@/shared/components/ProgressTracker";
import { CopyListingButton } from "./CopyListingButton";
import { ShareListingButton } from "./ShareListingButton";

export function PublishStep() {
  const {
    listingTitle,
    listingDescription,
    tags,
    price,
    location,
    phoneNumber,
  } = useOnboardingStore();

  const { isPublished, createAnother } = usePublish();

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col animate-[fadeIn_0.5s_ease_forwards]">
      <ProgressTracker step={5} total={5} title="Published" />

      <div className="flex flex-col flex-1 max-w-3xl mx-auto w-full">
        {!isPublished && (
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
              Your listing is ready to sell.
            </h1>
            <p className="text-sm text-zinc-400 font-light mb-8">
              Review your final AI-optimized marketplace listing.
            </p>
          </div>
        )}

        {/* The Listing Preview Card */}
        <div
          className={`bg-zinc-900/40 border ${isPublished ? "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]" : "border-zinc-800/80"} rounded-3xl overflow-hidden transition-all duration-500`}
        >
          {/* Mock Image Area */}
          <div className="w-full h-64 bg-zinc-950 flex items-center justify-center relative border-b border-zinc-800/80 py-8">
            <span className="text-6xl opacity-80">📸</span>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
              {price ? `${price}` : "Make an offer"}
            </div>
            {isPublished && (
              <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center backdrop-blur-sm z-10">
                <span className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold tracking-widest uppercase shadow-xl animate-bounce">
                  LIVE
                </span>
              </div>
            )}
          </div>

          {/* Details Area */}
          <div className="p-6 sm:p-8 flex flex-col gap-5">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-semibold text-white leading-tight">
                  {listingTitle || "Untitled Product"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-xs rounded-full font-mono whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-light">
                {listingDescription || "No description provided."}
              </p>
            </div>

            {/* Private Contact Block */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-[10rem]">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-white font-medium whitespace-nowrap">
                    {location || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="h-px sm:h-8 w-full sm:w-px bg-zinc-800/50"></div>

              <div className="flex items-center gap-3 min-w-[10rem]">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-0.5">
                    Contact
                  </p>
                  <p className="text-sm text-white font-medium whitespace-nowrap">
                    {phoneNumber || "Not specified"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Area */}
        <div className="mt-8 border-t border-zinc-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CopyListingButton
              title={listingTitle}
              description={listingDescription}
              tags={tags}
              price={price}
              location={location}
            />
            <ShareListingButton
              title={listingTitle}
              description={listingDescription}
              tags={tags}
              price={price}
            />
          </div>
          {/* <Button onClick={createAnother} className="w-full sm:w-auto px-12"> */}
          {/* Create Another Listing
          </Button> */}
          <Button onClick={createAnother} disabled={isPublished}>
            Create Another Listing{" "}
            <span className="text-xl leading-none">✨</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
