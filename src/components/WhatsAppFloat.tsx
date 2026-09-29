"use client";
import { contact } from "@/data/portfolio";

export default function WhatsAppFloat() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex items-center justify-center hover:bg-[#1ebe5d] hover:scale-105 transition-all"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.05 4.94A9.91 9.91 0 0012 1.95a9.87 9.87 0 00-8.51 14.86L1.95 23l6.36-1.67A9.87 9.87 0 0012 22.05a9.91 9.91 0 007.05-17.11zm-7.05 14.3a8.18 8.18 0 01-4.19-1.15l-.3-.18-3.78.99.99-3.68-.2-.38a8.16 8.16 0 011.3-10.3 8.21 8.21 0 0111.6 0 8.21 8.21 0 010 11.6 8.16 8.16 0 01-5.42 2.1zm4.68-5.92c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a0a] animate-pulse" />
    </a>
  );
}
