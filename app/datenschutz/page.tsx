// app/datenschutz/page.tsx
export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Datenschutzerklärung
        </h1>

        <p className="text-gray-700 mb-6">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese
          Erklärung informiert Sie über die Art, den Umfang und den Zweck der
          Erhebung und Nutzung personenbezogener Daten auf dieser Website und
          bei der Terminbuchung über <strong>cal.com</strong>.
        </p>

        {/* Hauptabschnitte */}
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              1. Verantwortliche Stelle
            </h2>
            <p className="text-gray-700">
              <strong>Sabine Kaiser</strong>
              <br />
              Longvity® Beauty - Longvity® Center Berlin
              <br />
              Geiserichstraße 3, 12105 Berlin, Deutschland
              <br />
              Ansprechpartnerin: Beatrice Kaiser <br />
              E-Mail:{" "}
              <a
                href="mailto:beacosberlin@gmail.com"
                className="text-blue-600 underline"
              >
                beacosberlin@gmail.com
              </a>
            </p>
          </section>

          {/* --- SEKTION 2: TECHNISCHE DATENERFASSUNG --- */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-gray-800 mb-4 border-b border-gray-100 pb-2">
              2. Daten beim Besuch der Website
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50">
                <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-2">
                  Technisch notwendige Speicherung (Art. 6 Abs. 1 lit. f DSGVO)
                </h3>
                <p>
                  Zur Speicherung Ihrer Einwilligung nutzen wir den{" "}
                  <strong>Local Storage</strong> Ihres Browsers. Hier wird
                  dokumentiert, dass Sie den Zugriff auf unser externes
                  Buchungstool erlaubt haben. Zudem setzt{" "}
                  <strong>Cal.com</strong> eigene technisch notwendige Cookies,
                  um den Buchungsprozess sicher und funktionsfähig zu
                  ermöglichen.
                </p>
              </div>
              <div className="bg-[#7B667E]/5 p-5 rounded-2xl border-l-4 border-[#7B667E]">
                <h3 className="font-semibold text-[#7B667E] text-sm mb-1">
                  Widerruf & Löschung
                </h3>
                <p className="text-sm">
                  Ein Widerruf über die Browser-Einstellungen verhindert
                  lediglich die zukünftige Anzeige des Tools. Bereits getätigte
                  Buchungen bleiben unberührt. Für eine Löschung kontaktieren
                  Sie uns bitte direkt gemäß dem Abschnitt „Ihre Rechte“.
                </p>
              </div>
            </div>
          </section>

          {/* --- SEKTION 3: TERMINBUCHUNG VIA CAL.COM --- */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-gray-800 mb-4 border-b border-gray-100 pb-2">
              3. Online-Terminbuchung via Cal.com
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Für unsere Terminverwaltung nutzen wir den Dienst{" "}
                <strong>Cal.com</strong>
                (Cal.com, Inc., 155 Wilson St, Brooklyn, NY 11211, USA).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                  <span className="block font-bold text-[#7B667E] text-xs uppercase tracking-widest mb-2">
                    Rechtsgrundlage
                  </span>
                  <p className="text-sm">
                    Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b
                    DSGVO (Vertragserfüllung) sowie unserem berechtigten
                    Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                  <span className="block font-bold text-[#7B667E] text-xs uppercase tracking-widest mb-2">
                    Drittlandtransfer
                  </span>
                  <p className="text-sm">
                    Wir haben einen Auftragsverarbeitungsvertrag (DPA)
                    geschlossen. Cal.com nutzt EU-Standardvertragsklauseln für
                    ein sicheres Datenschutzniveau.
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic pt-2">
                Details finden Sie direkt in der{" "}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B667E] underline hover:text-[#5D4B61]"
                >
                  Datenschutzerklärung von Cal.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* --- SEKTION 4: DATENWEITERGABE --- */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-gray-800 mb-4 border-b border-gray-100 pb-2">
              4. Umgang mit Buchungsdaten
            </h2>
            <div className="bg-[#FDFCFB] border border-gray-100 rounded-3xl p-6 md:p-8">
              <ul className="space-y-4">
                {[
                  {
                    t: "Zweckbindung",
                    d: "Speicherung ausschließlich zur Vorbereitung und Durchführung Ihres Termins.",
                  },
                  {
                    t: "Speicherdauer",
                    d: "Löschung nach 6 Monaten oder nach Ablauf der gesetzlichen Fristen.",
                  },
                  {
                    t: "Keine Weitergabe",
                    d: "Ihre Daten werden niemals für Werbezwecke an Dritte verkauft oder weitergegeben.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#7B667E] mr-4 text-xl">✓</span>
                    <div>
                      <span className="font-bold block text-gray-900">
                        {item.t}
                      </span>
                      <span className="text-sm text-gray-600">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* --- SEKTION 5: BILDNACHWEISE & KI --- */}
          <section className="mb-12">
            <h2 className="text-xl font-medium text-gray-800 mb-4 border-b border-gray-100 pb-2">
              5. Bildnachweise & Künstliche Intelligenz
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Einige visuelle Inhalte dieser Website (insbesondere das
              [Headerbild-Kontaktseite-Modell-Beauty-Portrait]) wurden mittels
              künstlicher Intelligenz (<strong>Leonardo.ai</strong>) generiert.
              Da diese Bilder keinen menschlichen Schöpfer im Sinne des
              Urheberrechtsgesetzes haben, besteht an ihnen kein Urheberrecht.
              Die Nutzung erfolgt gemäß den Bedingungen des Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              5. Ihre Rechte (Art. 15–21 DSGVO)
            </h2>
            <p className="text-gray-700">Sie haben das Recht auf:</p>
            <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an{" "}
              <a
                href="mailto:hello@tcmglow.berlin"
                className="text-blue-600 underline"
              >
                beacosberlin@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              6. Sicherheit & Speicherdauer
            </h2>
            <p className="text-gray-700">
              Wir schützen Ihre Daten durch technische und organisatorische
              Maßnahmen. Die Speicherdauer richtet sich nach dem Zweck:
              Terminbezogene Daten werden nach 6 Monaten gelöscht, sofern keine
              gesetzlichen Aufbewahrungsfristen bestehen. <br /> <br />{" "}
            </p>
          </section>
        </div>

        {/* Hinweis-Box wie im Original */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6 mt-8">
          <h2 className="font-semibold text-blue-800 mb-2">Wichtig</h2>
          <p className="text-blue-700 text-sm">
            Ihre Daten werden nur so lange gespeichert, wie es für die
            Erbringung der Dienstleistung erforderlich ist. Bei Fragen zum
            Datenschutz erreichen Sie uns jederzeit unter{" "}
            <a
              href="mailto:hello@tcmglow.berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              beacosberlin@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Buttons wie im Original */}
        <div className="flex flex-col sm:flex-row gap-4"></div>
      </main>
    </div>
  );
}
