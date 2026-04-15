"use client";

export default function Footer() {
  const handleRevoke = () => {
    // Löscht die Entscheidung aus dem Speicher
    localStorage.removeItem("cookieConsent");
    // Lädt die Seite neu, damit das Banner wieder erscheint
    window.location.reload();
  };

  return (
    <footer className="bg-gray-100 text-center py-8 mt-10 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        &copy; 2026 Longvity&reg; Beauty by Longvity&reg;Center
      </p>

      <div className="mt-4 flex flex-col items-center gap-3">
        {/* Rechtliche Links in einer Reihe */}
        <div className="flex gap-4">
          <a
            href="/impressum"
            className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black underline decoration-gray-300 underline-offset-4 transition-all"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black underline decoration-gray-300 underline-offset-4 transition-all"
          >
            Datenschutz
          </a>
        </div>

        <button
          onClick={handleRevoke}
          className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black underline decoration-gray-300 underline-offset-4 transition-all"
        >
          Cookie-Einwilligung widerrufen
        </button>
      </div>
    </footer>
  );
}
