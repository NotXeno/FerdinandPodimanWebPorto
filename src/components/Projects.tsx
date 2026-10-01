"use client";
import { useState } from "react";
import { events, onlineClasses, offlineClassAlbums, workshopAlbums } from "@/data/portfolio";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

type Tab = "Workshop" | "Online Classes" | "Offline Classes";

export default function Projects() {
  const [active, setActive] = useState<Tab>("Workshop");
  const [activeOfflineAlbum, setActiveOfflineAlbum] = useState<string | null>(null);
  const [activeWorkshopAlbum, setActiveWorkshopAlbum] = useState<string | null>(null);
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (items: LightboxItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxIndex(null);

  const workshopItems: LightboxItem[] = (activeWorkshopAlbum
    ? workshopAlbums.find((a) => a.id === activeWorkshopAlbum)?.photos ?? []
    : []
  ).map((w) => ({
    image: w.image,
    title: w.title,
    subtitle: w.date,
  }));
  const activeWorkshop = workshopAlbums.find((a) => a.id === activeWorkshopAlbum) ?? null;
  const onlineItems: LightboxItem[] = onlineClasses.map((o) => ({
    image: o.image,
    title: o.title,
    subtitle: o.date,
  }));
  const offlineItems: LightboxItem[] = (activeOfflineAlbum
    ? offlineClassAlbums.find((a) => a.id === activeOfflineAlbum)?.photos ?? []
    : []
  ).map((o) => ({
    image: o.image,
    title: o.title,
    subtitle: o.date,
  }));
  const activeAlbum = offlineClassAlbums.find((a) => a.id === activeOfflineAlbum) ?? null;

  return (
    <section id="workshop" className="py-20 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Portfolio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100">Workshop, Classes & Events</h2>
            <p className="mt-2 text-stone-400 max-w-xl">On-stage moments, teaching sessions & the stages where I share it. Click any image to preview.</p>
          </div>
          <div className="flex flex-nowrap gap-1 p-1 rounded-full bg-stone-900 border border-stone-800 max-w-full overflow-x-auto">
            {(["Workshop", "Online Classes", "Offline Classes"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setActive(t); setActiveOfflineAlbum(null); setActiveWorkshopAlbum(null); setLightboxIndex(null); }}
                className={`shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${active === t ? "bg-[#d4a574] text-black" : "text-stone-400 hover:text-stone-200"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {active === "Workshop" && (
          <div id="workshop-gallery" className="mt-10">
            {!activeWorkshop ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {workshopAlbums.map((album) => (
                    <button
                      key={album.id}
                      onClick={() => setActiveWorkshopAlbum(album.id)}
                      className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
                        <img
                          src={album.cover}
                          alt={album.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-stone-200">
                          <span aria-hidden>📁</span> Folder
                        </span>
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#d4a574] text-black text-[10px] font-bold tracking-widest uppercase">
                          {album.photos.length} Photos
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-stone-100 leading-tight text-sm">{album.title}</h3>
                        <p className="mt-1 text-xs text-stone-400">{album.date} • Speaker at Workshop</p>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-xs text-stone-500">Speaker folders from <span className="font-mono text-stone-300">public/assets/workshop/</span> — click a folder to view photos</p>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setActiveWorkshopAlbum(null); setLightboxIndex(null); }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 bg-stone-900 text-xs font-bold tracking-widest uppercase text-stone-300 hover:border-[#d4a574]/50 hover:text-[#d4a574] transition-colors"
                >
                  ← Back to folders
                </button>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">{activeWorkshop.title}</h3>
                    <p className="text-xs text-stone-400">{activeWorkshop.date} • {activeWorkshop.photos.length} photos</p>
                  </div>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {activeWorkshop.photos.map((w, i) => (
                    <button
                      key={w.id}
                      onClick={() => openLightbox(workshopItems, i)}
                      className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-zoom-in"
                    >
                      <div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
                        <img
                          src={w.image}
                          alt={w.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-stone-200">Speaker</span>
                        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-[#d4a574]">⊕ Preview</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-stone-100 leading-tight text-sm">{w.title}</h3>
                        <p className="mt-1 text-xs text-stone-400">{w.date}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* speaking engagements — merged from Events */}
            <div className="mt-10">
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-200">Speaking Engagements</h3>
              <div className="mt-4 rounded-2xl border border-stone-800 overflow-hidden">
                <div className="grid grid-cols-12 gap-0 bg-stone-900 px-4 sm:px-6 py-3 text-[11px] tracking-widest uppercase text-stone-500 font-semibold">
                  <span className="col-span-6 sm:col-span-5">Event</span>
                  <span className="hidden sm:block col-span-2">Audience</span>
                  <span className="col-span-3 sm:col-span-2">Year</span>
                  <span className="col-span-3 sm:col-span-3">Role</span>
                </div>
                {events.map((e, idx) => (
                  <div key={idx} className={`grid grid-cols-12 gap-0 px-4 sm:px-6 py-4 text-sm items-center ${idx % 2 === 0 ? "bg-[#0a0a0a]" : "bg-stone-900/40"} border-t border-stone-800`}>
                    <div className="col-span-6 sm:col-span-5">
                      <div className="font-medium text-stone-100 leading-tight">{e.title}</div>
                      <div className="text-xs text-stone-500">{e.location}</div>
                    </div>
                    <div className="hidden sm:block col-span-2 text-[#d4a574] font-semibold">{e.audience}</div>
                    <div className="col-span-3 sm:col-span-2 text-stone-400">{e.year} <span className="sm:hidden text-[#d4a574]">• {e.audience}</span></div>
                    <div className="col-span-3 sm:col-span-3"><span className="inline-flex px-2.5 py-1 rounded-full bg-[#d4a574]/10 border border-[#d4a574]/20 text-xs text-[#d4a574]">{e.role}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {active === "Online Classes" && (
          <div id="online-classes" className="mt-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {onlineClasses.map((oc, i) => (
                <button
                  key={oc.id}
                  onClick={() => openLightbox(onlineItems, i)}
                  className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-zoom-in"
                >
                  <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
                    <img
                      src={oc.image}
                      alt={oc.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-stone-200">Online Class</span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-[#d4a574]">⊕ Preview</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-stone-100 leading-tight text-sm">{oc.title}</h3>
                      <p className="mt-1 text-xs text-stone-400">{oc.date}</p>
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs text-stone-500">Screenshots from <span className="font-mono text-stone-300">public/assets/online-class/</span></p>
          </div>
        )}

        {active === "Offline Classes" && (
          <div id="offline-classes" className="mt-10">
            {!activeAlbum ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {offlineClassAlbums.map((album) => (
                    <button
                      key={album.id}
                      onClick={() => setActiveOfflineAlbum(album.id)}
                      className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
                        <img
                          src={album.cover}
                          alt={album.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-stone-200">
                          <span aria-hidden>📁</span> Folder
                        </span>
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#d4a574] text-black text-[10px] font-bold tracking-widest uppercase">
                          {album.photos.length} Photos
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-stone-100 leading-tight text-sm">{album.title}</h3>
                        <p className="mt-1 text-xs text-stone-400">{album.date} • Private Class</p>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-xs text-stone-500">Private Class folders from <span className="font-mono text-stone-300">public/assets/private-offline/</span> — click a folder to view photos</p>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setActiveOfflineAlbum(null); setLightboxIndex(null); }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 bg-stone-900 text-xs font-bold tracking-widest uppercase text-stone-300 hover:border-[#d4a574]/50 hover:text-[#d4a574] transition-colors"
                >
                  ← Back to folders
                </button>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">{activeAlbum.title}</h3>
                    <p className="text-xs text-stone-400">{activeAlbum.date} • {activeAlbum.photos.length} photos</p>
                  </div>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {activeAlbum.photos.map((oc, i) => (
                    <button
                      key={oc.id}
                      onClick={() => openLightbox(offlineItems, i)}
                      className="group text-left rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-[#d4a574]/40 transition-colors cursor-zoom-in"
                    >
                      <div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
                        <img
                          src={oc.image}
                          alt={oc.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-stone-200">Private Class</span>
                        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-stone-700 text-[10px] tracking-widest uppercase text-[#d4a574]">⊕ Preview</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-stone-100 leading-tight text-sm">{oc.title}</h3>
                        <p className="mt-1 text-xs text-stone-400">{oc.date}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

      </div>

      <Lightbox items={lightboxItems} index={lightboxIndex} onClose={closeLightbox} onNavigate={setLightboxIndex} />
    </section>
  );
}
