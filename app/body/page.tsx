import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center pb-20">
      {/* Eleganter Header mit Overlay-Effekt */}
      <div className="w-full relative h-[300px] flex items-center justify-center overflow-hidden">
        {/* Hintergrund-Verlauf */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>

        {/* Subtiles Muster oder Textur-Overlay (optional) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://transparenttextures.com')]"></div>

        <div className="relative z-10 text-center px-4">
          <span className="uppercase tracking-[0.3em] text-sm text-white/80 mb-2 block">
            Premium Wellness
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-extralight tracking-tight">
            DIVINE <span className="font-semibold">BODY</span> TREATMENT
          </h1>
          <div className="h-1 w-20 bg-white/40 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl w-full px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16">
          <div className="text-center mb-16">
            <span className="text-mauve-700 font-medium uppercase tracking-widest text-xs">
              Rejuvenate Body
            </span>
            <h2 className="text-3xl font-serif mt-2 text-gray-800 ">
              Körperbehandlungen
            </h2>
          </div>

          <div className="space-y-16">
            {/* Treatment 1 */}
            <div className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7B667E] transition-colors">
                  Cellulite-Behandlung
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                  110 € <span className="mx-2 text-gray-300">|</span> 50 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Eine exklusive Kombination aus Maderotherapie und
                Cupping-Massage, die gezielt das Bindegewebe stärkt. Durch den
                Einsatz von Jadesteinen, speziellen Holzwerkzeugen und
                durchblutungsfördernen Griffen erreichen wir eine tiefenwirksame
                Erfrischung und Hautstraffung.
              </p>
            </div>

            {/* Treatment 2 */}
            <div className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7B667E] transition-colors">
                  Cupping Massage
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                  90 € <span className="mx-2 text-gray-300">|</span> 40 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Erleben Sie die heilende Kraft der Cupping Massage für den
                Rücken. Diese Massage ist die ideale Ergänzung zur
                Cellulite-Behandlung, um den Lymphfluss anzuregen und die Sinne
                zu entspannen.
              </p>
            </div>

            {/* Treatment 3 */}
            <div className="group pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7B667E] transition-colors">
                  Ceragem-Liege mit Jadesteinen
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                  ab 12 € <span className="mx-2 text-gray-300">|</span> 20 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Innovative Wärme- und Massagetherapie. Die integrierten
                Jadesteine übertragen Infrarotwärme tief in die Muskulatur – für
                absolute Tiefenentspannung und ganzheitliches Wohlbefinden.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <a
              href="/buchung"
              className="inline-block bg-[#7B667E] text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#5D4B61] transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Termin anfragen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
