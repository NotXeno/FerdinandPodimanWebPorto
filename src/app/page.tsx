import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main>
        <Hero />
        <Journey />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
