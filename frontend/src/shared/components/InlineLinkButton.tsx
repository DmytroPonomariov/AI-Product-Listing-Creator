"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type InlineLinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function InlineLinkButton({
  children,
  className,
  ...props
}: InlineLinkButtonProps) {
  return (
    <button
      {...props}
      className={`text-[14px] text-zinc-500 hover:text-zinc-300 underline font-mono cursor-pointer transition-colors disabled:opacity-50 ${className || ""}`}
    >
      {children}
    </button>
  );
}
