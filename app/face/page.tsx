import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center pb-20 font-sans">
      {/* --- ELEGANT HEADER --- */}
      <div className="w-full relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')]"></div>
        <div className="relative z-10 text-center px-4">
          <span className="uppercase tracking-[0.4em] text-xs md:text-sm text-white/80 mb-3 block">
            Traditional Chinese Beauty
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter">
            FACIAL <span className="font-semibold italic">RITUALS</span>
          </h1>
          <div className="h-[1px] w-24 bg-white/30 mx-auto mt-8"></div>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-5xl w-full px-6 -mt-16 relative z-20">
        {/* --- SECTION 1: REJUVINATE --- */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-16 mb-16 border border-gray-50">
          <div className="text-center mb-16">
            <span className="text-[#7B667E] font-medium uppercase tracking-widest text-xs">
              Zellerneuerung
            </span>
            <h2 className="text-4xl font-serif mt-2 text-gray-800">
              Rejuvenate
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Innovative chinesische Gesichtsbehandlungen, die Ihre Haut mit
              traditionellen Heiltechniken und moderner Pflege verwöhnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border-l-2 border-gray-100 pl-8 hover:border-[#7B667E] transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Traditionell Verjüngende Massage
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Qi-Fluss Harmonisierung mit Schönheitswerkzeugen. Inklusive
                Reinigung und zellerneuernder Pflege für ein strahlendes
                Ergebnis.
              </p>
              <div className="text-[#7B667E] font-semibold tracking-tighter text-lg">
                90 € | 60 Min.
              </div>
            </div>

            <div className="group border-l-2 border-gray-100 pl-8 hover:border-[#7B667E] transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Microneedling
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Intensive Collagen-Boost-Behandlung durch Mikro-Perforation. Für
                ein pralles, rosiges Hautbild nach alten Geheimnissen.
              </p>
              <div className="text-[#7B667E] font-semibold tracking-tighter text-lg">
                139 € | 90 Min.
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: RELAX --- */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-16 mb-16 border border-gray-50">
          <div className="text-center mb-16">
            <span className="text-[#A4B8C4] font-medium uppercase tracking-widest text-xs">
              Tiefe Entspannung
            </span>
            <h2 className="text-4xl font-serif mt-2 text-gray-800">Relax</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Sanfte Reinigung und ausgiebige Massage mit Gua Sha für einen
              harmonischen Lymphfluss nach einem stressigen Tag.
            </p>
          </div>

          <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                Entspannendes Gesichtsritual
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Reinigung • Massage • Gua Sha
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-2xl font-light text-[#7B667E]">
              75 € | 50 Min.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">
                + Wärmender Kräuterstempel
              </h4>
              <p className="text-sm text-gray-600 mb-4 italic">
                Aromatische Wärme für entspannte Sinne.
              </p>
              <div className="text-[#7B667E] font-bold">20 € | 15 Min.</div>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">
                + Ceragem-Massageliege
              </h4>
              <p className="text-sm text-gray-600 mb-4 italic">
                Wärme & Massage für den Rücken.
              </p>
              <div className="text-[#7B667E] font-bold">
                ab 12 € | ab 20 Min.
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: PURIFY --- */}
        <section className="bg-[#4A3B4D] rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="text-slate-400 font-medium uppercase tracking-[0.3em] text-xs">
                Reinheit
              </span>
              <h2 className="text-4xl font-serif mt-2">Purify</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-light tracking-wide">
                  Purify-Paket
                </h3>
                <span className="text-2xl font-bold mt-2 md:mt-0">
                  80 €{" "}
                  <span className="text-lg font-light opacity-60">
                    | 60 Min.
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>{" "}
                  Hauttyp-Analyse & Beratung
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>{" "}
                  Tiefenreinigung + Maske
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>{" "}
                  Zielgerichtetes Peeling
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>{" "}
                  Nicht-komedogene Tagespflege
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left pt-6 border-t border-white/5">
              <div>
                <h4 className="text-slate-400 uppercase text-xs tracking-widest mb-3">
                  Augenbrauen
                </h4>
                <p className="text-lg">
                  Formen & Färben <span className="text-white/40 mx-2">|</span>{" "}
                  25 €
                </p>
              </div>
              <div>
                <h4 className="text-slate-400 uppercase text-xs tracking-widest mb-3">
                  Wimpern
                </h4>
                <p className="text-lg">
                  Lifting, Farbe & Pflege{" "}
                  <span className="text-white/40 mx-2">|</span> 45 €
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <div className="mt-20 text-center">
          <a
            href="/buchung"
            className="group relative inline-flex items-center justify-center px-16 py-6 font-bold text-white transition-all duration-200 bg-[#7B667E] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            <span className="relative uppercase tracking-widest text-sm">
              Jetzt Termin buchen
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
