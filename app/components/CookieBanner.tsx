import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 p-4 bg-gray-100
        text-gray-600 flex justify-between z-10
        border-t border-gray-300 shadow-md
      "
    >
      <span className="mr-4">
        Diese Website verwendet Cookies, um dir eine bessere Erfahrung zu
        bieten.
      </span>
      <button
        onClick={handleAccept}
        className="
          bg-orange-500 text-white px-4 py-2 uppercase
          rounded hover:bg-orange-600 transition
        "
      >
        Akzeptieren
      </button>
    </div>
  );
};

export default CookieBanner;
