"use client";
import { useEffect, useCallback } from "react";

export type LightboxItem = {
  image: string;
  title: string;
  subtitle?: string;
};

type Props = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onNavigate, close]);

  if (index === null || items.length === 0) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* close */}
      <button
        onClick={close}
        aria-label="Close preview"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-lg transition-colors"
      >
        ✕
      </button>

      {/* counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs tracking-widest text-stone-400 font-mono">
        {index + 1} / {items.length}
      </div>

      {/* prev */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-stone-800/90 hover:bg-[#d4a574] hover:text-black text-stone-200 transition-colors"
        >
          ←
        </button>
      )}

      {/* image */}
      <figure
        className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl border border-stone-800 shadow-2xl"
        />
        <figcaption className="mt-3 text-center">
          <div className="font-semibold text-stone-100 text-sm sm:text-base">{item.title}</div>
          {item.subtitle && <div className="text-xs text-stone-400 mt-1">{item.subtitle}</div>}
        </figcaption>
      </figure>

      {/* next */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          aria-label="Next image"
          className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-stone-800/90 hover:bg-[#d4a574] hover:text-black text-stone-200 transition-colors"
        >
          →
        </button>
      )}
    </div>
  );
}
