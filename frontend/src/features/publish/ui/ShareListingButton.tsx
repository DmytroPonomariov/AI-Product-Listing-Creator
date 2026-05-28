"use client";

import { useState } from "react";
import { Button } from "@/shared/components/Button";

interface ShareListingButtonProps {
  title: string | null;
  description: string | null;
  tags: string[];
  price: string;
}

export function ShareListingButton({
  title,
  description,
  tags,
  price,
}: ShareListingButtonProps) {
  const [shared, setShared] = useState(false);
  const canShare =
    typeof navigator !== "undefined" &&
    "share" in navigator &&
    typeof (navigator as unknown as { share?: unknown }).share === "function";

  const handleShare = async () => {
    const text = `🔥 ${title || "Check out this listing"}

${description || ""}

Tags: ${tags?.map((t) => (t.startsWith("#") ? t : `#${t}`)).join(" ") || "N/A"}
Price: ${price || "N/A"}
`;

    try {
      if (canShare) {
        await (navigator as Navigator).share({
          title: "SellFaster Listing",
          text,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } else {
        // Fallback: clipboard copy on desktop where share API isn't available
        await navigator.clipboard.writeText(text);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (err) {
      // User dismissed the share dialog — not an error
      if ((err as Error).name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  };

  return (
    <Button onClick={handleShare}>
      <span>{shared ? "✓" : "↗"}</span>
      <span>{shared ? (canShare ? "Shared!" : "Copied!") : "Share"}</span>
    </Button>
  );
}
