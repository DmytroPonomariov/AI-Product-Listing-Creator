import { type Category } from "./constants";
import { InlineLinkButton } from "@/shared/components/InlineLinkButton";
import { ProgressTracker } from "@/shared/components/ProgressTracker";

interface CategorySelectionProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (id: string) => void;
  onContinue: () => void;
  onBack: () => void;
  isTransitioning: boolean;
}

export function CategorySelection({
  categories,
  selectedCategory,
  onSelect,
  onContinue,
  onBack,
  isTransitioning,
}: CategorySelectionProps) {
  const selectedCatObj = categories.find((c) => c.id === selectedCategory);

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col animate-[fadeIn_0.5s_ease_forwards]">
      <ProgressTracker step={1} total={5} title="Category Context Selection" />

      {/* Heading */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
          What are you selling today?
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-light">
          Select a product category. Providing high-fidelity context helps the
          SellFaster AI engine build an optimized, SEO-friendly, and
          sales-focused marketplace listing.
        </p>
      </div>

      {/* Category Grid: Responsive mobile-first columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 pb-16">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between min-h-[140px] md:min-h-[155px] cursor-pointer overflow-hidden ${
                isSelected
                  ? "bg-violet-650/10 border-violet-500/80 shadow-[0_4px_20px_rgba(139,92,246,0.1)] text-white"
                  : "bg-zinc-900/20 border-zinc-850 hover:border-zinc-700/60 text-zinc-300 hover:bg-zinc-900/40"
              }`}
            >
              {/* Visual Glow Layer for Selection */}
              {isSelected && (
                <span className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 pointer-events-none rounded-2xl animate-pulse"></span>
              )}

              {/* Top Card Bar */}
              <div className="flex justify-between items-start w-full">
                <span
                  className={`text-3xl transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-105"}`}
                >
                  {cat.icon}
                </span>

                {/* Custom Checklist Ring */}
                <div
                  className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? "border-violet-500 bg-violet-500"
                      : "border-zinc-750 bg-transparent group-hover:border-zinc-650"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-2.5 h-2.5 text-black stroke-[3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Text Context */}
              <div className="mt-6">
                <h3 className="font-semibold text-[14px] md:text-[16px] leading-tight text-white mb-1 group-hover:text-violet-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[12px] md:text-[14px] text-zinc-400 leading-snug font-light">
                  {cat.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating sticky-ready premium controls container */}
      <div className="mt-auto border-t border-zinc-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left flex flex-col gap-1">
          {selectedCategory ? (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[12px] md:text-[14px] text-violet-400 animate-fade-in font-medium">
              <span>✦</span>
              <span>
                Context Blueprint: <strong>{selectedCatObj?.name}</strong>
              </span>
            </div>
          ) : (
            <p className="text-[12px] md:text-[16px] text-zinc-500">
              Please pick a category to unlock next steps.
            </p>
          )}
          <InlineLinkButton
            onClick={onBack}
            className="self-center sm:self-start text-left"
          >
            ← Back to landing page
          </InlineLinkButton>
        </div>

        <button
          onClick={onContinue}
          disabled={!selectedCategory || isTransitioning}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold tracking-wide text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            selectedCategory && !isTransitioning
              ? "bg-gradient-to-r from-violet-650 to-indigo-650 hover:from-violet-600 hover:to-indigo-600 text-white shadow-[0_4px_25px_rgba(139,92,246,0.25)] active:scale-[0.98]"
              : "bg-zinc-900/60 text-zinc-500 border border-zinc-800/40 cursor-not-allowed"
          }`}
        >
          {isTransitioning ? (
            <span className="w-5 h-5 border-2 border-zinc-400 border-t-white rounded-full animate-spin"></span>
          ) : (
            <>
              <span>Continue to Photo Upload</span>
              <span className="text-sm font-semibold transition-transform group-hover:translate-x-1">
                →
              </span>
            </>
          )}
        </button>
      </div>
    </main>
  );
}
