"use client";

import React from "react";
import { ChatRequest } from "@/shared/types";

interface ListingCardProps {
  activeListing: ChatRequest;
  copied: boolean;
  onCopy: () => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  activeListing,
  copied,
  onCopy,
}) => {
  const wordCount = activeListing.response.split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 border border-zinc-800/80 shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-4">
        <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <span className="text-violet-500 text-xl">✦</span>
          <span>Optimized Copyset</span>
        </h3>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg transition-colors font-medium cursor-pointer"
            onClick={onCopy}
          >
            {copied ? "✓ Copied!" : "📋 Copy Copywriting"}
          </button>
        </div>
      </div>

      <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap font-sans mb-6">
        {activeListing.response}
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
        <div>
          <span className="block text-zinc-500 font-medium">Word Count:</span>
          <span className="text-zinc-300 font-semibold">{wordCount}</span>
        </div>
        <div>
          <span className="block text-zinc-500 font-medium">Source:</span>
          <span className="text-zinc-300 font-semibold">
            {activeListing.id < 0
              ? "Default Template"
              : `Query #${activeListing.id}`}
          </span>
        </div>
        <div>
          <span className="block text-zinc-500 font-medium">Engine:</span>
          <span className="text-zinc-300 font-semibold">Gemini 3.5 AI</span>
        </div>
      </div>
    </div>
  );
};
