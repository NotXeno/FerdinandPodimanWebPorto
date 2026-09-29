"use client";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[68px] overflow-hidden bg-[#0a0a0a]">
      {/* ambient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#d4a574]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-amber-900/10 rounded-full blur-[100px]" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(stone 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 text-[#d4a574] text-[11px] tracking-[0.2em] uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] animate-pulse" />
              Available for grading — Film • Commercial • MV
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[0.95] tracking-tight">
              <span className="block text-stone-100">Ferdinand</span>
              <span className="block gold-text">Podiman</span>
            </h1>
            <p className="mt-3 text-[11px] tracking-[0.35em] uppercase text-stone-500 font-mono">Professional Color Grader</p>

            <p className="mt-6 text-[17px] leading-relaxed text-stone-300 max-w-xl">
              Crafting cinematic visuals & emotional stories through color. 8 years shaping looks for film, commercial & music video — and teaching 660+ filmmakers to see light differently.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/6282113716093?text=Halo%20Ferdinand%2C%20saya%20tertarik%20dengan%20jasa%20color%20grading%20Anda.%20Bisa%20diskusi%20project%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-black text-sm font-bold tracking-wide hover:bg-[#1ebe5d] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11zm-7.05 14.3a8.18 8.18 0 01-4.19-1.15l-.3-.18-3.78.99.99-3.68-.2-.38a8.16 8.16 0 011.3-10.3 8.21 8.21 0 0111.6 0 8.21 8.21 0 010 11.6 8.16 8.16 0 01-5.42 2.1zm4.68-5.92c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" /></svg>
                WhatsApp
              </a>
              <Link href="#workshop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-stone-700 text-stone-200 text-sm font-medium hover:bg-stone-900 transition-colors">
                Explore Workshop
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs text-stone-500">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Jakarta, Indonesia</span>
              <span className="hidden sm:inline-flex items-center gap-2">• DaVinci Resolve • ACES • HDR</span>
            </div>

            {/* stats inline for mobile */}
            <div className="mt-10 grid grid-cols-3 lg:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-stone-800 bg-stone-900/60 p-4">
                  <div className="text-2xl font-bold text-[#d4a574] leading-none">{s.value}</div>
                  <div className="text-[11px] tracking-widest uppercase text-stone-200 font-semibold mt-1">{s.label}</div>
                  <div className="text-[11px] text-stone-500">{s.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* portrait */}
          <div className="relative">
            <div className="relative rounded-[28px] overflow-hidden border border-stone-800 bg-stone-900 aspect-[4/5] lg:aspect-[4/5.2]">
              <Image
                src={personalInfo.avatar}
                alt={`${personalInfo.name} — Professional Color Grader`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* scope bars overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-0 inset-x-0 h-10 bg-black/60 backdrop-blur flex items-center justify-between px-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-mono">Vectorscope</span>
                <span className="text-[10px] text-[#d4a574] font-mono">00:42:18</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone-300 font-mono">DaVinci Resolve • Color Suite</span>
                </div>
              </div>
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#d4a574] text-black rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-2xl font-bold leading-none">8 Years</div>
              <div className="text-[11px] tracking-widest uppercase font-semibold">Grading Experience</div>
            </div>
            <div className="absolute -top-3 -right-2 sm:-right-3 bg-stone-900 border border-stone-700 text-stone-100 rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Scopes</div>
              <div className="flex gap-1 mt-1"><span className="w-6 h-1 rounded bg-[#d4a574]" /><span className="w-6 h-1 rounded bg-emerald-500" /><span className="w-6 h-1 rounded bg-sky-500" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
