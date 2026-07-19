"use client";

import { useState } from "react";

export default function MenuBoda() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-6 right-6 z-20">

      <button
        onClick={() => setOpen(!open)}
        className="
        bg-white/80
        backdrop-blur-md
        px-5
        py-2
        rounded-full
        shadow-lg
        text-black
        font-serif
        "
      >
        Menú ☰
      </button>


      {open && (
        <div
          className="
          mt-3
          w-44
          bg-white/90
          backdrop-blur-md
          rounded-2xl
          shadow-xl
          p-4
          text-center
          "
        >

          <a
            href="/Ruta"
            className="block py-2 text-black hover:text-pink-600"
          >
            📍 Ruta
          </a>

          <a
            href="/Timeline"
            className="block py-2 text-black hover:text-pink-600"
          >
            🕒 Timeline
          </a>

          <a
            href="/galeria"
            className="block py-2 text-black hover:text-pink-600"
          >
            📸 Galería
          </a>
          
          <a
            href="/Otros"
            className="block py-2 text-black hover:text-pink-600"
          >
            ∀😉 Otros
          </a> 

        </div>
      )}

    </div>
  );
}