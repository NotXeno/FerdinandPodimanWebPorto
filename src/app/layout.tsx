import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ferdinand Podiman | Professional Colorist",
    template: "%s | Ferdinand Podiman",
  },
  description:
    "Professional Colorist since 2018. Film, commercial & music video grading. 10+ events, 660+ audience taught. DaVinci Resolve, ACES, HDR. Based in Tangerang.",
  keywords: [
    "Colorist",
    "Colorist",
    "DaVinci Resolve",
    "Film Color Grading",
    "Professional Colorist",
    "Ferdinand Podiman",
    "Tangerang Colorist",
    "ACES Workflow",
    "HDR Grading",
  ],
  authors: [{ name: "Ferdinand Podiman" }],
  creator: "Ferdinand Podiman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferdicolourstudio.vercel.app",
    siteName: "Ferdinand Podiman — Colorist",
    title: "Ferdinand Podiman | Professional Colorist",
    description: "Crafting cinematic visuals through color — since 2018, 10+ events, 660+ students.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Ferdinand Podiman - Colorist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdinand Podiman | Professional Colorist",
    description: "Professional Colorist — Film, Commercial, Music Video. Since 2018.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetmono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans text-stone-100 bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
