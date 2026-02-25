"use client"; // Wichtig für useEffect und State

import { useState, useEffect } from "react";

export default function BuchungPage() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Prüfen, ob der User im Banner "Alles akzeptieren" geklickt hat
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setHasConsent(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Termin buchen</h1>

        {/* ... (Dein restlicher Text bleibt gleich) ... */}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {hasConsent ? (
            // AKTIVIERTER BUTTON
            <a
              href="https://cal.com/bea-kaiser-xp4fzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-pink-300 text-white text-center px-6 py-3 rounded-xl font-bold hover:bg-pink-400 transition shadow-lg"
            >
              Weiter zu cal.com – Termin buchen
            </a>
          ) : (
            // DEAKTIVIERTER BUTTON / HINWEIS
            <div className="flex-1 bg-gray-100 text-gray-400 text-center px-6 py-3 rounded-xl border-2 border-dashed border-gray-300">
              Bitte erst Cookies akzeptieren...
            </div>
          )}

          <a
            href="/"
            className="flex-1 bg-gray-200 text-gray-800 text-center px-6 py-3 rounded-xl hover:bg-gray-300 transition"
          >
            Zurück zur Startseite
          </a>
        </div>

        {!hasConsent && (
          <p className="text-red-500 text-xs mt-4 text-center">
            * Der Buchungs-Button wird erst freigeschaltet, wenn Sie den Cookies
            im Banner zustimmen.
          </p>
        )}
      </main>
    </div>
  );
}
