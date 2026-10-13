import Link from "next/link";
import Image from "next/image";
import ImageSlideshow from "../components/ImageSlideshow"; // 💡 ERLAUBT: Ganz oben

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
              Vitalisierung
            </span>
            <h2 className="text-4xl font-serif mt-2 text-gray-800">
              Rejuvenate
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Innovative asiatische Schönheitsrituale, die Ihre Haut mit
              traditionellen Anwendungstechniken und nachhaltiger Wirkstoffpflege verwöhnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border-l-2 border-gray-100 pl-8 hover:border-[#7B667E] transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cupping Facial
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Traditionelle Cupping Massage für das Gesicht. Vitalisierendes Schönheitsritual für alle Sinne.
                Regt die Durchblutung an, fördert den Lymphfluss und aktiviert in der Tiefe. Regenerierende Maske und Tagespflege.
              </p>
              <div className="text-[#7B667E] font-semibold tracking-tighter text-lg">
                80 € | 60 Min.
              </div>
            </div>

            <div className="group border-l-2 border-gray-100 pl-8 hover:border-[#7B667E] transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gua Sha Facial
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Qi-Fluss-Harmonisierung nach fernöstlicher Weisheit. Löst Verspannungen und Stauungen im Gesicht,
                regt die Durchblutung an und sorgt für definierte Gesichtszüge.
                Regenerierende Maske und Tagespflege.
              </p>
              <div className="text-[#7B667E] font-semibold tracking-tighter text-lg">
                80 € | 60 Min.
              </div>
            </div>

            <div className="group border-l-2 border-gray-100 pl-8 hover:border-[#7B667E] transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Microneedling
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Collagentherapie zur Verfeinerung der Hautstruktur durch
                Microneedling. Für ein pralles, rosiges Hautbild nach alten
                Geheimnissen. Inklusive Regenerationsunterstützender medizinischer After-Care-Maske.
              </p>
              <div className="text-[#7B667E] font-semibold tracking-tighter text-lg">
                145 € | 90 Min.
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
              Tiefenwirksame Schönheitsrituale nach traditionell chinesischer Art. Finde dein entspannendes Gesichtsritual.
            </p>
          </div>

          <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                Relax Facial
             </h3>
              <p className="text-gray-500 text-sm mt-1">
                Ritual • Massage • Tiefenentspannung
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-2xl font-light text-[#7B667E]">
              70 € | 55 Min.
            </div>
          </div>

          <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                Lymph Facial+
             </h3>
              <p className="text-gray-500 text-sm mt-1">
                Lymphfluss lösende Massage • Anregend
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-2xl font-light text-[#7B667E]">
              75 € | 55 Min.
            </div>
          </div>
          <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center border border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                Relax Head & Neck
             </h3>
              <p className="text-gray-500 text-sm mt-1">
                Kopf, Gesicht und Nacken • Massage • Ganzheitliche Entspannung
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-2xl font-light text-[#7B667E]">
              80 € | 55 Min.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">
                + Wärmende Kräuterstempel
              </h4>
              <p className="text-sm text-gray-600 mb-4 italic">
                Aromatische Wärme für deine Sinne. Zubuchbar.
              </p>
              <div className="text-[#7B667E] font-bold">10 € | 15 Min.</div>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">
                + Ceragem-Massageliege
              </h4>
              <p className="text-sm text-gray-600 mb-4 italic">
                Wärme & Massage für den Rücken. Massageliege mit warmen Jadesteinen. Zubuchbar.
              </p>
              <div className="text-[#7B667E] font-bold">
                ab 15 € | ab 20 Min.
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto px-6 my-16 flex justify-center">
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/lampe.jpg/" // 👈 Name deines Bildes im public-Ordner
                alt="Body Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </section>



        {/* --- SECTION 3: PURIFY (MODERN GRADIENT LOOK) --- */}
        <section className="relative rounded-3xl shadow-2xl p-8 md:p-16 text-white overflow-hidden border border-white/10 group">
          {/* 🌟 1. Der echte, kräftige Farbverlauf im Hintergrund */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>

          {/* 🌟 2. Die strukturierte Leinen-Textur für die exklusive Haptik */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>

          {/* 🌟 3. Weiche Lichtpunkte in den Ecken für noch mehr Tiefenwirkung */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-3xl rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="text-white/70 font-medium uppercase tracking-[0.4em] text-xs block mb-2">
                Ausreinigung | Definition
              </span>
              <h2 className="text-5xl font-extralight tracking-tighter text-white">
                Purify<span className="font-serif italic font-normal text-white/90">.</span>
              </h2>
              <div className="h-[1px] w-12 bg-white/30 mx-auto mt-4"></div>
            </div>

            {/* --- TREATMENT 1: HYDROFACIAL --- */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10 shadow-inner group/card hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-light tracking-wide text-white group-hover/card:text-white/100 transition-colors">
                  Hydrofacial Ausreinigung
                </h3>
                <span className="text-2xl font-semibold mt-2 md:mt-0 tracking-tight">
                  75 €{" "}
                  <span className="text-lg font-light opacity-70">
                    | 60 Min.
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 font-light text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Hauttyp-Analyse
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Beratung
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Peeling + Tiefenausreinigung und Maske
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Typgerechte, nicht-komedogene Pflege
                </li>
              </ul>
            </div>

            {/* --- TREATMENT 2: WIMPERN --- */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10 shadow-inner group/card hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-light tracking-wide text-white">
                  Wimpern <span className="text-lg opacity-60 font-light">| Lifting, Farbe & Pflege</span>
                </h3>
                <span className="text-2xl font-semibold mt-2 md:mt-0 tracking-tight">
                  39 €{" "}
                  <span className="text-lg font-light opacity-70">
                    | 70 Min.
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 font-light text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Wimpernlifting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Färben der Wimpern
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Pflege der Wimpern
                </li>
              </ul>
            </div>

            {/* --- TREATMENT 3: AUGENBRAUEN --- */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-10 shadow-inner group/card hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-light tracking-wide text-white">
                  Augenbrauen <span className="text-lg opacity-60 font-light">| Formen & Färben</span>
                </h3>
                <span className="text-2xl font-semibold mt-2 md:mt-0 tracking-tight">
                  20 €{" "}
                  <span className="text-lg font-light opacity-70">
                    | 30 Min.
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 font-light text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Zupfen, Waxen
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>{" "}
                  Typgerechte Farbe + Pflege
                </li>
              </ul>
            </div>

            {/* --- BOTTOM QUICK PRICES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left pt-8 border-t border-white/10">
              <div>
                <h4 className="text-white/60 uppercase text-[11px] tracking-widest mb-3 font-medium">
                  Augenbrauen quick
                </h4>
                <p className="text-xl font-light tracking-wide">
                  Waxing <span className="text-white/30 mx-3">|</span> 12 €
                </p>
              </div>
              <div>
                <h4 className="text-white/60 uppercase text-[11px] tracking-widest mb-3 font-medium">
                  Wimpern quick
                </h4>
                <p className="text-xl font-light tracking-wide mb-6">
                  Farbe & Pflege <span className="text-white/30 mx-3">|</span> 15 €
                </p>
                <p className="text-white/60 uppercase text-[9px] tracking-widest leading-relaxed">
                  *Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
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
