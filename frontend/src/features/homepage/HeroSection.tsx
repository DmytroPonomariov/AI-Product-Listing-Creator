"use client";

import { AdaptiveImagePreview } from "@/shared/components/AdaptiveImagePreview";

interface HeroSectionProps {
  onStartCreating: () => void;
  isTransitioning: boolean;
}

export function HeroSection({
  onStartCreating,
  isTransitioning,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      <div className="flex-1 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-400 mb-6 font-medium tracking-wide">
          <span>✦</span>
          <span>We help you sell faster. Start now.</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
          Create marketplace product listings{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
            instantly
          </span>{" "}
          from a single photo.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light mb-8">
          Upload a photo. Get a listing. Start selling. Turn raw snapshots into
          persuasive, SEO-optimized descriptions and tags in seconds.
        </p>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <button
            onClick={onStartCreating}
            disabled={isTransitioning}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-650 to-indigo-650 hover:from-violet-600 hover:to-indigo-600 text-white rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.4)] active:scale-[0.98]"
          >
            {isTransitioning ? (
              <span className="w-5 h-5 border-2 border-zinc-400 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Start creating</span>
                <span className="text-sm font-semibold">→</span>
              </>
            )}
          </button>
          <p className="text-xs text-zinc-500 tracking-wide font-light">
            No setup required • No credit card needed • Takes under 10 seconds
          </p>
        </div>
      </div>

      {/* HERO VISUAL — Floating AI-Generated Card Preview */}
      <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center relative z-10">
        {/* Outer Glow Background */}
        <div className="absolute -inset-4 bg-violet-500/10 rounded-[32px] blur-2xl opacity-60"></div>

        {/* Visual Card Frame */}
        <div className="w-full max-w-md bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm shadow-xl flex flex-col gap-5">
          <AdaptiveImagePreview
            src="/hero-product.png"
            alt="Example product photo"
            aspectClassName="aspect-[4/3]"
            badgeText="Image Analyzed"
          />

          {/* AI Listing Preview Section */}
          <div className="flex flex-col gap-3.5 border-t border-zinc-800/50 pt-4 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="h-4 bg-zinc-850 rounded w-2/3"></div>
              <div className="h-4 bg-violet-500/20 border border-violet-500/30 rounded px-1.5 py-0.5 text-[9px] text-violet-400 font-mono tracking-wider">
                AI OPTIMIZED
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="h-2.5 bg-zinc-850 rounded w-full"></div>
              <div className="h-2.5 bg-zinc-850 rounded w-11/12"></div>
              <div className="h-2.5 bg-zinc-850 rounded w-4/5"></div>
            </div>

            <div className="flex gap-2 pt-2">
              <div className="h-5 bg-zinc-850 rounded-full px-2.5 py-0.5 text-[9px] text-zinc-400 border border-zinc-800 flex items-center font-mono">
                #SHIPMENT
              </div>
              <div className="h-5 bg-zinc-850 rounded-full px-2.5 py-0.5 text-[9px] text-zinc-400 border border-zinc-800 flex items-center font-mono">
                #PACKAGE
              </div>
              <div className="h-5 bg-zinc-850 rounded-full px-2.5 py-0.5 text-[9px] text-zinc-400 border border-zinc-800 flex items-center font-mono">
                #LUXURY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
