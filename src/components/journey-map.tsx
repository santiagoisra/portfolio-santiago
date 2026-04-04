"use client";

import { useRef, useState, useCallback } from "react";
import type { JourneyStep } from "@/lib/case-studies";

const emotionConfig = {
  positiva: { emoji: "😊", color: "bg-emerald-500", y: 15 },
  neutral: { emoji: "😐", color: "bg-zinc-500", y: 45 },
  negativa: { emoji: "😟", color: "bg-amber-500", y: 70 },
  "muy negativa": { emoji: "😫", color: "bg-red-500", y: 90 },
};

export function JourneyMap({ steps }: { steps: JourneyStep[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    el.style.cursor = "grabbing";
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  return (
    <div className="rounded-xl border border-border/50 bg-zinc-900/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
          Journey Map del usuario
        </h4>
        <span className="text-[10px] text-zinc-600 select-none">
          ← arrastra para ver mas →
        </span>
      </div>

      {/* Emotion curve labels */}
      <div className="flex items-center gap-4 mb-4 text-[10px] text-muted-foreground">
        {Object.entries(emotionConfig).map(([key, val]) => (
          <span key={key} className="flex items-center gap-1">
            <span className={`h-2 w-2 rounded-full ${val.color}`} />
            {key}
          </span>
        ))}
      </div>

      {/* Draggable scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-2 scrollbar-none select-none"
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-0 min-w-max">
          {steps.map((step, i) => {
            const config = emotionConfig[step.emotion];
            return (
              <div
                key={step.phase}
                className="flex flex-col items-center relative"
                style={{ width: 160 }}
              >
                {/* Emotion dot and line */}
                <div className="relative h-28 w-full flex items-center justify-center">
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-1/2 h-px bg-zinc-700" />
                  )}
                  {i > 0 && (
                    <div className="absolute top-1/2 left-0 w-1/2 h-px bg-zinc-700" />
                  )}
                  <div
                    className="relative z-10 flex flex-col items-center transition-all"
                    style={{ marginTop: `${config.y - 45}px` }}
                  >
                    <span className="text-lg">{config.emoji}</span>
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${config.color} mt-1`}
                    />
                  </div>
                </div>

                {/* Phase info */}
                <div className="text-center px-2 mt-2">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {step.phase}
                  </p>
                  <p className="text-xs text-foreground mt-1 leading-tight">
                    {step.action}
                  </p>
                  {step.painPoint && (
                    <p className="text-[10px] text-red-400 mt-1.5 leading-tight">
                      {step.painPoint}
                    </p>
                  )}
                  {step.opportunity && (
                    <p className="text-[10px] text-emerald-400 mt-1 leading-tight">
                      {step.opportunity}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
