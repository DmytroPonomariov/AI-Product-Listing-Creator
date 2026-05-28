"use client";

type ProgressTrackerProps = {
  step: number;
  total: number;
  title: string;
  gradientClassName?: string;
  glowClassName?: string;
};

export function ProgressTracker({
  step,
  total,
  title,
  gradientClassName = "from-violet-650 to-indigo-500",
  glowClassName = "shadow-[0_0_10px_rgba(139,92,246,0.4)]",
}: ProgressTrackerProps) {
  const safeTotal = Math.max(1, total);
  const safeStep = Math.min(Math.max(1, step), safeTotal);
  const progressPercent = (safeStep / safeTotal) * 100;

  return (
    <div className="w-full mb-8 md:mb-12">
      <div className="flex justify-between items-center text-[10px] md:text-xs text-zinc-500 mb-2.5 font-mono tracking-wider">
        <span>
          STEP {safeStep} OF {safeTotal}
        </span>
        <span className="text-zinc-400 font-semibold uppercase">{title}</span>
      </div>

      <div className="w-full h-1 bg-zinc-900/80 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradientClassName} rounded-full ${glowClassName} transition-[width] duration-500`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

