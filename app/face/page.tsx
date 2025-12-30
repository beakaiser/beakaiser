import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white size-10 w-full text-black h-full  ">
      <br />
      <br />
      <br />
      <Image
        src={(process.env.PAGES_BASE_PATH || "") + "/DSC_0907.jpg"}
        alt="Madero"
        width={700}
        height={700}
        className=" w-2/3 object-cover mx-auto"
      />
      <br /> <br />
      <div className="bg-gray-50 py-12 px-6 md:px-12 text-gray-700">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Rejuvinating Facials
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Entdecken Sie unsere traditionellen chinesischen
            Gesichtsbehandlungen, die Ihre Haut mit zellerneuernder Pflege und
            alten Heiltechniken verwöhnen.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Behandlung 1: Traditionell Verjüngende Massage */}
            <div className="bg-white rounded-2xl p-6 shadow-sm w-full md:w-80">
              <h3 className="text-2xl font-semibold mb-4">
                Traditionell Verjüngende Gesichtsmassage
              </h3>
              <p className="text-base mb-6">
                Eine einzigartige Massage mit Schönheitswerkzeugen, die den
                Qi-Fluss harmonisiert und Ihre Haut strahlen lässt. Inkl.
                Reinigung und zellerneuernder Pflege.
              </p>
              <div className="text-lg font-semibold mb-4">
                90 € | 60 Minuten
              </div>
              <a
                href="/buchung"
                className="bg-fuchsia-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-pink-300"
              >
                Jetzt buchen
              </a>
            </div>

            {/* Behandlung 2: Microneedling */}
            <div className="bg-white rounded-2xl p-6 shadow-sm w-full md:w-80">
              <h3 className="text-2xl font-semibold mb-4">Microneedling</h3>
              <p className="text-base mb-6">
                Intensive Collagen-Boost-Behandlung durch Mikro-Perforation. Für
                ein pralles, rosigeres Hautbild – basierend auf alten
                Schönheitsgeheimnissen.
              </p>
              <div className="text-lg font-semibold mb-4">
                190 € | 110 Minuten
              </div>
              <a
                href="/buchung"
                className="bg-fuchsia-200 text-shadow-blue-950hite px-6 py-3 rounded-lg hover:bg-pink-300"
              >
                Jetzt buchen
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={(process.env.PAGES_BASE_PATH || "") + "/DSC_0902.jpg"}
        alt="Madero"
        width={700}
        height={700}
        className=" w-2/3 object-cover mx-auto"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-gray-100 py-12 md:py-16 text-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Relaxing Facials</h2>

          {/* Beschreibung */}
          <p className="text-xl leading-relaxed mb-12 px-4 md:px-0">
            Eine wohltuende Entspannung nach dem stressigen Tag: Sanfte
            Reinigung, ausgiebige Massage und Gua Sha für einen harmonischen
            Lymphfluss. Verwöhnen Sie Ihre Haut mit reichhaltiger,
            hauttypgerechter Pflege.
          </p>

          {/* Hauptbehandlung */}
          <div className="bg-white rounded-3xl shadow-md p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Entspannendes Gesichtsritual
            </h3>
            <ul className="list-none mb-6 text-lg space-y-3">
              <li> Sanfte Reinigung und Pflege</li>
              <li> Tiefenentspannende Gesichtsmassage</li>
              <li> Gua Sha für Lymphaktivierung</li>
            </ul>
            <div className="text-xl font-bold mb-6">70 € | 60 Minuten</div>
            <a
              href="/buchung"
              className="bg-blue-200 text-blue-950 px-8 py-4 rounded-lg hover:bg-blue-100"
            >
              Buchen
            </a>
          </div>

          {/* Add-ons */}
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">
                + Wärmender Kräuterstempel
              </h4>
              <p className="mb-4">
                Aromatische Kräuterwärme für entspannte Sinne und verbesserte
                Durchblutung (zubuchbar).
              </p>
              <div className="text-lg font-bold">20 € | 15 Minuten</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">
                + Ceragem-Massageliege
              </h4>
              <p className="mb-4">
                Wärme und Massage für den Rücken – ideal nach der Behandlung.
                Verfügbare Dauern: 20, 30 oder 45 Minuten.
              </p>
              <div className="text-lg font-bold">ab 12 € | ab 20 Minuten</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Image
        src={(process.env.PAGES_BASE_PATH || "") + "/DSC_0892.jpg"}
        alt="Madero"
        width={700}
        height={700}
        className=" w-2/3 object-cover mx-auto"
      />
      <br />
      <br />
      <br />
      <div className="bg-blue-100 py-16 text-gray-700">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h1 className="text-4xl font-bold uppercase mb-8">
            Purifying Facials
          </h1>

          {/* Beschreibung */}
          <p className="text-2xl leading-relaxed mb-12 max-w-4xl mx-auto">
            Tiefe Reinigung für strahlende Haut: Individuelle Hautanalyse,
            sanftes Peeling, professionelle Porenreinigung und passgenaue Maske.
            Ideal bei unreiner Haut oder Akne.
          </p>

          {/* Preise */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="bg-white shadow-sm p-8 rounded-3xl md:w-1/2">
              <h3 className="text-xl font-bold mb-6">Purify-Paket</h3>
              <ul className="list-none mb-8 space-y-4">
                <li>✦ Hauttyp-Analyse & Beratung</li>
                <li> ✦ Sanftes Enzympeeling</li>
                <li> ✦ Tiefenreinigung + Maske</li>
                <li> ✦ Nicht-komedogene Tagespflege</li>
              </ul>
              <div className="text-2xl font-semibold mb-4">70 € | 50 Min.</div>
            </div>
          </div>
          <div className="bg-white shadow-sm p-8 rounded-3xl md:w-1/2">
            <h3 className="text-xl font-bold mb-6">Optionale Add-ons</h3>
            <div className="space-y-6">
              <div>
                <span className="font-bold">Augenbrauen:</span>
                <br />
                Formen, Färben oder Blondieren (20 € | 20 Min)
              </div>
              <div>
                <span className="font-bold">Wimpern Lifting:</span>
                <br />
                Längere Wimpern ohne Mascara (55 € | 60 Min)
              </div>
            </div>
          </div>
        </div>

        {/* CTA-Button */}
        <a
          href="/buchung"
          className="bg-red-300 text-center text-blue-950 px-12 py-4 rounded-3xl hover:bg-fuchsia-200 transition"
        >
          Termin sichern
        </a>
      </div>
    </div>
  );
}
