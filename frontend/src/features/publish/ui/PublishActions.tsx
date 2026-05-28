import { Button } from "@/shared/components/Button";
import type { ReactNode } from "react";

interface PublishActionsProps {
  isPublishing: boolean;
  isPublished: boolean;
  onPublish: () => void;
  onCreateAnother: () => void;
  extraActions?: ReactNode;
}

export function PublishActions({
  isPublishing,
  isPublished,
  onPublish,
  onCreateAnother,
  extraActions,
}: PublishActionsProps) {

  if (isPublished) {
    return (
      <div className="w-full flex flex-col items-center animate-[fadeIn_0.5s_ease_forwards] mt-8">
        <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
        <p className="text-zinc-400 mb-8 text-center max-w-sm">
          Your AI-optimized listing is now live and ready to attract buyers.
        </p>
        <Button onClick={onCreateAnother} className="w-full sm:w-auto px-12">
          Create Another Listing
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4 mt-8 pt-8 border-t border-zinc-800/80">
      {/* <Button 
        onClick={onPublish} 
        isLoading={isPublishing}
        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_4px_25px_rgba(16,185,129,0.25)] text-base py-4"
      >
        <span className="mr-2">🚀</span> Publish Listing
      </Button> */}

      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">{extraActions}</div>
        <button
          onClick={onCreateAnother}
          disabled={isPublishing}
          className="w-full sm:w-auto py-3 px-4 rounded-xl text-zinc-500 hover:text-zinc-300 transition-colors font-medium text-sm disabled:opacity-50"
        >
          Cancel & Start Over
        </button>
      </div>
    </div>
  );
}
