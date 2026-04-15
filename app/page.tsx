import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navs = ["Home", "FACE", "BODY", "Contact"];

  return (
    <nav className="bg-white border border-black">
      <ul className="flex justify-center">
        {navs.map((nav) => (
          <li className="p-3 cursor-pointer hover:bg-black hover:text-white">
            {nav}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero2 = () => {
  return (
    <div>
      <div className="text-center my-4"> Longvity® Beauty</div>{" "}
    </div>
  );
};

const Hero3 = () => {
  return (
    <div className="bg-black w-full h-150 text-white gap-10 flex justify-center items-center">
      <div>
        <p>
          <>
            <Link href="/face"> FACIAL TREATS </Link>
          </>
        </p>{" "}
      </div>

      <div className="flex flex-col gap-4 p-5 align-items-center">
        <div className="bg-blue-200 w-25 h-25 text-black font-extralight bg-center border-black">
          <p>
            <>
              <Link href="/face">Purifiying</Link>
            </>
          </p>
        </div>
        <div className="bg-emerald-100 w-25 h-25 text-black font-light bg-center border-black">
          <p>
            <>
              <Link href="/face">Relaxing </Link>
            </>
          </p>
        </div>
        <div className="bg-fuchsia-200 w-25 h-25 text-black font-normal bg-center border-black">
          <p>
            <>
              <Link href="/face">Rejuvenating </Link>
            </>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

const Hero4 = () => {
  return (
    <div className="bg-black w-full h-full text-white gap-10 flex justify-center items-center">
      <div>
        {" "}
        <br /> <br /> <br />
        <p>
          <>
            <Link href="/face"> </Link>
          </>
        </p>{" "}
        <p>
          <>
            <Link href="/body"> BODY TREATS </Link>
          </>
        </p>
      </div>

      <div className="flex flex-col gap-4 p-5 align-items-center">
        <div className="bg-fuchsia-200 w-25 h-25 text-black font-normal bg-center border-black">
          <p>
            <>
              <Link href="/body">Rejuvenating </Link>
            </>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
const Hero10 = () => {
  return (
    <section className="relative bg-[#FDFCFB] min-h-screen flex flex-col justify-center items-center p-8 md:p-24 overflow-hidden">
      {/* Subtiles Hintergrund-Element für Tiefe */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-mauve-100/30 blur-[120px] rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full opacity-50"></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Subtile Kategorie-Zeile */}
        <span className="text-[#7B667E] uppercase tracking-[0.5em] text-xs font-medium mb-6 block">
          Traditional Face Rituals
        </span>

        {/* Haupt-Überschrift mit Mix aus Light & Semibold */}
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-gray-900 mb-2 italic">
          Beautify <span className="font-semibold not-italic">FACE</span>
        </h1>

        {/* Trennelement */}
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto my-10"></div>

        {/* Text-Content mit Fokus auf Typografie */}
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Entdecke die{" "}
            <span className="text-gray-900 font-normal underline decoration-mauve-200 underline-offset-8">
              fernöstliche Kunst der Hautbalance
            </span>{" "}
            – wo Pflege zu einem Ritual wird. Für Haut, die nicht nur glänzt,
            sondern <em className="serif">lebt</em>.
          </p>

          <p className="text-gray-500 leading-relaxed font-light">
            Unsere Behandlungen verbinden traditionelles Wissen mit modernen
            Wirkstoffen:
            <span className="text-[#7B667E]">
              {" "}
              Professionell, naturverbunden und voller Energie.
            </span>
            <br />
            Jede Berührung, jede Maske – ein Schritt zur Harmonie.
          </p>

          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 pt-4">
            Dein Gesicht. Dein Ausdruck. Dein inneres Licht.
          </p>
        </div>

        {/* Edler Button im Ghost-Design oder Silver-Look */}
        <div className="mt-16">
          <Link
            href="/face"
            className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold text-[#7B667E] transition-all duration-300 bg-white border border-[#7B667E]/20 rounded-full hover:bg-[#7B667E] hover:text-white shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <span className="relative uppercase tracking-widest text-xs">
              Ritual Entdecken
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Hero9 = () => {
  return (
    <section className="relative bg-[#FDFCFB] min-h-screen flex flex-col justify-center items-center p-8 md:p-24 overflow-hidden border-t border-gray-50">
      {/* Subtiles Hintergrund-Glow in kühlem Silber-Blau */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-50/40 blur-[150px] rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-slate-100/50 blur-[100px] rounded-full opacity-40"></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Kategorie-Label */}
        <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-xs font-medium mb-6 block">
          Advanced Body Sculpting
        </span>

        {/* Haupt-Überschrift: Rejuvenate BODY */}
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-gray-900 mb-2 italic">
          Rejuvenate{" "}
          <span className="font-semibold not-italic text-slate-800">BODY</span>
        </h1>

        {/* Elegantes Trennelement */}
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#A4B8C4]/40 to-transparent mx-auto my-10"></div>

        {/* Text-Content mit emotionaler Typografie */}
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-gray-800 font-light leading-snug italic">
              "Wir sehen Cellulite nicht als Makel –{" "}
              <br className="hidden md:block" />
              sondern als Einladung, tiefer zu gehen. In der Zuwendung zu uns
              selbst und in der Pflege unseres Körpers. "
            </p>

            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-xl mx-auto">
              Unsere Hände verbinden{" "}
              <span className="text-gray-900 font-normal">
                asiatisches Cupping und Maderotherapie
              </span>
              , um neue Spannkraft und Energie zu wecken. Nicht nur eine Massage
              –{" "}
              <em className="text-[#A4B8C4] serif">
                ein Erwachen für deine Sinne und deinen Körper.
              </em>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gray-400">
            <span>Deine Beine</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>Dein Flow</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>Dein Comeback</span>
          </div>
        </div>

        {/* Edler Button im Silver-Design */}
        <div className="mt-16">
          <Link
            href="/body"
            className="group relative inline-flex items-center justify-center px-14 py-5 overflow-hidden font-bold text-[#A4B8C4] transition-all duration-300 bg-white border border-[#A4B8C4]/30 rounded-full hover:bg-[#A4B8C4] hover:text-white shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <span className="relative uppercase tracking-widest text-[10px]">
              Körperritual Entdecken
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

import React from "react";
// Deine Hero-Imports...
import CookieBanner from "./components/CookieBanner"; // Pfad eventuell anpassen

const App = () => {
  return (
    <div>
      <Hero2 />
      <Hero10 />
      <Hero3 /> <Hero4 />
      <Hero9 />
      <CookieBanner />
    </div>
  );
};

export default App;
