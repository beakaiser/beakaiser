import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
// SCHRITT 1: Importiere deinen CookieBanner (Pfad eventuell anpassen!)
import CookieBanner from "./components/CookieBanner";
// NEU: Importiere den Client-Footer
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Longvity Beauty Berlin | Asiatische Facials & Microneedling",
  description: "Erleben Sie traditionelle asiatische Facials, tiefenwirksames Microneedling & exklusive Wellness-Rituale für nachhaltige Hautpflege in Berlin.",


};

// 2. DAS UNSICHTBARE GOOGLE-MARKUP ALS EIGENE KOMPONENTE
function GoogleSchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Longvity Beauty Berlin",
    "image": "https://longvitybeauty.de",
    "@id": "https://longvitybeauty.de",
    "url": "https://longvitybeauty.de",
    "telephone": "+49 1796964113",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Geiserichstraße 3",
      "addressLocality": "Berlin",
      "addressRegion": "Tempelhof",
      "postalCode": "12105",
      "addressCountry": "DE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "22:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}


const Navbar = () => {
  const navs = [
    { label: "Home", href: "/" },
    { label: "FACE", href: "/face" },
    { label: "BODY", href: "/body" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border border-black relative flex items-center h-12">
         {/* 🌟 LOGO GANZ LINKS IN DER ECKE */}
         <div className="absolute left-4 flex items-center">
           <Link href="/">
             <img
               src="/bea-beauty-logo.jpeg" // 👈 Name deines Logos im public-Ordner
               alt="Logo"
               className="h-8 w-auto object-contain" // Begrenzt die Höhe passend zur Navbar-Dicke
             />
           </Link>
         </div>

         {/* DEIN ORIGINAL-MENÜ (Bleibt exakt so zentriert wie vorher) */}
         <ul className="flex justify-center mx-auto">
           {navs.map((nav) => (
             <li
               key={nav.label}
               className="p-3 cursor-pointer hover:bg-black hover:text-white"
             >
               <Link href={nav.href}>{nav.label}</Link>
             </li>
           ))}
         </ul>
       </nav>
     );
   };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {/* SCHRITT 2: Hier den Banner einfügen */}
        <CookieBanner />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
