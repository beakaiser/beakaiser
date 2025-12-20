// components/Image.js
// Importieren Sie die Image-Komponente von next/image
import Link from "next/link";
import Image from "next/image";
function Homepage() {
  return (
    <div className=" items-center">
      <Image
        src="users/bea/Desktop/fs-blogbeitrag-elisabeth-maderotherapie-holzband.jpg"
        alt="Madero"
        width={100}
        height={100}
        className="h-1000 w-full object-cover"
      />
    </div>
  );
}

//
