import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Kopfabschnitt (heller Grauton) */}
      <div className="bg-gray-100 w-full py-8">
        <div className="bg-white w-full h-full p-8 border-4 border-gray-300 items-center">
          <div className="text-3xl text-gray-600 font-bold text-center">
            DIVINE BODY TREATMENT
          </div>
        </div>
      </div>

      {/* Hauptinhalt (weicher Beige-Hintergrund) */}
      <div className="bg-beige w-full text-gray-700 p-10">
        Rejuvinate BODY
        <h2 className="text-2xl font-semibold text-center mt-6 mb-10">BODY</h2>
        {/* Behandlungsabschnitt 1: Cellulite */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">Cellulite-Behandlung</h3>
          <p className="text-lg mb-6">
            Eine Kombination aus Maderotherapie und Cupping-Massage, die das
            Bindegewebe stärkt. Mit Jadesteinen und Holzwerkzeugen für eine
            tiefenwirksame Erfrischung.
          </p>
          <div className="text-lg font-semibold mb-4">110 € | 50 Minuten</div>
        </div>
        {/* Behandlungsabschnitt 2: Kräuterstempel */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">Kräuterstempelkissen</h3>
          <p className="text-lg mb-6">
            Aromatische Kräutermassage – ideal als Ergänzung zur
            Cellulite-Behandlung.
          </p>
          <div className="text-lg font-semibold mb-4">40 € | 20 Minuten</div>
        </div>
        {/* Behandlungsabschnitt 3: Ceragem-Liege */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">
            Ceragem-Liege mit Jadesteinen
          </h3>
          <p className="text-lg mb-6">
            Wärme- und Massagetherapie für Entspannung und Wohlbefinden.
          </p>
          <div className="text-lg font-semibold mb-4">ab 20 € | 20 Minuten</div>
          <br /> <br /> <br />
          <Image
            src={(process.env.PAGES_BASE_PATH || "") + "/IMG_3764.jpg"}
            alt="Madero"
            width={700}
            height={700}
            className=" w-2/3 object-cover mx-auto"
          />
          <br /> <br />
        </div>
        {/* CTA-Button in hellerem Rahmen */}
        <div className="bg-indigo-200 w-full h-8 p-8 border-2 border-indigo-300 flex items-center justify-center">
          <div className=" border-indigo-200 rounded-lg">
            <a
              href="/buchung"
              className="bg-indigo-200 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200"
            >
              Termin buchen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
