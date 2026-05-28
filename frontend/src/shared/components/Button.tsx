import { ReactNode } from "react";
import { cn } from "@/shared/utils/clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({ isLoading, children, className, ...props }: ButtonProps) {
  return (
    <button
      disabled={isLoading || props.disabled}
      className={cn(
        "px-8 py-3.5 rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 flex items-center justify-center gap-2",
        "bg-gradient-to-r from-violet-650 to-indigo-650 hover:from-violet-600 hover:to-indigo-600 text-white shadow-[0_4px_25px_rgba(139,92,246,0.25)] active:scale-[0.98]",
        "disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-zinc-400 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
