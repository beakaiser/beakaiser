export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <main className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
          Impressum
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Anbieterkennzeichnung */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="text-lg">
              <p className="font-bold text-gray-900 underline decoration-blue-500 underline-offset-4">
                Sabine Kaiser
              </p>
              <p>Longvity® Beauty by Longvity® Center Berlin</p>
              <p>Geiserichstraße 3</p>
              <p>12105 Berlin</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Kontakt
              </h2>
              <p>Telefon: 030/7537100</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:beacosberlin@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  beacosberlin@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Umsatzsteuer-ID
              </h2>
              <p className="text-sm">Gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="font-mono font-medium">DE 243281582</p>
            </div>
          </section>

          {/* Redaktionell Verantwortlich */}
          <section>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
              Redaktionell verantwortlich
            </h2>
            <p>
              <strong>Sabine Kaiser</strong>
            </p>
            <p>Geiserichstraße 3, 12105 Berlin</p>
          </section>

          <hr className="border-gray-100" />

          {/* Rechtliche Hinweise */}
          <div className="space-y-6 text-sm text-gray-600">
            <section>
              <h2 className="font-semibold text-gray-800 mb-1">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://europa.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  https://europa.eu
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-gray-800 mb-1">
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-gray-800 mb-1">
                Haftungsausschluss & Urheberrecht
              </h2>
              <p className="mb-2">
                Die Inhalte dieser Website dienen der allgemeinen Information.
                Als Diensteanbieter sind wir nach § 7 TMG für eigene Inhalte
                verantwortlich. Für externe Links übernehmen wir keine Haftung.
              </p>
              <p>
                Die erstellten Inhalte auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Vervielfältigung oder Nutzung bedürfen
                der schriftlichen Zustimmung.
              </p>
            </section>

            {/* Bildnachweise Platzhalter */}
            <section className="bg-gray-50 p-4 rounded-md italic">
              <h2 className="font-semibold text-gray-800 mb-1 not-italic">
                Bildnachweise:
              </h2>
              <p>
                Eigene Aufnahmen - <br />{" "}
                [Headerbild-Kontaktseite-Modell-Beauty-Portrait] – Erstellt mit
                Leonardo.ai (Künstliche Intelligenz) Die gezeigten
                Personen/Hautdarstellungen sind KI-generierte Symbolbilder
                (erstellt mit Leonardo.ai) und keine realen Fotos. Kein
                Urheberrechtsschutz gemäß aktuellem Recht]
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
