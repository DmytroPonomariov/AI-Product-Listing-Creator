export interface ChatRequest {
  id: number;
  ip_address?: string;
  prompt: string;
  response: string;
}

export type PlatformPreset = "Shopify" | "Amazon" | "Etsy" | "eBay";

export type ListingTone = "Persuasive" | "Professional" | "Bold" | "Creative";
