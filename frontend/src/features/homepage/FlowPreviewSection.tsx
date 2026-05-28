export function FlowPreviewSection() {
  return (
    <section className="bg-zinc-950/40 border-t border-zinc-900/60 py-20 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">Onboarding Preview</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Five Steps to Publishing</h3>
          <p className="text-sm text-zinc-400 mt-2 font-light">Simple, predictable progression that guarantees results.</p>
        </div>

        {/* Timeline Steps layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10 max-w-lg mx-auto">

          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-violet-500 border-4 border-zinc-950 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
            <h4 className="text-sm font-semibold text-white mb-1">STEP 1 — Category Selection</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Select a core category from Fashion, Cars, Mobiles, and more, giving the generator appropriate contextual blueprints.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-zinc-950 group-hover:bg-violet-400 transition-colors"></div>
            <h4 className="text-sm font-semibold text-white mb-1">STEP 2 — Upload Photo</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Drop in your product snapshot. Add a low-friction &quot;prompt hint&quot; for optimal accuracy if desired.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-zinc-950 group-hover:bg-violet-400 transition-colors"></div>
            <h4 className="text-sm font-semibold text-white mb-1">STEP 3 — AI Generation</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Review and modify the automatically generated sales copies, titles, and rich SEO tags in real-time.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-zinc-950 group-hover:bg-violet-400 transition-colors"></div>
            <h4 className="text-sm font-semibold text-white mb-1">STEP 4 — Price & Location</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Add core transaction attributes (Price, geographical location, or contact toggles) to complete.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-zinc-950 group-hover:bg-violet-400 transition-colors"></div>
            <h4 className="text-sm font-semibold text-white mb-1">STEP 5 — Publish & Feed</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Preview your finalized listing card, publish to the feed immediately, or store as draft.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
