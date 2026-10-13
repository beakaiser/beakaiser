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
             Wellness Rituals
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-extralight tracking-tight">
             <span className="font-semibold">BODY</span> TREATMENTS
          </h1>
          <div className="h-1 w-20 bg-white/40 mx-auto mt-6"></div>
        </div>
      </div>




      {/* Content Container */}
      <div className="max-w-4xl w-full px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16">
          <div className="text-center mb-16">
            <span className="text-mauve-700 font-medium uppercase tracking-widest text-xs">
              Rejuvenating Body
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
                  Maderotherapie
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                  65 € <span className="mx-2 text-gray-300">|</span> 50 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
        Die Maderotherapie dient der optischen Festigung des Hautbildes. Durch den Einsatz von Jadesteinen, speziellen
                Holzwerkzeugen und aktivierenden Massagegriffen erreichen wir
                eine intensiv pflegende Erfrischung und sichtbare Hautstraffung der Beine.
              </p>
            </div>

            {/* Treatment 2 */}
            <div className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7B667E] transition-colors">
                  Rücken Cupping Massage
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                  90 € <span className="mx-2 text-gray-300">|</span> 50 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Erleben Sie die belebende Kraft der Cupping Massage für den
                Rücken. Diese Massage löst tiefe Verspannungen und  löst Blockaden in der Muskulatur. Vitalisierender Effekt dank traditioneller Weisheiten.
              </p>
            </div>

            {/* Treatment 3 */}
            <div className="group pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7B667E] transition-colors">
                  Beine | Cupping Massage
                </h3>
                <span className="text-xl font-light text-gray-500 mt-2 md:mt-0">
                   90 € <span className="mx-2 text-gray-300">|</span> 50 Min.
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Erleben Sie die belebende Kraft der Cupping Massage für die
                Beine. Diese Massage ist die ideale Ergänzung zur
                Maderotherapie, um die oberflächliche Hautaktivität und
                die Sinne anzuregen und das Wohlbefinden zu unterstützen.
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


          {/* --- HERO 9: REJUVENATE BODY SECTION --- */}
          <section className="relative bg-[#FDFCFB] min-h-screen flex flex-col justify-center items-center p-8 md:p-24 overflow-hidden border-t border-gray-50">
            {/* Subtiles Hintergrund-Glow in kühlem Silber-Blau */}
            <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-50/40 blur-[150px] rounded-full opacity-60"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-slate-100/50 blur-[100px] rounded-full opacity-40"></div>

            <div className="relative z-10 text-center max-w-4xl">
              {/* Kategorie-Label */}
              <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-xs font-medium mb-6 block">
                Advanced Body Sculpting
              </span>

              {/* Haupt-Überschrift: Rejuvenate BODY */}
              <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-gray-900 mb-2 italic">
                Rejuvenate{" "}
                <span className="font-semibold not-italic text-slate-800">BODY</span>
              </h1>

              {/* Elegantes Trennelement */}
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#A4B8C4]/40 to-transparent mx-auto my-10"></div>

              {/* Text-Content mit emotionaler Typografie */}
              <div className="max-w-2xl mx-auto space-y-10">
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-gray-800 font-light leading-snug italic">
                    "Wir sehen Cellulite nicht als Makel –{" "}
                    <br className="hidden md:block" />
                    sondern als Einladung, tiefer zu gehen."
                  </p>

                  <p className="text-gray-500 text-lg leading-relaxed font-light max-w-xl mx-auto">
                    Unsere Hände verbinden{" "}
                    <span className="text-gray-900 font-normal">
                      asiatisches Cupping und Maderotherapie
                    </span>
                    , um neue Spannkraft und Energie zu wecken. Nicht nur eine Massage
                    –{" "}
                    <em className="text-[#A4B8C4] serif">
                      ein Erwachen für deine Sinne und deinen Körper.
                    </em>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gray-400">
                  <span>Deine Beine</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Dein Flow</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Dein Comeback</span>
                </div>
              </div>

              {/* Edler Button im Silver-Design */}
              <div className="mt-16">

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
