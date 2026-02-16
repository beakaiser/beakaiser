"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // Wir prüfen den Speicher: Wenn nichts drin steht, ist der Status "none"
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setStatus("none");
    } else {
      setStatus(consent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setStatus("accepted");
    // Seite neu laden, damit alle Skripte (Booking etc.) aktiv werden
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setStatus("rejected");
  };

  // WICHTIG: Wenn der Status "none" ist (noch keine Wahl getroffen),
  // wird das Banner IMMER angezeigt, egal auf welcher Unterseite man ist.
  if (status !== "none") {
    // Falls abgelehnt wurde, zeige nur den kleinen Warnhinweis oben
    if (status === "rejected") {
      return (
        <div className="bg-yellow-50 border-b border-yellow-200 p-2 text-center text-xs text-yellow-700">
          Hinweis: Ohne Cookies keine Terminbuchung möglich.
          <button
            onClick={() => setStatus("none")}
            className="ml-2 underline font-bold"
          >
            Jetzt doch erlauben
          </button>
        </div>
      );
    }
    // Wenn akzeptiert oder am Laden, zeige gar nichts
    return null;
  }

  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-600 text-sm md:text-base leading-relaxed">
          <span className="text-xl mr-2">🍪</span>
          Diese Website verwendet Cookies für die **Terminbuchung**. Details:{" "}
          <a href="/datenschutz" className="underline">
            Datenschutz
          </a>
          .
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleReject}
            className="text-gray-400 hover:text-gray-600 text-sm px-4"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg"
          >
            Alles akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
