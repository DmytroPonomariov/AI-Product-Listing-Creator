import { create } from "zustand";

export interface OnboardingState {
  currentStep: number;

  // Step 1: Category
  categoryId: string | null;

  // Step 2: Upload & Hint
  photoUrl: string | null;
  promptHint: string;

  // Step 3: AI Listing Result
  listingTitle: string | null;
  listingDescription: string | null;
  tags: string[];

  // Step 4: Transaction Data
  price: string;
  location: string;
  phoneNumber: string;

  // Actions
  setCategory: (id: string) => void;
  setPhotoUrl: (url: string) => void;
  setPromptHint: (hint: string) => void;
  setListingData: (data: {
    title: string;
    description: string;
    tags: string[];
  }) => void;
  setTransactionData: (data: {
    price?: string;
    location?: string;
    phoneNumber?: string;
  }) => void;

  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,

  categoryId: null,
  photoUrl: null,
  promptHint: "",
  listingTitle: null,
  listingDescription: null,
  tags: [],
  price: "",
  location: "",
  phoneNumber: "",

  setCategory: (id) => set({ categoryId: id }),
  setPhotoUrl: (url) => set({ photoUrl: url }),
  setPromptHint: (hint) => set({ promptHint: hint }),
  setListingData: (data) =>
    set({
      listingTitle: data.title,
      listingDescription: data.description,
      tags: data.tags,
    }),
  setTransactionData: (data) =>
    set((state) => ({
      price: data.price !== undefined ? data.price : state.price,
      location: data.location !== undefined ? data.location : state.location,
      phoneNumber:
        data.phoneNumber !== undefined ? data.phoneNumber : state.phoneNumber,
    })),

  nextStep: () =>
    set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
  prevStep: () =>
    set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
  setStep: (step) => set({ currentStep: step }),

  reset: () =>
    set({
      currentStep: 1,
      categoryId: null,
      photoUrl: null,
      promptHint: "",
      listingTitle: null,
      listingDescription: null,
      tags: [],
      price: "",
      location: "",
      phoneNumber: "",
    }),
}));
