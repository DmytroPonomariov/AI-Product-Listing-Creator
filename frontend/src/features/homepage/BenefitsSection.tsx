export function BenefitsSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">Core Benefits</h2>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Built for High Conversion</h3>
        <p className="text-sm text-zinc-400 mt-2 font-light">Engineered to save you hours of copywriting and typing.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">⚡</span>
          <h4 className="font-semibold text-sm text-white mb-2">AI-Powered Listing Generation</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Advanced vision models analyze fine-grained details, stitching them into premium descriptions instantly.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">📱</span>
          <h4 className="font-semibold text-sm text-white mb-2">Mobile-First Workflow</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Designed exclusively as a guided, distraction-free screen flow, engineered for speed on go-to viewports.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">📈</span>
          <h4 className="font-semibold text-sm text-white mb-2">Optimized Marketplace Copy</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Outlines high-converting titles, core attributes, and rich metadata fields to ensure top listing search ranks.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">🕒</span>
          <h4 className="font-semibold text-sm text-white mb-2">Faster Selling Process</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Eliminates standard forms. Go from capturing photo to complete listing ready-to-sell in under 10 seconds.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">✍️</span>
          <h4 className="font-semibold text-sm text-white mb-2">No Writing Required</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Forget typing long text blocks or descriptions. Our models craft sales-focused copy based on visual snapshots.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/10 border border-zinc-850/50 rounded-2xl">
          <span className="text-xl mb-4 block">🎯</span>
          <h4 className="font-semibold text-sm text-white mb-2">Zero Forms Friction</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            No complex dashboards, setup forms, or configuration curves. Simply trigger context and AI handles the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
