"use client";

import { useState } from "react";
import { Button } from "@/shared/components/Button";

interface CopyListingButtonProps {
  title: string | null;
  description: string | null;
  tags: string[];
  price: string;
  location: string;
}

export function CopyListingButton({
  title,
  description,
  tags,
  price,
  location,
}: CopyListingButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `🔥 ${title || "Untitled Product"}

Price: ${price || "Not specified"}
Location: ${location || "Not specified"}

Description:
${description || "No description provided."}

Tags:
${tags?.map((t: string) => (t.startsWith("#") ? t : `#${t}`)).join(" ") || "N/A"}
`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Button onClick={handleCopy}>
      <span>{copied ? "✓" : "📋"}</span>
      <span>{copied ? "Copied!" : "Copy Listing"}</span>
    </Button>
  );
}
