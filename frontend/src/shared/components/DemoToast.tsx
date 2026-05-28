interface DemoToastProps {
  categoryName?: string;
}

export function DemoToast({ categoryName }: DemoToastProps) {
  return (
    <div className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-sm bg-zinc-900/95 backdrop-blur-md border border-violet-500/30 p-4 rounded-xl shadow-2xl animate-fade-in z-50">
      <div className="flex gap-3">
        <span className="text-xl">✨</span>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-white mb-0.5">Workspace Context Registered</h4>
          <p className="text-[11px] text-zinc-400 leading-snug">
            Initialized SellFaster workspace context for <strong>{categoryName}</strong>. Step 2 (Photo Upload & Prompt Hinting) is locked and ready for deployment.
          </p>
        </div>
      </div>
    </div>
  );
}
