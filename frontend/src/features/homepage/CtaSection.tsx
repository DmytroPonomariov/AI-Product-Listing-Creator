interface CtaSectionProps {
  onStartCreating: () => void;
  isTransitioning: boolean;
}

export function CtaSection({ onStartCreating, isTransitioning }: CtaSectionProps) {
  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden w-full">
      {/* Outer blur glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-650/10 w-96 h-96 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
          Your next listing starts with one photo.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed font-light mb-8">
          Skip typing, templates, and manual copywriting. Let AI create optimized ready-to-sell listings for you.
        </p>

        <div className="flex flex-col items-center gap-4">
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
          <span className="text-xs text-zinc-500 tracking-wide font-light">Takes less than 10 seconds</span>
        </div>
      </div>
    </section>
  );
}
