"use client";
import { useState } from "react";
import { contact, personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0f0f0f] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574]">Contact</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-100">Let’s make it cinematic</h2>
            <p className="mt-3 text-stone-400">{contact.message}</p>

            <div className="mt-8 space-y-3">
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group">
                <span className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11zm-7.05 14.3a8.18 8.18 0 01-4.19-1.15l-.3-.18-3.78.99.99-3.68-.2-.38a8.16 8.16 0 011.3-10.3 8.21 8.21 0 0111.6 0 8.21 8.21 0 010 11.6 8.16 8.16 0 01-5.42 2.1zm4.68-5.92c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" /></svg>
                </span>
                <div className="flex-1"><div className="text-xs text-stone-500">WhatsApp — fastest response</div><div className="text-sm font-bold text-stone-100 group-hover:text-[#25D366] transition-colors">+62 821-1371-6093</div></div>
                <span className="text-xs font-bold tracking-widest uppercase bg-[#25D366] text-black px-3 py-1.5 rounded-full">Chat</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900 border border-stone-800 hover:border-[#d4a574]/30 transition-colors">
                <span className="w-12 h-12 rounded-xl bg-[#d4a574]/15 border border-[#d4a574]/20 flex items-center justify-center text-[#d4a574]">✉</span>
                <div><div className="text-xs text-stone-500">Email</div><div className="text-sm font-medium text-stone-100">{contact.email}</div></div>
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors">
                  <div className="text-xs text-stone-500">Instagram</div><div className="text-sm font-medium text-stone-100">@ferdipodiman</div>
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors">
                  <div className="text-xs text-stone-500">LinkedIn</div><div className="text-sm font-medium text-stone-100">Connect professionally</div>
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> {personalInfo.location} • Remote grading available
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-stone-800 bg-stone-900 p-6 sm:p-7">
            <h3 className="font-semibold text-stone-100">Send a message</h3>
            {status === "success" && <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">Thanks! I’ll reply within 24 hours.</div>}
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-stone-400">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-black border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4a574]/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs text-stone-400">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-black border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4a574]/40" placeholder="you@studio.com" />
                </div>
              </div>
              <div>
                <label className="text-xs text-stone-400">Project type</label>
                <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-black border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4a574]/40" placeholder="Film / Commercial / Music Video" />
              </div>
              <div>
                <label className="text-xs text-stone-400">Message</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-black border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4a574]/40 resize-y" placeholder="Tell me about timeline, camera, look…"></textarea>
              </div>
              <button type="submit" disabled={status === "submitting"} className="w-full py-3.5 rounded-full bg-[#d4a574] text-black font-bold hover:bg-[#c9955a] disabled:opacity-60 transition-colors">
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-black font-bold hover:bg-[#1ebe5d] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11z" /></svg>
                Chat on WhatsApp
              </a>
              <p className="text-[11px] text-stone-500 text-center">Form is demo-only. For instant reply use WhatsApp above. Photo: <span className="font-mono text-stone-400">public/images/avatar.webp</span> • Video: YouTube embed</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
