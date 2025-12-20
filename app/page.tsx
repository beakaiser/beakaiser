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
      <div className="text-center my-4"> longvity beauty</div>{" "}
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
              <Link href="/face">Rejuvinating </Link>
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
              <Link href="/body">Rejuvinating </Link>
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
    <div className="bg-white h-screen flex flex-col justify-center items-center p-12 text-gray-600">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
        Beautify
      </h1>
      <div className="text-2xl font-bold text-orange-500 uppercase mb-10">
        FACE
      </div>

      <div className="max-w-2xl text-lg leading-relaxed mb-12">
        <p className="mb-8 text-gray-500">
          Entdecke die <strong>fernöstliche Kunst der Hautbalance</strong> – wo
          Pflege zu einem Ritual wird. Für Haut, die nicht nur glänzt, sondern{" "}
          <em>lebt</em>.
        </p>
        <p className="mb-8 text-gray-500">
          Unsere Behandlungen verbinden{" "}
          <strong>traditionelles Wissen mit modernen Wirkstoffen</strong>:
          Vegan, nachhaltig und voller Energie. Jede Berührung, jede Maske – ein
          Schritt zur Harmonie.
        </p>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-10">
          Dein Gesicht. Dein Ausdruck. Dein inneres Licht.
        </p>
      </div>

      <Link
        href="/face"
        className="bg-orange-500 text-white px-10 py-4 uppercase rounded-2xl hover:bg-orange-700 transition"
      >
        Entdecken
      </Link>
    </div>
  );
};
const Hero9 = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center p-12 text-gray-600">
      <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
        Rejuvinate BODY
      </h1>
      <div className="text-2xl font-bold text-orange-500 uppercase mb-10">
        BODY
      </div>

      <div className="max-w-2xl text-lg leading-relaxed text-gray-500 mb-12">
        <p className="mb-8">
          <strong>Cellulite?</strong> Wir sehen sie nicht als Makel – sondern
          als Einladung, tiefer zu gehen.
        </p>
        <p className="mb-8">
          Unsere Hände verbinden{" "}
          <strong>asiatisches Cupping und Maderotherapie</strong>, um
          Durchblutung, Spannkraft und Energie zu wecken. Nicht nur eine Massage
          –<em>ein Erwachen für deinen Körper.</em>
        </p>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-10">
          Deine Beine. Dein Flow. Dein Comeback.
        </p>
      </div>

      <Link
        href="/body"
        className="bg-orange-500 text-white px-10 py-4 uppercase rounded-2xl hover:bg-orange-700 transition"
      >
        Entdecken
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Hero2 />
      <Hero10 />
      <Hero3 /> <Hero4 />
      <Hero9 />
    </div>
  );
};

export default App;
