"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#journey", label: "Journey" },
  { href: "#workshop", label: "Workshop" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["home", "journey", "workshop", "certificates", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-stone-800" : "bg-transparent border-transparent border-b"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="#home" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#d4a574] flex items-center justify-center font-mono text-xs font-bold text-black">FP</span>
            <span className="hidden sm:block">
              <span className="block text-sm font-bold tracking-widest text-stone-100 leading-none">FERDINAND</span>
              <span className="block text-[10px] tracking-[0.3em] text-[#d4a574] leading-none">COLORIST</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${active === i.href ? "text-[#d4a574]" : "text-stone-400 hover:text-stone-100"}`}
              >
                {i.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/6282113716093?text=Halo%20Ferdinand%2C%20saya%20tertarik%20dengan%20jasa%20color%20grading%20Anda.%20Bisa%20diskusi%20project%3F" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-full bg-[#25D366] text-black text-xs font-bold tracking-widest uppercase hover:bg-[#1ebe5d] transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11zm-7.05 14.3a8.18 8.18 0 01-4.19-1.15l-.3-.18-3.78.99.99-3.68-.2-.38a8.16 8.16 0 011.3-10.3 8.21 8.21 0 0111.6 0 8.21 8.21 0 010 11.6 8.16 8.16 0 01-5.42 2.1zm4.68-5.92c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" /></svg>
              WhatsApp
            </a>
            <Link href="#contact" className="px-5 py-2.5 rounded-full bg-[#d4a574] text-black text-xs font-bold tracking-widest uppercase hover:bg-[#c9955a] transition-colors">
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:bg-stone-800"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[420px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${active === i.href ? "bg-stone-800 text-[#d4a574]" : "text-stone-400"}`}
              >
                {i.label}
              </Link>
            ))}
            <a href="https://wa.me/6282113716093?text=Halo%20Ferdinand%2C%20saya%20tertarik%20dengan%20jasa%20color%20grading%20Anda.%20Bisa%20diskusi%20project%3F" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 rounded-lg bg-[#25D366] text-black text-center text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
              WhatsApp
            </a>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 rounded-lg bg-[#d4a574] text-black text-center text-sm font-bold tracking-widest uppercase">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
