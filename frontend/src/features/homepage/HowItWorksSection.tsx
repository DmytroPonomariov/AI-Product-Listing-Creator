export function HowItWorksSection() {
  return (
    <section className="bg-zinc-950/40 border-y border-zinc-900/60 py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">Workflow</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How SellFaster Works</h3>
          <p className="text-sm text-zinc-400 mt-2 font-light">Create listings in three simple, frictionless steps.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="bg-zinc-900/20 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="text-2xl">📸</span>
              <span className="text-xs font-mono text-zinc-650">STEP 1</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-1.5">1. Upload a photo</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Simply snap or upload a product photo from your mobile device or computer.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900/20 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="text-2xl">🧠</span>
              <span className="text-xs font-mono text-zinc-650">STEP 2</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-1.5">2. AI generates listing</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                The AI automatically analyzes your image and drafts an optimized title, description, and keywords.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900/20 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="text-2xl">💰</span>
              <span className="text-xs font-mono text-zinc-650">STEP 3</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-1.5">3. Start selling</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Verify generated details, add price and location, and publish straight to your target marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
