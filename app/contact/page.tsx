"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Haupt-Content & Bild */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Linke Seite: Text */}
        <div className="space-y-6">
          <p className="text-lg text-amber-950">
            Wir sind Teil von{" "}
            <span className="font-medium text-amber-950">Longvity</span> – einem
            Netzwerk für nachhaltige Gesundheit und Lebensqualität. <br />
          </p>{" "}
          <br /> <br />
          <h1 className="text-3xl font-semibold text-gray-800">Kontakt</h1>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>LongvityCenter Berlin</strong>
              <br />
              Geiserichstraße 3, 12105 Berlin
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:beacosberlin@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  beacosberlin@gmail.com
                </a>
              </li>
              <li>
                <strong>Telefon:</strong> 030 7537100
                <br />
              </li>
              <li>
                <strong>Öffnungszeiten:</strong> Mo–Fr, 10:00–19:00 Uhr
                <br />
                <span className="text-sm">
                  Termine nur nach Vereinbarung <br />{" "}
                </span>
                <span className="text-sm">
                  Ansprechpartnerin: Beatrice Kaiser
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <br />{" "}
      <Image
        src="/IMG_3347.jpg"
        alt="Madero"
        width={1290}
        height={1065}
        className=" w-2/3 object-cover mx-auto"
      />
      {/* Call-to-Action: Termin buchen */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-center text-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-3 text-white">
          Buchen Sie Ihren Termin
        </h2>
        <p className="text-lg text-blue-100 mb-6 max-w-lg mx-auto">
          jetzt per Klick – finden Sie einen Zeitpunkt, der zu Ihnen passt.
        </p>
        <a
          href="/buchung"
          className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          Jetzt Termin buchen
        </a>
      </div>
      {/* Impressum & Datenschutz */}
      <div className="text-center">
        <div className="text-1x1 text-gray-600 space-x-3">
          <a
            href="/impressum"
            className="hover:text-blue-600 transition-colors"
          >
            Impressum
          </a>
          <span>|</span>
          <a
            href="/datenschutz"
            className="hover:text-blue-600 transition-colors"
          >
            Datenschutzerklärung
          </a>
        </div>
      </div>
      {/* Google Maps */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.596277135955!2d13.37224731572857!3d52.46597127979564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85e5b8d5b5b5b%3A0x3b1b1b1b1b1b1b1b!2sGeiserichstra%C3%9Fe%203%2C%2012105%20Berlin!5e0!3m2!1sde!2sde!4v1640000000000!5m2!1sde!2sde"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
