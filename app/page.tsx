import ImageSlideshow from "./components/ImageSlideshow";


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


const Heroheader = () => {
  return (
    <section className="relative w-full bg-[#FDFCFB] py-20 md:py-28 px-6 overflow-hidden border-t border-stone-100 flex justify-center items-center">

      {/* Subtiler, kaum sichtbarer Hintergrund-Glow für den High-End-Vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#7B667E]/5 to-[#A4B8C4]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

        {/* Edle Kategorie-Zeile */}
        <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium mb-5 block">
          Longvity Beauty Berlin | Asiatische Facials und Microneedling
        </span>

        {/* Überschrift im gleichen Magazin-Look */}
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-gray-900 leading-tight mb-6">
          Körper & Geist im <br />
          <span className="font-serif italic font-normal text-[#7B667E]">Einklang.</span>
        </h2>

        {/* Die feine Trennlinie im exakten Farbverlauf */}
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#7B667E]/30 to-transparent my-4"></div>

        {/* Großer, edler Fließtext */}
        <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-4">
          Buche deinen Termin online: Microneedling, Schönheits- und Wellnessrituale in Zen-Atmosphäre. Deine individuelle Wohlfühloase in Berlin.
        </p>

        {/* Optionaler feiner Link/Hinweis */}
        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
            Tradition trifft Innovation
          </span>
        </div>

      </div>
    </section>
  );
};

const Hero8 = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-12 md:py-16 border-b border-stone-800 overflow-hidden group">

      {/* 🌟 1. Der echte, kräftige Farbverlauf im Hintergrund (Blau-Graubraun) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>

      {/* 🌟 2. Die strukturierte Leinen-Textur für die exklusive Haptik */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>

      {/* 🌟 3. Ein dezenter Licht-Glow in der Mitte für mehr Tiefe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Das umschließende Element mit der Gruppe für die Effekte */}
      <div className="w-full max-w-md px-6 text-center group relative cursor-pointer z-10">

        {/* Luxuriöser, abgerundeter Rahmen um das Logo mit weichem Schatten */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-700 ease-in-out border border-white/10 bg-white/[0.02] backdrop-blur-sm">



        </div>

      </div>
    </div>
  );
};



const Hero2 = () => {
  return (
    <div className="w-full min-h-[100px] flex flex-col justify-center items-center px-6 py-0 bg-white">
      <div className="relative w-72 h-72 group">
        <Image
          src="/bea-beauty-logo.jpeg" // 👈 Der Pfad zu deinem Logo im public-Ordner
          alt="Longvity Beauty Kosmetikerin Berlin Gesichtsbehandlung Microneedling"
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};



const Hero3 = () => {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 bg-[#FDFCFB] px-6 py-20 overflow-hidden border-t border-gray-100">
      {/* Sanfter, edler Hintergrund-Glow für den High-End-Look */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#7B667E]/10 blur-[130px] rounded-full opacity-60 pointer-events-none"></div>

      {/* Linke Seite: Große, emotionale Typografie */}
      <div className="relative z-10 text-center md:text-left max-w-sm">
        <span className="text-[#7B667E] uppercase tracking-[0.4em] text-xs font-medium mb-4 block">
          Auszeit für die Haut
        </span>
        <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-gray-900 leading-tight mb-6">
          FACIAL <br />
          <span className="font-semibold italic text-slate-800">TREATS</span>
        </h2>
        <div className="h-[1px] w-16 bg-[#7B667E]/40 my-8 mx-auto md:mx-0"></div>
        <Link
          href="/face"
          className="inline-flex text-xs uppercase tracking-widest text-gray-600 hover:text-[#7B667E] transition-colors group items-center gap-2"
        >
          Alle Gesichtsrituale ansehen
          <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>

      {/* Rechte Seite: Die 3 edlen Behandlungs-Karten im tiefen Gradient-Look */}
      <div className="relative z-10 flex flex-col gap-5 w-full max-w-md">

        {/* Karte 1: Purifying */}
        <Link href="/face" className="group relative overflow-hidden rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

          <div className="relative z-10 flex justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-light text-white tracking-wide mb-1">Purifying</h3>
              <p className="text-xs text-white/80 font-light max-w-xs leading-relaxed">Ausreinigung & Klärung der Poren</p>
            </div>
            <span className="text-white/60 text-xl font-light transform group-hover:text-white group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
          </div>
        </Link>

        {/* Karte 2: Relaxing */}
        <Link href="/face" className="group relative overflow-hidden rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

          <div className="relative z-10 flex justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-light text-white tracking-wide mb-1">Relaxing</h3>
              <p className="text-xs text-white/80 font-light max-w-xs leading-relaxed">Stressabbau & intensive Entspannung</p>
            </div>
            <span className="text-white/60 text-xl font-light transform group-hover:text-white group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
          </div>
        </Link>

        {/* Karte 3: Rejuvenating */}
        <Link href="/face" className="group relative overflow-hidden rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

          <div className="relative z-10 flex justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-wide mb-1">Rejuvenating</h3>
              <p className="text-xs text-white/80 font-light max-w-xs leading-relaxed">Zellerneuerung & jugendlicher Glow</p>
            </div>
            <span className="text-white/60 text-xl font-light transform group-hover:text-white group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
          </div>
        </Link>

      </div>
    </section>
  );
};

const HeroText = () => {
  return (
    <section className="relative w-full bg-[#FDFCFB] py-20 md:py-28 px-6 overflow-hidden border-t border-stone-100 flex justify-center items-center">

      {/* Subtiler, kaum sichtbarer Hintergrund-Glow für den High-End-Vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#7B667E]/5 to-[#A4B8C4]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

        {/* Edle Kategorie-Zeile */}
        <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium mb-5 block">
          Die Philosophie der Balance
        </span>

        {/* Überschrift im gleichen Magazin-Look */}
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-gray-900 leading-tight mb-6">
          Longvity Beauty <br />
          <span className="font-serif italic font-normal text-[#7B667E]">Philosophie.</span>
        </h2>

        {/* Die feine Trennlinie im exakten Farbverlauf */}
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#7B667E]/30 to-transparent my-4"></div>

        {/* Großer, edler Fließtext */}
        <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-4">
          Wahre Schönheit entsteht, wenn wir Energie wieder fließen lassen.
          Unsere Rituale sind maßgeschneidert, um deine natürliche Vitalität zu wecken
          und dir einen Moment absoluter Klarheit zu schenken. Belebe deine Sinne durch begleitende Aromatherapie und angenehmer Klangatmosphäre. Tauche ab in die Welt fernöstlicher Schönheitsrituale
        </p>

        {/* Optionaler feiner Link/Hinweis */}
        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
            Tradition trifft Schönheit
          </span>
        </div>

      </div>
    </section>
  );
};



const Hero4 = () => {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col md:flex-row-reverse justify-center items-center gap-12 md:gap-20 bg-[#FDFCFB] px-6 py-20 overflow-hidden border-t border-gray-100">
      {/* Sanfter, edler Hintergrund-Glow im typischen Silber-Blau Look für Tiefe */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#A4B8C4]/15 blur-[130px] rounded-full opacity-60 pointer-events-none"></div>

      {/* Rechte Seite: Große, emotionale Typografie auf hellem Grund */}
      <div className="relative z-10 text-center md:text-left max-w-sm">
        <span className="text-[#A4B8C4] uppercase tracking-[0.4em] text-xs font-medium mb-4 block">
          Form & Kontur
        </span>
        <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter text-gray-900 leading-tight mb-6">
          BODY <br />
          <span className="font-semibold italic text-slate-800">TREATMENTS</span>
        </h2>
        <div className="h-[1px] w-16 bg-[#A4B8C4]/40 my-8 mx-auto md:mx-0"></div>
        <Link
          href="/body"
          className="inline-flex text-xs uppercase tracking-widest text-gray-600 hover:text-[#A4B8C4] transition-colors group items-center gap-2"
        >
          Alle Körperrituale ansehen
          <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>

      {/* Linke Seite: Die edle Behandlungs-Karte im identischen luxuriösen Design */}
      <div className="relative z-10 flex flex-col gap-5 w-full max-w-md">

        {/* Karte 1: Body Rituals */}
        <Link
          href="/body"
          className="group relative overflow-hidden rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B667E] to-[#A4B8C4]"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://transparenttextures.com')] bg-repeat"></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

          <div className="relative z-10 flex justify-between items-center gap-4">
            <div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-white/70 mb-1.5 block font-light">
                Longvity&reg; Beauty
              </span>
              <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                Body <span className="font-semibold italic">Rituals</span>
              </h3>

              <div className="h-[1px] w-12 bg-white/30 my-3 transition-all duration-300 group-hover:w-20"></div>

              <p className="text-xs text-white/80 font-light max-w-xs leading-relaxed">
                Tiefenwirksame Entspannung zur Regeneration | Aktivierung des Lymphflusses | Erneuerung der Körperenergie Qi.
              </p>
            </div>

            <span className="text-white/60 text-xl font-light transform group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
              &rarr;
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
};


const HeroText2 = () => {
  return (
    <section className="relative w-full bg-[#FDFCFB] py-20 md:py-28 px-6 overflow-hidden border-t border-stone-100 flex justify-center items-center">

      {/* Subtiler, kaum sichtbarer Hintergrund-Glow für den High-End-Vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#7B667E]/5 to-[#A4B8C4]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

        {/* Edle Kategorie-Zeile */}
        <span className="text-[#A4B8C4] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium mb-5 block">
          Geiserichstraße 3
        </span>

        {/* Überschrift im gleichen Magazin-Look */}
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-gray-900 leading-tight mb-6">
          Longvity Beauty <br />
          <span className="font-serif italic font-normal text-[#7B667E]">Beatrice Kaiser</span>
        </h2>

        {/* Die feine Trennlinie im exakten Farbverlauf */}
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#7B667E]/30 to-transparent my-4"></div>

        {/* Großer, edler Fließtext */}
        <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-4">
          Deine Kosmetikerin in Berlin Tempelhof - Buche noch heute deine erholsame Auszeit - 0179 6964113
        </p>

        {/* Optionaler feiner Link/Hinweis */}
        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
            12105 Berlin
          </span>
        </div>

      </div>
    </section>
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
          Traditional Face Rituals in Berlin
        </span>

        {/* Haupt-Überschrift mit Mix aus Light & Semibold */}
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-gray-900 mb-2 italic">
         Longvity  <span className="font-semibold not-italic">Beauty</span>
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
    <div className="w-full max-w-5xl mx-auto px-6 my-16 flex justify-center">
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/dampf.jpg/" // 👈 Name deines Bildes im public-Ordner
          alt="Body Treatment"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};


import React from "react";
// Deine Hero-Imports...
import CookieBanner from "./components/CookieBanner"; // Pfad eventuell anpassen

const App = () => {
  return (
    <div>

      <Heroheader/>
 <Hero8 />
      <Hero10 />
      <ImageSlideshow />
      <HeroText />
      <Hero3 />
      <Hero4 />
      <HeroText2 />

      <CookieBanner />
    </div>
  );
};

export default App;
