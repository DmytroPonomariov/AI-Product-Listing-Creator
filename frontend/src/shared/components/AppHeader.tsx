interface AppHeaderProps {
  currentStep: number;
  onNavigate: (step: number) => void;
  onStartCreating: () => void;
}

export function AppHeader({ currentStep, onNavigate, onStartCreating }: AppHeaderProps) {
  return (
    <header className="w-full border-b border-zinc-900/60 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(0)}>
          <span className="text-violet-500 text-lg font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">
            SELLFASTER
          </span>
          <span className="text-zinc-500 text-[10px] font-mono bg-zinc-900 px-2 py-0.5 rounded-full border border-zinc-800/40">
            v1.0
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-900/60 border border-zinc-800/40 rounded-full text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Gemini 3.5 Active</span>
          </div>
          {currentStep === 0 && (
            <button
              onClick={onStartCreating}
              className="px-4 py-1.5 bg-violet-650 hover:bg-violet-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(139,92,246,0.15)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.3)] active:scale-[0.98] cursor-pointer"
            >
              Start creating
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
