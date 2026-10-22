"use client";

import { useCallback, useRef, useState } from "react";
import { gradingSamples } from "@/data/portfolio";

function Slider({
  sample,
  label,
}: {
  sample: (typeof gradingSamples)[number];
  label: string;
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

  const isVertical = sample.aspect === "9/16";

  return (
    <div className="flex justify-center">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-2xl border border-stone-800 select-none touch-none cursor-ew-resize w-full ${
          isVertical ? "max-w-[min(100%,39.4vh)]" : ""
        }`}
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
          alt={`${sample.title} — ungraded Rec 709 footage`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          loading="lazy"
          draggable={false}
        />

        {/* Labels */}
        <span className="absolute top-4 left-4 px-2.5 py-1.5 rounded bg-black/70 text-[10px] font-bold tracking-widest uppercase text-stone-200 pointer-events-none">
          Rec 709
        </span>
        <span className="absolute top-4 right-4 px-2.5 py-1.5 rounded bg-black/70 text-[10px] font-bold tracking-widest uppercase text-[#d4a574] pointer-events-none">
          {label}
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
    </div>
  );
}

export default function ColorGrade() {
  const [activeId, setActiveId] = useState(gradingSamples[0].id);
  const activeIndex = gradingSamples.findIndex((s) => s.id === activeId);
  const active = gradingSamples[activeIndex];
  const label = `Grade ${String(activeIndex + 1).padStart(2, "0")}`;

  return (
    <section id="color-grade" className="py-20 sm:py-24 bg-[#0a0a0a] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Color Grading</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100">Before & After</h2>
          <p className="mt-3 text-stone-400">
            Pick a look below and drag the frame to compare it against the ungraded Rec 709. Every look is built in DaVinci Resolve.
          </p>
        </div>

        <div className="mt-10">
          <Slider key={active.id} sample={active} label={label} />
        </div>

        {/* Thumbnail picker */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {gradingSamples.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`group text-left rounded-xl overflow-hidden border transition-colors cursor-pointer ${
                  isActive ? "border-[#d4a574]" : "border-stone-800 hover:border-stone-600"
                }`}
                aria-pressed={isActive}
              >
                <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                  <img
                    src={s.after}
                    alt={`${s.title} thumbnail`}
                    className={`w-full h-full object-cover transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-90"}`}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className={`px-2.5 py-2 text-[10px] font-bold tracking-widest uppercase ${isActive ? "text-[#d4a574]" : "text-stone-500 group-hover:text-stone-300"}`}>
                  {String(i + 1).padStart(2, "0")} · {s.title}
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-center text-[11px] font-bold tracking-[0.25em] uppercase text-[#d4a574]">
          {label} · {active.title}
        </p>
      </div>
    </section>
  );
}
