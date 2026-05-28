"use client";

import { useState } from "react";

type AdaptiveImagePreviewProps = {
  /** Can be a static path (e.g. /hero-product.png) or a blob URL from Step 2 */
  src: string | null | undefined;
  alt: string;
  /** Container sizing */
  aspectClassName: string;
  /** Extra classes applied to the root container */
  className?: string;
  /** Emoji/icon shown when loading or on error */
  badgeText?: string;
};

export function AdaptiveImagePreview({
  src,
  alt,
  aspectClassName,
  className,
  badgeText,
}: AdaptiveImagePreviewProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const showImage = Boolean(src) && !error;
  const showFallback = !showImage || !loaded;

  return (
    <div
      className={`relative w-full ${aspectClassName} rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center border border-zinc-800/40 group ${className || ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10" />

      {showImage && (
        <img
          src={src as string}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {badgeText && (
        <span className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-zinc-400 border border-zinc-800 z-10 flex items-center gap-1.5 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          <span>{badgeText}</span>
        </span>
      )}
    </div>
  );
}
