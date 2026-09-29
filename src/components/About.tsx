"use client";
import { about, stats } from "@/data/portfolio";

// Keep About as a re-export wrapper for compatibility, now renders a philosophy section
export default function About() {
  return (
    <section id="about" className="py-12 bg-[#0a0a0a] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] border border-stone-800 bg-gradient-to-br from-stone-900 to-black p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Philosophy</p>
            <h3 className="mt-1 text-xl font-bold text-stone-100">Every frame is a decision</h3>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl">I chase invisible grading — where the audience feels the story, not the grade. Skin that breathes, contrast that guides the eye, color that remembers.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="text-center min-w-[84px] rounded-xl bg-black border border-stone-800 px-4 py-3">
                <div className="text-lg font-bold text-[#d4a574]">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-stone-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
