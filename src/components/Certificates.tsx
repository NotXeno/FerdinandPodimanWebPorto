"use client";
import { useState } from "react";
import { certificates } from "@/data/portfolio";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = certificates.map((c) => ({
    image: c.image,
    title: c.title,
    subtitle: `${c.issuer} • ${c.year}`,
  }));

  return (
    <section id="certificates" className="py-20 sm:py-24 bg-[#0f0f0f] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Credentials</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100">Certified craft</h2>
        <p className="mt-2 text-stone-400 max-w-xl">Official certifications backing a craft honed since 2018. Click any image to preview.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setLightboxIndex(i)}
              className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-zoom-in"
            >
              <div className="relative aspect-[3/4] bg-stone-800 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-[#d4a574]">⊕ Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-100 text-sm leading-tight">{c.title}</h3>
                <p className="text-xs text-[#d4a574] mt-1">{c.issuer} • {c.year}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox items={items} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </section>
  );
}
