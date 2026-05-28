"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type SecondaryActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** When true, shows the "success/active" emerald style */
  active?: boolean;
};

export function SecondaryActionButton({
  children,
  className,
  active = false,
  ...props
}: SecondaryActionButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border whitespace-nowrap
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-0 ${
          active
            ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-500/70"
            : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-600"
        } ${className || ""}`}
    >
      {children}
    </button>
  );
}

