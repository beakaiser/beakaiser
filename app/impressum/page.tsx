export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Impressum</h1>

        <p className="text-gray-700 mb-6">
          Gemäß § 5 TMG (Telemediengesetz) informieren wir Sie hier über die
          verantwortliche Stelle für diese Website. Angaben gemäß § 5 TMG:
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Sabine Kaiser
          UST- ID: DE 243281582 Heilpraktikerin Geiserichstraße 3, 12105 Berlin
          Telefon: 030/7537100 E-Mail: beacosberlin@gmail.com
        </p>

        {/* Hauptinhalte */}
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-700">
              <strong>Sabine Kaiser</strong>
              <br />
              Longevity Beauty -LongvityCenter Berlin
              <br />
              Geiserichstraße 3, 12105 Berlin, Deutschland
              <br />
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
              Kontakt
            </h2>
            <p className="text-gray-700">
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
              Haftungsausschluss
            </h2>
            <p className="text-gray-700 text-sm">
              Die Inhalte dieser Website dienen der allgemeinen Information und
              wurden sorgfältig erstellt. Trotzdem können wir keine Gewähr für
              Vollständigkeit, Richtigkeit oder Aktualität übernehmen. Als
              Diensteanbieter sind wir nach § 7 TMG für eigene Inhalte
              verantwortlich, übernehmen aber keine Haftung für externe Links
              oder Dienste (z.B. cal.com). Bei Rechtsverletzungen werden wir
              Inhalte sofort entfernen. Haftungsansprüche sind ausgeschlossen,
              es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.
              <br />
              <br />
              Datenschutz-Hinweis: Für Terminbuchungen nutzen wir cal.com. Bitte
              beachten Sie die Datenschutzbestimmungen von cal.com:
              https://cal.com/de/privacy. Im Rahmen der Terminbuchung über
              cal.com erhalten wir Ihre Kontaktdaten (Name, E-Mail-Adresse) und
              Termininformationen. Diese Daten werden ausschließlich für die
              Terminverwaltung und zur Kontaktaufnahme im Rahmen Ihrer Buchung
              genutzt. Eine Weitergabe an Dritte erfolgt nicht. Nach Ablauf der
              gesetzlichen Aufbewahrungsfristen werden die Daten gelöscht. Für
              weitere Fragen zum Datenschutz stehen wir Ihnen gerne zur
              Verfügung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Urheberrecht
            </h2>
            <p className="text-gray-700 text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem
              deutschen Urheberrecht. Jegliche Vervielfältigung, Bearbeitung,
              Verbreitung oder Nutzung außerhalb der Grenzen des Urheberrechts
              bedarf der schriftlichen Zustimmung der jeweiligen Autoren.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-gray-700">
              <strong>Sabine Kaiser</strong>
              <br />
              Longevity Beauty - LongvityCenter Berlin
              <br />
              Geiserichstraße 3, 12105 Berlin, Deutschland
            </p>
          </section>
        </div>

        {/* Hinweis-Box wie im Datenschutz */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6 mt-8">
          <h2 className="font-semibold text-blue-800 mb-2">
            Hinweis zur Plattform
          </h2>
          <p className="text-blue-700 text-sm">
            Diese Website dient der Information und Terminbuchung über den
            externen Dienst{" "}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              cal.com
            </a>
            . Für die Verarbeitung Ihrer Daten gilt deren Datenschutzerklärung.
            Die Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b
            DSGVO (Vertragsabwicklung).
          </p>
        </div>

        {/* Buttons wie im Original */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://cal.com/bea-kaiser-xp4fzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-300 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition"
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
