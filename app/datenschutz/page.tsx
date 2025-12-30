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
              Longevity Beauty - Longvity Center Berlin
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
              Beim Aufruf dieser Website werden keine Cookies oder
              Tracking-Tools verwendet.
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
                PostHog, aber{" "}
                <strong>keine Tracking-Cookies auf unserer Website</strong>.
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
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://cal.com/bea-kaiser-xp4fzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Weiter zu cal.com – Termin buchen
          </a>

          <a
            href="/"
            className="flex-1 bg-gray-200 text-gray-800 text-center px-6 py-3 rounded hover:bg-gray-300 transition"
          >
            Zurück zur Startseite
          </a>
        </div>
      </main>
    </div>
  );
}
