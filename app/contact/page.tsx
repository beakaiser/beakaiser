"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const basePath = process.env.PAGES_BASE_PATH || "";

  // 🗺️ SICHERER WEGWEISER: Wir packen den Map-Link in eine geschützte Variable, damit Next.js ihn nicht blockiert
  const googleMapUrl = "https://google.com";

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center pb-20 font-sans text-stone-900 overflow-hidden">

      {/* --- 1. ELEGANT HEADER --- */}
      <div className="w-full relative h-[380px] flex items-center justify-center overflow-hidden border-b border-stone-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

        <div className="relative z-10 text-center px-4">
          <span className="uppercase tracking-[0.5em] text-xs text-white/90 mb-4 block font-light">
            Longvity&reg; Netzwerk
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter uppercase">
            Contact & Location
          </h1>
          <div className="h-[1px] w-20 bg-white/30 mx-auto mt-8"></div>
        </div>
      </div>

      {/* --- VOLLFLÄCHIGER CONTAINER (Nimmt die gesamte Breite ein) --- */}
      <div className="w-full space-y-16">

        {/* --- 2. KONTAKTDATEN (Volle Breite) --- */}
        <section className="w-full bg-white border-b border-stone-100 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-[#7B667E] font-medium uppercase tracking-[0.3em] text-xs block mb-3">
              Ihr Besuch bei uns
            </span>
            <h2 className="text-4xl font-light tracking-tight text-stone-900 uppercase">
              Kontakt & Anfahrt
            </h2>
            <div className="h-[1px] w-12 bg-[#7B667E]/30 my-6"></div>

            <p className="text-stone-500 font-light leading-relaxed text-base max-w-2xl mb-12">
              Wir sind Teil des Longvity Centers im {" "}
              <span className="font-normal text-stone-900 underline decoration-[#7B667E]/30 underline-offset-4">
                Longvity&reg; Center Berlin
              </span>{" "}
              – dem exklusiven Ort für nachhaltige Lebensqualität, Regeneration und Gesichtsanwendungen.
            </p>

            {/* Infoboxen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-stone-100 pt-10">
              <div className="space-y-4">
                <h3 className="font-medium text-xs uppercase tracking-widest text-[#7B667E]">
                  Standort
                </h3>
                <p className="text-stone-600 font-light text-base leading-relaxed">
                  Geiserichstraße 3<br />
                  12105 Berlin<br />
                  <span className="text-stone-400 text-sm tracking-wide">Tempelhof-Schöneberg</span>
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-xs uppercase tracking-widest text-[#7B667E]">
                  Direktkontakt
                </h3>
                <p className="text-stone-600 font-light text-base leading-relaxed">
                  Beatrice Kaiser<br />
                  <span className="hover:text-stone-900 transition-colors block">0179 6964113</span>
                  <span className="hover:text-stone-900 transition-colors block">030 7537100</span>
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:beacosberlin@gmail.com"
                    className="inline-flex text-xs uppercase tracking-widest text-[#7B667E] hover:text-[#5A4B5D] transition-colors font-medium border-b border-[#7B667E]/20 pb-1"
                  >
                    Email senden &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. BILD-INSERT (Vollflächig) --- */}
        <section className="w-full h-[450px] md:h-[600px] relative overflow-hidden group">
          <Image
            src={`${basePath}lampe.jpg`}
            alt="Kosmetikbehandlung in Tempelhof"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-transparent to-stone-900/30"></div>
          <div className="absolute bottom-4 right-6 z-30">
            <p className="text-[8px] text-white/50 tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
              [Kosmetikbehandlung-in-Tempelhof]
            </p>
          </div>
        </section>


        {/* --- 5. HIGHLIGHT CTA --- */}
        <section className="w-full max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl p-12 md:p-20 text-center shadow-xl overflow-hidden bg-[#3C323F] border border-stone-900 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7B667E]/40 via-[#3C323F] to-[#A4B8C4]/30 opacity-60"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://transparenttextures.com')] bg-repeat"></div>

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <div className="mb-6 w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5 text-[#A4B8C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>

              <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium mb-3 block">
                Sichere dir deine Auszeit
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white leading-tight">
                Bereit für dein <br />
                <span className="uppercase text-stone-200 tracking-wide font-light">Schönheitsritual?</span>
              </h2>
              <div className="h-[1px] w-12 bg-white/20 my-2"></div>
              <p className="text-stone-300 font-light mb-10 text-base md:text-lg leading-relaxed max-w-md">
                Lass den Alltag hinter dir. Wähle deinen Wunschtermin bequem online und gleite in tiefe Regeneration.
              </p>

              <Link
                href="/buchung"
                className="group/btn relative inline-flex items-center justify-center gap-3 bg-white text-[#3C323F] px-14 py-5 rounded-full text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_40px_rgba(164,184,196,0.5)] hover:-translate-y-1 active:translate-y-0"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-50 to-white opacity-100 transition-all"></div>
                <span className="relative z-10">Wunschtermin buchen</span>
                <span className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300 text-[#7B667E] font-normal">&rarr;</span>
              </Link>
            </div>

            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#7B667E] opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#A4B8C4] opacity-20 blur-3xl rounded-full"></div>
          </div>
        </section>

        {/* --- 4. MAP SECTION (Sicher über die JavaScript-Variable geladen) --- */}
        <section className="w-full max-w-5xl mx-auto px-6">
          <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-stone-100 h-[450px] bg-stone-50">
            <iframe
              src={googleMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>



        {/* --- 6. MINIMAL FOOTER INFO --- */}
        <footer className="w-full max-w-5xl mx-auto px-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-stone-400 gap-4 md:gap-0 border-t border-stone-100 pt-8">
            <p className="text-center md:text-left font-light leading-relaxed">
              &copy; Longvity&reg; Beauty by Longvity&reg;Center Berlin – Beatrice Kaiser
            </p>
            <div className="space-x-8">
              <Link href="/impressum" className="hover:text-[#7B667E] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#7B667E] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
