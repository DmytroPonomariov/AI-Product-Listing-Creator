"use client";

import { useEffect, useRef, useState, type DragEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/shared/components/Button";
import { InlineLinkButton } from "@/shared/components/InlineLinkButton";
import { ProgressTracker } from "@/shared/components/ProgressTracker";
import { useOnboardingStore } from "../onboarding/store/useOnboardingStore";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/heic",
  "image/heif",
];
const ACCEPTED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".heic", ".webp"];
const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

function isAcceptedImage(file: File) {
  const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  return (
    ACCEPTED_TYPES.includes(file.type) || ACCEPTED_EXTENSIONS.includes(ext)
  );
}

interface UploadStepProps {
  onNext: () => void;
  onBack: () => void;
  categoryId: string | undefined;
  categoryName: string | undefined;
}

type GenerateListingResponse = {
  status?: string;
  data?: {
    title?: string;
    description?: string;
    tags?: string[];
  };
  message?: string;
};

export function UploadStep({
  onNext,
  onBack,
  categoryId,
  categoryName,
}: UploadStepProps) {
  const { promptHint, setPromptHint, setListingData, setPhotoUrl } =
    useOnboardingStore();

  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (
      formData: FormData,
    ): Promise<GenerateListingResponse> => {
      const res = await fetch(`${API_URL}/generate-listing`, {
        method: "POST",
        body: formData,
      });
      return res.json();
    },
    retry: 1,
    onSuccess: (response) => {
      if (response?.status === "error") return;

      if (response?.status === "success" && response.data) {
        setListingData({
          title: response.data.title ?? "",
          description: response.data.description ?? "",
          tags: response.data.tags ?? [],
        });
        onNext();
      }
    },
  });

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFile = (selectedFile: File | null) => {
    if (!selectedFile) return;

    setValidationError(null);

    if (!isAcceptedImage(selectedFile)) {
      setValidationError("Only PNG, JPG, and HEIC files are allowed.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setValidationError("File must be under 10MB.");
      return;
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);

    const url = URL.createObjectURL(selectedFile);
    setFile(selectedFile);
    setPreviewUrl(url);
    setPhotoUrl(url);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0] ?? null);
  };

  const handleGenerate = () => {
    if (!file) {
      setValidationError("Please upload a photo before generating.");
      return;
    }

    if (!categoryId) {
      setValidationError("Please select a category before generating.");
      return;
    }

    setValidationError(null);
    const formData = new FormData();
    formData.append("category", categoryId);
    if (promptHint.trim()) formData.append("hint", promptHint.trim());
    formData.append("image", file);

    mutation.mutate(formData);
  };

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col">
      <ProgressTracker step={2} total={5} title="Upload Photo" />

      <div className="flex flex-col flex-1 animate-[fadeIn_0.5s_ease_forwards]">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
            Upload a photo of your {categoryName || "product"}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-light">
            Drop in a snapshot. Optionally add a hint (e.g., "Vintage 90s" or
            "Scratch on back") to guide the AI.
          </p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={() => !mutation.isPending && inputRef.current?.click()}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !mutation.isPending) {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            if (!mutation.isPending) setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            if (!mutation.isPending) handleDrop(e);
          }}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer mb-2 relative overflow-hidden group ${
            isDragging
              ? "border-violet-500 bg-violet-500/10"
              : "border-zinc-800 hover:border-violet-500/50 hover:bg-violet-500/5"
          } ${previewUrl ? "p-6" : ""}`}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/heic,image/heif,.heic,.heif"
            capture="environment"
            className="hidden"
            disabled={mutation.isPending}
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />

          {mutation.isPending && (
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
              <span className="w-8 h-8 border-4 border-zinc-700 border-t-violet-500 rounded-full animate-spin mb-4"></span>
              <p className="text-violet-400 font-medium animate-pulse">
                Analyzing image with AI...
              </p>
            </div>
          )}

          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Upload preview"
                className="mx-auto max-h-64 rounded-xl object-contain"
              />
              <p className="text-zinc-400 text-sm mt-4">
                {file?.name} · Click or drop to replace
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-4">
              <span className="text-4xl block group-hover:scale-110 transition-transform">
                📸
              </span>
              <h3 className="text-white font-medium">
                Click to upload or drag and drop
              </h3>
              <p className="text-zinc-500 text-sm">PNG, JPG, HEIC up to 10MB</p>
            </div>
          )}
        </div>

        {validationError && (
          <p className="text-red-400 text-sm mb-4" role="alert">
            {validationError}
          </p>
        )}
        {mutation.data?.status === "error" && (
          <p className="text-red-400 text-sm mb-4" role="alert">
            {mutation.data.message || "AI generation failed. Please try again."}
          </p>
        )}
        {mutation.isError && (
          <p className="text-red-400 text-sm mb-4" role="alert">
            Request failed. Please check your backend and retry.
          </p>
        )}

        <div className="mb-auto">
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Give a hint (Optional)
          </label>
          <textarea
            value={promptHint}
            onChange={(e) => setPromptHint(e.target.value)}
            placeholder="e.g. Vintage 1990s streetwear hoodie, lightly used..."
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none h-24"
            disabled={mutation.isPending}
          />
        </div>

        <div className="mt-8 border-t border-zinc-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <InlineLinkButton
            onClick={onBack}
            disabled={mutation.isPending}
            className="disabled:opacity-50"
          >
            ← Back to Category
          </InlineLinkButton>

          <Button
            onClick={handleGenerate}
            isLoading={mutation.isPending}
            disabled={!file || !categoryId || mutation.isPending}
          >
            Generate with AI <span className="text-xl leading-none">✨</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
