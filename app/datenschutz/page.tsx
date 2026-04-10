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

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              2. Daten beim Besuch der Website
            </h2>
            <p className="text-gray-700">
              <li>
                Notwendige Cookies/ Speichermedien Nach (Art. 6 Abs. 1 lit. f
                DSGVO): Zur Speicherung Ihrer Einwilligung nutzen wir den Local
                Storage Ihres Browsers. Dabei wird ein Wert gespeichert, der
                dokumentiert, dass Sie den Zugriff auf unser externes
                Buchungstool erlaubt haben. Dies ist technisch notwendig, um
                Ihnen den Dienst anzuzeigen. Zudem setzt der externe Anbieter
                Calendly eigene technisch notwendige Cookies, um den
                Buchungsprozess zu ermöglichen und die Sicherheit der Anwendung
                zu gewährleisten.{" "}
                <li>
                  {" "}
                  Widerruf vs. Löschung: Bitte beachten Sie, dass ein Widerruf
                  der Einwilligung über die Browser-Einstellungen lediglich die
                  zukünftige Anzeige des Buchungstools verhindert. Bereits
                  getätigte Terminbuchungen und die damit verbundenen
                  Datenverarbeitungen zur Termindurchführung bleiben hiervon
                  unberührt. Möchten Sie eine Löschung Ihrer bereits
                  übermittelten Buchungsdaten erwirken, kontaktieren Sie uns
                  bitte direkt gemäß den im Abschnitt 'Ihre Rechte' aufgeführten
                  Bedingungen. Ein Widerruf der Cookie-Einwilligung erfolgt
                  durch einen Klick am Seitenende.
                </li>
              </li>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              3. Daten bei Terminbuchung
            </h2>
            <p className="text-gray-700">
              Um einen Termin zu buchen, werden Sie auf die Plattform{" "}
              <strong>cal.com</strong> weitergeleitet – ein Dienst der{" "}
              <strong>Calendly GmbH</strong>. Dort geben Sie Ihre Daten (Name,
              E-Mail, Telefon) ein.
            </p>
            <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
              <li>
                Diese Daten werden direkt bei <strong>cal.com</strong>{" "}
                verarbeitet. Die Datenübermittlung von cal.com basiert auf Art.
                6 Abs. 1 lit. b DSGVO (Vertragsabwicklung).
              </li>
              <li>
                cal.com ist DSGVO-konform und verwendet Analysetools wie
                PostHog. Datenschutz-Hinweis: Für Terminbuchungen nutzen wir
                cal.com. Bitte beachten Sie die Datenschutzbestimmungen von
                cal.com: https://cal.com/de/privacy. Im Rahmen der Terminbuchung
                über cal.com erhalten wir Ihre Kontaktdaten (Name,
                E-Mail-Adresse) und Termininformationen. Diese Daten werden
                ausschließlich für die Terminverwaltung und zur Kontaktaufnahme
                im Rahmen Ihrer Buchung genutzt. Eine Weitergabe an Dritte
                erfolgt nicht. Nach Ablauf der gesetzlichen Aufbewahrungsfristen
                werden die Daten gelöscht. Für weitere Fragen zum Datenschutz
                stehen wir Ihnen gerne zur Verfügung.
              </li>
              <li>
                Lesen Sie die Datenschutzerklärung von cal.com:{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  cal.com/privacy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              3.1 Einwilligung der Datenverarbeitung bei der Terminbuchung
            </h2>
            <p className="text-gray-700">gemäß Art. 6 Abs. 1 lit. a DSGVO</p>
            <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
              <li>
                Bestimmte Funktionen unserer Website (z. B. die
                Online-Terminbuchung) stehen Ihnen erst nach Erteilung einer
                ausdrücklichen Einwilligung zur Verfügung. Hierzu nutzen wir ein
                vorgeschaltetes Auswahlbanner. Online-Terminbuchung via Cal.com:
                Wir bieten Ihnen auf unserer Website die Möglichkeit, Termine
                online zu buchen. Hierfür nutzen wir den Dienst Cal.com
                (Betreiber: Cal.com, Inc., 155 Wilson St, Brooklyn, NY 11211,
                USA). Cal.com . Zweck der Verarbeitung: Die Verarbeitung Ihrer
                Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, gewünschter
                Termin und ggf. Anmerkungen) erfolgt ausschließlich zum Zweck
                der Terminvereinbarung und -verwaltung. Rechtsgrundlage: Die
                Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Erfüllung eines Vertrages oder Durchführung
                vorvertraglicher Maßnahmen) sowie unserem berechtigten Interesse
                an einer effizienten Terminverwaltung gemäß Art. 6 Abs. 1 lit. f
                DSGVO. Auftragsverarbeitung: Wir haben mit Cal.com einen Vertrag
                über die Auftragsverarbeitung (Data Processing Agreement, DPA)
                abgeschlossen. Damit stellt der Anbieter sicher, dass er die
                Daten nur nach unseren Weisungen und im Einklang mit der DSGVO
                verarbeitet. Drittlandtransfer: Da Cal.com seinen Sitz in den
                USA hat, erfolgt eine Datenübermittlung in ein Drittland.
                Cal.com nutzt hierfür anerkannte Schutzmechanismen wie die
                EU-Standardvertragsklauseln, um ein angemessenes
                Datenschutzniveau zu gewährleisten.
              </li>

              <li>
                AV-Vertrag: Wir haben mit dem Anbieter einen
                Auftragsverarbeitungsvertrag (Data Processing Addendum) gemäß
                Art. 28 DSGVO geschlossen. Empfänger: Calendly, LLC, 115 E Main
                St, Ste A1B, Rock Hill, SC 29730, USA. +3, Zweck:
                Terminvereinbarung auf Kundenwunsch. Rechtsgrundlage: Die über
                den Banner eingeholte Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                1. Calendly stellt den aktuellen DPA online unter
                calendly.com/legal/data-processing-addendum zur Verfügung.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              4. Datenweitergabe
            </h2>
            <p className="text-gray-700">
              Nach einer Buchung erhalten wir über eine automatisierte E-Mail
              von cal.com Ihren Namen und Ihre E-Mail-Adresse, um den Termin
              vorzubereiten. Diese Daten:
            </p>
            <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
              <li>speichern wir ausschließlich für die Terminabwicklung</li>
              <li>
                löschen wir spätestens 6 Monate nach dem Termin oder sobald der
                Zweck entfallen ist
              </li>
              <li>geben wir nicht an Dritte weiter</li>
              <li>
                verwenden wir nicht für Werbezwecke, es sei denn, Sie erteilen
                ausdrücklich Ihre Einwilligung
              </li>
            </ul>
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
