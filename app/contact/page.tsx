"use client";
import Image from "next/image";

export default function ContactPage() {
  const basePath = process.env.PAGES_BASE_PATH || "";

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center pb-20 font-sans text-gray-900">
      {/* --- ELEGANT HEADER --- */}
      <div className="w-full relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')]"></div>
        <div className="relative z-10 text-center px-4">
          <span className="uppercase tracking-[0.4em] text-xs md:text-sm text-white/80 mb-3 block">
            Longvity Netzwerk
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter">
            HEALTH & <span className="font-semibold italic">BEAUTY</span>
          </h1>
          <div className="h-[1px] w-24 bg-white/30 mx-auto mt-8"></div>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-5xl w-full px-6 -mt-16 relative z-20 space-y-16">
        {/* 1. INFO CARD: ADRESSE & BILD */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 space-y-10">
              <div>
                <span className="text-[#7B667E] font-medium uppercase tracking-widest text-xs">
                  Ihr Besuch bei uns
                </span>
                <h2 className="text-3xl font-serif mt-2 text-gray-800">
                  KONTAKT | ANFAHRT
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed">
                  Wir sind Teil von{" "}
                  <span className="font-semibold text-gray-800">Longvity</span>{" "}
                  – Ihrem Netzwerk für nachhaltige Lebensqualität im Herzen von
                  Berlin.
                </p>
              </div>

              {/* Kontakt-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">
                    Standort
                  </h3>
                  <p className="text-gray-700 leading-snug">
                    Geiserichstraße 3<br />
                    12105 Berlin
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">
                    Direktkontakt
                  </h3>
                  <p className="text-gray-700 leading-snug">
                    0179 6964113
                    <br />
                    <a
                      href="mailto:beacosberlin@gmail.com"
                      className="text-[#7B667E] hover:underline"
                    >
                      Email senden
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Bildbereich mit sanftem Zoom-Effekt */}
            <div className="relative h-[400px] lg:h-auto group overflow-hidden">
              <Image
                src={`${basePath}beauty_.png`}
                alt="kibeauty"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#7B667E]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </section>

        {/* 2. HIGHLIGHT CTA: SILVER/MAUVE BUCHUNG */}
        <section className="relative rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden bg-[#4A3B4D]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5D4B61] via-[#4A3B4D] to-[#E2E8F0] opacity-30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-slate-100">
              Bereit für Ihren{" "}
              <span className="font-semibold text-white">Wohlfühl-Moment?</span>
            </h2>
            <p className="text-[#CBBBCB] mb-10 max-w-md mx-auto text-lg leading-relaxed">
              Finden Sie online in wenigen Sekunden Ihren passenden Zeitpunkt
              für mehr Lebensqualität.
            </p>
            <a
              href="/buchung"
              className="inline-block bg-gradient-to-r from-slate-200 to-slate-100 text-[#4A3B4D] px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Jetzt online buchen
            </a>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 blur-3xl rounded-full"></div>
        </section>

        {/* 3. MAP SECTION */}
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.596277135955!2d13.37224731572857!3d52.46597127979564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85e5b8d5b5b5b%3A0x3b1b1b1b1b1b1b1b!2sGeiserichstra%C3%9Fe%203%2C%2012105%20Berlin!5e0!3m2!1sde!2sde!4v1640000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* FOOTER INFO */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 px-4">
            <p>© LongvityCenter Berlin – Beatrice Kaiser</p>
            <div className="space-x-8 mt-4 md:mt-0">
              <a
                href="/impressum"
                className="hover:text-[#7B667E] transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="hover:text-[#7B667E] transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
