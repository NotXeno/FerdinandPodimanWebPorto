"use client";
import { journey, about } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">The Journey</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100 leading-tight">Turning light into feeling since 2018</h2>
            <p className="mt-4 text-stone-400 leading-relaxed">{about.description}</p>

            <div className="mt-10 rounded-2xl border border-stone-800 bg-stone-900 p-6">
              <h4 className="font-semibold text-stone-100">Experience</h4>
              <div className="mt-4 space-y-4">
                {about.experience.map((e) => (
                  <div key={e.role} className="border-l-2 border-stone-800 pl-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-medium text-stone-100 text-sm">{e.role}</span>
                      <span className="text-xs text-[#d4a574]">{e.period}</span>
                    </div>
                    <p className="text-xs text-stone-400">{e.company}</p>
                    {e.points.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {e.points.map((pt, i) => (
                          <li key={i} className="flex gap-2 text-sm text-stone-300 leading-relaxed">
                            <span aria-hidden className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#d4a574]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-stone-200">Timeline</h3>
            <div className="mt-6 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-stone-800" />
              <div className="space-y-6">
                {journey.map((j, idx) => (
                  <div key={`${j.year}-${idx}`} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#d4a574] border-4 border-[#0f0f0f] flex items-center justify-center" />
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#d4a574]">{j.year}</span>
                      <h4 className="font-semibold text-stone-100">{j.title}</h4>
                    </div>
                    <p className="mt-1 text-sm text-stone-400">{j.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
