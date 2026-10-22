"use client";

import { useCallback, useRef, useState } from "react";
import { gradingSamples } from "@/data/portfolio";

function Slider({
  sample,
}: {
  sample: (typeof gradingSamples)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-stone-800 select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: sample.aspect }}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) update(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
      }}
      tabIndex={0}
      role="slider"
      aria-label={`Before and after comparison — ${sample.title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
    >
      {/* After (full background) */}
      <img
        src={sample.after}
        alt={`${sample.title} — after color grading`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Before (clipped overlay) */}
      <img
        src={sample.before}
        alt={`${sample.title} — ungraded raw footage`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading="lazy"
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] font-bold tracking-widest uppercase text-stone-200 pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#d4a574] text-black text-[10px] font-bold tracking-widest uppercase pointer-events-none">
        After
      </span>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-[#d4a574] shadow-[0_0_12px_rgba(212,165,116,0.8)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#d4a574] border-2 border-black/30 flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ColorGrade() {
  return (
    <section id="color-grade" className="py-20 sm:py-24 bg-[#0a0a0a] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Color Grading</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100">Before & After</h2>
            <p className="mt-2 text-stone-400 max-w-xl">
              Drag the handle to compare the raw, ungraded footage against my finished grade. Every look is built in DaVinci Resolve.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gradingSamples.map((s) => (
            <div key={s.id}>
              <Slider sample={s} />
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold text-stone-100">{s.title}</h3>
                <span className="text-xs text-stone-500">{s.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
