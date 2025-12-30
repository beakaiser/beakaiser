// z. B. /buchung.tsx Informed Consent / informierte Einwilligung
export default function BuchungPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Termin buchen</h1>

        <p className="text-gray-700 mb-6">
          Um einen Termin zu buchen, werden Sie auf die Plattform{" "}
          <strong>cal.com</strong> weitergeleitet – ein Dienst der{" "}
          <strong>Calendly GmbH</strong>. Dort geben Sie Ihre Daten (Name,
          E-Mail, Telefon) ein.
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Wichtig:</strong> Ihre Daten werden direkt bei cal.com
          verarbeitet.
        </p>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6">
          <h2 className="font-semibold text-blue-800 mb-2">
            Datenschutzhinweis
          </h2>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• cal.com ist DSGVO-konform</li>
            <li>• Ihre Daten werden nur für die Terminbuchung genutzt</li>
            <li>
              • cal.com nutzt Analyse-Tools (z. B. PostHog), aber keine
              Tracking-Cookies auf unserer Seite
            </li>
            <li>
              • Lesen Sie die Datenschutzerklärung von cal.com:{" "}
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
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded mb-6 mt-6">
          <h2 className="font-semibold text-gray-800 mb-2">
            Hinweis zur Datenweitergabe
          </h2>
          <p className="text-gray-700 text-sm">
            Nach einer Buchung erhalten wir über eine automatisierte E-Mail von
            cal.com Ihren Namen und Ihre E-Mail-Adresse, um den Termin
            vorzubereiten. Diese Daten speichern wir ausschließlich für die
            Dauer der Terminabwicklung und löschen sie spätestens 6 Monate nach
            dem Termin. Eine Weitergabe an Dritte oder Nutzung für Werbezwecke
            erfolgt nicht, es sei denn, Sie erteilen ausdrücklich Ihre
            Einwilligung.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://cal.com/bea-kaiser-xp4fzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-200 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition"
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
