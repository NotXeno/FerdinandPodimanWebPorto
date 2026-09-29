import Link from "next/link";
import { personalInfo, contact } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#d4a574] flex items-center justify-center font-mono text-xs font-bold text-black">FP</span>
            <div>
              <div className="text-sm font-bold tracking-widest text-stone-100">{personalInfo.name.toUpperCase()}</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-stone-500">{personalInfo.title}</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-5 text-xs tracking-widest uppercase text-stone-500">
            <Link href="#journey" className="hover:text-stone-200">Journey</Link>
            <Link href="#workshop" className="hover:text-stone-200">Workshop</Link>
            <Link href="#contact" className="hover:text-stone-200">Contact</Link>
          </nav>
          <div className="flex gap-3">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:bg-[#1ebe5d] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11z" /></svg>
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4a574]">IG</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4a574]">in</a>
            <a href={`mailto:${contact.email}`} className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4a574]">✉</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {year} {personalInfo.name}. All rights reserved.</span>
          <span>Built with Next.js • TypeScript • Tailwind • Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
